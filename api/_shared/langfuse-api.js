// ---------------------------------------------------------------------------
// Langfuse v4 public read API (Edge-compatible, plain fetch).
//
// The v1 trace/observation/score read endpoints this dashboard used are
// deprecated on Langfuse Cloud and sunset on 2026-11-16:
//
//   GET /api/public/traces        -> GET /api/public/v2/observations?isRootObservation=true
//   GET /api/public/traces/{id}   -> GET /api/public/v2/observations?traceId={id}
//   GET /api/public/observations  -> GET /api/public/v2/observations
//   GET /api/public/scores        -> GET /api/public/v3/scores
//
// Two behavioural differences drive the shape of this module:
//   * pagination is cursor-based, not offset-based;
//   * input/output always come back as raw strings (parseIoAsJson now 400s).
// ---------------------------------------------------------------------------

import { langfuseAuth, langfuseBaseUrl } from './ops-auth.js'

/** Observation field groups the dashboard needs beyond the always-present core. */
const TRACE_FIELDS = 'core,basic,io,metadata,usage,metrics,trace_context'

/**
 * Metadata keys the dashboard reads in full. v2 truncates metadata values to
 * 200 chars unless the key is named here, which would silently flatten the
 * nested cost and latency objects into unparseable prefixes.
 */
const EXPAND_METADATA = [
  'cost', 'latencyBreakdown', 'sources', 'lastUserMessage',
  'ragUsed', 'promptVersion', 'messageCount', 'currentPage',
  'durationMs', 'turnCount', 'userMessageCount',
  'jailbreakDetected', 'leakDetected', 'chunksRetrieved',
].join(',')

/**
 * `isRootObservation=true` can also return observations that have a parent:
 * on Langfuse Cloud, chat.js's online_scoring evaluator (started in
 * waitUntil(), after the root has ended) comes back flagged as a root with its
 * parentObservationId set. A trace is its one parentless observation, so
 * anything with a parent is dropped rather than listed as a second,
 * output-less conversation.
 */
export function isTraceRoot(observation) {
  return !observation.parentObservationId
}

function authHeaders() {
  const auth = langfuseAuth()
  return auth ? { Authorization: auth } : null
}

/**
 * Observations v2 returns input/output as raw strings. Values this app wrote as
 * objects come back as JSON text and have to be parsed here.
 */
export function parseIo(value) {
  if (value == null) return null
  if (typeof value !== 'string') return value
  const trimmed = value.trim()
  if (!trimmed) return null
  if (!/^[[{"]/.test(trimmed)) return trimmed
  try {
    return JSON.parse(trimmed)
  } catch {
    return trimmed
  }
}

// OpenTelemetry attributes are strings, numbers or booleans, so Langfuse writes
// each metadata key as its own attribute and JSON-encodes anything nested. Read
// back, a number can therefore arrive as "42000" and an object as its JSON text.
// The dashboard does arithmetic on these, so the keys it treats as numbers or
// booleans are coerced explicitly rather than by guessing from the value — which
// would turn an all-digits lastUserMessage into a number.
const NUMERIC_METADATA_KEYS = new Set([
  'durationMs', 'turnCount', 'userMessageCount', 'messageCount', 'chunksRetrieved',
])
const BOOLEAN_METADATA_KEYS = new Set([
  'ragUsed', 'ragDegraded', 'jailbreakDetected', 'leakDetected', 'blocked',
])

/** Metadata may arrive as a JSON string, or as per-key strings. */
export function parseMetadata(value) {
  const parsed = parseIo(value)
  if (!parsed || typeof parsed !== 'object') return {}

  const out = {}
  for (const [key, raw] of Object.entries(parsed)) {
    if (typeof raw === 'string') {
      if (NUMERIC_METADATA_KEYS.has(key)) {
        const n = Number(raw)
        out[key] = Number.isFinite(n) ? n : raw
        continue
      }
      if (BOOLEAN_METADATA_KEYS.has(key)) {
        out[key] = raw === 'true' ? true : raw === 'false' ? false : raw
        continue
      }
      // Nested objects and arrays come back as their JSON text.
      out[key] = /^[[{]/.test(raw.trim()) ? parseIo(raw) : raw
      continue
    }
    out[key] = raw
  }
  return out
}

/**
 * One row per trace: the trace's root observation. Replaces GET /api/public/traces.
 * `name` narrows to a conversation kind ('chat' / 'voice-session').
 */
export async function fetchRootObservations({ from, to, limit = 50, cursor, name } = {}) {
  const headers = authHeaders()
  if (!headers) return { error: 'Langfuse not configured', status: 503 }

  const params = new URLSearchParams({
    isRootObservation: 'true',
    fromStartTime: from,
    toStartTime: to || new Date().toISOString(),
    limit: String(limit),
    fields: TRACE_FIELDS,
    expandMetadata: EXPAND_METADATA,
  })
  if (cursor) params.set('cursor', cursor)
  if (name) params.set('name', name)

  const res = await fetch(`${langfuseBaseUrl()}/api/public/v2/observations?${params}`, { headers })
  if (!res.ok) return { error: `Langfuse observations error: ${res.status}`, status: 502 }

  const body = await res.json()
  return { data: (body.data || []).filter(isTraceRoot), cursor: body.meta?.cursor || null }
}

/** Every observation of one trace, ordered as returned. */
export async function fetchTraceObservations(traceId, { limit = 200 } = {}) {
  const headers = authHeaders()
  if (!headers) return { error: 'Langfuse not configured', status: 503 }

  const params = new URLSearchParams({
    traceId,
    limit: String(limit),
    fields: TRACE_FIELDS,
    expandMetadata: EXPAND_METADATA,
  })

  const res = await fetch(`${langfuseBaseUrl()}/api/public/v2/observations?${params}`, { headers })
  if (!res.ok) return { error: `Langfuse observations error: ${res.status}`, status: 502 }

  const body = await res.json()
  return { data: body.data || [], cursor: body.meta?.cursor || null }
}

/**
 * Scores v3, indexed by trace id. v3 returns a single typed `value` (no separate
 * stringValue) and reports what a score is attached to through `subject`, which
 * is only present when the `subject` field group is requested.
 *
 * Pages until exhausted or `maxPages` is hit — v3 caps a page at 100 rows, where
 * the old scores API returned everything the dashboard asked for in one call.
 */
export async function fetchScoresByTrace({ from, to, traceId, maxPages = 10 } = {}) {
  const headers = authHeaders()
  if (!headers) return {}

  const byTrace = {}
  let cursor = null

  for (let page = 0; page < maxPages; page++) {
    const params = new URLSearchParams({ limit: '100', fields: 'details,subject' })
    if (from) params.set('fromTimestamp', from)
    if (to) params.set('toTimestamp', to)
    if (traceId) params.set('traceId', traceId)
    if (cursor) params.set('cursor', cursor)

    const res = await fetch(`${langfuseBaseUrl()}/api/public/v3/scores?${params}`, { headers })
    if (!res.ok) break

    const body = await res.json()
    for (const score of body.data || []) {
      const subject = score.subject || {}
      const id = subject.kind === 'observation' ? subject.traceId : subject.id
      if (!id) continue
      if (!byTrace[id]) byTrace[id] = {}
      byTrace[id][score.name] = score.value
    }

    cursor = body.meta?.cursor
    if (!cursor) break
  }

  return byTrace
}
