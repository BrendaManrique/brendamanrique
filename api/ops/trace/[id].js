import { validateOpsAuth, langfuseBaseUrl } from '../../_shared/ops-auth.js'
import { fetchTraceObservations, fetchScoresByTrace, parseIo, parseMetadata } from '../../_shared/langfuse-api.js'

export const config = { runtime: 'edge' }

export default async function handler(req) {
  const auth = validateOpsAuth(req)
  if (!auth.ok) return auth.response

  try {
    // Extract trace ID from URL path: /api/ops/trace/{id}
    const urlPath = new URL(req.url).pathname
    const segments = urlPath.split('/')
    const traceId = segments[segments.length - 1]

    if (!traceId) {
      return json({ error: 'Missing trace ID' }, 400)
    }

    // GET /api/public/traces/{id} is deprecated. v2 returns the trace as its
    // observations; the root observation carries what the trace object used to.
    const [obsResult, scoresByTrace] = await Promise.all([
      fetchTraceObservations(traceId),
      fetchScoresByTrace({ traceId }),
    ])

    if (obsResult.error) return json({ error: obsResult.error }, obsResult.status)
    if (obsResult.data.length === 0) return json({ error: 'Trace not found' }, 404)

    const raw = obsResult.data
    const root = raw.find(o => o.isRootObservation) || raw[0]
    const rootMeta = parseMetadata(root.metadata)

    const observations = raw.map(o => ({
      id: o.id,
      name: o.name,
      // v1 reported SCREAMING_CASE types; v2 reports the v4 observation types
      // ('generation', 'span', 'embedding', 'retriever', …). Normalised to lower
      // case, which is what the dashboard's rendering already matches on.
      type: (o.type || '').toLowerCase(),
      startTime: o.startTime,
      endTime: o.endTime,
      model: o.model,
      input: parseIo(o.input),
      output: parseIo(o.output),
      metadata: parseMetadata(o.metadata),
      usage: o.usageDetails,
      costDetails: o.costDetails,
      totalCost: o.totalCost,
    })).sort((a, b) => String(a.startTime).localeCompare(String(b.startTime)))

    const projectId = root.projectId || ''
    const base = langfuseBaseUrl()
    const langfuseUrl = projectId
      ? `${base}/project/${projectId}/traces/${traceId}`
      : `${base}/trace/${traceId}`

    return json({
      id: traceId,
      name: root.traceName || root.name,
      timestamp: root.startTime,
      tags: root.tags || [],
      metadata: rootMeta,
      // v4 deprecates trace-level input/output; the root observation holds them.
      input: parseIo(root.input),
      output: parseIo(root.output),
      observations,
      scores: scoresByTrace[traceId] || {},
      langfuseUrl,
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
