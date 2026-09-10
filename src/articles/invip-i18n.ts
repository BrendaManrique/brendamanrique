import type { CaseStudyContent, CaseStudyLang } from './case-study'

export const invipContent: Record<CaseStudyLang, CaseStudyContent> = {
  en: {
    slug: 'invip-accessibility-ai',
    altSlug: 'invip',
    readingTime: '4 min read',
    seo: {
      title: 'Invip — AI for visual accessibility',
      description:
        'An NYU award-winning project and U.S.-incorporated company: an audio assistant for visually impaired people, built before conversational AI was a mainstream interface. Brenda Manrique was CTO and co-founder.',
    },
    header: {
      kicker: 'Project · 2015–2018 · NYU',
      h1: 'Invip — AI for visual accessibility',
      subtitle:
        'Could a device translate visual context into spoken information for a visually impaired person? That was the question, asked before conversational AI became a mainstream interface.',
      date: 'Sep 1, 2026',
    },
    nav: { breadcrumbHome: 'Home', breadcrumbCurrent: 'Invip' },
    directAnswer:
      'Invip was an NYU award-winning project and a U.S.-incorporated company built between 2015 and 2018: an audio assistant for visually impaired people using machine-learning concepts, an audio and speech interface, and Amazon Alexa-era voice interaction. Brenda Manrique was CTO and co-founder.',
    sections: {
      'the-problem': {
        heading: 'The problem',
        blocks: [
          {
            kind: 'quote',
            text: 'Before conversational AI became a mainstream interface, Invip explored a simple but important idea: could a device translate visual context into spoken information for a visually impaired person?',
          },
          {
            kind: 'flow',
            steps: ['Camera / environment', 'Visual interpretation', 'Context / task', 'Speech interface', 'User'],
          },
        ],
      },
      product: {
        heading: 'Product direction',
        blocks: [
          {
            kind: 'prose',
            text: 'The goal was not a generic assistant. It was a bridge between visual information and a user who could not rely on the screen — which is a much narrower and much harder product question.',
          },
          {
            kind: 'prose',
            text: 'The work ran alongside her MSc in Management of Technology at NYU\'s School of Engineering, and the company was incorporated in the United States.',
          },
        ],
      },
      today: {
        heading: 'What she\'d do differently today',
        blocks: [
          {
            kind: 'prose',
            text: 'Modern multimodal models collapse pieces of the old architecture into capabilities that are much easier to prototype. But the real product questions remain: what information is useful, when should the system speak, how do we measure wrong interpretations, and what happens when confidence is low?',
          },
          {
            kind: 'callout',
            text: 'Those questions are almost identical to the ones she now cares about in agentic AI: capability is not enough; the product needs boundaries and reliability.',
          },
        ],
      },
    },
    faq: {
      heading: 'Frequently asked questions',
      items: [
        {
          q: 'What was her role?',
          a: 'CTO and co-founder. Invip was an NYU award-winning project and a U.S.-incorporated company, built between 2015 and 2018 alongside her MSc in Management of Technology at NYU.',
        },
        {
          q: 'Is Invip still running?',
          a: 'No. It is presented here as part of her timeline — a 2015–2018 venture — not as a live product. This portfolio does not claim active products it no longer operates.',
        },
        {
          q: 'Why keep an old accessibility project in an agentic AI portfolio?',
          a: 'Because the hard questions transferred. Deciding what information is useful, when a system should speak, how to measure a wrong interpretation and what to do when confidence is low are exactly the questions an agentic system has to answer. The capability got easier; the product judgment did not.',
        },
      ],
    },
    cta: {
      heading: 'The same questions, a new stack',
      body: 'Capability is not enough; the product needs boundaries and reliability. That is the through-line from Invip to the current work.',
      ctaLabel: 'Read the consulting build log',
      ctaHref: '/agentic-ai-consulting',
      secondaryLabel: 'Early projects archive',
      secondaryHref: '/early-projects',
    },
  },
  es: {
    slug: 'invip',
    altSlug: 'invip-accessibility-ai',
    readingTime: '4 min de lectura',
    seo: {
      title: 'Invip — IA para accesibilidad visual',
      description:
        'Un proyecto premiado en NYU y una empresa constituida en EE. UU.: un asistente de audio para personas con discapacidad visual, construido antes de que la IA conversacional fuera una interfaz mayoritaria. Brenda Manrique fue CTO y cofundadora.',
    },
    header: {
      kicker: 'Proyecto · 2015–2018 · NYU',
      h1: 'Invip — IA para accesibilidad visual',
      subtitle:
        '¿Podría un dispositivo traducir el contexto visual en información hablada para una persona con discapacidad visual? Esa era la pregunta, hecha antes de que la IA conversacional fuera una interfaz mayoritaria.',
      date: '1 sep 2026',
    },
    nav: { breadcrumbHome: 'Inicio', breadcrumbCurrent: 'Invip' },
    directAnswer:
      'Invip fue un proyecto premiado en NYU y una empresa constituida en EE. UU. entre 2015 y 2018: un asistente de audio para personas con discapacidad visual con conceptos de machine learning, una interfaz de audio y voz, e interacción por voz de la era de Amazon Alexa. Brenda Manrique fue CTO y cofundadora.',
    sections: {
      'the-problem': {
        heading: 'El problema',
        blocks: [
          {
            kind: 'quote',
            text: 'Antes de que la IA conversacional fuera una interfaz mayoritaria, Invip exploró una idea simple pero importante: ¿podría un dispositivo traducir el contexto visual en información hablada para una persona con discapacidad visual?',
          },
          {
            kind: 'flow',
            steps: ['Cámara / entorno', 'Interpretación visual', 'Contexto / tarea', 'Interfaz de voz', 'Usuario'],
          },
        ],
      },
      product: {
        heading: 'Dirección de producto',
        blocks: [
          {
            kind: 'prose',
            text: 'El objetivo no era un asistente genérico. Era un puente entre la información visual y una persona que no podía apoyarse en la pantalla, que es una pregunta de producto mucho más estrecha y mucho más difícil.',
          },
          {
            kind: 'prose',
            text: 'El trabajo transcurrió en paralelo a su máster en Management of Technology en la School of Engineering de NYU, y la empresa se constituyó en Estados Unidos.',
          },
        ],
      },
      today: {
        heading: 'Qué haría distinto hoy',
        blocks: [
          {
            kind: 'prose',
            text: 'Los modelos multimodales actuales colapsan partes de aquella arquitectura en capacidades mucho más fáciles de prototipar. Pero las preguntas de producto siguen ahí: qué información es útil, cuándo debe hablar el sistema, cómo medimos las interpretaciones erróneas y qué pasa cuando la confianza es baja.',
          },
          {
            kind: 'callout',
            text: 'Esas preguntas son casi idénticas a las que hoy le importan en IA agéntica: la capacidad no basta; el producto necesita límites y fiabilidad.',
          },
        ],
      },
    },
    faq: {
      heading: 'Preguntas frecuentes',
      items: [
        {
          q: '¿Cuál era su rol?',
          a: 'CTO y cofundadora. Invip fue un proyecto premiado en NYU y una empresa constituida en EE. UU., construida entre 2015 y 2018 en paralelo a su máster en Management of Technology en NYU.',
        },
        {
          q: '¿Invip sigue en marcha?',
          a: 'No. Aparece aquí como parte de su trayectoria —una iniciativa de 2015–2018—, no como un producto vivo. Este portafolio no afirma tener productos activos que ya no opera.',
        },
        {
          q: '¿Por qué mantener un proyecto antiguo de accesibilidad en un portafolio de IA agéntica?',
          a: 'Porque las preguntas difíciles se transfieren. Decidir qué información es útil, cuándo debe hablar un sistema, cómo medir una interpretación errónea y qué hacer cuando la confianza es baja son exactamente las preguntas que un sistema agéntico tiene que responder. La capacidad se volvió más fácil; el criterio de producto no.',
        },
      ],
    },
    cta: {
      heading: 'Las mismas preguntas, otro stack',
      body: 'La capacidad no basta; el producto necesita límites y fiabilidad. Ese es el hilo que va de Invip al trabajo actual.',
      ctaLabel: 'Leer el build log de consultoría',
      ctaHref: '/consultoria-ia-agentica',
      secondaryLabel: 'Archivo de proyectos iniciales',
      secondaryHref: '/proyectos-iniciales',
    },
  },
}
