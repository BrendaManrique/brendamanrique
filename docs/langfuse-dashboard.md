# Langfuse Dashboard Setup

Configuration guide for the LLMOps observability dashboard.

> **Langfuse v4.** Tracing is ingested through OpenTelemetry
> (`POST /api/public/otel/v1/traces`). Two consequences matter when building
> widgets:
>
> * **Trace-level input/output is deprecated.** A conversation's overall
>   input/output now lives on its **root observation** — `chat` for text,
>   `voice-session` for voice. Widgets and evaluators must read it there.
> * **Cost is reported natively.** Every cost-bearing observation carries
>   `costDetails`, so Langfuse computes trace and session cost itself. The
>   hand-rolled `metadata.cost` breakdown is still written for the per-stage
>   widgets below, but totals no longer depend on it.
>
> Metadata values are written as OpenTelemetry attributes: each key becomes its
> own attribute and nested objects are JSON-encoded, so a metadata path such as
> `metadata.cost.total` may need the object parsed rather than dot-addressed.

## Widgets

### 1. Volume Over Time
- **Type:** Time series
- **Metric:** Trace count
- **Group by:** Tag `lang` (es/en)
- **Period:** Last 30 days

### 2. Quality Trend
- **Type:** Time series
- **Metric:** Average score `quality` (from online scoring)
- **Period:** Last 30 days
- **Alert:** Set threshold at 0.7

### 3. Cost Per Conversation
- **Type:** Time series
- **Metric:** Average total cost (Langfuse-computed from observation `costDetails`)
- **Period:** Last 30 days
- **Note:** Cost is in USD. Under v4 each observation reports its own
  `costDetails`, so trace and session totals are derived by Langfuse. The
  `metadata.cost` breakdown remains available for the per-stage split.

### 4. RAG Hit Rate
- **Type:** Gauge / Percentage
- **Metric:** % of traces with tag `rag:yes`
- **Period:** Last 7 days

### 5. Latency P50/P95
- **Type:** Time series
- **Metric:** `metadata.latencyBreakdown.totalMs`
- **Percentiles:** P50, P95
- **Period:** Last 7 days

### 6. Safety Alerts
- **Type:** Table
- **Filter:** Score `safety` < 0.7
- **Columns:** Trace ID, User message, Safety score, Timestamp
- **Period:** Last 24 hours

### 7. Prompt Version Comparison
- **Type:** Bar chart
- **Metric:** Average `quality` score
- **Group by:** `metadata.promptVersion`
- **Period:** Last 30 days
- **Purpose:** Compare quality across prompt versions

### 8. Intent Distribution
- **Type:** Pie chart
- **Metric:** Score `intent_category` distribution
- **Period:** Last 7 days

### 9. Faithfulness (RAG)
- **Type:** Gauge
- **Metric:** Average score `faithfulness`
- **Filter:** Tag `rag:yes`
- **Period:** Last 7 days

## Score Names Reference

| Score | Source | Scale | Description |
|-------|--------|-------|-------------|
| `quality` | Online (Haiku) | 0-1 | Response helpfulness + tone |
| `safety` | Online (Haiku) | 0-1 | Private info protection |
| `faithfulness` | Online (Haiku) | 0-1 | RAG accuracy (only when RAG used) |
| `intent_category` | Online (Haiku) | string | User intent classification (CATEGORICAL) |
| `jailbreak_attempt` | Online (Haiku) | 0/1 | Jailbreak flag, only written when true |

All five come from the single `online_scoring` call on each answer. The daily
batch cron that used to write `response_quality`, `safety_score`,
`intent_category` and `jailbreak_attempt` was removed: at this traffic it judged
the same conversations a day later than the live scorer already did.

## Metadata Fields

All of these live on the trace's **root observation** (`chat` / `voice-session`),
not on the trace.

| Field | Location | Description |
|-------|----------|-------------|
| `cost.total` | `metadata.cost` | Total USD cost of the conversation |
| `cost.toolDecision` | `metadata.cost` | Cost of tool decision span |
| `cost.embedding` | `metadata.cost` | Cost of embedding span |
| `cost.reranking` | `metadata.cost` | Cost of reranking span |
| `promptVersion` | `metadata` | Langfuse prompt version or "file" |
| `latencyBreakdown.totalMs` | `metadata` | Total end-to-end latency |
| `lastUserMessage` | `metadata` | Mirror of the root observation's `input` |
| `durationMs` / `turnCount` | `metadata` | Voice sessions, on the `voice-transcript` observation |

## Observation Tree

| Observation | Type | Notes |
|-------------|------|-------|
| `chat` | span (root) | Input = user message, output = assistant answer, trace tags |
| `tool_decision` | span | Whether the agent chose to search |
| `embedding` | embedding | Query embedding, `usageDetails` + `costDetails` |
| `retrieval` | retriever | Hybrid search over pgvector |
| `reranking` | generation | Haiku re-rank, `usageDetails` + `costDetails` |
| `generation` | generation | Final answer, `usageDetails` + `costDetails` |
| `online_scoring` | evaluator | Haiku judge on every answer, in `waitUntil()` |
| `voice-session` | span (root) | Opened by `/api/voice-token` |
| `voice-rag` | span | Voice-mode retrieval, child of `voice-session` |
| `voice-transcript` | generation | Session transcript and cost, child of `voice-session` |

A voice session spans three requests. `/api/voice-token` returns a W3C
`traceparent` for the `voice-session` root; `/api/rag-search` and
`/api/voice-trace` attach their observations to it. v4 has no "re-open a trace
by id", so that header is what keeps the session in one trace.

## Read APIs

The v1 trace/observation/score read endpoints are deprecated on Langfuse Cloud
and sunset **2026-11-16**. This repo reads through their replacements:

| Was | Now |
|-----|-----|
| `GET /api/public/traces` | `GET /api/public/v2/observations?isRootObservation=true` |
| `GET /api/public/traces/{id}` | `GET /api/public/v2/observations?traceId={id}` |
| `GET /api/public/observations` | `GET /api/public/v2/observations` |
| `GET /api/public/scores` | `GET /api/public/v3/scores` |

Both replacements paginate by **cursor**, and return `input`/`output` as raw
strings (`parseIoAsJson` now returns 400).

## Setup Steps

1. Go to [Langfuse Dashboard](https://cloud.langfuse.com) → your project
2. Navigate to **Dashboards** → **Create New**
3. Add each widget above using the configuration specified
4. Set up alerts for Safety < 0.7 via **Settings** → **Alerts**
