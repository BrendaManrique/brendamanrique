/**
 * Langfuse v4 read helpers shared by the CLI scripts and the contract test.
 *
 * The v1 endpoints these tools used are deprecated on Langfuse Cloud and sunset
 * on 2026-11-16:
 *   GET /api/public/traces       -> GET /api/public/v2/observations?isRootObservation=true
 *   GET /api/public/traces/{id}  -> GET /api/public/v2/observations?traceId={id}
 *   GET /api/public/scores       -> GET /api/public/v3/scores
 *
 * Both replacements paginate by cursor and return input/output as raw strings.
 * These helpers normalise the v2 rows back into the trace-shaped objects the
 * scripts already render, so only the transport changed.
 */

const LANGFUSE_BASE_URL = process.env.LANGFUSE_BASE_URL || 'https://cloud.langfuse.com'

function auth(): string {
  const pk = process.env.LANGFUSE_PUBLIC_KEY
  const sk = process.env.LANGFUSE_SECRET_KEY
  return `Basic ${Buffer.from(`${pk}:${sk}`).toString('base64')}`
}

const FIELDS = 'core,basic,io,metadata,usage,metrics,trace_context'
const EXPAND_METADATA = [
  'cost', 'latencyBreakdown', 'sources', 'lastUserMessage',
  'ragUsed', 'promptVersion', 'messageCount', 'currentPage',
  'durationMs', 'turnCount', 'userMessageCount',
].join(',')

export interface Message {
  role: 'user' | 'assistant'
  content: string
}

export interface TraceObservation {
  id: string
  name?: string
  type?: string
  input?: Message[] | string | unknown
  output?: string | unknown
  metadata?: Record<string, unknown>
  startTime?: string
}

export interface Trace {
  id: string
  timestamp: string
  name?: string
  tags: string[]
  metadata: Record<string, unknown> & {
    lang?: string
    messageCount?: number
    lastUserMessage?: string
  }
  input?: unknown
  output?: unknown
  observations?: TraceObservation[]
}

/** v2 returns input/output (and sometimes metadata) as raw strings. */
export function parseIo(value: unknown): unknown {
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
// back, a number can arrive as "42000" and an object as its JSON text.
const NUMERIC_METADATA_KEYS = new Set([
  'durationMs', 'turnCount', 'userMessageCount', 'messageCount', 'chunksRetrieved',
])
const BOOLEAN_METADATA_KEYS = new Set([
  'ragUsed', 'ragDegraded', 'jailbreakDetected', 'leakDetected', 'blocked',
])

function parseMetadata(value: unknown): Record<string, unknown> {
  const parsed = parseIo(value)
  if (!parsed || typeof parsed !== 'object') return {}

  const out: Record<string, unknown> = {}
  for (const [key, raw] of Object.entries(parsed as Record<string, unknown>)) {
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
      out[key] = /^[[{]/.test(raw.trim()) ? parseIo(raw) : raw
      continue
    }
    out[key] = raw
  }
  return out
}

interface ObservationV2 {
  id: string
  traceId: string
  startTime: string
  type?: string
  name?: string
  traceName?: string
  tags?: string[]
  metadata?: unknown
  input?: unknown
  output?: unknown
  isRootObservation?: boolean
}

function toTrace(root: ObservationV2): Trace {
  return {
    id: root.traceId,
    timestamp: root.startTime,
    name: root.traceName || root.name,
    tags: root.tags || [],
    metadata: parseMetadata(root.metadata),
    input: parseIo(root.input),
    output: parseIo(root.output),
  }
}

/**
 * List traces as their root observations. `tag` filters client-side: v2 exposes
 * tags via the trace_context field group but has no tags query parameter.
 */
export async function fetchTraces(options: {
  days?: number
  limit?: number
  tag?: string
} = {}): Promise<Trace[]> {
  const { days = 1, limit = 50, tag } = options

  const from = new Date()
  from.setDate(from.getDate() - days)

  const params = new URLSearchParams({
    isRootObservation: 'true',
    fromStartTime: from.toISOString(),
    toStartTime: new Date().toISOString(),
    // Over-fetch when filtering by tag, since the filter runs client-side.
    limit: String(tag ? Math.min(limit * 5, 1000) : limit),
    fields: FIELDS,
    expandMetadata: EXPAND_METADATA,
  })

  const res = await fetch(`${LANGFUSE_BASE_URL}/api/public/v2/observations?${params}`, {
    headers: { Authorization: auth() },
  })
  if (!res.ok) {
    throw new Error(`Langfuse observations: ${res.status}`)
  }

  const body = await res.json()
  const traces = (body.data || []).map(toTrace)
  const filtered = tag ? traces.filter((t: Trace) => t.tags.includes(tag)) : traces
  return filtered.slice(0, limit)
}

/** One trace, as its observations. Replaces GET /api/public/traces/{id}. */
export async function fetchTraceDetail(traceId: string): Promise<Trace | null> {
  const params = new URLSearchParams({
    traceId,
    limit: '200',
    fields: FIELDS,
    expandMetadata: EXPAND_METADATA,
  })

  const res = await fetch(`${LANGFUSE_BASE_URL}/api/public/v2/observations?${params}`, {
    headers: { Authorization: auth() },
  })
  if (!res.ok) return null

  const body = await res.json()
  const rows: ObservationV2[] = body.data || []
  if (rows.length === 0) return null

  const root = rows.find(o => o.isRootObservation) || rows[0]
  const trace = toTrace(root)

  trace.observations = rows
    .map(o => ({
      id: o.id,
      name: o.name,
      type: (o.type || '').toLowerCase(),
      startTime: o.startTime,
      input: parseIo(o.input),
      output: parseIo(o.output),
      metadata: parseMetadata(o.metadata),
    }))
    .sort((a, b) => String(a.startTime).localeCompare(String(b.startTime)))

  return trace
}

export interface ScoreRow {
  traceId: string
  name: string
  value: number | string | boolean
}

/** Scores v3, flattened back to {traceId, name, value}. */
export async function fetchScores(fromMs: number, maxPages = 10): Promise<ScoreRow[]> {
  const out: ScoreRow[] = []
  let cursor: string | undefined

  for (let page = 0; page < maxPages; page++) {
    const params = new URLSearchParams({
      limit: '100',
      fields: 'details,subject',
      fromTimestamp: new Date(fromMs).toISOString(),
    })
    if (cursor) params.set('cursor', cursor)

    const res = await fetch(`${LANGFUSE_BASE_URL}/api/public/v3/scores?${params}`, {
      headers: { Authorization: auth() },
    })
    if (!res.ok) break

    const body = await res.json()
    for (const score of body.data || []) {
      const subject = score.subject || {}
      const traceId = subject.kind === 'observation' ? subject.traceId : subject.id
      if (traceId) out.push({ traceId, name: score.name, value: score.value })
    }

    cursor = body.meta?.cursor
    if (!cursor) break
  }

  return out
}
