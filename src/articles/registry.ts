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
        title: "Reglas de crédito como software en Moody's",
        description:
          "Predictive Analytics: reglas de selección de modelo en Python, overlays cualitativos y APIs con estado para procesos largos.",
      },
      en: {
        title: "Turning credit-domain rules into software",
        description:
          "Predictive Analytics: model-selection rules in Python, qualitative overlays and stateful API design for long-running analytics.",
      },
    },
    sectionLabels: {
      es: {
        role: 'El Rol',
        'model-logic': 'Reglas de Dominio',
        overlay: 'Overlay Cualitativo',
        'api-v2': 'APIs con Estado',
        lessons: 'Lecciones',
        faq: 'FAQ',
      },
      en: {
        role: 'The Role',
        'model-logic': 'Domain Rules',
        overlay: 'Qualitative Overlay',
        'api-v2': 'Stateful APIs',
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
      dateModified: '2026-09-30',
      keywords: ['credit analytics', 'probability of default', 'EDF-X', 'Risk Scorecard', 'qualitative overlay', 'stateful API', 'Python', 'business rules', 'financial systems engineering', 'Moody\'s Analytics'],
      articleType: 'TechArticle',
      articleTags: 'credit analytics,probability of default,stateful API,Python,product engineering',
      images: [OG_IMAGE],
      about: [
        { '@type': 'Thing', name: 'Credit risk analytics' },
        { '@type': 'Thing', name: 'Probability of default' },
        { '@type': 'Organization', name: "Moody's Analytics", url: 'https://www.moodys.com' },
      ],
      extra: { proficiencyLevel: 'Advanced', dependencies: 'Python, TypeScript, Angular' },
    },
  },
  {
    id: 'financial-systems',
    slugs: { es: 'sistemas-financieros', en: 'financial-systems' },
    titles: { es: 'Sistemas financieros', en: 'Financial systems' },
    seo: {
      es: {
        title: 'Sistemas financieros: JPMorgan y Money.Net',
        description:
          'Liderar la ingeniería frontend sobre Athena en JPMorgan, y ayudar a construir el terminal de mercados de Money.Net desde cero.',
      },
      en: {
        title: 'Financial systems: JPMorgan and Money.Net',
        description:
          'Leading frontend engineering on Athena at JPMorgan, and helping build the Money.Net markets terminal from the ground up.',
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
      dateModified: '2026-09-30',
      keywords: ['derivatives portfolio management', 'risk platform', 'Athena JPMorgan', 'market data terminal', 'WebSockets', 'gRPC', 'microservices', 'ReactJS', 'Java 8', 'XMPP', 'core banking', 'GeneXus'],
      articleType: 'TechArticle',
      articleTags: 'JPMorgan,Money.Net,derivatives,risk,real-time systems,frontend',
      images: [OG_IMAGE],
      about: [
        { '@type': 'Thing', name: 'Financial systems engineering' },
        { '@type': 'Thing', name: 'Real-time market data' },
      ],
      extra: { proficiencyLevel: 'Advanced', dependencies: 'Java, JavaScript, TypeScript, Python, C#, WebSockets, gRPC' },
    },
  },
  {
    id: 'consulting',
    slugs: { es: 'ia-aplicada', en: 'applied-ai' },
    titles: { es: 'IA aplicada', en: 'Applied AI' },
    seo: {
      es: {
        title: 'Build log: sistemas pequeños de IA aplicada',
        description:
          'Servicios en Python y FastAPI con recuperación, herramientas tipadas, flujos de aprobación y despliegues observables.',
      },
      en: {
        title: 'Build log: small applied-AI systems',
        description:
          'Python and FastAPI services with retrieval, typed tool boundaries, approval flows and observable deployments.',
      },
    },
    sectionLabels: {
      es: {
        why: 'La Pregunta',
        'the-problems': 'Los Problemas',
        foundation: 'El Stack',
        'delivery-model': 'La Estructura',
        next: 'Dónde Está',
        faq: 'FAQ',
      },
      en: {
        why: 'The Question',
        'the-problems': 'The Problems',
        foundation: 'The Stack',
        'delivery-model': 'The Structure',
        next: 'Where It Stands',
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
      dateModified: '2026-09-30',
      keywords: ['applied AI', 'agentic AI', 'AI agent deployment', 'FastAPI agent service', 'human in the loop', 'HITL', 'MCP', 'observability', 'Docker', 'PostgreSQL', 'tool calling'],
      articleType: 'TechArticle',
      articleTags: 'build log,applied AI,FastAPI,deployment,HITL',
      images: [OG_IMAGE],
      about: [
        { '@type': 'Thing', name: 'Applied AI' },
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
        title: 'Un agente que no puede inventarme la carrera',
        description:
          'Recuperación híbrida sobre el portafolio, guardrails, scoring online y evals en CI, para que un LLM no invente mi experiencia.',
      },
      en: {
        title: 'A portfolio agent that cannot invent my career',
        description:
          'Hybrid retrieval over the portfolio, guardrails, online scoring and CI-gated evals, so an LLM cannot make up my experience.',
      },
    },
    sectionLabels: {
      es: {
        'the-hard-part': 'La Restricción',
        'truth-layer': 'Capa de Verdad',
        rag: 'Recuperación',
        adversarial: 'Superficie Adversarial',
        evals: 'Evals',
        observability: 'Observabilidad',
        architecture: 'Arquitectura',
        shipped: 'Qué Funciona',
        faq: 'FAQ',
      },
      en: {
        'the-hard-part': 'The Constraint',
        'truth-layer': 'Truth Layer',
        rag: 'Retrieval',
        adversarial: 'Adversarial Surface',
        evals: 'Evals',
        observability: 'Observability',
        architecture: 'Architecture',
        shipped: 'What Is Running',
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
      dateModified: '2026-09-30',
      keywords: ['portfolio chat agent', 'agentic RAG', 'hybrid retrieval', 'pgvector', 'reciprocal rank fusion', 'LLM evaluation', 'guardrails', 'prompt injection', 'observability', 'Langfuse', 'CI evals', 'groundedness'],
      articleType: 'TechArticle',
      articleTags: 'RAG,evals,guardrails,observability,architecture',
      images: [OG_IMAGE],
      about: [
        { '@type': 'Thing', name: 'Retrieval-Augmented Generation' },
        { '@type': 'Thing', name: 'LLM evaluation' },
        { '@type': 'SoftwareApplication', name: 'Langfuse', url: 'https://langfuse.com', applicationCategory: 'LLM Observability' },
        { '@type': 'SoftwareApplication', name: 'Supabase', url: 'https://supabase.com', applicationCategory: 'Database' },
      ],
      extra: { proficiencyLevel: 'Advanced', dependencies: 'Claude, Supabase (Postgres + pgvector), Langfuse, Vercel, GitHub Actions' },
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
        title: 'Casicornio: publicación de tecnología en español',
        description:
          'Construyo una publicación independiente en español sobre startups, tecnología e IA. Primeros números en preparación.',
      },
      en: {
        title: 'Casicornio: a Spanish-language tech publication',
        description:
          'Building an independent Spanish-language publication on startups, technology and AI. First issues in preparation.',
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
      dateModified: '2026-09-30',
      keywords: ['Casicornio', 'Spanish-language technology publication', 'startups', 'technology media', 'content operations', 'editorial systems', 'distribution', 'media experiment', 'publishing workflow', 'independent publication'],
      articleType: 'Article',
      articleTags: 'Casicornio,media ops,startups,automation',
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
          'Startup de accesibilidad en EE. UU. con un prototipo funcional: visión por computador, machine learning y voz con Amazon Alexa.',
      },
      en: {
        title: 'Invip — AI for visual accessibility',
        description:
          'A U.S.-incorporated accessibility startup with a working prototype: computer vision, machine learning and Amazon Alexa voice.',
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
      dateModified: '2026-09-30',
      keywords: ['assistive technology', 'visual accessibility', 'computer vision', 'machine learning', 'Amazon Alexa', 'NYU startup', 'accessibility', 'visually impaired', 'voice interaction', 'co-founder CTO'],
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
          'La dimensión fractal como característica para distinguir imágenes de lesiones cutáneas. Investigación, no un diagnóstico clínico.',
      },
      en: {
        title: 'Fractal dimension — 2010 research',
        description:
          'Fractal dimension as a feature for distinguishing skin-lesion images. Research, not a clinical diagnostic system.',
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
      dateModified: '2026-09-30',
      keywords: ['fractal dimension', 'skin lesion imagery', 'boundary irregularity', 'image classification', 'AGSE 2010', 'undergraduate research', 'research prototype', 'fractal geometry', 'poster competition', 'feature extraction'],
      articleType: 'Article',
      articleTags: 'fractal geometry,research,classification,historical',
      images: [OG_IMAGE],
      about: [
        { '@type': 'Thing', name: 'Fractal dimension' },
        { '@type': 'Thing', name: 'Computational intelligence' },
      ],
      extra: {
        disambiguatingDescription:
          'A 2010 undergraduate research prototype. Not a clinical diagnostic system and never deployed for diagnosis.',
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
          'Tesis con mención honorífica, el MVP de Aquolity, un prototipo de Project Tango y un prototipo de marketplace NFT en Solana.',
      },
      en: {
        title: 'Early projects archive',
        description:
          'A thesis with honorable mention, the Aquolity MVP, a Project Tango prototype and a Solana NFT marketplace prototype.',
      },
    },
    sectionLabels: {
      es: {
        android: 'Tesis',
        aquolity: 'Aquolity',
        experiments: 'Prototipos',
        portfolios: 'Portafolios Antiguos',
        'why-archive': 'Por Qué el Archivo',
        faq: 'FAQ',
      },
      en: {
        android: 'Thesis',
        aquolity: 'Aquolity',
        experiments: 'Prototypes',
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
      dateModified: '2026-09-30',
      keywords: ['dynamic UI components', 'undergraduate thesis', 'Aquolity', 'water quality crowdsourcing', 'Project Tango', 'Solana', 'NFT marketplace', 'smart contracts', 'prototype', 'MVP'],
      articleType: 'Article',
      articleTags: 'archive,thesis,prototypes,social tech,Solana',
      images: [OG_IMAGE],
      about: [
        { '@type': 'Thing', name: 'Dynamic user interfaces' },
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
        title: 'De los sistemas financieros a la IA aplicada',
        description:
          'Del trabajo en sistemas financieros a los proyectos independientes de IA aplicada que construye ahora en Berlín.',
      },
      en: {
        title: 'From financial systems to applied AI',
        description:
          'From financial systems work to the independent applied-AI projects she builds now in Berlin.',
      },
    },
    sectionLabels: {
      es: {
        'systems-work': 'Antes',
        'the-turn': 'Berlín',
        'build-phase': 'Construir con IA',
        now: 'Ahora',
        faq: 'FAQ',
      },
      en: {
        'systems-work': 'Before',
        'the-turn': 'Berlin',
        'build-phase': 'Building with AI',
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
      dateModified: '2026-09-30',
      keywords: ['career transition', 'relocation', 'independent software engineer', 'applied AI', 'systems engineering career', 'senior software engineer', 'Berlin', 'independent projects', 'financial systems', 'RAG'],
      articleType: 'Article',
      articleTags: 'story,career,relocation,applied AI',
      images: [OG_IMAGE],
      about: [
        { '@type': 'Person', name: 'Brenda Manrique', url: `${SITE_URL}/about` },
        { '@type': 'Thing', name: 'Applied AI' },
      ],
    },
  },
]

// Derived maps for GlobalNav and routing
export function getAltPaths(): Record<string, string> {
  const map: Record<string, string> = {
    '/': '/es',
    '/es': '/',
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
    '/': "Brenda's Portfolio",
    '/es': 'Portfolio de Brenda',
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
  const slugs = new Set<string>(['/es', '/privacidad', '/sobre-mi'])
  for (const article of articleRegistry) {
    slugs.add(`/${article.slugs.es}`)
  }
  return slugs
}
