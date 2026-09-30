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
  fts tsvector generated always as (to_tsvector('english', content)) stored,
  updated_at timestamptz not null default now()
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
  updated_at timestamptz not null default now()
);

-- 7. Voice session rate limiting
-- api/voice-token.js caps Realtime sessions per IP per 24h. It fails OPEN if
-- this table is absent, so without it voice minting is uncapped — and Realtime
-- audio is the most expensive call on the site. `ip` must be the primary key:
-- the endpoint upserts with Prefer: resolution=merge-duplicates.
create table if not exists public.voice_rate_limits (
  ip text primary key,
  count int not null default 1,
  window_start timestamptz not null default now(),
  updated_at timestamptz not null default now()
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
  updated_at timestamptz not null default now(),
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

-- 10. Last-update timestamps
-- Every table carries `updated_at`. A column default only fires on INSERT, so on
-- its own it records creation time: rag_hashes, upserted on each build, kept the
-- timestamp of the first build that ever saw an article. The trigger below sets
-- it on every UPDATE too, including the UPDATE half of an upsert
-- (`on conflict do update`, which is how bump_rate_limit and the rag_hashes
-- upsert write).
--
-- The WHEN clause skips updates that change nothing, so the column means "row
-- last changed", not "row last written": rebuilding with unchanged content does
-- not touch rag_hashes. (rate_limits changes on every bump once section 11 adds
-- last_seen/total_count, so there it tracks the visitor's latest request.)
--
-- The ALTERs bring databases created before this section up to date; on a fresh
-- install the columns already exist from the CREATE TABLEs above and they are
-- no-ops. Rows that predate the column are backfilled with the migration time,
-- since their real last-change time was never recorded.
create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

alter table public.documents add column if not exists updated_at timestamptz not null default now();
alter table public.rate_limits add column if not exists updated_at timestamptz not null default now();
alter table public.voice_rate_limits add column if not exists updated_at timestamptz not null default now();

-- rag_hashes already had a nullable updated_at.
update public.rag_hashes set updated_at = now() where updated_at is null;
alter table public.rag_hashes alter column updated_at set not null;

-- documents gets no WHEN clause: Postgres rejects a whole-row comparison on a
-- table with a generated column (fts). Nothing lost — ingest never UPDATEs it
-- (it deletes an article's chunks and re-inserts them), so any update here is a
-- deliberate manual edit.
drop trigger if exists set_updated_at on public.documents;
create trigger set_updated_at before update on public.documents
  for each row execute function public.set_updated_at();

drop trigger if exists set_updated_at on public.rag_hashes;
create trigger set_updated_at before update on public.rag_hashes
  for each row when (old.* is distinct from new.*) execute function public.set_updated_at();

drop trigger if exists set_updated_at on public.voice_rate_limits;
create trigger set_updated_at before update on public.voice_rate_limits
  for each row when (old.* is distinct from new.*) execute function public.set_updated_at();

drop trigger if exists set_updated_at on public.rate_limits;
create trigger set_updated_at before update on public.rate_limits
  for each row when (old.* is distinct from new.*) execute function public.set_updated_at();

-- 11. Pseudonymous visitors: hashed ids, coarse location, 90-day retention
-- `rate_limits.ip` now holds a keyed hash of the address (HMAC-SHA256, see
-- hashVisitor in api/_shared/ratelimit.js), never the address itself. The
-- column keeps its name so the primary key and the ops dashboard query do not
-- move. Alongside it: where the request came from (as resolved by Vercel at
-- the edge, city at most) and lifetime counts, so repeat visitors and
-- countries show up without storing IPs.
alter table public.rate_limits add column if not exists first_seen timestamptz not null default now();
alter table public.rate_limits add column if not exists last_seen timestamptz not null default now();
alter table public.rate_limits add column if not exists total_count int not null default 0;
alter table public.rate_limits add column if not exists country text;
alter table public.rate_limits add column if not exists region text;
alter table public.rate_limits add column if not exists city text;

create index if not exists rate_limits_last_seen_idx
  on public.rate_limits (last_seen);

-- Rows written before hashing hold raw addresses. Drop them (this resets the
-- daily limit for those visitors once), and empty the legacy voice table,
-- which nothing writes to any more.
delete from public.rate_limits where ip !~ '^[0-9a-f]{32}$';
truncate public.voice_rate_limits;

-- Replaces the 4-argument version. Keeping both would make PostgREST's
-- named-argument lookup ambiguous, so the old one is dropped first. The new
-- arguments default to null, so a caller that still sends four keeps working.
drop function if exists public.bump_rate_limit(text, text, int, int);

create or replace function public.bump_rate_limit(
  p_scope text,
  p_ip text,
  p_window_seconds int,
  p_max int,
  p_country text default null,
  p_region text default null,
  p_city text default null
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
  insert into public.rate_limits as rl
    (scope, ip, count, window_start, first_seen, last_seen, total_count, country, region, city)
  values
    (p_scope, p_ip, 1, now(), now(), now(), 1, p_country, p_region, p_city)
  on conflict (scope, ip) do update
    set
      -- Same window logic as before: expired window starts over at 1, a live
      -- one increments but clamps at p_max + 1.
      count = case
                when rl.window_start <= now() - v_window then 1
                else least(rl.count + 1, p_max + 1)
              end,
      window_start = case
                when rl.window_start <= now() - v_window then now()
                else rl.window_start
              end,
      -- Lifetime view: every request counts, blocked ones included, and the
      -- location follows the visitor's latest request.
      last_seen = now(),
      total_count = rl.total_count + 1,
      country = coalesce(p_country, rl.country),
      region = coalesce(p_region, rl.region),
      city = coalesce(p_city, rl.city)
  returning rl.count, rl.window_start into v_used, v_window_start;

  return query select
    v_used <= p_max,
    v_used,
    greatest(p_max - v_used, 0),
    v_window_start + v_window;
end;
$$;

revoke all on function public.bump_rate_limit(text, text, int, int, text, text, text) from public;
revoke all on function public.bump_rate_limit(text, text, int, int, text, text, text) from anon, authenticated;
grant execute on function public.bump_rate_limit(text, text, int, int, text, text, text) to service_role;

-- Retention: visitors unseen for 90 days are deleted on the 1st of each month
-- at 03:00 UTC, so a row lives at most about four months after its last
-- visit. The privacy policy states this; change both together. The same job
-- removes any row whose id is not a hash, so a deployment still running the
-- pre-hash code can never leave raw addresses behind for long. Needs the
-- pg_cron extension (Supabase: Database > Extensions). cron.schedule with an
-- existing job name replaces that job, so re-running this is safe.
create extension if not exists pg_cron;
select cron.schedule(
  'purge-inactive-visitors',
  '0 3 1 * *',
  $$delete from public.rate_limits
    where last_seen < now() - interval '90 days'
       or ip !~ '^[0-9a-f]{32}$'$$
);
