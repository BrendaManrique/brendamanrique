import { validateOpsAuth } from '../_shared/ops-auth.js'
import { fetchRootObservations, fetchScoresByTrace, parseIo, parseMetadata } from '../_shared/langfuse-api.js'

export const config = { runtime: 'edge' }

export default async function handler(req) {
  const auth = validateOpsAuth(req)
  if (!auth.ok) return auth.response

  try {
    const url = new URL(req.url)
    const days = parseInt(url.searchParams.get('days') || '7', 10)
    const limit = parseInt(url.searchParams.get('limit') || '50', 10)
    // v2 observations paginate by cursor, not offset. The dashboard's "load
    // more" passes back the nextCursor from the previous page.
    const cursor = url.searchParams.get('cursor') || undefined
    const lang = url.searchParams.get('lang')       // "es" or "en"
    const mode = url.searchParams.get('mode')       // "text" or "voice"
    const rag = url.searchParams.get('rag')         // "yes" or "no"
    const jailbreak = url.searchParams.get('jailbreak') // "true"
    const includeEvals = url.searchParams.get('includeEvals') === 'true'

    const from = new Date(Date.now() - days * 86400000).toISOString()
    const to = new Date().toISOString()

    // One row per trace: the trace's root observation, which under v4 carries
    // the conversation's input/output and metadata.
    const result = await fetchRootObservations({ from, to, limit, cursor })
    if (result.error) return json({ error: result.error }, result.status)

    // Tag filters are applied here rather than server-side: v2 exposes tags
    // through the trace_context field group but has no tags query parameter,
    // and the old endpoint could not negate a tag either.
    const required = []
    if (lang) required.push(lang)
    if (mode === 'voice') required.push('voice')
    if (rag) required.push(`rag:${rag}`)
    if (jailbreak === 'true') required.push('jailbreak-attempt')

    let filtered = result.data.filter(o => {
      const tags = o.tags || []
      if (!required.every(t => tags.includes(t))) return false
      if (mode === 'text' && tags.includes('voice')) return false
      if (!includeEvals && tags.some(t => t.startsWith('source:'))) return false
      return true
    })

    const traceIds = filtered.map(o => o.traceId).filter(Boolean)
    const scoresByTrace = traceIds.length > 0 ? await fetchScoresByTrace({ from, to }) : {}

    const data = filtered.map(o => {
      const tags = o.tags || []
      const meta = parseMetadata(o.metadata)
      const detectedLang = tags.includes('es') ? 'es' : tags.includes('en') ? 'en' : undefined

      return {
        id: o.traceId,
        timestamp: o.startTime,
        name: o.traceName || o.name,
        tags,
        metadata: {
          lang: detectedLang,
          lastUserMessage: meta.lastUserMessage || summarizeInput(parseIo(o.input)),
          messageCount: meta.messageCount,
          cost: meta.cost,
          latencyBreakdown: meta.latencyBreakdown,
          ragUsed: meta.ragUsed,
          sources: meta.sources,
          ragDegraded: meta.ragDegraded,
          degradedReason: meta.degradedReason,
          promptVersion: meta.promptVersion,
          durationMs: meta.durationMs,
          turnCount: meta.turnCount,
          userMessageCount: meta.userMessageCount,
          jailbreakDetected: meta.jailbreakDetected,
          leakDetected: meta.leakDetected,
          // Cost Langfuse itself computed from the observations' costDetails,
          // independent of the hand-rolled breakdown above.
          totalCost: o.totalCost,
        },
        scores: scoresByTrace[o.traceId] || {},
      }
    })

    return json({ data, nextCursor: result.cursor, total: data.length })
  } catch (err) {
    return json({ error: err.message }, 500)
  }
}

/** Extract first user message as a short preview */
function summarizeInput(input) {
  if (!input) return null
  if (typeof input === 'string') return input.slice(0, 200)
  if (Array.isArray(input)) {
    const last = input.filter(m => m.role === 'user').pop()
    return last?.content?.slice?.(0, 200) || null
  }
  if (input.messages) {
    const last = input.messages.filter(m => m.role === 'user').pop()
    return last?.content?.slice?.(0, 200) || null
  }
  return null
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}
