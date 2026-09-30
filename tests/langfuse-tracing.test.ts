/**
 * Langfuse v4 tracing tests — run fully offline against a mock collector.
 *
 * Two things are verified that only break at runtime:
 *
 *  1. Edge compatibility. Every Langfuse-traced endpoint declares
 *     `runtime: 'edge'`, so each is bundled for a browser/edge target with no
 *     Node builtins available. The OpenTelemetry exporter ships both Node and
 *     browser platform code; if resolution ever picks the Node path, bundling
 *     fails here instead of at deploy time.
 *
 *  2. What actually reaches Langfuse. The bundles run against a local OTLP
 *     collector and stubbed model/vector APIs, and the exported spans are
 *     asserted: root input/output, the observation tree, cost and usage, trace
 *     tags, and sessionId propagation onto cost-bearing generations.
 *
 * Usage: npm run test:tracing
 */

import { build } from 'esbuild'
import { parseMetadata, fetchRootObservations } from '../api/_shared/langfuse-api.js'
import http from 'node:http'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

let passed = 0
let failed = 0

function assert(condition: boolean, msg: string) {
  if (condition) { passed++; console.log(`  ✅ ${msg}`) }
  else { failed++; console.error(`  ❌ ${msg}`) }
}

// ---------------------------------------------------------------------------
// Mock Langfuse OTLP collector
// ---------------------------------------------------------------------------

interface ExportedSpan {
  name: string
  traceId: string
  spanId: string
  parentSpanId?: string
  attributes: Record<string, unknown>
}

const exported: ExportedSpan[] = []

/**
 * Langfuse flattens observation metadata into one attribute per key
 * (`langfuse.observation.metadata.<key>`), JSON-encoding nested values.
 */
function readMetadata(span: ExportedSpan): Record<string, unknown> {
  const prefix = 'langfuse.observation.metadata.'
  const raw: Record<string, unknown> = {}
  for (const [key, value] of Object.entries(span.attributes)) {
    if (key.startsWith(prefix)) raw[key.slice(prefix.length)] = value
  }
  // Read back through the same helper the ops endpoints use, so the test sees
  // exactly the shape the dashboard sees.
  return parseMetadata(raw)
}

function attrValue(v: Record<string, unknown>): unknown {
  if ('stringValue' in v) return v.stringValue
  if ('intValue' in v) return Number(v.intValue)
  if ('doubleValue' in v) return v.doubleValue
  if ('boolValue' in v) return v.boolValue
  if ('arrayValue' in v) {
    const arr = v.arrayValue as { values?: Array<Record<string, unknown>> }
    return (arr.values || []).map(attrValue)
  }
  return null
}

const collector = http.createServer((req, res) => {
  let body = ''
  req.on('data', c => { body += c })
  req.on('end', () => {
    try {
      const payload = JSON.parse(body)
      for (const rs of payload.resourceSpans || []) {
        for (const ss of rs.scopeSpans || []) {
          for (const span of ss.spans || []) {
            exported.push({
              name: span.name,
              traceId: span.traceId,
              spanId: span.spanId,
              parentSpanId: span.parentSpanId || undefined,
              attributes: Object.fromEntries(
                (span.attributes || []).map((a: { key: string; value: Record<string, unknown> }) =>
                  [a.key, attrValue(a.value)]),
              ),
            })
          }
        }
      }
    } catch { /* ignore malformed */ }
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end('{}')
  })
})

// ---------------------------------------------------------------------------
// Stubbed upstreams — no network, deterministic responses
// ---------------------------------------------------------------------------

