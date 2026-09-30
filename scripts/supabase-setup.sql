-- RAG Setup for the brendamanrique.com portfolio agent
-- Run this in Supabase SQL Editor (Dashboard → SQL Editor → New Query)

-- 1. Enable pgvector extension
create extension if not exists vector with schema extensions;

-- 2. Create documents table
create table if not exists public.documents (
  id bigserial primary key,
  content text not null,
  metadata jsonb default '{}'::jsonb,
  embedding vector(1536),
  fts tsvector generated always as (to_tsvector('english', content)) stored
);

-- 3. Hybrid search function (vector similarity + BM25 keyword match)
create or replace function hybrid_search (
  query_text text,
  query_embedding vector(1536),
  match_count int default 10,
  semantic_weight float default 0.7,
  keyword_weight float default 0.3,
  filter jsonb default '{}'::jsonb
) returns table (
  id bigint, content text, metadata jsonb, similarity float
) language plpgsql as $$
begin
  return query
  select d.id, d.content, d.metadata,
    (semantic_weight * (1 - (d.embedding <=> query_embedding)) +
     keyword_weight * coalesce(ts_rank(d.fts, websearch_to_tsquery('english', query_text)), 0)
    ) as similarity
  from documents d
  where case when filter != '{}'::jsonb then d.metadata @> filter else true end
  order by similarity desc
  limit match_count;
end; $$;

-- 4. Delete function for re-indexing
create or replace function delete_documents_by_slug(slug text)
returns void language plpgsql as $$
begin
  delete from documents where metadata->>'article_id' = slug;
end; $$;

-- 5. Indices
create index if not exists documents_embedding_idx on documents
  using ivfflat (embedding vector_cosine_ops) with (lists = 10);
create index if not exists documents_fts_idx on documents using gin (fts);
create index if not exists documents_metadata_idx on documents using gin (metadata);

-- 6. Ingest hash cache
-- `npm run rag:sync` compares content hashes to skip unchanged articles.
-- Reads/writes are wrapped in try/catch, so a missing table is not fatal —
-- it just means every build re-embeds the entire corpus (slower, and billed).
create table if not exists public.rag_hashes (
  article_id text primary key,
  hash text not null,
  updated_at timestamptz default now()
);

-- 7. Voice session rate limiting
-- api/voice-token.js caps Realtime sessions per IP per 24h. It fails OPEN if
-- this table is absent, so without it voice minting is uncapped — and Realtime
-- audio is the most expensive call on the site. `ip` must be the primary key:
-- the endpoint upserts with Prefer: resolution=merge-duplicates.
create table if not exists public.voice_rate_limits (
  ip text primary key,
  count int not null default 1,
  window_start timestamptz not null default now()
);

-- 8. Row Level Security
-- Every read and write happens server-side with the service_role key, which
-- bypasses RLS. Enabling it with no policies therefore changes nothing for the
-- app while closing anon/authenticated access — so a leaked anon key cannot
-- read the corpus or forge rate-limit rows.
alter table public.documents enable row level security;
alter table public.rag_hashes enable row level security;
alter table public.voice_rate_limits enable row level security;

-- 9. Generic rate limiting (chat + voice), atomic
-- Supersedes `voice_rate_limits` above, which was read-then-write: two round
-- trips, so concurrent requests all read the same count and all passed. Here a
-- single statement increments and reports, so N parallel requests produce N
-- distinct counts and the cap holds.
--
-- `scope` keeps one table per limiter ('chat', 'voice', ...) instead of one
-- table per endpoint. The window is a fixed window, not a sliding one: the
-- counter resets when `window_start` ages past the window rather than decaying
-- per request. At these volumes the precision is irrelevant and it keeps the
-- whole limiter to one row and one statement.
create table if not exists public.rate_limits (
  scope text not null,
  ip text not null,
  count int not null default 0,
  window_start timestamptz not null default now(),
  primary key (scope, ip)
);

-- Lets a cleanup job find expired rows without a full scan. Nothing prunes
-- automatically: rows are tiny and reused per IP, so the table tracks distinct
-- visitors, not traffic.
create index if not exists rate_limits_window_idx
  on public.rate_limits (window_start);

-- Increment and report in one statement.
-- Returns allowed=false on the call that pushes `count` past p_max, so the
-- caller spends exactly one unit per request and never has to write back.
create or replace function public.bump_rate_limit(
  p_scope text,
  p_ip text,
  p_window_seconds int,
  p_max int
) returns table (allowed boolean, used int, remaining int, reset_at timestamptz)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_used int;
  v_window_start timestamptz;
  v_window interval := make_interval(secs => p_window_seconds);
begin
  insert into public.rate_limits as rl (scope, ip, count, window_start)
  values (p_scope, p_ip, 1, now())
  on conflict (scope, ip) do update
    set
      -- Expired window: start over at 1. Live window: increment, but clamp at
      -- p_max + 1 so a client that keeps hammering after being blocked cannot
      -- inflate the counter without bound.
      count = case
                when rl.window_start <= now() - v_window then 1
                else least(rl.count + 1, p_max + 1)
              end,
      window_start = case
                when rl.window_start <= now() - v_window then now()
                else rl.window_start
              end
  returning rl.count, rl.window_start into v_used, v_window_start;

  return query select
    v_used <= p_max,
    v_used,
    greatest(p_max - v_used, 0),
    v_window_start + v_window;
end;
$$;

-- Only the service_role key may move a counter. Without this a leaked anon key
-- could call the function directly and burn a visitor's budget, or call it with
-- someone else's IP. `security definer` is what lets it write through RLS.
revoke all on function public.bump_rate_limit(text, text, int, int) from public;
revoke all on function public.bump_rate_limit(text, text, int, int) from anon, authenticated;
grant execute on function public.bump_rate_limit(text, text, int, int) to service_role;

alter table public.rate_limits enable row level security;
