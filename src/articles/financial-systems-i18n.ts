import type { CaseStudyContent, CaseStudyLang } from './case-study'

export const financialSystemsContent: Record<CaseStudyLang, CaseStudyContent> = {
  en: {
    slug: 'financial-systems',
    altSlug: 'sistemas-financieros',
    readingTime: '5 min read',
    seo: {
      title: 'Financial systems: JPMorgan and Money.Net',
      description:
        'Leading frontend engineering for a derivatives portfolio application on JPMorgan Athena, and helping build Money.Net\'s markets terminal from the ground up.',
    },
    header: {
      kicker: 'Case study · JPMorgan + Money.Net',
      h1: 'Financial systems: JPMorgan and Money.Net',
      subtitle:
        'Derivatives portfolio management on Athena, a markets terminal built from the ground up, and the reliability habits that came out of both.',
      date: 'Sep 1, 2026',
    },
    nav: { breadcrumbHome: 'Home', breadcrumbCurrent: 'Financial systems' },
    directAnswer:
      'Brenda Manrique spent six years inside financial infrastructure: JPMorgan Asset Management (2018–2022) as a Senior Associate software engineer, where she led frontend engineering for a derivatives portfolio-management application built on Athena; and Money.Net (2016–2018), where she joined while the new markets terminal was being created and coded its initial frontend from scratch.',
    sections: {
      jpmorgan: {
        heading: 'JPMorgan Asset Management (2018–2022)',
        blocks: [
          {
            kind: 'prose',
            text: 'She led frontend engineering for a derivatives portfolio-management application built on Athena, JPMorgan\'s cross-asset risk platform. That meant making the frontend architecture decisions and being the main frontend developer for that phase of the work, while also contributing across the backend and integration layers.',
          },
          {
            kind: 'quote',
            text: 'This is the part of finance where software is inseparable from domain logic: positions, risk, pricing, portfolio views, data quality and operational reliability.',
          },
          {
            kind: 'bullets',
            items: [
              'Frontend architecture and implementation ownership for that phase.',
              'Contributions across backend and integration layers.',
              'Java, Python, JavaScript, TypeScript and C#.',
              'Contributed to decommissioning a legacy Trading, Risk and P&L platform for Fixed Income.',
            ],
          },
        ],
      },
      moneynet: {
        heading: 'Money.Net (2016–2018)',
        blocks: [
          {
            kind: 'prose',
            text: 'She joined while Money.Net was creating a new financial-markets terminal, and coded the initial frontend from scratch. She also contributed to parts of the backend, and kept working on the product as the architecture evolved through later generations she did not build alone.',
          },
          {
            kind: 'bullets',
            items: [
              'The seed frontend, in ReactJS.',
              'Backend contributions with Java 8, WebSockets, gRPC and microservices.',
              'Python REST APIs.',
              'Real-time messaging including XMPP.',
            ],
          },
          {
            kind: 'flow',
            steps: ['Market feeds', 'Streaming services', 'WebSockets / APIs', 'React terminal', 'Trader / analyst'],
            caption: 'Real-time, high-volume market data, visible directly to the user.',
          },
          {
            kind: 'prose',
            text: 'A terminal is an unforgiving place to learn real-time engineering. If the stream stalls, nobody needs a dashboard to notice.',
          },
        ],
      },
      'earlier-work': {
        heading: 'Before New York',
        blocks: [
          {
            kind: 'cards',
            items: [
              {
                title: 'Independent projects · Jan 2014 – Aug 2015',
                detail: 'Freelance, personal and learning projects in JavaScript and Python while preparing for graduate study and transitioning to New York.',
              },
              {
                title: 'DLYA Bantotal · Oct 2012 – May 2013',
                detail: 'Technology developer consultant on a core-banking implementation in Peru: software built with GeneXus to close implementation gaps, support on credit-risk business issues, and Oracle database and query analysis.',
              },
            ],
          },
        ],
      },
      'why-it-matters': {
        heading: 'Why this matters now',
        blocks: [
          {
            kind: 'quote',
            text: 'Financial software trained me to care about things AI prototypes often postpone: stale data, latency, deterministic fallbacks, auditability, backwards compatibility and the cost of making a confident mistake.',
          },
          {
            kind: 'prose',
            text: 'A demo can skip all of it. Something people actually operate cannot.',
          },
        ],
      },
    },
    faq: {
      heading: 'Frequently asked questions',
      items: [
        {
          q: 'What is Athena?',
          a: 'Athena is JPMorgan\'s cross-asset risk platform. Between October 2018 and August 2022, Brenda led frontend engineering for a derivatives portfolio-management application built on it, and contributed across the backend and integration layers.',
        },
        {
          q: 'Did she build the Money.Net terminal alone?',
          a: 'No. She joined while the new terminal was being created and coded the initial frontend from scratch, plus parts of the backend. The architecture went through later generations built by the team, and this page does not collapse those into one claim.',
        },
        {
          q: 'Are there performance numbers?',
          a: 'No. Throughput and latency figures for proprietary financial systems are not hers to publish, so none are claimed.',
        },
      ],
    },
    cta: {
      heading: 'From financial systems to applied AI',
      body: 'The reliability questions are the same. The stack is different.',
      ctaLabel: 'Read the applied-AI build log',
      ctaHref: '/applied-ai',
      secondaryLabel: 'The Moody\'s case study',
      secondaryHref: '/moodys-credit-intelligence',
    },
  },
  es: {
    slug: 'sistemas-financieros',
    altSlug: 'financial-systems',
    readingTime: '5 min de lectura',
    seo: {
      title: 'Sistemas financieros: JPMorgan y Money.Net',
      description:
        'Liderar la ingeniería frontend de una aplicación de carteras de derivados sobre Athena, y ayudar a construir el terminal de Money.Net desde cero.',
    },
    header: {
      kicker: 'Case study · JPMorgan + Money.Net',
      h1: 'Sistemas financieros: JPMorgan y Money.Net',
      subtitle:
        'Gestión de carteras de derivados sobre Athena, un terminal de mercados construido desde cero, y los hábitos de fiabilidad que salieron de ambos.',
      date: '1 sep 2026',
    },
    nav: { breadcrumbHome: 'Inicio', breadcrumbCurrent: 'Sistemas financieros' },
    directAnswer:
      'Brenda Manrique pasó seis años dentro de infraestructura financiera: JPMorgan Asset Management (2018–2022) como Senior Associate, donde lideró la ingeniería frontend de una aplicación de gestión de carteras de derivados construida sobre Athena; y Money.Net (2016–2018), donde se incorporó mientras se creaba el nuevo terminal de mercados y programó su frontend inicial desde cero.',
    sections: {
      jpmorgan: {
        heading: 'JPMorgan Asset Management (2018–2022)',
        blocks: [
          {
            kind: 'prose',
            text: 'Lideró la ingeniería frontend de una aplicación de gestión de carteras de derivados construida sobre Athena, la plataforma de riesgo cross-asset de JPMorgan. Eso significó tomar las decisiones de arquitectura frontend y ser la desarrolladora frontend principal de esa fase, además de contribuir en las capas de backend e integración.',
          },
          {
            kind: 'quote',
            text: 'Es la parte de las finanzas donde el software es inseparable de la lógica de dominio: posiciones, riesgo, pricing, vistas de cartera, calidad del dato y fiabilidad operativa.',
          },
          {
            kind: 'bullets',
            items: [
              'Arquitectura e implementación frontend en esa fase.',
              'Contribuciones en las capas de backend e integración.',
              'Java, Python, JavaScript, TypeScript y C#.',
              'Participación en el desmantelamiento de una plataforma heredada de Trading, Riesgo y P&L para Renta Fija.',
            ],
          },
        ],
      },
      moneynet: {
        heading: 'Money.Net (2016–2018)',
        blocks: [
          {
            kind: 'prose',
            text: 'Se incorporó mientras Money.Net creaba un nuevo terminal de mercados financieros, y programó el frontend inicial desde cero. También contribuyó a partes del backend y siguió trabajando en el producto según la arquitectura evolucionaba hacia generaciones posteriores que no construyó sola.',
          },
          {
            kind: 'bullets',
            items: [
              'El frontend semilla, en ReactJS.',
              'Contribuciones de backend con Java 8, WebSockets, gRPC y microservicios.',
              'APIs REST en Python.',
              'Mensajería en tiempo real, incluido XMPP.',
            ],
          },
          {
            kind: 'flow',
            steps: ['Feeds de mercado', 'Servicios de streaming', 'WebSockets / APIs', 'Terminal React', 'Trader / analista'],
            caption: 'Datos de mercado en tiempo real y alto volumen, visibles directamente para el usuario.',
          },
          {
            kind: 'prose',
            text: 'Un terminal es un sitio implacable para aprender ingeniería en tiempo real. Si el stream se para, nadie necesita un dashboard para darse cuenta.',
          },
        ],
      },
      'earlier-work': {
        heading: 'Antes de Nueva York',
        blocks: [
          {
            kind: 'cards',
            items: [
              {
                title: 'Proyectos independientes · ene 2014 – ago 2015',
                detail: 'Proyectos freelance, personales y de aprendizaje en JavaScript y Python mientras preparaba el posgrado y la transición a Nueva York.',
              },
              {
                title: 'DLYA Bantotal · oct 2012 – may 2013',
                detail: 'Consultora de desarrollo tecnológico en una implementación de core bancario en Perú: software con GeneXus para cerrar brechas de la implementación, soporte a temas de negocio de riesgo de crédito y análisis de base de datos y consultas Oracle.',
              },
            ],
          },
        ],
      },
      'why-it-matters': {
        heading: 'Por qué importa ahora',
        blocks: [
          {
            kind: 'quote',
            text: 'El software financiero me entrenó para preocuparme por lo que los prototipos de IA suelen posponer: datos obsoletos, latencia, fallbacks deterministas, auditabilidad, compatibilidad hacia atrás y el coste de equivocarse con seguridad.',
          },
          {
            kind: 'prose',
            text: 'Una demo puede saltarse todo eso. Algo que la gente tiene que operar de verdad, no.',
          },
        ],
      },
    },
    faq: {
      heading: 'Preguntas frecuentes',
      items: [
        {
          q: '¿Qué es Athena?',
          a: 'Athena es la plataforma de riesgo cross-asset de JPMorgan. Entre octubre de 2018 y agosto de 2022, Brenda lideró la ingeniería frontend de una aplicación de gestión de carteras de derivados construida sobre ella, y contribuyó en las capas de backend e integración.',
        },
        {
          q: '¿Construyó sola el terminal de Money.Net?',
          a: 'No. Se incorporó mientras se creaba el nuevo terminal y programó el frontend inicial desde cero, además de partes del backend. La arquitectura pasó después por generaciones posteriores construidas por el equipo, y esta página no las colapsa en una sola afirmación.',
        },
        {
          q: '¿Hay cifras de rendimiento?',
          a: 'No. Las cifras de throughput o latencia de sistemas financieros propietarios no le corresponde publicarlas, así que no se afirman.',
        },
      ],
    },
    cta: {
      heading: 'De los sistemas financieros a la IA aplicada',
      body: 'Las preguntas de fiabilidad son las mismas. El stack es distinto.',
      ctaLabel: 'Leer el build log de IA aplicada',
      ctaHref: '/ia-aplicada',
      secondaryLabel: 'El case study de Moody\'s',
      secondaryHref: '/moodys',
    },
  },
}
