import type { ComponentType } from 'react'
import { SITE_URL } from '../site'

export interface ArticleSeo {
  title: string
  description: string
}

export interface ArticleSeoMeta {
  datePublished: string
  dateModified: string
  keywords: string[]
  articleType: 'Article' | 'TechArticle'
  articleTags: string
  images: string[]
  about: Array<Record<string, string>>
  extra?: Record<string, string>
  citation?: Array<{ '@type': string; name: string; url: string; sameAs?: string }>
  isBasedOn?: Record<string, unknown>
  mentions?: Array<Record<string, string | string[] | Record<string, string>>>
  discussionUrl?: string
  relatedLink?: string
  communityUrl?: string
  video?: Record<string, unknown>
  subjectOf?: Record<string, unknown>
}

export interface ArticleConfig {
  id: string
  slugs: { es: string; en: string }
  titles: { es: string; en: string }
  seo: { es: ArticleSeo; en: ArticleSeo }
  sectionLabels: { es: Record<string, string>; en: Record<string, string> }
  type: 'collab' | 'case-study' | 'bridge'
  /** Absolute OG image URL for prerender (social cards: LinkedIn, Twitter) */
  ogImage?: string
  /** Hero image path for JSON-LD / GEO (what AI search engines see). Falls back to ogImage if not set. */
  heroImage?: string
  component: () => Promise<{ default: ComponentType<{ lang: 'es' | 'en' }> }>
  /** x-default hreflang slug (defaults to ES slug) */
  xDefaultSlug?: string
  /** Whether this article is ready for RAG indexing (default: false) */
  ragReady?: boolean
  /** Path to i18n content file relative to project root (required when ragReady=true) */
  i18nFile?: string
  /** SEO metadata for prerender JSON-LD + article meta tags */
  seoMeta?: ArticleSeoMeta
}

const OG_IMAGE = `${SITE_URL}/og-image.png`

