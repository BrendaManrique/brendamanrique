// ---------------------------------------------------------------------------
// Error reporting — one call per failure, wherever it happens in the chat
// waterfall (rate limit, prompt fetch, tool decision, embedding, retrieval,
// reranking, generation, post-answer, scoring, tracing flush).
//
// Every failure lands in up to three places:
//   1. Vercel runtime logs (console.error) — always.
//   2. Langfuse — an ERROR-level `error:<stage>` event. With a parent
//      observation it sits at the exact point in that chat's trace waterfall;
//      without one (failures before the trace starts) it becomes its own trace,
//      so nothing is silently dropped. Filter Langfuse by level = ERROR.
//   3. Email via Resend — when RESEND_API_KEY and ALERT_EMAIL are set, at most
//      one email per stage per ALERT_COOLDOWN_MS per isolate, so an outage
//      sends a handful of emails rather than one per visitor.
//
// Reporting must never throw: it runs inside catch blocks whose job is to
// keep the visitor's request alive.
// ---------------------------------------------------------------------------

import { startObservation } from '@langfuse/tracing'
import { waitUntil } from '@vercel/functions'

const ALERT_COOLDOWN_MS = 15 * 60 * 1000
const lastAlertAt = new Map()

/**
 * @param {string} stage   short kebab-case step name, e.g. 'retrieval'
 * @param {unknown} err    the caught error (or a string)
 * @param {object} [opts]
 * @param {object} [opts.parent]    Langfuse observation to attach the event under
 * @param {object} [opts.context]   extra metadata (never secrets or full prompts)
 * @param {boolean} [opts.langfuse] false when Langfuse itself is what failed
 */
export function reportError(stage, err, { parent = null, context = {}, langfuse = true } = {}) {
  const message = err instanceof Error ? err.message : String(err)
  const errorType = err instanceof Error ? err.constructor?.name : typeof err

  try {
    console.error(`[chat-error] ${stage}: ${message}`, context)
  } catch { /* ignore */ }

  if (langfuse && process.env.LANGFUSE_SECRET_KEY && process.env.LANGFUSE_PUBLIC_KEY) {
    try {
      const attributes = {
        level: 'ERROR',
        statusMessage: message,
        metadata: { stage, errorType, ...context },
      }
      const options = { asType: 'event' }
      if (parent) {
        parent.startObservation(`error:${stage}`, attributes, options)
      } else {
        startObservation(`error:${stage}`, attributes, options)
      }
    } catch { /* tracing must never break a request */ }
  }

  try {
    const now = Date.now()
    if (now - (lastAlertAt.get(stage) || 0) >= ALERT_COOLDOWN_MS) {
      lastAlertAt.set(stage, now)
      waitUntil(sendErrorAlert(stage, message, errorType, context))
    }
  } catch { /* ignore */ }
}

async function sendErrorAlert(stage, message, errorType, context) {
  if (!process.env.RESEND_API_KEY || !process.env.ALERT_EMAIL) return
  try {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio Bot <onboarding@resend.dev>',
        to: process.env.ALERT_EMAIL,
        subject: `⚠️ Chat error (${stage}) - brendamanrique.com`,
        html: `
          <h2>Chat error: ${escapeHtml(stage)}</h2>
          <p><strong>Time:</strong> ${new Date().toISOString()}</p>
          <p><strong>Error:</strong> ${escapeHtml(errorType)} — ${escapeHtml(message.slice(0, 500))}</p>
          <pre style="background: #f5f5f5; padding: 12px;">${escapeHtml(JSON.stringify(context, null, 2).slice(0, 1500))}</pre>
          <p>Further errors in this stage are muted for 15 minutes. Full history: Langfuse, filter level = ERROR.</p>
          <p><a href="${process.env.LANGFUSE_BASE_URL || 'https://cloud.langfuse.com'}">Open Langfuse</a></p>
        `,
      }),
    })
  } catch { /* alerting is best effort */ }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}
