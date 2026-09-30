// ---------------------------------------------------------------------------
// Offline answer — the last rung of the chat's fallback ladder
//
// Reached only when every model call failed (Sonnet, its retry, the no-RAG
// fallback, and Haiku). A visitor — often a recruiter or interviewer — still
// gets something useful instead of an error: a short factual summary, the case
// studies that match their question (sent as source badges), and direct
// contact links.
//
// Everything here is static and taken from the site's own copy (public/llms.txt,
// src/articles/registry.ts), so it cannot hallucinate. Internal pages are
// linked only through the source badges: the chat's markdown renderer turns
// relative links into https:// URLs, which would break them.
// ---------------------------------------------------------------------------

import { ARTICLE_ROUTES, detectMentionedArticles } from './rag.js'

// Mirrored in src/site.ts — edge functions cannot import the TS module.
const LINKEDIN_URL = 'https://www.linkedin.com/in/brendastephanie/'
const BOOKING_URL = 'https://cal.com/brendamanrique'

// Shown when the question matches no article: the strongest overview first.
const FEATURED_ARTICLES = ['moodys', 'portfolio-agent', 'financial-systems']

const TEXT = {
  en: {
    intro: 'The live AI is taking a short break, so here is the quick version instead.',
    bio: "Brenda Manrique is a senior software engineer based in Berlin. She builds useful software for complex systems — financial platforms, credit analytics and AI agents — and previously worked at Moody's Analytics, JPMorgan Asset Management and Money.Net. She is open to senior software engineering and applied-AI roles.",
    matched: 'The case studies below cover your question in depth.',
    featured: 'The case studies below are a good place to start.',
    contact: `To talk to Brenda directly: [LinkedIn](${LINKEDIN_URL}) or [book a call](${BOOKING_URL}).`,
  },
  es: {
    intro: 'La IA está haciendo una pausa breve, así que aquí va la versión rápida.',
    bio: "Brenda Manrique es ingeniera de software senior en Berlín. Construye software útil para sistemas complejos — plataformas financieras, analítica de crédito y agentes de IA — y antes trabajó en Moody's Analytics, JPMorgan Asset Management y Money.Net. Está abierta a roles senior de ingeniería de software e IA aplicada.",
    matched: 'Los casos de estudio de abajo responden tu pregunta en detalle.',
    featured: 'Los casos de estudio de abajo son un buen punto de partida.',
    contact: `Para hablar con Brenda directamente: [LinkedIn](${LINKEDIN_URL}) o [agenda una llamada](${BOOKING_URL}).`,
  },
}

export function articleSource(articleId) {
  const routes = ARTICLE_ROUTES[articleId]
  if (!routes) return null
  return {
    article_id: articleId,
    section_id: 'main',
    section_anchor: '',
    page_path_es: routes.page_path_es,
    page_path_en: routes.page_path_en,
    article_slug_es: routes.page_path_es.slice(1),
    article_slug_en: routes.page_path_en.slice(1),
  }
}

/**
 * @param {object} opts
 * @param {'en'|'es'} opts.lang
 * @param {string} opts.question      the visitor's last message
 * @param {Array}  [opts.sources]     sources retrieval already found, if it ran
 * @returns {{ text: string, sources: Array }}
 */
export function buildOfflineAnswer({ lang, question, sources = [] }) {
  const t = lang === 'en' ? TEXT.en : TEXT.es

  let matched = sources.filter(s => s.article_id !== 'home').slice(0, 3)
  if (matched.length === 0) matched = detectMentionedArticles(question || '')

  const finalSources = matched.length > 0
    ? matched
    : FEATURED_ARTICLES.map(articleSource).filter(Boolean)

  const text = [
    t.intro,
    t.bio,
    matched.length > 0 ? t.matched : t.featured,
    t.contact,
  ].join('\n\n')

  return { text, sources: finalSources }
}
