import type { CaseStudyContent, CaseStudyLang } from './case-study'

export const casicornioContent: Record<CaseStudyLang, CaseStudyContent> = {
  en: {
    slug: 'en/casicornio',
    altSlug: 'casicornio',
    readingTime: '4 min read',
    seo: {
      title: 'Casicornio: learning distribution by operating a media project',
      description:
        'Why Brenda Manrique runs a Spanish-language founder and technology publication alongside the AI consulting build — and what she wants to automate without automating the voice.',
    },
    header: {
      kicker: 'Project · Media / founders',
      h1: 'Casicornio: learning distribution by operating a media project',
      subtitle:
        'Why I\'m running a Spanish-language founder/technology publication alongside the AI consulting build — and what I want to automate without automating the voice.',
      date: 'Sep 1, 2026',
    },
    nav: { breadcrumbHome: 'Home', breadcrumbCurrent: 'Casicornio' },
    status: 'Operating project — not a media business claim',
    directAnswer:
      'Casicornio is an independent Spanish-language founder and technology publication that Brenda Manrique runs alongside the agentic AI consulting build. It exists because engineering a product and earning attention for a product are different skills. It is an operating project, not a claim of a large media business, and no audience or revenue figures are published.',
    sections: {
      'what-it-is': {
        heading: 'What it is',
        blocks: [
          {
            kind: 'prose',
            text: 'An independent Spanish-language founder and technology publication and media experiment — part content system, part distribution experiment.',
          },
          {
            kind: 'quote',
            text: 'Engineering a product and earning attention for a product are different skills.',
          },
        ],
      },
      why: {
        heading: 'Why it belongs in an engineering portfolio',
        blocks: [
          {
            kind: 'prose',
            text: 'For years most of her feedback loops were internal: requirements, pull requests, release cycles. Casicornio gives a different operating surface — editorial systems, audience feedback, distribution, positioning and consistency. It is a non-internal feedback loop, which is exactly what a technical career does not automatically provide.',
          },
        ],
      },
      system: {
        heading: 'The system she wants behind it',
        blocks: [
          {
            kind: 'flow',
            steps: ['Sources', 'Research queue', 'Human thesis', 'Draft / assets', 'Publish', 'Feedback loop'],
          },
          {
            kind: 'prose',
            text: 'Research queues, source capture, content operations, publishing checklists and analytics can become workflows. Judgment and editorial voice stay human.',
          },
          {
            kind: 'callout',
            text: 'Automate the boring parts without automating the point of view.',
          },
        ],
      },
      status: {
        heading: 'Current status',
        blocks: [
          {
            kind: 'prose',
            text: 'An operating project, not a claim of a large media business. The value today is the practice: building a brand, shipping consistently, and learning how technology and entrepreneurship content travels in Spanish-speaking founder communities.',
          },
          {
            kind: 'prose',
            text: 'That is also why this page carries no subscriber counts, traffic charts or revenue figures. There is no honest number to publish yet, so none is published.',
          },
        ],
      },
    },
    faq: {
      heading: 'Frequently asked questions',
      items: [
        {
          q: 'How big is Casicornio?',
          a: 'It is an operating project, not a large media business, and this portfolio publishes no audience, traffic or revenue figures for it. The value it provides today is the practice of shipping consistently and learning distribution first-hand.',
        },
        {
          q: 'Why Spanish?',
          a: 'Brenda works in English and Spanish, and Casicornio is aimed at Spanish-speaking founder and technology communities. It is a deliberate audience choice, not a translation of something else.',
        },
        {
          q: 'How does this connect to the AI work?',
          a: 'Two ways. It supplies a feedback loop that is not internal to an engineering team, and it is a live testbed for the thesis behind the consulting practice: automate the operational parts of a workflow — research queues, source capture, publishing checklists, analytics — while the judgment stays with a person.',
        },
      ],
    },
    cta: {
      heading: 'The other half of the build',
      body: 'Casicornio runs alongside the agentic AI consulting practice. The build log for that is here.',
      ctaLabel: 'Read the consulting build log',
      ctaHref: '/agentic-ai-consulting',
    },
  },
  es: {
    slug: 'casicornio',
    altSlug: 'en/casicornio',
    readingTime: '4 min de lectura',
    seo: {
      title: 'Casicornio: aprender distribución operando un proyecto de medios',
      description:
        'Por qué Brenda Manrique lleva una publicación en español sobre fundadores y tecnología junto a la construcción de la consultoría de IA, y qué quiere automatizar sin automatizar la voz.',
    },
    header: {
      kicker: 'Proyecto · Medios / fundadores',
      h1: 'Casicornio: aprender distribución operando un proyecto de medios',
      subtitle:
        'Por qué llevo una publicación en español sobre fundadores y tecnología junto a la construcción de la consultoría de IA, y qué quiero automatizar sin automatizar la voz.',
      date: '1 sep 2026',
    },
    nav: { breadcrumbHome: 'Inicio', breadcrumbCurrent: 'Casicornio' },
    status: 'Proyecto en marcha — no es una afirmación de negocio de medios',
    directAnswer:
      'Casicornio es una publicación independiente en español sobre fundadores y tecnología que Brenda Manrique lleva junto a la construcción de la consultoría de IA agéntica. Existe porque construir un producto y ganarse la atención para un producto son habilidades distintas. Es un proyecto en marcha, no la afirmación de un gran negocio de medios, y no se publican cifras de audiencia ni de ingresos.',
    sections: {
      'what-it-is': {
        heading: 'Qué es',
        blocks: [
          {
            kind: 'prose',
            text: 'Una publicación y experimento de medios independiente en español sobre fundadores y tecnología: en parte sistema de contenido, en parte experimento de distribución.',
          },
          {
            kind: 'quote',
            text: 'Construir un producto y ganarse la atención para un producto son habilidades distintas.',
          },
        ],
      },
      why: {
        heading: 'Por qué encaja en un portafolio de ingeniería',
        blocks: [
          {
            kind: 'prose',
            text: 'Durante años, casi todos sus bucles de feedback fueron internos: requisitos, pull requests, ciclos de release. Casicornio le da otra superficie operativa: sistemas editoriales, feedback de audiencia, distribución, posicionamiento y consistencia. Es un bucle de feedback no interno, justo lo que una carrera técnica no proporciona por defecto.',
          },
        ],
      },
      system: {
        heading: 'El sistema que quiere detrás',
        blocks: [
          {
            kind: 'flow',
            steps: ['Fuentes', 'Cola de investigación', 'Tesis humana', 'Borrador / piezas', 'Publicar', 'Bucle de feedback'],
          },
          {
            kind: 'prose',
            text: 'Las colas de investigación, la captura de fuentes, las operaciones de contenido, las checklists de publicación y la analítica pueden convertirse en workflows. El criterio y la voz editorial siguen siendo humanos.',
          },
          {
            kind: 'callout',
            text: 'Automatizar la parte aburrida sin automatizar el punto de vista.',
          },
        ],
      },
      status: {
        heading: 'Estado actual',
        blocks: [
          {
            kind: 'prose',
            text: 'Un proyecto en marcha, no la afirmación de un gran negocio de medios. El valor hoy es la práctica: construir una marca, publicar con constancia y aprender cómo viaja el contenido de tecnología y emprendimiento en las comunidades de fundadores hispanohablantes.',
          },
          {
            kind: 'prose',
            text: 'Por eso esta página no lleva número de suscriptores, gráficas de tráfico ni cifras de ingresos. Todavía no hay un número honesto que publicar, así que no se publica ninguno.',
          },
        ],
      },
    },
    faq: {
      heading: 'Preguntas frecuentes',
      items: [
        {
          q: '¿Qué tamaño tiene Casicornio?',
          a: 'Es un proyecto en marcha, no un gran negocio de medios, y este portafolio no publica cifras de audiencia, tráfico ni ingresos. Su valor hoy es la práctica de publicar con constancia y aprender distribución de primera mano.',
        },
        {
          q: '¿Por qué en español?',
          a: 'Brenda trabaja en inglés y en español, y Casicornio está dirigido a comunidades hispanohablantes de fundadores y tecnología. Es una decisión de audiencia deliberada, no la traducción de otra cosa.',
        },
        {
          q: '¿Cómo se conecta esto con el trabajo de IA?',
          a: 'De dos formas. Aporta un bucle de feedback que no es interno a un equipo de ingeniería, y es un banco de pruebas vivo de la tesis que hay detrás de la consultoría: automatizar la parte operativa de un flujo —colas de investigación, captura de fuentes, checklists de publicación, analítica— mientras el criterio se queda con una persona.',
        },
      ],
    },
    cta: {
      heading: 'La otra mitad de la construcción',
      body: 'Casicornio va en paralelo a la práctica de consultoría en IA agéntica. Su build log está aquí.',
      ctaLabel: 'Leer el build log de consultoría',
      ctaHref: '/consultoria-ia-agentica',
    },
  },
}
