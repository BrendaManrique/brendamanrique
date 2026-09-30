import { validateOpsAuth } from '../_shared/ops-auth.js'
import { fetchRootObservations, fetchScoresByTrace, parseMetadata } from '../_shared/langfuse-api.js'
import evalResults from './_eval-results.js'

export const config = { runtime: 'edge' }

export default async function handler(req) {
  const auth = validateOpsAuth(req)
  if (!auth.ok) return auth.response

  try {
    const url = new URL(req.url)
    const days = parseInt(url.searchParams.get('days') || '7', 10)
    const limit = Math.min(parseInt(url.searchParams.get('limit') || '100', 10), 100)
    const includeEvals = url.searchParams.get('includeEvals') === 'true'

    const from = new Date(Date.now() - days * 86400000).toISOString()
    const to = new Date().toISOString()

    // One row per trace, via the trace's root observation. Replaces the
    // deprecated GET /api/public/traces and GET /api/public/scores.
    const [tracesResult, scoresByTrace] = await Promise.all([
      fetchRootObservations({ from, to, limit }),
      fetchScoresByTrace({ from, to }),
    ])

    if (tracesResult.error) {
      return json({ error: tracesResult.error }, tracesResult.status)
    }

    const traces = tracesResult.data

    // Index safety scores by traceId
    const safetyByTrace = {}
    for (const [traceId, named] of Object.entries(scoresByTrace)) {
      const value = named.safety ?? named.safety_score
      if (typeof value === 'number') safetyByTrace[traceId] = value
    }

    // Aggregate
    const daily = {}
    let totalCost = 0
    let totalLatency = 0
    let latencyCount = 0
    let safetySum = 0
    let safetyCount = 0
    let textConvos = 0
    let voiceConvos = 0
    const languages = { es: 0, en: 0 }
    const intents = {}
    const ragActivation = { yes: 0, no: 0 }

    for (const t of traces) {
      const tags = t.tags || []
      // Skip synthetic traffic (evals, adversarial) unless explicitly included
      if (!includeEvals && tags.some(tag => tag.startsWith('source:'))) continue
      const meta = parseMetadata(t.metadata)
      const cost = meta.cost || {}
      const isVoice = tags.includes('voice')

      if (isVoice) voiceConvos++
      else textConvos++

      // Cost: prefer the hand-rolled breakdown so the per-stage daily chart
      // stays populated, and fall back to the cost Langfuse now derives from
      // the observations' costDetails.
      const traceTotalCost = cost.total || t.totalCost || 0
      totalCost += traceTotalCost

      // Latency. `latency` is a v2 field group value, in seconds.
      const latency = meta.latencyBreakdown?.totalMs || meta.latencyMs
        || (typeof t.latency === 'number' ? Math.round(t.latency * 1000) : undefined)
      if (latency) {
        totalLatency += latency
        latencyCount++
      }

      // Safety
      const safety = safetyByTrace[t.traceId]
      if (safety != null) {
        safetySum += safety
        safetyCount++
      }

      // Languages
      if (tags.includes('es')) languages.es++
      else if (tags.includes('en')) languages.en++

      // Intents
      for (const tag of tags) {
        if (tag.startsWith('topic:')) {
          intents[tag] = (intents[tag] || 0) + 1
        }
      }

      // RAG
      if (tags.includes('rag:yes')) ragActivation.yes++
      else if (tags.includes('rag:no')) ragActivation.no++

      // Daily bucket
      const date = t.startTime?.slice(0, 10)
      if (date) {
        if (!daily[date]) {
          daily[date] = {
            date,
            conversations: 0,
            textConversations: 0,
            voiceConversations: 0,
            cost: { toolDecision: 0, embedding: 0, reranking: 0, generation: 0, voice: 0, total: 0 },
            totalLatency: 0,
            latencyCount: 0,
          }
        }
        const d = daily[date]
        d.conversations++
        if (isVoice) d.voiceConversations++
        else d.textConversations++
        d.cost.toolDecision += cost.toolDecision || 0
        d.cost.embedding += cost.embedding || 0
        d.cost.reranking += cost.reranking || 0
        d.cost.generation += cost.generation || 0
        d.cost.voice += cost.voice || 0
        d.cost.total += traceTotalCost
        if (latency) {
          d.totalLatency += latency
          d.latencyCount++
        }
      }
    }

    // Build sorted daily array
    const dailyArray = Object.values(daily)
      .sort((a, b) => a.date.localeCompare(b.date))
      .map(d => ({
        date: d.date,
        conversations: d.conversations,
        textConversations: d.textConversations,
        voiceConversations: d.voiceConversations,
        cost: d.cost,
        avgLatencyMs: d.latencyCount > 0 ? Math.round(d.totalLatency / d.latencyCount) : 0,
      }))

    const conversations = traces.length

    return json({
      period: { days, from, to },
      totals: {
        conversations,
        textConversations: textConvos,
        voiceConversations: voiceConvos,
        totalCost: round(totalCost),
        avgCostPerConversation: conversations > 0 ? round(totalCost / conversations) : 0,
        avgLatencyMs: latencyCount > 0 ? Math.round(totalLatency / latencyCount) : 0,
        avgSafetyScore: safetyCount > 0 ? round(safetySum / safetyCount) : null,
        evalPassRate: evalResults?.passRate ?? 0,
      },
      daily: dailyArray,
      distributions: {
        languages,
        intents,
        ragActivation,
      },
    })
  } catch (err) {
    return json({ error: err.message }, 500)
  }
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}

function round(n) {
  return Math.round(n * 1e6) / 1e6
}