export const articleRegistry: ArticleConfig[] = [
  {
    id: 'moodys',
    slugs: { es: 'moodys', en: 'moodys-credit-intelligence' },
    titles: { es: "Moody's Analytics", en: "Moody's Analytics" },
    seo: {
      es: {
        title: "Inteligencia de crédito a escala en Moody's",
        description:
          "Case study sanitizado de analítica de crédito full-stack en Moody's: overlays cualitativos, API con estado y lógica de decisión de modelos.",
      },
      en: {
        title: "Credit intelligence at scale at Moody's",
        description:
          "A sanitized case study of full-stack credit analytics: qualitative overlays, stateful API design and credit-model decision logic.",
      },
    },
    sectionLabels: {
      es: {
        role: 'El Rol',
        overlay: 'Overlay Cualitativo',
        'api-v2': 'API con Estado',
        'model-logic': 'Lógica del Modelo',
        refresh: 'Refresco Programado',
        'full-stack': 'Full-Stack',
        lessons: 'Lecciones',
        faq: 'FAQ',
      },
      en: {
        role: 'The Role',
        overlay: 'Qualitative Overlay',
        'api-v2': 'Stateful API',
        'model-logic': 'Model Logic',
        refresh: 'Scheduled Refresh',
        'full-stack': 'Full-Stack',
        lessons: 'Lessons',
        faq: 'FAQ',
      },
    },
    type: 'case-study',
    ragReady: true,
    i18nFile: 'src/articles/moodys-i18n.ts',
    ogImage: OG_IMAGE,
    component: () => import('../Moodys.tsx'),
    seoMeta: {
      datePublished: '2026-09-01',
      dateModified: '2026-09-01',
      keywords: ['credit analytics', 'probability of default', 'EDF-X', 'scorecard', 'qualitative overlay', 'stateful API', 'batching and concurrency', 'PostgreSQL', 'AWS', 'financial systems engineering', 'Moody\'s Analytics'],
      articleType: 'TechArticle',
      articleTags: 'credit analytics,probability of default,stateful API,AWS,PostgreSQL,full-stack',
      images: [OG_IMAGE],
      about: [
        { '@type': 'Thing', name: 'Credit risk analytics' },
        { '@type': 'Thing', name: 'Probability of default' },
        { '@type': 'Organization', name: "Moody's Analytics", url: 'https://www.moodys.com' },
      ],
      extra: { proficiencyLevel: 'Expert', dependencies: 'AWS, S3, PostgreSQL, internal shared data services' },
    },
  },
  {
    id: 'financial-systems',
    slugs: { es: 'sistemas-financieros', en: 'financial-systems' },
    titles: { es: 'Sistemas financieros', en: 'Financial systems' },
    seo: {
      es: {
        title: 'Sistemas financieros antes del capítulo de IA',
        description:
          'Derivados y riesgo en JPMorgan, un terminal de mercado desde cero en Money.Net, y los hábitos de fiabilidad que hoy moldean los agentes.',
      },
      en: {
        title: 'Financial systems before the AI chapter',
        description:
          'JPMorgan derivatives and risk infrastructure, a Money.Net terminal built from scratch, and the reliability habits behind the agent work.',
      },
    },
    sectionLabels: {
      es: {
        jpmorgan: 'JPMorgan',
        moneynet: 'Money.Net',
        'earlier-work': 'Antes de NY',
        'why-it-matters': 'Por Qué Importa',
        faq: 'FAQ',
      },
      en: {
        jpmorgan: 'JPMorgan',
        moneynet: 'Money.Net',
        'earlier-work': 'Before New York',
        'why-it-matters': 'Why It Matters',
        faq: 'FAQ',
      },
    },
    type: 'case-study',
    ragReady: true,
    i18nFile: 'src/articles/financial-systems-i18n.ts',
    ogImage: OG_IMAGE,
    component: () => import('../FinancialSystems.tsx'),
    seoMeta: {
      datePublished: '2026-09-01',
      dateModified: '2026-09-01',
      keywords: ['derivatives portfolio management', 'risk platform', 'Athena JPMorgan', 'market data terminal', 'WebSockets', 'gRPC', 'microservices', 'ReactJS', 'Java 8', 'XMPP', 'core banking', 'GeneXus'],
      articleType: 'TechArticle',
      articleTags: 'JPMorgan,Money.Net,derivatives,risk,real-time systems,full-stack',
      images: [OG_IMAGE],
      about: [
        { '@type': 'Thing', name: 'Financial systems engineering' },
        { '@type': 'Thing', name: 'Real-time market data' },
      ],
      extra: { proficiencyLevel: 'Expert', dependencies: 'Java, JavaScript, Python, WebSockets, gRPC' },
    },
  },
  {
    id: 'consulting',
    slugs: { es: 'consultoria-ia-agentica', en: 'agentic-ai-consulting' },
    titles: { es: 'Consultoría IA agéntica', en: 'Agentic AI consulting' },
    seo: {
      es: {
        title: 'Construir una consultoría en IA agéntica',
        description:
          'Build log: de un año de trabajo autodirigido a un modelo de entrega mantenible para agentes de empresa. Deliberadamente pre-escala.',
      },
      en: {
        title: 'Building an agentic AI consulting practice',
        description:
          'A build log: turning self-directed AI work into a supportable delivery model for company agents. Deliberately pre-scale.',
      },
    },
    sectionLabels: {
      es: {
        why: 'Por Qué',
        'the-problems': 'Los Problemas',
        foundation: 'La Base',
        'delivery-model': 'Modelo de Entrega',
        'truth-boundary': 'Límite de Verdad',
        next: 'Siguiente',
        faq: 'FAQ',
      },
      en: {
        why: 'Why',
        'the-problems': 'The Problems',
        foundation: 'Foundation',
        'delivery-model': 'Delivery Model',
        'truth-boundary': 'Truth Boundary',
        next: 'Next',
        faq: 'FAQ',
      },
    },
    type: 'case-study',
    ragReady: true,
    i18nFile: 'src/articles/consulting-i18n.ts',
    ogImage: OG_IMAGE,
    component: () => import('../Consulting.tsx'),
    seoMeta: {
      datePublished: '2026-09-01',
      dateModified: '2026-09-01',
      keywords: ['agentic AI', 'AI consulting practice', 'agent deployment', 'FastAPI agent service', 'human in the loop', 'HITL', 'agent observability', 'Docker', 'PostgreSQL', 'tool use', 'build phase'],
      articleType: 'TechArticle',
      articleTags: 'build log,agentic AI,FastAPI,deployment,HITL',
      images: [OG_IMAGE],
      about: [
        { '@type': 'Thing', name: 'Agentic AI' },
        { '@type': 'Thing', name: 'AI agent deployment' },
      ],
      extra: { proficiencyLevel: 'Advanced', dependencies: 'Python, FastAPI, Docker, PostgreSQL' },
    },
  },
  {
    id: 'portfolio-agent',
    slugs: { es: 'agente-de-portafolio', en: 'portfolio-chat-agent' },
    titles: { es: 'Agente de portafolio', en: 'Portfolio chat agent' },
    seo: {
      es: {
        title: 'La burbuja de chat es lo menos interesante',
        description:
          'Un agente de portafolio que representa mi trabajo sin inventar experiencia: RAG híbrido, evals, guardrails y observabilidad.',
      },
      en: {
        title: 'The chat bubble is the least interesting part',
        description:
          'A portfolio agent that represents my work without inventing experience: hybrid RAG, evals, guardrails and observability.',
      },
    },
    sectionLabels: {
      es: {
        'the-hard-part': 'La Parte Difícil',
        'truth-layer': 'Capa de Verdad',
        rag: 'RAG',
        tools: 'Herramientas',
        adversarial: 'Superficie Adversarial',
        evals: 'Evals',
        observability: 'Observabilidad',
        memory: 'Memoria',
        voice: 'Voz',
        architecture: 'Arquitectura',
        done: '«Terminado»',
        shipped: 'Qué Se Entregó',
        faq: 'FAQ',
      },
      en: {
        'the-hard-part': 'The Hard Part',
        'truth-layer': 'Truth Layer',
        rag: 'RAG',
        tools: 'Tools',
        adversarial: 'Adversarial Surface',
        evals: 'Evals',
        observability: 'Observability',
        memory: 'Memory',
        voice: 'Voice',
        architecture: 'Architecture',
        done: 'What "Done" Means',
        shipped: 'What Shipped',
        faq: 'FAQ',
      },
    },
    type: 'case-study',
    ragReady: true,
    i18nFile: 'src/articles/portfolio-agent-i18n.ts',
    ogImage: OG_IMAGE,
    component: () => import('../PortfolioAgent.tsx'),
    seoMeta: {
      datePublished: '2026-09-01',
      dateModified: '2026-09-01',
      keywords: ['portfolio chat agent', 'agentic RAG', 'hybrid retrieval', 'pgvector', 'reciprocal rank fusion', 'LLM evaluation', 'guardrails', 'prompt injection', 'observability', 'Langfuse', 'CI evals', 'groundedness'],
      articleType: 'TechArticle',
      articleTags: 'agentic RAG,evals,guardrails,observability,architecture',
      images: [OG_IMAGE],
      about: [
        { '@type': 'Thing', name: 'Retrieval-Augmented Generation' },
        { '@type': 'Thing', name: 'LLM evaluation' },
        { '@type': 'SoftwareApplication', name: 'Langfuse', url: 'https://langfuse.com', applicationCategory: 'LLM Observability' },
        { '@type': 'SoftwareApplication', name: 'Supabase', url: 'https://supabase.com', applicationCategory: 'Database' },
      ],
      extra: { proficiencyLevel: 'Expert', dependencies: 'Claude, Supabase (Postgres + pgvector), Langfuse, Vercel, GitHub Actions' },
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Langfuse', url: 'https://langfuse.com' },
        { '@type': 'SoftwareApplication', name: 'Supabase', url: 'https://supabase.com' },
        { '@type': 'SoftwareApplication', name: 'Vercel', url: 'https://vercel.com' },
      ],
    },
  },
  {
    id: 'casicornio',
    slugs: { es: 'casicornio', en: 'en/casicornio' },
    titles: { es: 'Casicornio', en: 'Casicornio' },
    seo: {
      es: {
        title: 'Casicornio: aprender distribución operando',
        description:
          'Por qué llevo una publicación en español sobre fundadores y tecnología, y qué quiero automatizar sin automatizar la voz.',
      },
      en: {
        title: 'Casicornio: learning distribution by doing',
        description:
          'Why I run a Spanish-language founder and technology publication, and what I want to automate without automating the voice.',
      },
    },
    sectionLabels: {
      es: {
        'what-it-is': 'Qué Es',
        why: 'Por Qué',
        system: 'El Sistema',
        status: 'Estado',
        faq: 'FAQ',
      },
      en: {
        'what-it-is': 'What It Is',
        why: 'Why',
        system: 'The System',
        status: 'Status',
        faq: 'FAQ',
      },
    },
    type: 'case-study',
    ragReady: true,
    i18nFile: 'src/articles/casicornio-i18n.ts',
    ogImage: OG_IMAGE,
    component: () => import('../Casicornio.tsx'),
    xDefaultSlug: 'casicornio',
    seoMeta: {
      datePublished: '2026-09-01',
      dateModified: '2026-09-01',
      keywords: ['Casicornio', 'founder media', 'Spanish-language technology publication', 'content operations', 'editorial systems', 'distribution', 'media experiment', 'publishing workflow', 'audience building', 'positioning'],
      articleType: 'Article',
      articleTags: 'Casicornio,media ops,founders,automation',
      images: [OG_IMAGE],
      about: [
        { '@type': 'Thing', name: 'Content operations' },
        { '@type': 'Thing', name: 'Independent media' },
      ],
    },
  },
  {
    id: 'invip',
    slugs: { es: 'invip', en: 'invip-accessibility-ai' },
    titles: { es: 'Invip', en: 'Invip' },
    seo: {
      es: {
        title: 'Invip — IA para accesibilidad visual',
        description:
          'Proyecto premiado en NYU y empresa en EE. UU.: un asistente de audio para personas con discapacidad visual, antes de la IA conversacional.',
      },
      en: {
        title: 'Invip — AI for visual accessibility',
        description:
          'An NYU award-winning project and U.S.-incorporated company: an audio assistant for visually impaired people, built before conversational AI.',
      },
    },
    sectionLabels: {
      es: {
        'the-problem': 'El Problema',
        product: 'Producto',
        today: 'Hoy',
        faq: 'FAQ',
      },
      en: {
        'the-problem': 'The Problem',
        product: 'Product',
        today: 'Today',
        faq: 'FAQ',
      },
    },
    type: 'case-study',
    ragReady: true,
    i18nFile: 'src/articles/invip-i18n.ts',
    ogImage: OG_IMAGE,
    component: () => import('../Invip.tsx'),
    seoMeta: {
      datePublished: '2026-09-01',
      dateModified: '2026-09-01',
      keywords: ['assistive technology', 'visual accessibility', 'audio assistant', 'speech interface', 'NYU startup', 'multimodal AI', 'accessibility AI', 'visually impaired', 'voice interaction', 'co-founder CTO'],
      articleType: 'Article',
      articleTags: 'accessibility,assistive technology,speech interface,NYU',
      images: [OG_IMAGE],
      about: [
        { '@type': 'Thing', name: 'Assistive technology' },
        { '@type': 'CollegeOrUniversity', name: 'New York University', url: 'https://www.nyu.edu' },
      ],
    },
  },
  {
    id: 'fractal',
    slugs: { es: 'dimension-fractal', en: 'fractal-dimension' },
    titles: { es: 'Dimensión fractal', en: 'Fractal dimension' },
    seo: {
      es: {
        title: 'Dimensión fractal — investigación de 2010',
        description:
          'Geometría fractal y curvas de Koch sobre la irregularidad de lunares. Investigación histórica: no es un diagnóstico clínico validado.',
      },
      en: {
        title: 'Fractal dimension — 2010 research',
        description:
          'Fractal geometry and Koch-curve measurements on mole irregularity. Historical research only — not a validated clinical diagnostic system.',
      },
    },
    sectionLabels: {
      es: {
        disclaimer: 'Aviso',
        idea: 'La Idea',
        award: 'El Premio',
        'why-it-stays': 'Por Qué Sigue',
        faq: 'FAQ',
      },
      en: {
        disclaimer: 'Disclaimer',
        idea: 'The Idea',
        award: 'The Award',
        'why-it-stays': 'Why It Stays',
        faq: 'FAQ',
      },
    },
    type: 'case-study',
    ragReady: true,
    i18nFile: 'src/articles/fractal-i18n.ts',
    ogImage: OG_IMAGE,
    component: () => import('../Fractal.tsx'),
    seoMeta: {
      datePublished: '2026-09-01',
      dateModified: '2026-09-01',
      keywords: ['fractal dimension', 'Koch curve', 'boundary irregularity', 'shape classification', 'AGSE 2010', 'undergraduate research', 'computational intelligence', 'fractal geometry', 'poster contest', 'historical research'],
      articleType: 'Article',
      articleTags: 'fractal geometry,research,classification,historical',
      images: [OG_IMAGE],
      about: [
        { '@type': 'Thing', name: 'Fractal dimension' },
        { '@type': 'Thing', name: 'Computational intelligence' },
      ],
      extra: {
        disambiguatingDescription:
          'Historical undergraduate research project from 2010. Not a validated clinical diagnostic system and never deployed for diagnosis.',
      },
    },
  },
  {
    id: 'early-projects',
    slugs: { es: 'proyectos-iniciales', en: 'early-projects' },
    titles: { es: 'Proyectos iniciales', en: 'Early projects' },
    seo: {
      es: {
        title: 'Archivo de proyectos iniciales',
        description:
          'Tesis de framework Android con mención honorífica, el concepto Aquolity, un experimento VR para Project Tango y un marketplace blockchain.',
      },
      en: {
        title: 'Early projects archive',
        description:
          'An Android framework thesis with honorable mention, the Aquolity water-quality concept, a Project Tango VR experiment and a blockchain marketplace.',
      },
    },
    sectionLabels: {
      es: {
        android: 'Tesis Android',
        aquolity: 'Aquolity',
        experiments: 'Experimentos',
        portfolios: 'Portafolios Antiguos',
        'why-archive': 'Por Qué el Archivo',
        faq: 'FAQ',
      },
      en: {
        android: 'Android Thesis',
        aquolity: 'Aquolity',
        experiments: 'Experiments',
        portfolios: 'Older Portfolios',
        'why-archive': 'Why an Archive',
        faq: 'FAQ',
      },
    },
    type: 'case-study',
    ragReady: true,
    i18nFile: 'src/articles/early-projects-i18n.ts',
    ogImage: OG_IMAGE,
    component: () => import('../EarlyProjects.tsx'),
    seoMeta: {
      datePublished: '2026-09-01',
      dateModified: '2026-09-01',
      keywords: ['Android framework', 'data acquisition', 'undergraduate thesis', 'Aquolity', 'water quality crowdsourcing', 'Project Tango', 'blockchain marketplace', 'NFT minting', 'dynamic UI components', 'smart contracts'],
      articleType: 'Article',
      articleTags: 'archive,thesis,Android,social tech,experiments',
      images: [OG_IMAGE],
      about: [
        { '@type': 'Thing', name: 'Mobile data acquisition' },
        { '@type': 'Thing', name: 'Crowdsourcing' },
      ],
    },
  },
  {
    id: 'story',
    slugs: { es: 'historia', en: 'story' },
    titles: { es: 'Historia', en: 'Story' },
    seo: {
      es: {
        title: 'Este capítulo no es «no pasó nada».',
        description:
          'Quince años de trabajo en sistemas y, en 2025, una salida deliberada del camino empleado para aprender el nuevo stack de IA construyendo con él.',
      },
      en: {
        title: 'This chapter is not "nothing happened."',
        description:
          'Fifteen years of systems work, then a deliberate step away from the employed path in 2025 to learn the new AI stack by building with it.',
      },
    },
    sectionLabels: {
      es: {
        'fifteen-years': 'Más de 15 Años',
        'the-turn': 'Dejar Moody\'s',
        'build-phase': 'Fase de Construcción',
        now: 'Ahora',
        faq: 'FAQ',
      },
      en: {
        'fifteen-years': '15+ Years',
        'the-turn': 'Leaving Moody\'s',
        'build-phase': 'The Build Phase',
        now: 'Now',
        faq: 'FAQ',
      },
    },
    type: 'case-study',
    ragReady: true,
    i18nFile: 'src/story-i18n.ts',
    ogImage: OG_IMAGE,
    component: () => import('../Story.tsx'),
    xDefaultSlug: 'historia',
    seoMeta: {
      datePublished: '2026-09-01',
      dateModified: '2026-09-01',
      keywords: ['build phase', 'career transition', 'agentic AI', 'leaving Moody\'s', 'pre-scale', 'systems engineering career', 'intellectual honesty', 'build and validation', 'independent engineer', 'portfolio honesty'],
      articleType: 'Article',
      articleTags: 'story,build phase,career,agentic AI',
      images: [OG_IMAGE],
      about: [
        { '@type': 'Person', name: 'Brenda Manrique', url: `${SITE_URL}/about` },
        { '@type': 'Thing', name: 'Agentic AI' },
      ],
    },
  },
]

