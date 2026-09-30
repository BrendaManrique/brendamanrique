/**
 * Analytics consent, shared by the banner, the footer "Privacy choices" link
 * and the <Analytics /> gate in main.tsx.
 *
 * Vercel Web Analytics sets no cookies and keeps no persistent visitor ID, so
 * the rules differ by where the visitor is:
 * - EU/EEA, UK and Switzerland (ePrivacy/GDPR): opt-in. Nothing is sent until
 *   the visitor accepts.
 * - Everywhere else (US state laws, LGPD, PIPEDA...): on by default, with a
 *   one-time notice and an opt-out.
 * - Global Privacy Control or Do Not Track counts as an opt-out anywhere,
 *   unless the visitor later accepts explicitly.
 *
 * Region comes from the browser's time zone. It is a heuristic, but it errs in
 * the safe direction: anyone on a European clock gets opt-in.
 */

export type ConsentChoice = 'granted' | 'denied'

export interface ConsentState {
  /** What the visitor explicitly picked, or null if they never answered. */
  choice: ConsentChoice | null
  /** Whether analytics may run right now. */
  allowed: boolean
  /** Opt-in region: no analytics until the visitor accepts. */
  requiresOptIn: boolean
  /** The browser sent Global Privacy Control or Do Not Track. */
  optOutSignal: boolean
  /** Show the banner: first visit, or reopened from "Privacy choices". */
  bannerOpen: boolean
}

const STORAGE_KEY = 'privacy-consent'

/** Time zones whose visitors fall under GDPR/ePrivacy consent rules. */
const OPT_IN_ZONE_PREFIXES = ['Europe/']
const OPT_IN_ZONES = new Set([
  'Atlantic/Azores', 'Atlantic/Madeira', 'Atlantic/Canary', 'Atlantic/Reykjavik',
  'Atlantic/Faroe', 'Arctic/Longyearbyen', 'Asia/Nicosia', 'Asia/Famagusta',
])

function detectOptInRegion(): boolean {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone ?? ''
    return OPT_IN_ZONES.has(tz) || OPT_IN_ZONE_PREFIXES.some(p => tz.startsWith(p))
  } catch {
    return true // unknown: take the stricter rule
  }
}

function detectOptOutSignal(): boolean {
  const nav = navigator as Navigator & { globalPrivacyControl?: boolean }
  return nav.globalPrivacyControl === true || nav.doNotTrack === '1'
}

function readChoice(): ConsentChoice | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const { choice } = JSON.parse(raw) as { choice?: string }
    return choice === 'granted' || choice === 'denied' ? choice : null
  } catch {
    return null
  }
}

function compute(choice: ConsentChoice | null, bannerOpen: boolean): ConsentState {
  const requiresOptIn = detectOptInRegion()
  const optOutSignal = detectOptOutSignal()
  const allowed = choice ? choice === 'granted' : !requiresOptIn && !optOutSignal
  return { choice, allowed, requiresOptIn, optOutSignal, bannerOpen }
}

// Before hydration (and during prerender) nothing is allowed and no banner shows.
const SERVER_STATE: ConsentState = {
  choice: null, allowed: false, requiresOptIn: true, optOutSignal: false, bannerOpen: false,
}

let state: ConsentState | null = null
const listeners = new Set<() => void>()

function emit(next: ConsentState) {
  state = next
  listeners.forEach(l => l())
}

export function getConsent(): ConsentState {
  if (typeof window === 'undefined') return SERVER_STATE
  if (!state) {
    const choice = readChoice()
    // First visit: ask. A browser already sending an opt-out signal gets no
    // banner outside opt-in regions; its answer is already "no".
    const s = compute(choice, false)
    state = { ...s, bannerOpen: choice === null && (s.requiresOptIn || !s.optOutSignal) }
  }
  return state
}

export function getServerConsent(): ConsentState {
  return SERVER_STATE
}

export function subscribeConsent(listener: () => void): () => void {
  listeners.add(listener)
  // Keep tabs in sync when the choice changes in another one.
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) emit(compute(readChoice(), getConsent().bannerOpen))
  }
  window.addEventListener('storage', onStorage)
  return () => {
    listeners.delete(listener)
    window.removeEventListener('storage', onStorage)
  }
}

export function setConsent(choice: ConsentChoice) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ choice, at: new Date().toISOString() }))
  } catch {
    // Storage blocked: the choice holds for this page view only.
  }
  emit(compute(choice, false))
}

/** Reopen the banner so the visitor can change their answer. */
export function openPrivacyChoices() {
  emit({ ...getConsent(), bannerOpen: true })
}

export function closePrivacyChoices() {
  emit({ ...getConsent(), bannerOpen: false })
}
