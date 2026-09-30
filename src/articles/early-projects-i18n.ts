import type { CaseStudyContent, CaseStudyLang } from './case-study'

export const earlyProjectsContent: Record<CaseStudyLang, CaseStudyContent> = {
  en: {
    slug: 'early-projects',
    altSlug: 'proyectos-iniciales',
    readingTime: '5 min read',
    seo: {
      title: 'Early projects archive — thesis, Aquolity and experiments',
      description:
        'A thesis framework for dynamic graphical components with honorable mention, the Aquolity MVP, a Project Tango prototype, and a Solana NFT marketplace prototype.',
    },
    header: {
      kicker: 'Archive · Early projects',
      h1: 'Early projects archive',
      subtitle:
        'Dated work, presented as history: a thesis, an MVP and two prototypes.',
      date: 'Sep 1, 2026',
    },
    nav: { breadcrumbHome: 'Home', breadcrumbCurrent: 'Early projects' },
    directAnswer:
      'This archive collects Brenda Manrique\'s earlier and side work: a 2013 undergraduate thesis framework that received an honorable mention, a software MVP for the Aquolity crowdsourcing concept, a collaborative Project Tango VR/AR prototype she coded part of in C#, and a Solana-based NFT marketplace prototype.',
    sections: {
      android: {
        heading: 'Dynamic graphical-component framework — 2013 thesis',
        blocks: [
          {
            kind: 'prose',
            text: 'Her undergraduate thesis: she designed and implemented a framework for dynamically generating graphical components for a particular class of business applications, then evaluated it experimentally. The trials measured a reduction in implementation time against building the same scaffolding by hand.',
          },
          {
            kind: 'callout',
            text: 'The thesis received an honorable mention.',
          },
          {
            kind: 'prose',
            text: 'An early instance of the same instinct that shows up throughout her career: notice a process being repeated by hand, then turn the repetition into structure.',
          },
        ],
      },
      aquolity: {
        heading: 'Aquolity — MVP',
        blocks: [
          {
            kind: 'prose',
            text: 'She built a software MVP for Aquolity, an early crowdsourcing concept for monitoring water quality, focused on communities where usable water quality is a development issue.',
          },
          {
            kind: 'prose',
            text: 'The idea included a coordination layer connecting the people who detect a problem with those able to deliver a solution. It was an MVP, never a deployed platform.',
          },
        ],
      },
      experiments: {
        heading: 'Two prototypes',
        blocks: [
          {
            kind: 'cards',
            items: [
              {
                title: 'Project Tango · VR/AR prototype',
                detail: 'A collaborative spatial-computing project organised through the New York City Google Developer Group for a Google Project Tango contest. She coded part of it in C#.',
              },
              {
                title: 'Solana NFT marketplace · prototype',
                detail: 'She wrote the smart contracts and built the minting flow, marketplace logic and wallet UI. A concept prototype; it did not become a business.',
              },
            ],
          },
        ],
      },
      portfolios: {
        heading: 'Older portfolios — and an honesty note',
        blocks: [
          {
            kind: 'prose',
            text: 'An older Django 1.8 portfolio with forms, routing, templates and static assets, followed by a React portfolio with animated timelines and GitHub Pages deployment.',
          },
          {
            kind: 'warning',
            text: 'Template placeholder projects from those repositories are not presented as her work. Only projects grounded in her actual timeline are carried into the current site.',
          },
        ],
      },
      'why-archive': {
        heading: 'Why keep an archive at all',
        blocks: [
          {
            kind: 'quote',
            text: 'The point is not to make every old project look modern. It is that experimenting with intelligent systems has been part of the path for a long time.',
          },
        ],
      },
    },
    faq: {
      heading: 'Frequently asked questions',
      items: [
        {
          q: 'Are these projects still active?',
          a: 'No. This is an archive: a 2013 thesis, an MVP and two prototypes, presented as history rather than as live products.',
        },
        {
          q: 'What was the thesis award?',
          a: 'The thesis received an honorable mention at Universidad Católica de Santa María, where she completed a BSc in Systems Engineering with an Artificial Intelligence concentration between 2007 and 2013.',
        },
        {
          q: 'Why mention the old portfolio repositories?',
          a: 'Because they contain template placeholder projects that were never hers, and an archive that quietly inherited them would be misleading. Only projects grounded in her actual timeline are carried into this site.',
        },
      ],
    },
    cta: {
      heading: 'The trajectory is the point',
      body: 'From an AI-concentration degree and a 2010 research award to applied AI now.',
      ctaLabel: 'The fractal research',
      ctaHref: '/fractal-dimension',
      secondaryLabel: 'About Brenda',
      secondaryHref: '/about',
    },
  },
  es: {
    slug: 'proyectos-iniciales',
    altSlug: 'early-projects',
    readingTime: '5 min de lectura',
    seo: {
      title: 'Archivo de proyectos iniciales — tesis, Aquolity y experimentos',
      description:
        'Una tesis de framework de componentes gráficos dinámicos con mención honorífica, el MVP de Aquolity, un prototipo de Project Tango y un prototipo de marketplace NFT en Solana.',
    },
    header: {
      kicker: 'Archivo · Proyectos iniciales',
      h1: 'Archivo de proyectos iniciales',
      subtitle:
        'Trabajo fechado, presentado como historia: una tesis, un MVP y dos prototipos.',
      date: '1 sep 2026',
    },
    nav: { breadcrumbHome: 'Inicio', breadcrumbCurrent: 'Proyectos iniciales' },
    directAnswer:
      'Este archivo reúne el trabajo anterior y los proyectos paralelos de Brenda Manrique: una tesis de licenciatura de 2013 que recibió mención honorífica, un MVP de software para el concepto de crowdsourcing Aquolity, un prototipo colaborativo de VR/AR para Project Tango del que programó una parte en C#, y un prototipo de marketplace NFT en Solana.',
    sections: {
      android: {
        heading: 'Framework de componentes gráficos dinámicos — tesis de 2013',
        blocks: [
          {
            kind: 'prose',
            text: 'Su tesis de licenciatura: diseñó e implementó un framework para generar dinámicamente componentes gráficos en una clase concreta de aplicaciones de negocio, y lo evaluó experimentalmente. Los ensayos midieron una reducción del tiempo de implementación frente a construir el mismo andamiaje a mano.',
          },
          {
            kind: 'callout',
            text: 'La tesis recibió una mención honorífica.',
          },
          {
            kind: 'prose',
            text: 'Una instancia temprana del mismo instinto que aparece en toda su carrera: detectar un proceso que se repite a mano y convertir la repetición en estructura.',
          },
        ],
      },
      aquolity: {
        heading: 'Aquolity — MVP',
        blocks: [
          {
            kind: 'prose',
            text: 'Construyó un MVP de software para Aquolity, un concepto temprano de crowdsourcing para monitorizar la calidad del agua, centrado en comunidades donde la calidad del agua de uso es un problema de desarrollo.',
          },
          {
            kind: 'prose',
            text: 'La idea incluía una capa de coordinación que conectaba a quien detecta un problema con quien puede aportar una solución. Fue un MVP, nunca una plataforma desplegada.',
          },
        ],
      },
      experiments: {
        heading: 'Dos prototipos',
        blocks: [
          {
            kind: 'cards',
            items: [
              {
                title: 'Project Tango · prototipo VR/AR',
                detail: 'Un proyecto colaborativo de computación espacial organizado a través del New York City Google Developer Group para un concurso de Google Project Tango. Ella programó parte del proyecto en C#.',
              },
              {
                title: 'Marketplace NFT en Solana · prototipo',
                detail: 'Escribió los smart contracts y construyó el flujo de minteo, la lógica de marketplace y la UI de wallet. Un prototipo conceptual; no llegó a ser un negocio.',
              },
            ],
          },
        ],
      },
      portfolios: {
        heading: 'Portafolios antiguos — y una nota de honestidad',
        blocks: [
          {
            kind: 'prose',
            text: 'Un portafolio antiguo en Django 1.8 con formularios, rutas, plantillas y assets estáticos, seguido de un portafolio en React con líneas de tiempo animadas y despliegue en GitHub Pages.',
          },
          {
            kind: 'warning',
            text: 'Los proyectos de plantilla de esos repositorios no se presentan como trabajo suyo. Solo los proyectos anclados en su trayectoria real pasan al sitio actual.',
          },
        ],
      },
      'why-archive': {
        heading: 'Por qué mantener un archivo',
        blocks: [
          {
            kind: 'quote',
            text: 'El objetivo no es hacer que todo proyecto antiguo parezca moderno. Es que experimentar con sistemas inteligentes lleva mucho tiempo formando parte del camino.',
          },
        ],
      },
    },
    faq: {
      heading: 'Preguntas frecuentes',
      items: [
        {
          q: '¿Estos proyectos siguen activos?',
          a: 'No. Esto es un archivo: una tesis de 2013, un MVP y dos prototipos, presentados como historia, no como productos vivos.',
        },
        {
          q: '¿Cuál fue el premio de la tesis?',
          a: 'La tesis recibió una mención honorífica en la Universidad Católica de Santa María, donde completó la licenciatura en Ingeniería de Sistemas con concentración en Inteligencia Artificial entre 2007 y 2013.',
        },
        {
          q: '¿Por qué mencionar los repositorios de portafolios antiguos?',
          a: 'Porque contienen proyectos de plantilla que nunca fueron suyos, y un archivo que los heredara en silencio sería engañoso. Solo los proyectos anclados en su trayectoria real pasan a este sitio.',
        },
      ],
    },
    cta: {
      heading: 'La trayectoria es lo que cuenta',
      body: 'De una carrera con concentración en IA y un premio de investigación en 2010 a la IA aplicada de ahora.',
      ctaLabel: 'La investigación fractal',
      ctaHref: '/dimension-fractal',
      secondaryLabel: 'Sobre Brenda',
      secondaryHref: '/sobre-mi',
    },
  },
}