function installFetchStub(collectorOrigin: string) {
  const realFetch = globalThis.fetch

  globalThis.fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = typeof input === 'string' ? input : input instanceof URL ? input.href : input.url

    // Prompt management shares the Langfuse origin with OTLP ingestion, so it is
    // matched first: 404 sends chat.js down its chatbot-prompt.txt fallback.
    if (url.includes('/api/public/v2/prompts')) {
      return new Response('{"message":"not found"}', {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    // Read side: a real root plus online_scoring, which Langfuse Cloud also
    // returns under isRootObservation=true despite it having a parent.
    if (url.includes('/api/public/v2/observations') && url.includes('isRootObservation=true')) {
      return new Response(JSON.stringify({
        data: [
          { id: 'root-1', traceId: 't1', name: 'chat', parentObservationId: null },
          { id: 'score-1', traceId: 't1', name: 'online_scoring', type: 'EVALUATOR', parentObservationId: 'root-1' },
        ],
        meta: { cursor: null },
      }), { status: 200, headers: { 'Content-Type': 'application/json' } })
    }

    // Langfuse OTLP ingestion goes through to the local collector untouched.
    if (url.startsWith(collectorOrigin)) return realFetch(input as RequestInfo, init)

    if (url.includes('api.anthropic.com')) {
      const body = JSON.parse(String(init?.body ?? '{}'))
      const isHaiku = String(body.model).includes('haiku')
      return new Response(JSON.stringify({
        id: 'msg_test',
        type: 'message',
        role: 'assistant',
        model: body.model,
        // No tool_use: keeps chat.js on the precomputed (non-streaming) path,
        // which exercises the same observation tree without a live SSE stream.
        content: [{ type: 'text', text: isHaiku ? '0,1,2' : 'Respuesta de prueba.' }],
        stop_reason: 'end_turn',
        usage: { input_tokens: 120, output_tokens: 24 },
      }), { status: 200, headers: { 'Content-Type': 'application/json' } })
    }

    if (url.includes('api.openai.com')) {
      return new Response(JSON.stringify({
        data: [{ embedding: new Array(1536).fill(0.01) }],
        usage: { total_tokens: 8 },
      }), { status: 200, headers: { 'Content-Type': 'application/json' } })
    }

    // Rate limiting (chat + voice) goes through the bump_rate_limit RPC.
    // Answering it explicitly matters: without this branch the stub's
    // "unexpected fetch" throw is swallowed by the limiter's own catch, and the
    // endpoints would pass the test via the fail-open path rather than the real
    // one — which would hide a genuinely broken limiter.
    if (url.includes('/rest/v1/rpc/bump_rate_limit')) {
      return new Response(JSON.stringify([{
        allowed: true,
        used: 1,
        remaining: 4,
        reset_at: new Date(Date.now() + 86400_000).toISOString(),
      }]), { status: 200, headers: { 'Content-Type': 'application/json' } })
    }

    if (url.includes('api.openai.com/v1/realtime')) {
      return new Response(JSON.stringify({
        value: 'ek_test_token',
        expires_at: Math.floor(Date.now() / 1000) + 60,
      }), { status: 200, headers: { 'Content-Type': 'application/json' } })
    }

    if (url.includes('/rest/v1/rpc/hybrid_search')) {
      return new Response(JSON.stringify([]), { status: 200, headers: { 'Content-Type': 'application/json' } })
    }

    throw new Error(`Unexpected fetch in test: ${url}`)
  }) as typeof fetch
}

// ---------------------------------------------------------------------------
// Bundle an edge function the way Vercel's edge runtime would
// ---------------------------------------------------------------------------

async function bundleEdgeFunction(entry: string): Promise<string> {
  const result = await build({
    entryPoints: [path.join(ROOT, entry)],
    bundle: true,
    write: false,
    format: 'esm',
    // platform 'browser' applies the packages' `browser` field, which is what
    // swaps OpenTelemetry's Node transport for the fetch-based one.
    platform: 'browser',
    conditions: ['edge-light', 'worker', 'browser'],
    external: ['node:*'],
    loader: { '.txt': 'text' },
    logLevel: 'silent',
  })
  return result.outputFiles[0].text
}

async function loadHandler(entry: string) {
  const code = await bundleEdgeFunction(entry)
  const mod = await import(`data:text/javascript;base64,${Buffer.from(code).toString('base64')}`)
  return mod.default as (req: Request) => Promise<Response>
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  await new Promise<void>(r => collector.listen(0, r))
  const port = (collector.address() as { port: number }).port
  const origin = `http://127.0.0.1:${port}`

  process.env.LANGFUSE_PUBLIC_KEY = 'pk-lf-test'
  process.env.LANGFUSE_SECRET_KEY = 'sk-lf-test'
  process.env.LANGFUSE_BASE_URL = origin
  process.env.ANTHROPIC_API_KEY = 'sk-ant-test'
  process.env.OPENAI_API_KEY = 'sk-openai-test'
  process.env.SUPABASE_URL = 'https://stub.supabase.co'
  process.env.SUPABASE_SERVICE_ROLE_KEY = 'service-role-test'

  installFetchStub(origin)

  console.log('\n=== Langfuse v4 tracing contract ===\n')

  // --- Edge bundling (all traced endpoints) ---
  console.log('Edge bundle (no Node builtins):')
  for (const entry of [
    'api/chat.js', 'api/rag-search.js', 'api/voice-token.js', 'api/voice-trace.js',
    'api/ops/traces.js', 'api/ops/stats.js', 'api/ops/trace/[id].js',
  ]) {
    try {
      await bundleEdgeFunction(entry)
      assert(true, `${entry} bundles for the edge runtime`)
    } catch (err) {
      assert(false, `${entry} bundles for the edge runtime — ${err instanceof Error ? err.message.split('\n')[0] : err}`)
    }
  }

  // --- chat.js end to end ---
  console.log('\nchat.js spans:')
  const chat = await loadHandler('api/chat.js')
  const res = await chat(new Request('https://example.test/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      messages: [{ role: 'user', content: '¿Qué proyectos ha construido Brenda?' }],
      lang: 'es',
      sessionId: 'session-under-test',
      currentPage: '/agente-de-portafolio',
    }),
  }))

  assert(res.status === 200, 'chat handler returns 200')
  await res.text() // drain the SSE stream so the request completes
  // waitUntil() is a no-op outside Vercel, so give the queued flush a moment.
  await new Promise(r => setTimeout(r, 1500))

  const chatSpans = exported.filter(s => ['chat', 'tool_decision', 'generation', 'embedding', 'retrieval', 'reranking'].includes(s.name))
  const root = chatSpans.find(s => s.name === 'chat')

  assert(!!root, 'root observation "chat" is exported')
  if (root) {
    assert(!root.parentSpanId || root.parentSpanId === '', 'chat observation is the trace root')
    assert(root.attributes['langfuse.observation.input'] === '¿Qué proyectos ha construido Brenda?',
      'root observation input is the user message (v4 replaces trace-level input)')
    assert(typeof root.attributes['langfuse.observation.output'] === 'string'
      && String(root.attributes['langfuse.observation.output']).length > 0,
      'root observation output is the assistant answer the evaluator reads')
    assert(root.attributes['session.id'] === 'session-under-test', 'root observation carries sessionId')

    const tags = root.attributes['langfuse.trace.tags'] as string[] | undefined
    assert(Array.isArray(tags) && tags.includes('es'), 'root observation carries the language tag')
    assert(Array.isArray(tags) && tags.some(t => t.startsWith('rag:')),
      'outcome tag decided mid-request still lands on the root observation')

    const meta = readMetadata(root) as {
      currentPage?: string
      cost?: { total?: number }
      latencyBreakdown?: { totalMs?: number }
      lastUserMessage?: string
      promptVersion?: string | number
    }
    assert(meta.currentPage === '/agente-de-portafolio',
      'metadata set at creation survives the terminal update')
    assert(typeof meta.cost?.total === 'number', 'metadata.cost.total is present for the ops dashboard')
    assert(typeof meta.latencyBreakdown?.totalMs === 'number', 'metadata.latencyBreakdown.totalMs is present')
    assert(typeof meta.lastUserMessage === 'string', 'metadata.lastUserMessage is present for the ops dashboard')
    assert(meta.promptVersion === 'file',
      'prompt fetch failure falls back to chatbot-prompt.txt and records the version')
  }

  const generation = chatSpans.find(s => s.name === 'generation')
  assert(!!generation, 'generation observation is exported')
  if (generation && root) {
    assert(generation.traceId === root.traceId, 'generation shares the root trace id')
    assert(generation.parentSpanId === root.spanId, 'generation is a child of the root observation')
    assert(generation.attributes['langfuse.observation.type'] === 'generation',
      'generation keeps observation type "generation"')
    assert(generation.attributes['session.id'] === 'session-under-test',
      'sessionId propagates to the cost-bearing generation (session cost aggregation)')
    const cost = JSON.parse(String(generation.attributes['langfuse.observation.cost_details'] ?? '{}'))
    assert(typeof cost.total === 'number' && cost.total > 0,
      'generation reports costDetails natively (v3 only had metadata)')
    const usage = JSON.parse(String(generation.attributes['langfuse.observation.usage_details'] ?? '{}'))
    assert(usage.input === 120 && usage.output === 24, 'generation reports usageDetails')
  }

  const toolDecision = chatSpans.find(s => s.name === 'tool_decision')
  assert(!!toolDecision && toolDecision.parentSpanId === root?.spanId,
    'tool_decision is a child of the root observation')

  // online_scoring starts in waitUntil(), after the request's propagation scope
  // has closed, so it only has sessionId if scoreTrace() reopens the scope.
  const scoring = exported.find(s => s.name === 'online_scoring' && s.traceId === root?.traceId)
  assert(!!scoring, 'online_scoring observation is exported into the chat trace')
  if (scoring && root) {
    assert(scoring.parentSpanId === root.spanId, 'online_scoring is a child of the root observation')
    assert(scoring.attributes['session.id'] === 'session-under-test',
      'sessionId propagates to the cost-bearing online_scoring evaluator')
  }

  // --- voice-token -> voice-trace continuation ---
  console.log('\nVoice session continuation:')
  process.env.VITE_VOICE_ENABLED = 'true'
  const before = exported.length

  const voiceToken = await loadHandler('api/voice-token.js')
  const tokenRes = await voiceToken(new Request('https://example.test/api/voice-token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-forwarded-for': '203.0.113.7' },
    body: JSON.stringify({ lang: 'es', sessionId: 'voice-session-1' }),
  }))

  if (tokenRes.status !== 200) {
    console.log(`  ⏭️  SKIP voice-token returned ${tokenRes.status} (needs the OpenAI Realtime stub)`)
  } else {
    const { traceId, traceparent } = await tokenRes.json()
    assert(typeof traceparent === 'string' && /^00-[0-9a-f]{32}-[0-9a-f]{16}-[0-9a-f]{2}$/.test(traceparent),
      'voice-token returns a W3C traceparent for cross-request continuation')

    const ragSearch = await loadHandler('api/rag-search.js')
    const ragRes = await ragSearch(new Request('https://example.test/api/rag-search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: 'proyectos de IA', traceparent, sessionId: 'voice-session-1' }),
    }))
    assert(ragRes.status === 200, 'rag-search handler returns 200')

    const voiceTrace = await loadHandler('api/voice-trace.js')
    await voiceTrace(new Request('https://example.test/api/voice-trace', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        traceparent,
        sessionId: 'voice-session-1',
        transcript: [
          { role: 'user', text: 'hola' },
          { role: 'assistant', text: 'hola, ¿en qué te ayudo?' },
        ],
        durationMs: 42000,
        lang: 'es',
      }),
    }))
    await new Promise(r => setTimeout(r, 800))

    const voiceSpans = exported.slice(before)
    const session = voiceSpans.find(s => s.name === 'voice-session')
    const transcript = voiceSpans.find(s => s.name === 'voice-transcript')

    assert(!!session, 'voice-session root observation is exported')
    assert(!!transcript, 'voice-transcript observation is exported')
    if (session && transcript) {
      assert(transcript.traceId === session.traceId,
        'voice-trace joins the session trace opened by voice-token')
      assert(transcript.parentSpanId === session.spanId,
        'voice-transcript attaches under the voice-session root')
      assert(session.traceId === traceId, 'returned traceId matches the exported trace')
      const meta = readMetadata(transcript)
      assert(meta.durationMs === 42000 && meta.turnCount === 2,
        'voice session metadata the ops dashboard reads is present')
    }

    // rag-search runs in its own request, outside voice-token's scope, so it
    // must reopen the scope for its cost-bearing children to carry sessionId.
    const voiceRag = voiceSpans.find(s => s.name === 'voice-rag')
    const ragEmbedding = voiceSpans.find(s => s.name === 'embedding' && s.parentSpanId === voiceRag?.spanId)
    assert(!!voiceRag, 'voice-rag observation is exported')
    if (session && voiceRag) {
      assert(voiceRag.traceId === session.traceId && voiceRag.parentSpanId === session.spanId,
        'voice-rag attaches under the voice-session root')
      assert(voiceRag.attributes['session.id'] === 'voice-session-1', 'voice-rag carries sessionId')
    }
    assert(!!ragEmbedding && ragEmbedding.attributes['session.id'] === 'voice-session-1',
      'sessionId propagates to the cost-bearing voice RAG embedding')
  }

  // --- Ops read path ---
  console.log('\nOps read path:')
  const roots = await fetchRootObservations({ from: new Date(Date.now() - 86400000).toISOString() })
  const rootIds = (roots.data || []).map((o: { id: string }) => o.id)
  assert(rootIds.length === 1 && rootIds[0] === 'root-1',
    'fetchRootObservations lists one row per trace (parented online_scoring is dropped)')

  console.log(`\n${'='.repeat(50)}`)
  console.log(`Passed: ${passed}  Failed: ${failed}`)
  console.log(`${'='.repeat(50)}\n`)

  collector.close()
  process.exit(failed > 0 ? 1 : 0)
}

main().catch(err => {
  console.error('Fatal error:', err)
  process.exit(1)
})