// Derived maps for GlobalNav and routing
export function getAltPaths(): Record<string, string> {
  const map: Record<string, string> = {
    '/': '/en',
    '/en': '/',
    '/sobre-mi': '/about',
    '/about': '/sobre-mi',
    '/privacidad': '/privacy',
    '/privacy': '/privacidad',
  }
  for (const article of articleRegistry) {
    map[`/${article.slugs.es}`] = `/${article.slugs.en}`
    map[`/${article.slugs.en}`] = `/${article.slugs.es}`
  }
  return map
}

export function getPageTitles(): Record<string, string> {
  const map: Record<string, string> = {
    '/': 'Portfolio de Brenda',
    '/en': "Brenda's Portfolio",
    '/sobre-mi': 'Sobre Mí',
    '/about': 'About',
  }
  for (const article of articleRegistry) {
    map[`/${article.slugs.es}`] = article.titles.es
    map[`/${article.slugs.en}`] = article.titles.en
  }
  return map
}

export function getSectionLabels(): Record<string, Record<string, string>> {
  const map: Record<string, Record<string, string>> = {}
  for (const article of articleRegistry) {
    map[`/${article.slugs.es}`] = article.sectionLabels.es
    map[`/${article.slugs.en}`] = article.sectionLabels.en
  }
  return map
}

/** All ES slugs (for lang detection: if pathname matches an ES slug → lang is 'es') */
export function getEsSlugs(): Set<string> {
  const slugs = new Set<string>(['/', '/privacidad', '/sobre-mi'])
  for (const article of articleRegistry) {
    slugs.add(`/${article.slugs.es}`)
  }
  return slugs
}
