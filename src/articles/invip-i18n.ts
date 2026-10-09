import type { CaseStudyContent, CaseStudyLang } from './case-study'

export const invipContent: Record<CaseStudyLang, CaseStudyContent> = {
  en: {
    slug: 'invip-accessibility-ai',
    altSlug: 'invip',
    readingTime: '4 min read',
    seo: {
      title: 'Invip — AI for visual accessibility',
      description:
        'A U.S.-incorporated accessibility startup with a working prototype: computer vision and machine learning, with voice interaction through Amazon Alexa. Brenda Manrique was CTO and co-founder.',
    },
    header: {
      kicker: 'Project · 2015–2018 · NYU',
      h1: 'Invip — AI for visual accessibility',
      subtitle:
        'Could a device translate visual context into spoken information for a visually impaired person? That was the question, asked in 2015.',
      date: 'Sep 1, 2026',
    },
    nav: { breadcrumbHome: 'Home', breadcrumbCurrent: 'Invip' },
    directAnswer:
      'Brenda Manrique co-founded and served as CTO of Invip, a U.S.-incorporated accessibility startup built between 2015 and 2018. The team built a working prototype combining computer vision and machine learning to recognize and categorize surroundings, with voice interaction through Amazon Alexa. It was an award-winning NYU project and the prototype was showcased.',
    sections: {
      'the-problem': {
        heading: 'The problem',
        blocks: [
          {
            kind: 'quote',
            text: 'Invip explored a simple but important idea: could a device translate visual context into spoken information for a visually impaired person?',
          },
          {
            kind: 'flow',
            steps: ['Camera / environment', 'Computer vision + ML', 'Categorized surroundings', 'Alexa voice interaction', 'User'],
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
            text: 'A working prototype existed and was showcased. The work ran alongside her MS in Executive Management of Technology at NYU Tandon, and the company was incorporated in the United States.',
          },
        ],
      },
      today: {
        heading: 'What she\'d do differently today',
        blocks: [
          {
            kind: 'prose',
            text: 'Modern multimodal models collapse pieces of that architecture into capabilities that are far easier to prototype. The product questions did not move: what information is useful, when should the system speak, how do you measure a wrong interpretation, and what happens when confidence is low?',
          },
          {
            kind: 'callout',
            text: 'Almost the same questions she cares about in applied AI now: capability is not enough; the product needs boundaries and reliability.',
          },
        ],
      },
    },
    faq: {
      heading: 'Frequently asked questions',
      items: [
        {
          q: 'What was her role?',
          a: 'Co-founder and CTO. Invip was a U.S.-incorporated accessibility startup and an award-winning NYU project, built between 2015 and 2018 alongside her MS in Executive Management of Technology at NYU Tandon.',
        },
        {
          q: 'Is Invip still running?',
          a: 'No. It is presented here as part of her timeline — a 2015–2018 venture — not as a live product. This portfolio does not claim active products it no longer operates.',
        },
        {
          q: 'Why keep an old accessibility project in the portfolio?',
          a: 'Because the hard questions transferred. Deciding what information is useful, when a system should speak, how to measure a wrong interpretation and what to do when confidence is low are exactly the questions an AI product has to answer. The capability got easier; the product judgment did not.',
        },
      ],
    },
    cta: {
      heading: 'The same questions, a new stack',
      body: 'Capability is not enough; the product needs boundaries and reliability. That is the through-line from Invip to the current work.',
      ctaLabel: 'Read the applied-AI build log',
      ctaHref: '/applied-ai',
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
        'Una startup de accesibilidad constituida en EE. UU. con un prototipo funcional: visión por computador y machine learning, con interacción por voz mediante Amazon Alexa. Brenda Manrique fue CTO y cofundadora.',
    },
    header: {
      kicker: 'Proyecto · 2015–2018 · NYU',
      h1: 'Invip — IA para accesibilidad visual',
      subtitle:
        '¿Podría un dispositivo traducir el contexto visual en información hablada para una persona con discapacidad visual? Esa era la pregunta, en 2015.',
      date: '1 sep 2026',
    },
    nav: { breadcrumbHome: 'Inicio', breadcrumbCurrent: 'Invip' },
    directAnswer:
      'Brenda Manrique cofundó Invip y fue su CTO, una startup de accesibilidad constituida en EE. UU. entre 2015 y 2018. El equipo construyó un prototipo funcional que combinaba visión por computador y machine learning para reconocer y categorizar el entorno, con interacción por voz mediante Amazon Alexa. Fue un proyecto premiado en NYU y el prototipo se mostró en público.',
    sections: {
      'the-problem': {
        heading: 'El problema',
        blocks: [
          {
            kind: 'quote',
            text: 'Invip exploró una idea simple pero importante: ¿podría un dispositivo traducir el contexto visual en información hablada para una persona con discapacidad visual?',
          },
          {
            kind: 'flow',
            steps: ['Cámara / entorno', 'Visión por computador + ML', 'Entorno categorizado', 'Interacción por voz con Alexa', 'Usuario'],
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
            text: 'Hubo un prototipo funcional y se mostró en público. El trabajo transcurrió en paralelo a su MS en Executive Management of Technology en NYU Tandon, y la empresa se constituyó en Estados Unidos.',
          },
        ],
      },
      today: {
        heading: 'Qué haría distinto hoy',
        blocks: [
          {
            kind: 'prose',
            text: 'Los modelos multimodales actuales colapsan partes de aquella arquitectura en capacidades mucho más fáciles de prototipar. Las preguntas de producto no se movieron: qué información es útil, cuándo debe hablar el sistema, cómo se mide una interpretación errónea y qué pasa cuando la confianza es baja.',
          },
          {
            kind: 'callout',
            text: 'Casi las mismas preguntas que hoy le importan en IA aplicada: la capacidad no basta; el producto necesita límites y fiabilidad.',
          },
        ],
      },
    },
    faq: {
      heading: 'Preguntas frecuentes',
      items: [
        {
          q: '¿Cuál era su rol?',
          a: 'Cofundadora y CTO. Invip fue una startup de accesibilidad constituida en EE. UU. y un proyecto premiado en NYU, construida entre 2015 y 2018 en paralelo a su MS en Executive Management of Technology en NYU Tandon.',
        },
        {
          q: '¿Invip sigue en marcha?',
          a: 'No. Aparece aquí como parte de su trayectoria —una iniciativa de 2015–2018—, no como un producto vivo. Este portafolio no afirma tener productos activos que ya no opera.',
        },
        {
          q: '¿Por qué mantener un proyecto antiguo de accesibilidad en el portafolio?',
          a: 'Porque las preguntas difíciles se transfieren. Decidir qué información es útil, cuándo debe hablar un sistema, cómo medir una interpretación errónea y qué hacer cuando la confianza es baja son exactamente las preguntas que tiene que responder un producto de IA. La capacidad se volvió más fácil; el criterio de producto no.',
        },
      ],
    },
    cta: {
      heading: 'Las mismas preguntas, otro stack',
      body: 'La capacidad no basta; el producto necesita límites y fiabilidad. Ese es el hilo que va de Invip al trabajo actual.',
      ctaLabel: 'Leer el build log de IA aplicada',
      ctaHref: '/ia-aplicada',
      secondaryLabel: 'Archivo de proyectos iniciales',
      secondaryHref: '/proyectos-iniciales',
    },
  },
}
