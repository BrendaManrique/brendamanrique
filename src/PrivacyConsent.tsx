import { useSyncExternalStore } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { X } from 'lucide-react'
import { Analytics } from '@vercel/analytics/react'
import { getEsSlugs } from './articles/registry'
import {
  closePrivacyChoices, getConsent, getServerConsent, setConsent, subscribeConsent,
} from './privacy-consent'

const copy = {
  es: {
    title: 'Tu privacidad',
    optIn: 'Este sitio quiere medir las visitas con Vercel Web Analytics: sin cookies, sin perfiles y sin datos personales guardados. Solo se activa si aceptas.',
    notice: 'Este sitio mide las visitas con Vercel Web Analytics: sin cookies, sin perfiles y sin datos personales guardados. Puedes desactivarlo cuando quieras.',
    signal: 'Tu navegador envía una señal de exclusión (GPC/DNT), así que la medición está desactivada.',
    accept: 'Aceptar',
    decline: 'Rechazar',
    more: 'Política de privacidad',
    close: 'Cerrar',
    current: { granted: 'Estado actual: medición activada.', denied: 'Estado actual: medición desactivada.' },
    privacyPath: '/privacidad',
  },
  en: {
    title: 'Your privacy',
    optIn: "This site would like to count visits with Vercel Web Analytics: no cookies, no profiles, no personal data stored. It only runs if you accept.",
    notice: 'This site counts visits with Vercel Web Analytics: no cookies, no profiles, no personal data stored. You can switch it off any time.',
    signal: 'Your browser sends an opt-out signal (GPC/DNT), so analytics are off.',
    accept: 'Accept',
    decline: 'Decline',
    more: 'Privacy policy',
    close: 'Close',
    current: { granted: 'Current setting: analytics on.', denied: 'Current setting: analytics off.' },
    privacyPath: '/privacy',
  },
} as const

/** Read at send time, so a later "Decline" stops an already-loaded script. */
const dropUnlessAllowed = <T,>(event: T): T | null => (getConsent().allowed ? event : null)

export default function PrivacyConsent() {
  const consent = useSyncExternalStore(subscribeConsent, getConsent, getServerConsent)
  const { pathname } = useLocation()

  const isOps = pathname.startsWith('/ops')
  const lang = getEsSlugs().has(pathname) ? 'es' : 'en'
  const t = copy[lang]

  const status = consent.choice
    ? t.current[consent.choice]
    : consent.optOutSignal ? t.signal : null

  return (
    <>
      {consent.allowed && <Analytics beforeSend={dropUnlessAllowed} />}

      <AnimatePresence>
        {consent.bannerOpen && !isOps && (
          <motion.section
            role="region"
            aria-label={t.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.2 }}
            // Sits above the music (bottom-left) and chat (bottom-right)
            // buttons, and under an open chat panel.
            className="fixed z-40 left-4 right-4 sm:right-auto sm:max-w-sm bg-card text-card-foreground border border-border/60 rounded-2xl shadow-xl p-4"
            style={{
              bottom: 'calc(max(1.5rem, env(safe-area-inset-bottom, 0px) + 0.5rem) + 4.5rem)',
              marginLeft: 'env(safe-area-inset-left, 0px)',
            }}
          >
            <div className="flex items-start justify-between gap-3 mb-1.5">
              <h2 className="font-display text-sm font-semibold text-foreground">{t.title}</h2>
              {consent.choice && (
                <button
                  type="button"
                  onClick={closePrivacyChoices}
                  aria-label={t.close}
                  className="-m-1 p-1 rounded-md text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-4 h-4" aria-hidden="true" />
                </button>
              )}
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {consent.requiresOptIn ? t.optIn : t.notice}
            </p>
            {status && <p className="text-xs text-muted-foreground mt-2">{status}</p>}

            <div className="flex items-center gap-2 mt-3">
              {/* Equal weight on purpose: declining must be as easy as accepting. */}
              <button
                type="button"
                onClick={() => setConsent('denied')}
                className="flex-1 px-3 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors"
              >
                {t.decline}
              </button>
              <button
                type="button"
                onClick={() => setConsent('granted')}
                className="flex-1 px-3 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                {t.accept}
              </button>
            </div>

            <Link
              to={t.privacyPath}
              className="inline-block mt-2.5 text-xs text-muted-foreground underline underline-offset-2 hover:text-primary"
            >
              {t.more}
            </Link>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  )
}
