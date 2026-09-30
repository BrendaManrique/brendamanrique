/**
 * Shared IP rate limiting for the public endpoints.
 *
 * Every limiter goes through the `bump_rate_limit` RPC (scripts/supabase-setup.sql),
 * which increments and reports in a single statement. The read-then-write shape
 * this replaces — SELECT the count, then POST count + 1 — let concurrent
 * requests read the same value and all pass, which is exactly the traffic
 * pattern a limiter exists to stop.
 *
 * `ip` is a cost control, not an identity. A VPN toggle resets it and an office
 * NAT shares it. It caps what one source can spend; it does not authenticate
 * anyone, and the limits are set with that in mind.
 */

const WINDOW_24H = 24 * 60 * 60

/**
 * Where a refused visitor is sent. Mirrored in src/site.ts for the bundle: the
 * edge functions cannot import the TS module, so the constant lives in both
 * places rather than being threaded through a build step for one string.
 */
export const BOOKING_URL = 'https://cal.com/brendamanrique'

/** Chat: 5 questions per IP per day, then the UI offers a call instead. */
export const CHAT_LIMIT = { scope: 'chat', max: 5, windowSeconds: WINDOW_24H }

/** Voice: unchanged at 3 Realtime sessions per IP per day. */
export const VOICE_LIMIT = { scope: 'voice', max: 3, windowSeconds: WINDOW_24H }

/**
 * Vercel sets x-forwarded-for on the edge; the client cannot forge the leftmost
 * entry through the proxy. `unknown` buckets every ip-less request together,
 * which is deliberate — it is a single shared budget, not an exemption.
 */
export function getClientIp(req) {
  const forwarded = req.headers.get('x-forwarded-for')
  if (forwarded) {
    const first = forwarded.split(',')[0]?.trim()
    if (first) return first
  }
  return req.headers.get('x-real-ip')?.trim() || 'unknown'
}

/**
 * Spend one unit of `scope` for `ip`.
 *
 * Returns { allowed, used, remaining, resetAt, enforced }. `enforced` is false
 * when the counter store could not be reached, so callers can tell "within
 * budget" apart from "not counted".
 *
 * Fails OPEN by default: Supabase also backs RAG, so an outage already degrades
 * the chat, and serving an uncapped answer beats serving an error page on the
 * portfolio's main showcase. Pass failOpen: false where an outage should close
 * the endpoint instead.
 */
export async function checkRateLimit({
  scope,
  ip,
  max,
  windowSeconds,
  failOpen = true,
}) {
  const url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!url || !key) {
    return unenforced({ allowed: failOpen, max })
  }

  try {
    const res = await fetch(`${url}/rest/v1/rpc/bump_rate_limit`, {
      method: 'POST',
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        p_scope: scope,
        p_ip: ip,
        p_window_seconds: windowSeconds,
        p_max: max,
      }),
      // An edge function blocked on Postgres is a worse outage than an uncounted
      // request, so the limiter gets a hard ceiling on how long it can stall.
      signal: AbortSignal.timeout(2000),
    })

    if (!res.ok) return unenforced({ allowed: failOpen, max })

    // The RPC returns setof, so PostgREST wraps it in an array.
    const rows = await res.json()
    const row = Array.isArray(rows) ? rows[0] : rows
    if (!row || typeof row.allowed !== 'boolean') {
      return unenforced({ allowed: failOpen, max })
    }

    return {
      allowed: row.allowed,
      used: row.used,
      remaining: row.remaining,
      resetAt: row.reset_at,
      enforced: true,
    }
  } catch {
    // Network error, timeout, or a missing function/table on a fresh database.
    return unenforced({ allowed: failOpen, max })
  }
}

function unenforced({ allowed, max }) {
  return { allowed, used: 0, remaining: max, resetAt: null, enforced: false }
}

/**
 * Standard headers so the client can render "2 questions left" without waiting
 * to be refused, and so a 429 says when to come back.
 */
export function rateLimitHeaders(result, max) {
  const headers = {
    'X-RateLimit-Limit': String(max),
    'X-RateLimit-Remaining': String(result.remaining),
  }
  if (result.resetAt) {
    headers['X-RateLimit-Reset'] = String(Math.floor(new Date(result.resetAt).getTime() / 1000))
  }
  return headers
}
