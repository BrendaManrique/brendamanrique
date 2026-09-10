import type { CaseStudyContent, CaseStudyLang } from './case-study'

export const earlyProjectsContent: Record<CaseStudyLang, CaseStudyContent> = {
  en: {
    slug: 'early-projects',
    altSlug: 'proyectos-iniciales',
    readingTime: '5 min read',
    seo: {
      title: 'Early projects archive — thesis, Aquolity and experiments',
      description:
        'An Android data-acquisition framework thesis with honorable mention, the Aquolity water-quality concept, a Project Tango VR experiment, a 2022 blockchain marketplace, and an honest note about the older portfolios.',
    },
    header: {
      kicker: 'Archive · Early projects',
      h1: 'Early projects archive',
      subtitle:
        'The point is not to make every old project look modern. It is to show that experimentation with intelligent systems has been part of the path for a long time.',
      date: 'Sep 1, 2026',
    },
    nav: { breadcrumbHome: 'Home', breadcrumbCurrent: 'Early projects' },
    directAnswer:
      'This archive collects Brenda Manrique\'s pre-2015 and side work: a 2013 Android data-acquisition framework thesis that received an honorable mention, the Aquolity water-quality crowdsourcing concept, a Project Tango VR contest entry, a 2022 Germany-based blockchain marketplace, and an honest note about which archived portfolio projects are hers and which are template placeholders.',
    sections: {
      android: {
        heading: 'Android data-acquisition framework — 2013 thesis',
        blocks: [
          {
            kind: 'prose',
            text: 'Her undergraduate thesis: a framework for implementing mobile data-acquisition applications on Android through dynamic creation of graphical components. Instead of rebuilding the same acquisition scaffolding for every app, the framework provided a reusable conceptual and technical structure, reducing implementation time.',
          },
          {
            kind: 'callout',
            text: 'The thesis received an honorable mention — a felicitación pública.',
          },
          {
            kind: 'prose',
            text: 'It is an early instance of the same instinct that shows up throughout her career: notice a process being repeated by hand, then turn the repetition into structure.',
          },
        ],
      },
      aquolity: {
        heading: 'Aquolity — social tech',
        blocks: [
          {
            kind: 'prose',
            text: 'A crowdsourcing concept for monitoring water quality worldwide, focused especially on communities where potable and usable water quality is a development issue.',
          },
          {
            kind: 'prose',
            text: 'It was also a marketplace and coordination layer: connect the people who detect a problem with the organizations or individuals capable of delivering an effective solution. Detection alone does not fix water.',
          },
        ],
      },
      experiments: {
        heading: 'Project Tango and a blockchain marketplace',
        blocks: [
          {
            kind: 'cards',
            items: [
              {
                title: 'Project Tango VR game',
                detail: 'A C# virtual-reality game built for a Google Project Tango contest through the NYC Google Developer Group.',
              },
              {
                title: 'Blockchain marketplace · 2022 · Germany',
                detail: 'Smart contracts plus a marketplace for NFT minting and wallet display.',
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
            text: 'The point is not to make every old project look modern. It is to show that experimentation with intelligent systems has been part of the path for a long time.',
          },
        ],
      },
    },
    faq: {
      heading: 'Frequently asked questions',
      items: [
        {
          q: 'Are these projects still active?',
          a: 'No. This is an archive. These are dated pieces of work — a 2013 thesis, a concept, a contest entry, a 2022 side project — presented as history rather than as live products.',
        },
        {
          q: 'What was the thesis award?',
          a: 'The Android data-acquisition framework thesis received an honorable mention (felicitación pública) at Universidad Católica de Santa María, where she completed a BSc in Systems Engineering with an Artificial Intelligence concentration between 2007 and 2013.',
        },
        {
          q: 'Why mention the old portfolio repositories?',
          a: 'Because they contain template placeholder projects that were never hers, and an archive that quietly inherited them would be misleading. Only projects grounded in her actual timeline are carried into this site.',
        },
      ],
    },
    cta: {
      heading: 'The trajectory is the point',
      body: 'From an AI-concentration degree and a fractal research award to agentic systems today.',
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
        'Una tesis de framework de adquisición de datos en Android con mención honorífica, el concepto Aquolity de calidad del agua, un experimento de VR para Project Tango, un marketplace blockchain de 2022 y una nota honesta sobre los portafolios antiguos.',
    },
    header: {
      kicker: 'Archivo · Proyectos iniciales',
      h1: 'Archivo de proyectos iniciales',
      subtitle:
        'El objetivo no es hacer que todo proyecto antiguo parezca moderno. Es mostrar que experimentar con sistemas inteligentes lleva mucho tiempo formando parte del camino.',
      date: '1 sep 2026',
    },
    nav: { breadcrumbHome: 'Inicio', breadcrumbCurrent: 'Proyectos iniciales' },
    directAnswer:
      'Este archivo reúne el trabajo anterior a 2015 y los proyectos paralelos de Brenda Manrique: una tesis de 2013 sobre un framework de adquisición de datos en Android que recibió mención honorífica, el concepto de crowdsourcing Aquolity para calidad del agua, una entrada a un concurso de Project Tango, un marketplace blockchain en Alemania en 2022, y una nota honesta sobre qué proyectos de los portafolios archivados son suyos y cuáles son plantillas de ejemplo.',
    sections: {
      android: {
        heading: 'Framework de adquisición de datos en Android — tesis de 2013',
        blocks: [
          {
            kind: 'prose',
            text: 'Su tesis de licenciatura: un framework para implementar aplicaciones móviles de adquisición de datos en Android mediante la creación dinámica de componentes gráficos. En lugar de reconstruir el mismo andamiaje de adquisición en cada app, el framework aportaba una estructura conceptual y técnica reutilizable, reduciendo el tiempo de implementación.',
          },
          {
            kind: 'callout',
            text: 'La tesis recibió una mención honorífica: una felicitación pública.',
          },
          {
            kind: 'prose',
            text: 'Es una instancia temprana del mismo instinto que aparece en toda su carrera: detectar un proceso que se repite a mano y convertir la repetición en estructura.',
          },
        ],
      },
      aquolity: {
        heading: 'Aquolity — tecnología social',
        blocks: [
          {
            kind: 'prose',
            text: 'Un concepto de crowdsourcing para monitorizar la calidad del agua en todo el mundo, centrado especialmente en comunidades donde la calidad del agua potable y de uso es un problema de desarrollo.',
          },
          {
            kind: 'prose',
            text: 'También era una capa de marketplace y coordinación: conectar a quienes detectan un problema con las organizaciones o personas capaces de aportar una solución efectiva. Detectar por sí solo no arregla el agua.',
          },
        ],
      },
      experiments: {
        heading: 'Project Tango y un marketplace blockchain',
        blocks: [
          {
            kind: 'cards',
            items: [
              {
                title: 'Juego VR para Project Tango',
                detail: 'Un juego de realidad virtual en C# construido para un concurso de Google Project Tango a través del NYC Google Developer Group.',
              },
              {
                title: 'Marketplace blockchain · 2022 · Alemania',
                detail: 'Smart contracts más un marketplace para acuñación de NFTs y visualización de wallets.',
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
            text: 'El objetivo no es hacer que todo proyecto antiguo parezca moderno. Es mostrar que experimentar con sistemas inteligentes lleva mucho tiempo formando parte del camino.',
          },
        ],
      },
    },
    faq: {
      heading: 'Preguntas frecuentes',
      items: [
        {
          q: '¿Estos proyectos siguen activos?',
          a: 'No. Esto es un archivo. Son piezas de trabajo fechadas —una tesis de 2013, un concepto, una entrada a un concurso, un proyecto paralelo de 2022— presentadas como historia, no como productos vivos.',
        },
        {
          q: '¿Cuál fue el premio de la tesis?',
          a: 'La tesis del framework de adquisición de datos en Android recibió una mención honorífica (felicitación pública) en la Universidad Católica de Santa María, donde completó la licenciatura en Ingeniería de Sistemas con concentración en Inteligencia Artificial entre 2007 y 2013.',
        },
        {
          q: '¿Por qué mencionar los repositorios de portafolios antiguos?',
          a: 'Porque contienen proyectos de plantilla que nunca fueron suyos, y un archivo que los heredara en silencio sería engañoso. Solo los proyectos anclados en su trayectoria real pasan a este sitio.',
        },
      ],
    },
    cta: {
      heading: 'La trayectoria es lo que cuenta',
      body: 'De una carrera con concentración en IA y un premio de investigación fractal a los sistemas agénticos de hoy.',
      ctaLabel: 'La investigación fractal',
      ctaHref: '/dimension-fractal',
      secondaryLabel: 'Sobre Brenda',
      secondaryHref: '/sobre-mi',
    },
  },
}
