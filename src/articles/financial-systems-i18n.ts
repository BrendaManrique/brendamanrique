import type { CaseStudyContent, CaseStudyLang } from './case-study'

export const financialSystemsContent: Record<CaseStudyLang, CaseStudyContent> = {
  en: {
    slug: 'financial-systems',
    altSlug: 'sistemas-financieros',
    readingTime: '6 min read',
    seo: {
      title: 'Financial systems engineering before the AI chapter',
      description:
        'JPMorgan derivatives and risk infrastructure, a Money.Net market terminal built from scratch, and the reliability habits that now shape how Brenda Manrique thinks about AI agents.',
    },
    header: {
      kicker: 'Case study · JPMorgan + Money.Net',
      h1: 'Financial systems engineering before the AI chapter',
      subtitle:
        'Real-time market data, derivatives portfolio management, risk platforms and the reliability habits that now shape how I think about AI agents.',
      date: 'Sep 1, 2026',
    },
    nav: { breadcrumbHome: 'Home', breadcrumbCurrent: 'Financial systems' },
    directAnswer:
      'Before the AI chapter, Brenda Manrique spent six years inside financial infrastructure: JPMorgan (2018–2022) as a Senior Associate software engineer on derivatives portfolio management and risk platforms, and Money.Net (2016–2018) building a financial markets terminal from scratch. That work is where the reliability instincts came from — stale data, latency, deterministic fallbacks and the cost of a confident mistake.',
    sections: {
      jpmorgan: {
        heading: 'JPMorgan: derivatives and risk infrastructure (2018–2022)',
        blocks: [
          {
            kind: 'prose',
            text: 'Senior Associate software engineer in JPMorgan\'s investment and asset-management environment. She led frontend development and contributed backend engineering for a derivatives portfolio-management solution built on Athena, JPMorgan\'s proprietary cross-asset risk platform.',
          },
          {
            kind: 'quote',
            text: 'The work sat in the part of finance where software is inseparable from domain logic: positions, risk, pricing, portfolio views, data quality and operational reliability.',
          },
          {
            kind: 'bullets',
            items: [
              'Java, JavaScript and Python.',
              'Private compute infrastructure and CI/CD.',
              'Frontend ownership with backend contributions.',
              'Work toward decommissioning a Trading, Risk and P&L platform for Fixed Income.',
            ],
          },
        ],
      },
      moneynet: {
        heading: 'Money.Net: a terminal from scratch (2016–2018)',
        blocks: [
          {
            kind: 'prose',
            text: 'A financial-markets terminal whose real-time behaviour is visible directly to the user — which is a specific kind of engineering pressure. If the stream stalls, nobody needs a dashboard to notice.',
          },
          {
            kind: 'bullets',
            items: [
              'High-performance components with ReactJS and Java 8.',
              'Asynchronous and network programming: WebSockets, gRPC and microservices.',
              'Optimized for high-frequency stock-streaming data.',
              'Python REST APIs.',
              'Real-time messaging protocols including XMPP.',
            ],
          },
          {
            kind: 'flow',
            steps: ['Market feeds', 'Streaming services', 'WebSockets / APIs', 'React terminal', 'Trader / analyst'],
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
                title: 'Independent consultant · Jan 2014 – Aug 2015',
                detail: 'JavaScript and Python projects in New York and while travelling, alongside English studies, SAP ABAP learning and the transition into NYU\'s Management of Technology program.',
              },
              {
                title: 'DLYA Bantotal · Oct 2012 – May 2013',
                detail: 'Technology developer consultant on a core-banking implementation in Peru: software to close implementation gaps using GeneXus, support on credit-risk business issues, and Oracle database and query analysis.',
              },
            ],
          },
        ],
      },
      'why-it-matters': {
        heading: 'Why this matters for AI systems',
        blocks: [
          {
            kind: 'quote',
            text: 'Financial software trained me to care about things AI prototypes often postpone: stale data, latency, deterministic fallbacks, auditability, high-volume execution, backwards compatibility and the cost of making a confident mistake. That is the engineering foundation I want to bring into agentic AI.',
          },
          {
            kind: 'prose',
            text: 'A demo can skip all of it. A production installation cannot. That gap — between an agent that answers and an agent a company can operate — is the whole subject of the consulting build log.',
          },
        ],
      },
    },
    faq: {
      heading: 'Frequently asked questions',
      items: [
        {
          q: 'What is Athena?',
          a: 'Athena is JPMorgan\'s proprietary cross-asset risk platform. Brenda led frontend development and contributed backend engineering for a derivatives portfolio-management solution built on it, between October 2018 and August 2022.',
        },
        {
          q: 'What does "built a terminal from scratch" mean?',
          a: 'At Money.Net, between January 2016 and June 2018, she built components of a financial markets terminal using asynchronous and network programming, WebSockets, gRPC and microservices, with high-performance ReactJS and Java 8 components optimized for high-frequency stock-streaming data, plus Python REST APIs and real-time chat integrations including XMPP.',
        },
        {
          q: 'Are there performance numbers for this work?',
          a: 'No. This portfolio only publishes four hard metrics — roughly 5,000 scorecard PDs, two working days, 15+ years, and the dated employment ranges. Throughput or latency figures for proprietary financial systems are not hers to publish, so they are not claimed.',
        },
      ],
    },
    cta: {
      heading: 'From financial systems to agents',
      body: 'The reliability questions are the same. The stack is different. That is the bet the current chapter is making.',
      ctaLabel: 'Read the consulting build log',
      ctaHref: '/agentic-ai-consulting',
      secondaryLabel: 'The Moody\'s case study',
      secondaryHref: '/moodys-credit-intelligence',
    },
  },
  es: {
    slug: 'sistemas-financieros',
    altSlug: 'financial-systems',
    readingTime: '6 min de lectura',
    seo: {
      title: 'Ingeniería de sistemas financieros antes del capítulo de IA',
      description:
        'Infraestructura de derivados y riesgo en JPMorgan, un terminal de mercado construido desde cero en Money.Net, y los hábitos de fiabilidad que hoy moldean cómo Brenda Manrique piensa los agentes de IA.',
    },
    header: {
      kicker: 'Case study · JPMorgan + Money.Net',
      h1: 'Ingeniería de sistemas financieros antes del capítulo de IA',
      subtitle:
        'Datos de mercado en tiempo real, gestión de carteras de derivados, plataformas de riesgo y los hábitos de fiabilidad que hoy moldean cómo pienso los agentes de IA.',
      date: '1 sep 2026',
    },
    nav: { breadcrumbHome: 'Inicio', breadcrumbCurrent: 'Sistemas financieros' },
    directAnswer:
      'Antes del capítulo de IA, Brenda Manrique pasó seis años dentro de infraestructura financiera: JPMorgan (2018–2022) como Senior Associate en gestión de carteras de derivados y plataformas de riesgo, y Money.Net (2016–2018) construyendo un terminal de mercados desde cero. De ahí vienen los instintos de fiabilidad: datos obsoletos, latencia, fallbacks deterministas y el coste de un error confiado.',
    sections: {
      jpmorgan: {
        heading: 'JPMorgan: derivados e infraestructura de riesgo (2018–2022)',
        blocks: [
          {
            kind: 'prose',
            text: 'Ingeniera de software Senior Associate en el entorno de banca de inversión y gestión de activos de JPMorgan. Lideró el desarrollo frontend y contribuyó en backend a una solución de gestión de carteras de derivados construida sobre Athena, la plataforma propietaria de riesgo cross-asset de JPMorgan.',
          },
          {
            kind: 'quote',
            text: 'El trabajo estaba en la parte de las finanzas donde el software es inseparable de la lógica de dominio: posiciones, riesgo, pricing, vistas de cartera, calidad del dato y fiabilidad operativa.',
          },
          {
            kind: 'bullets',
            items: [
              'Java, JavaScript y Python.',
              'Infraestructura de cómputo privada y CI/CD.',
              'Propiedad del frontend con contribuciones en backend.',
              'Trabajo orientado al desmantelamiento de una plataforma de Trading, Riesgo y P&L para Renta Fija.',
            ],
          },
        ],
      },
      moneynet: {
        heading: 'Money.Net: un terminal desde cero (2016–2018)',
        blocks: [
          {
            kind: 'prose',
            text: 'Un terminal de mercados financieros cuyo comportamiento en tiempo real es visible directamente para el usuario, que es un tipo concreto de presión de ingeniería. Si el stream se para, nadie necesita un dashboard para darse cuenta.',
          },
          {
            kind: 'bullets',
            items: [
              'Componentes de alto rendimiento con ReactJS y Java 8.',
              'Programación asíncrona y de red: WebSockets, gRPC y microservicios.',
              'Optimizado para streaming bursátil de alta frecuencia.',
              'APIs REST en Python.',
              'Protocolos de mensajería en tiempo real, incluido XMPP.',
            ],
          },
          {
            kind: 'flow',
            steps: ['Feeds de mercado', 'Servicios de streaming', 'WebSockets / APIs', 'Terminal React', 'Trader / analista'],
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
                title: 'Consultora independiente · ene 2014 – ago 2015',
                detail: 'Proyectos en JavaScript y Python en Nueva York y viajando, en paralelo a estudios de inglés, aprendizaje de SAP ABAP y la transición al máster en Management of Technology de NYU.',
              },
              {
                title: 'DLYA Bantotal · oct 2012 – may 2013',
                detail: 'Consultora de desarrollo tecnológico en una implementación de core bancario en Perú: software para cerrar brechas de la implementación con GeneXus, soporte a temas de negocio de riesgo de crédito y análisis de base de datos y consultas Oracle.',
              },
            ],
          },
        ],
      },
      'why-it-matters': {
        heading: 'Por qué importa para los sistemas de IA',
        blocks: [
          {
            kind: 'quote',
            text: 'El software financiero me entrenó para preocuparme por lo que los prototipos de IA suelen posponer: datos obsoletos, latencia, fallbacks deterministas, auditabilidad, ejecución de alto volumen, compatibilidad hacia atrás y el coste de cometer un error con confianza. Esa es la base de ingeniería que quiero llevar a la IA agéntica.',
          },
          {
            kind: 'prose',
            text: 'Una demo puede saltarse todo eso. Una instalación en producción no. Esa brecha —entre un agente que responde y un agente que una empresa puede operar— es todo el tema del build log de consultoría.',
          },
        ],
      },
    },
    faq: {
      heading: 'Preguntas frecuentes',
      items: [
        {
          q: '¿Qué es Athena?',
          a: 'Athena es la plataforma propietaria de riesgo cross-asset de JPMorgan. Brenda lideró el desarrollo frontend y contribuyó en backend a una solución de gestión de carteras de derivados construida sobre ella, entre octubre de 2018 y agosto de 2022.',
        },
        {
          q: '¿Qué significa «un terminal desde cero»?',
          a: 'En Money.Net, entre enero de 2016 y junio de 2018, construyó componentes de un terminal de mercados financieros con programación asíncrona y de red, WebSockets, gRPC y microservicios, con componentes de alto rendimiento en ReactJS y Java 8 optimizados para streaming bursátil de alta frecuencia, además de APIs REST en Python e integraciones de chat en tiempo real incluyendo XMPP.',
        },
        {
          q: '¿Hay cifras de rendimiento de este trabajo?',
          a: 'No. Este portafolio solo publica cuatro métricas duras: unas 5.000 PDs de scorecard, dos días laborables, más de 15 años y los rangos de empleo fechados. Las cifras de throughput o latencia de sistemas financieros propietarios no le corresponde publicarlas, así que no se afirman.',
        },
      ],
    },
    cta: {
      heading: 'De los sistemas financieros a los agentes',
      body: 'Las preguntas de fiabilidad son las mismas. El stack es distinto. Esa es la apuesta del capítulo actual.',
      ctaLabel: 'Leer el build log de consultoría',
      ctaHref: '/consultoria-ia-agentica',
      secondaryLabel: 'El case study de Moody\'s',
      secondaryHref: '/moodys',
    },
  },
}
