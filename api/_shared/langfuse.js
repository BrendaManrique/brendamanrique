// ---------------------------------------------------------------------------
// Langfuse v4+ (OpenTelemetry) bootstrap — shared by every traced endpoint.
//
// v3's `new Langfuse()` client did tracing, prompts and scores in one object.
// v4 split those: tracing goes through OpenTelemetry (LangfuseSpanProcessor ->
// POST /api/public/otel/v1/traces), while prompts and scores stay on a REST
// client (LangfuseClient). This module owns both, plus the flush that Edge
// functions must run inside waitUntil() before the isolate is frozen.
//
// NodeSDK is deliberately not used: it pulls in Node-only instrumentation and
// async_hooks.createHook(). BasicTracerProvider from @opentelemetry/sdk-trace-base
// is runtime-agnostic and is all the LangfuseSpanProcessor needs.
// ---------------------------------------------------------------------------

import { context } from '@opentelemetry/api'
import { BasicTracerProvider } from '@opentelemetry/sdk-trace-base'
import { LangfuseSpanProcessor } from '@langfuse/otel'
import { setLangfuseTracerProvider, LangfuseOtelSpanAttributes } from '@langfuse/tracing'
import { LangfuseClient } from '@langfuse/client'
import { createContextManager } from './otel-context.js'
import { reportError } from './errors.js'

let tracingPromise = null
let processorRef = null
let clientRef = null

function isConfigured() {
  return !!(process.env.LANGFUSE_SECRET_KEY && process.env.LANGFUSE_PUBLIC_KEY)
}

/**
 * Initialise (once per isolate) the OTel tracer provider wired to Langfuse.
 * Resolves to null when Langfuse is not configured, so callers can no-op the
 * same way they did with the v3 `getLangfuse()` singleton.
 */
export function initTracing() {
  if (!isConfigured()) return Promise.resolve(null)

  if (!tracingPromise) {
    tracingPromise = (async () => {
      const contextManager = await createContextManager()
      if (contextManager) context.setGlobalContextManager(contextManager)

      const processor = new LangfuseSpanProcessor({
        publicKey: process.env.LANGFUSE_PUBLIC_KEY,
        secretKey: process.env.LANGFUSE_SECRET_KEY,
        baseUrl: process.env.LANGFUSE_BASE_URL,
        environment: process.env.LANGFUSE_TRACING_ENVIRONMENT,
        release: process.env.LANGFUSE_TRACING_RELEASE,
      })

      setLangfuseTracerProvider(new BasicTracerProvider({ spanProcessors: [processor] }))
      processorRef = processor
      return processor
    })()
  }

  return tracingPromise
}

/**
 * Flush ended spans. Edge isolates are frozen as soon as the response is done,
 * so this must be awaited or handed to waitUntil() — the v4 equivalent of
 * `langfuse.flushAsync()`. Safe to call when tracing was never initialised.
 */
export async function flushTracing() {
  if (!processorRef) return
  try {
    await processorRef.forceFlush()
  } catch (err) {
    // Never let an observability flush fail a user-facing request. Langfuse is
    // what failed, so this is reported to logs and email only.
    reportError('langfuse-flush', err, { langfuse: false })
  }
}

/**
 * REST client for the non-tracing surface: prompt management and scores.
 * Separate from tracing — it does not need the tracer provider.
 */
export function getLangfuseClient() {
  if (!isConfigured()) return null
  if (!clientRef) {
    clientRef = new LangfuseClient({
      publicKey: process.env.LANGFUSE_PUBLIC_KEY,
      secretKey: process.env.LANGFUSE_SECRET_KEY,
      baseUrl: process.env.LANGFUSE_BASE_URL,
    })
  }
  return clientRef
}

/** Flush queued scores (ScoreManager batches them like the v3 client did). */
export async function flushScores() {
  if (!clientRef) return
  try {
    await clientRef.score.flush()
  } catch (err) {
    reportError('langfuse-scores', err, { langfuse: false })
  }
}

/**
 * Set trace-level tags on a root observation.
 *
 * v3 allowed `trace.update({ tags })` at any point. v4 has no equivalent:
 * trace attributes are fixed when a span starts, and propagateAttributes() is a
 * scope opened *before* any observation exists. This app only learns its outcome
 * tags mid-request (rag:yes/no, prompt-leak-blocked, stream-error:*), so tags are
 * written straight onto the root observation just before it ends — the same
 * attribute propagateAttributes() itself writes, and the root observation is what
 * Langfuse reads trace-level tags from.
 *
 * Tags are deliberately kept off child observations so a trace never reports two
 * different tag sets. Session IDs still propagate to children, which is what
 * session-level cost aggregation needs.
 */
export function setTraceTags(observation, tags) {
  if (!observation) return
  const clean = [...new Set(tags.filter(Boolean).map(String))]
  if (clean.length === 0) return
  try {
    observation.otelSpan.setAttribute(LangfuseOtelSpanAttributes.TRACE_TAGS, clean)
  } catch {
    // Tagging must never break a request.
  }
}

// ---------------------------------------------------------------------------
// Cross-request trace continuation (the voice flow)
//
// v3 let any request re-open a trace by id: `langfuse.trace({ id: traceId })`.
// v4 has no such thing — an observation joins a trace only by pointing at a
// parent span context. The voice session spans three requests (voice-token ->
// rag-search -> voice-trace), so voice-token hands the browser a W3C
// `traceparent` for its root observation and the later requests attach under it.
// ---------------------------------------------------------------------------

/** Serialise an observation's span context as a W3C traceparent header value. */
export function toTraceparent(observation) {
  if (!observation) return null
  const ctx = observation.otelSpan.spanContext()
  const flags = (ctx.traceFlags ?? 1).toString(16).padStart(2, '0')
  return `00-${ctx.traceId}-${ctx.spanId}-${flags}`
}

/**
 * Parse a traceparent into an OTel SpanContext usable as `parentSpanContext`.
 * Returns null for anything malformed so a bad client value degrades to an
 * untraced request instead of throwing.
 */
export function parseTraceparent(traceparent) {
  if (typeof traceparent !== 'string') return null
  const m = /^00-([0-9a-f]{32})-([0-9a-f]{16})-([0-9a-f]{2})$/.exec(traceparent.trim())
  if (!m) return null
  const [, traceId, spanId, flags] = m
  if (traceId === '0'.repeat(32) || spanId === '0'.repeat(16)) return null
  return { traceId, spanId, traceFlags: parseInt(flags, 16), isRemote: true }
}
