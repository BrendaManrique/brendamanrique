import type { CaseStudyContent, CaseStudyLang } from './case-study'

export const casicornioContent: Record<CaseStudyLang, CaseStudyContent> = {
  en: {
    slug: 'en/casicornio',
    altSlug: 'casicornio',
    readingTime: '3 min read',
    seo: {
      title: 'Casicornio: a Spanish-language technology publication',
      description:
        'Building Casicornio, an independent Spanish-language publication on startups, technology and AI — and what I want to automate without automating the voice.',
    },
    header: {
      kicker: 'Project · Media',
      h1: 'Casicornio',
      subtitle:
        'An independent Spanish-language technology publication I am building alongside the engineering work.',
      date: 'Sep 1, 2026',
    },
    nav: { breadcrumbHome: 'Home', breadcrumbCurrent: 'Casicornio' },
    status: 'Launching — first issues in preparation',
    directAnswer:
      'Casicornio is an independent Spanish-language technology publication that Brenda Manrique is building, covering startups, technology and AI. Launch is imminent and the first issues are being prepared. It is an experiment and a product, not a media business, and no audience or revenue figures exist yet.',
    sections: {
      'what-it-is': {
        heading: 'What it is',
        blocks: [
          {
            kind: 'prose',
            text: 'An independent Spanish-language publication exploring startups, technology and AI. The first issues are in preparation.',
          },
          {
            kind: 'quote',
            text: 'Engineering a product and earning attention for a product are different skills.',
          },
        ],
      },
      why: {
        heading: 'Why it is in an engineering portfolio',
        blocks: [
          {
            kind: 'prose',
            text: 'For years her feedback loops were internal: requirements, pull requests, release cycles. Casicornio is a different surface — editorial systems, distribution, positioning — and it is somewhere to be curious about technology in public.',
          },
        ],
      },
      system: {
        heading: 'The system behind it',
        blocks: [
          {
            kind: 'flow',
            steps: ['Sources', 'Research queue', 'Human thesis', 'Draft / assets', 'Publish', 'Feedback'],
          },
          {
            kind: 'prose',
            text: 'Research queues, source capture, publishing checklists and analytics can become workflows. Judgment and editorial voice stay human. Automation is part of the system being built, not a substitute for the point of view.',
          },
        ],
      },
      status: {
        heading: 'Current status',
        blocks: [
          {
            kind: 'prose',
            text: 'Pre-launch. There is no meaningful subscriber base and no revenue, so no numbers are published here.',
          },
        ],
      },
    },
    faq: {
      heading: 'Frequently asked questions',
      items: [
        {
          q: 'How big is Casicornio?',
          a: 'It has not launched yet. The first issues are being prepared, there is no meaningful subscriber base and no revenue, and this portfolio publishes no audience or traffic figures for it.',
        },
        {
          q: 'Why Spanish?',
          a: 'Brenda works in English and Spanish, and Casicornio is aimed at Spanish-speaking technology and startup audiences. It is a deliberate audience choice, not a translation of something else.',
        },
        {
          q: 'Is this a full-time media venture?',
          a: 'No. It is a side project that signals a genuine interest in technology, and it runs alongside her engineering work.',
        },
      ],
    },
    cta: {
      heading: 'The other half of the build',
      body: 'Casicornio runs alongside the applied-AI work. The build log for that is here.',
      ctaLabel: 'Read the applied-AI build log',
      ctaHref: '/applied-ai',
    },
  },
  es: {
    slug: 'casicornio',
    altSlug: 'en/casicornio',
    readingTime: '3 min de lectura',
    seo: {
      title: 'Casicornio: una publicación de tecnología en español',
      description:
        'Construyo Casicornio, una publicación independiente en español sobre startups, tecnología e IA, y qué quiero automatizar sin automatizar la voz.',
    },
    header: {
      kicker: 'Proyecto · Medios',
      h1: 'Casicornio',
      subtitle:
        'Una publicación independiente de tecnología en español que construyo en paralelo al trabajo de ingeniería.',
      date: '1 sep 2026',
    },
    nav: { breadcrumbHome: 'Inicio', breadcrumbCurrent: 'Casicornio' },
    status: 'Por lanzar — primeros números en preparación',
    directAnswer:
      'Casicornio es una publicación independiente de tecnología en español que Brenda Manrique está construyendo, sobre startups, tecnología e IA. El lanzamiento es inminente y los primeros números están en preparación. Es un experimento y un producto, no un negocio de medios, y todavía no existen cifras de audiencia ni de ingresos.',
    sections: {
      'what-it-is': {
        heading: 'Qué es',
        blocks: [
          {
            kind: 'prose',
            text: 'Una publicación independiente en español que explora startups, tecnología e IA. Los primeros números están en preparación.',
          },
          {
            kind: 'quote',
            text: 'Construir un producto y ganarse la atención para un producto son habilidades distintas.',
          },
        ],
      },
      why: {
        heading: 'Por qué está en un portafolio de ingeniería',
        blocks: [
          {
            kind: 'prose',
            text: 'Durante años sus bucles de feedback fueron internos: requisitos, pull requests, ciclos de release. Casicornio es otra superficie —sistemas editoriales, distribución, posicionamiento— y un sitio donde tener curiosidad por la tecnología en público.',
          },
        ],
      },
      system: {
        heading: 'El sistema que hay detrás',
        blocks: [
          {
            kind: 'flow',
            steps: ['Fuentes', 'Cola de investigación', 'Tesis humana', 'Borrador / piezas', 'Publicar', 'Feedback'],
          },
          {
            kind: 'prose',
            text: 'Las colas de investigación, la captura de fuentes, las checklists de publicación y la analítica pueden convertirse en workflows. El criterio y la voz editorial siguen siendo humanos. La automatización es parte del sistema que se está construyendo, no un sustituto del punto de vista.',
          },
        ],
      },
      status: {
        heading: 'Estado actual',
        blocks: [
          {
            kind: 'prose',
            text: 'Prelanzamiento. No hay una base de suscriptores relevante ni ingresos, así que aquí no se publica ninguna cifra.',
          },
        ],
      },
    },
    faq: {
      heading: 'Preguntas frecuentes',
      items: [
        {
          q: '¿Qué tamaño tiene Casicornio?',
          a: 'Todavía no ha lanzado. Los primeros números están en preparación, no hay una base de suscriptores relevante ni ingresos, y este portafolio no publica cifras de audiencia ni de tráfico.',
        },
        {
          q: '¿Por qué en español?',
          a: 'Brenda trabaja en inglés y en español, y Casicornio está dirigido a audiencias hispanohablantes de tecnología y startups. Es una decisión de audiencia deliberada, no la traducción de otra cosa.',
        },
        {
          q: '¿Es un proyecto de medios a tiempo completo?',
          a: 'No. Es un proyecto paralelo que refleja un interés genuino por la tecnología, y convive con su trabajo de ingeniería.',
        },
      ],
    },
    cta: {
      heading: 'La otra mitad de la construcción',
      body: 'Casicornio va en paralelo al trabajo de IA aplicada. Su build log está aquí.',
      ctaLabel: 'Leer el build log de IA aplicada',
      ctaHref: '/ia-aplicada',
    },
  },
}
