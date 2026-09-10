import type { CaseStudyContent, CaseStudyLang } from './case-study'

export type { CaseStudyLang }

const MODEL_LOGIC_CODE = `if sufficient_financials:
    use_financial_model()
elif peer_driven:
    use_peer_methodology()
elif special_legal_status:
    use_supported_fallback(confidence_adjustment=True)
else:
    return_explanatory_result()`

export const moodysContent: Record<CaseStudyLang, CaseStudyContent> = {
  en: {
    slug: 'moodys-credit-intelligence',
    altSlug: 'moodys',
    readingTime: '8 min read',
    seo: {
      title: 'Credit intelligence at scale: what I built at Moody\'s',
      description:
        'A sanitized case study of full-stack credit analytics at Moody\'s Analytics: qualitative overlays, stateful API design, credit-model decision logic and reliable processing.',
    },
    header: {
      kicker: 'Case study · Moody\'s Analytics',
      h1: 'Credit intelligence at scale: what I actually built at Moody\'s',
      subtitle:
        'A sanitized case study of full-stack credit analytics, qualitative overlays, stateful API design, model decision logic and reliable processing.',
      date: 'Sep 1, 2026',
    },
    nav: { breadcrumbHome: 'Home', breadcrumbCurrent: 'Moody\'s Analytics' },
    directAnswer:
      'From April 2023 to August 2025, Brenda Manrique was an Assistant Director — Software Engineer in Moody\'s Analytics Predictive Analytics / Credit Default Modeling Solutions team. She worked full-stack across EDF-X, Credit Analytics and EDF-X Scorecard: qualitative overlays, stateful API design, credit-model decision logic and scheduled refresh workflows. This account is deliberately sanitized — it describes the engineering, not internal Moody\'s details.',
    sections: {
      role: {
        heading: 'The role',
        blocks: [
          {
            kind: 'prose',
            text: 'She joined in April 2023 as Assistant Director — Software Engineer in Predictive Analytics / Credit Default Modeling Solutions. The old résumé line — "build and optimize backend and frontend software" — was accurate, but it hid the interesting part: working across products and services that turn company data into credit-risk decisions.',
          },
          {
            kind: 'prose',
            text: 'The work touched EDF-X, Credit Analytics, EDF-X Scorecard, qualitative overlays, client financials, model metadata, AWS/S3 workflows, PostgreSQL and shared internal services.',
          },
          {
            kind: 'callout',
            text: 'This case study is deliberately sanitized: it describes the engineering, not internal Moody\'s details.',
          },
          {
            kind: 'metrics',
            items: [
              { value: '≈5,000', label: 'scorecard PDs', detail: 'in a sales portfolio workflow' },
              { value: '2 days', label: 'full portfolio delivered', detail: 'with the qualitative overlay applied' },
              { value: 'Full-stack', label: 'frontend + backend', detail: 'plus APIs and cloud/data' },
            ],
          },
        ],
      },
      overlay: {
        heading: 'Bulk qualitative overlay',
        blocks: [
          {
            kind: 'prose',
            text: 'A credit model may produce a base probability of default, but an analyst may also need structured qualitative inputs — industry and market, company, management and other configured factors — to produce an adjusted PD and an implied rating.',
          },
          {
            kind: 'flow',
            steps: ['Entity', 'Base PD', 'Qualitative categories', 'Overall score', 'Adjusted PD', 'Implied rating'],
            caption: 'From a model output to a rating an analyst can defend.',
          },
          {
            kind: 'prose',
            text: 'The team\'s bulk workflow became a real commercial differentiator. A sales evaluation required comparing roughly 5,000 scorecard-generated PDs with Moody\'s results. The responses could be mapped into the bulk overlay process, and the portfolio came back with the overlay applied in two working days.',
          },
        ],
      },
      'api-v2': {
        heading: 'From stateless calls to a stateful API',
        blocks: [
          {
            kind: 'prose',
            text: 'The old behaviour had a familiar set of problems: timeouts, repeated submission of the same financial data, process IDs users had to manage themselves, different state between the UI and the API, and every API consumer at risk of reimplementing batching and concurrency.',
          },
          {
            kind: 'steps',
            items: [
              {
                label: 'Permanence of entity data',
                detail: 'Customization and financials should survive beyond a single request.',
              },
              {
                label: 'One state across UI and API',
                detail: 'The interface used to interact with an entity should not determine which version of that entity exists.',
              },
              {
                label: 'Managed execution',
                detail: 'Batching, concurrency and reliability are a service responsibility, not something copied into every customer integration.',
              },
            ],
          },
          {
            kind: 'flow',
            steps: ['Large request', 'Execution metadata', 'Optimal batches', 'Concurrent workers', 'Persistent process status', 'Results'],
          },
        ],
      },
      'model-logic': {
        heading: 'Credit-model decision logic',
        blocks: [
          {
            kind: 'prose',
            text: 'She implemented logic that chose or suppressed model behaviour based on peer-driven companies, financial-data completeness, legal status, model eligibility and unsupported public-entity cases. Generalized, the shape of it is simple:',
          },
          { kind: 'code', code: MODEL_LOGIC_CODE },
          {
            kind: 'callout',
            text: 'This matters for her AI direction: reliable agentic systems also need explicit decision boundaries, fallbacks and explanations instead of one unconstrained model call.',
          },
        ],
      },
      refresh: {
        heading: 'Scheduled refresh and event processing',
        blocks: [
          {
            kind: 'prose',
            text: 'Polling on a schedule, comparing source timestamps with the last processed timestamp, refreshing entities only when needed, recording execution state, and connecting the job to CloudWatch-style monitoring.',
          },
          {
            kind: 'flow',
            steps: ['Scheduler', 'Latest source timestamp', 'Compare state', 'Queue / refresh', 'Persist last run', 'Metrics'],
          },
        ],
      },
      'full-stack': {
        heading: 'Full-stack, not backend-only',
        blocks: [
          {
            kind: 'bullets',
            items: [
              'Backend and frontend functionality for credit analytics, probability-of-default workflows, scorecards and qualitative overlays.',
              'AWS, S3, PostgreSQL, client financial APIs, shared data services, model metadata and RiskCalc-related workflows.',
              'Automated EDF-X API test cases, plus reports, calculation dialogs and product UI work.',
              'Helped another team migrate from a Dynamo-based service to a shared data service.',
              'Code reviews and cross-team troubleshooting alongside the API and migration work.',
            ],
          },
        ],
      },
      lessons: {
        heading: 'What she carries forward',
        blocks: [
          {
            kind: 'quote',
            text: 'The hard part of software is rarely "produce an answer." It is state, reliability, compatibility, observability, business rules and how the system behaves when the clean path breaks.',
          },
          {
            kind: 'prose',
            text: 'Financial software trains a particular set of instincts: stale data matters, latency matters, deterministic fallbacks matter, and a confident mistake is expensive. Those are exactly the instincts an agentic system needs and rarely gets.',
          },
          {
            kind: 'prose',
            text: 'She left Moody\'s in August 2025 by choice, to build in agentic AI full time rather than study it on the side.',
          },
        ],
      },
    },
    faq: {
      heading: 'Frequently asked questions',
      items: [
        {
          q: 'What exactly did she build at Moody\'s?',
          a: 'She was a full-stack engineer across EDF-X, Credit Analytics, EDF-X Scorecard and credit-model workflows: backend and frontend for probability-of-default workflows, scorecards and qualitative overlays; work with AWS, S3, PostgreSQL, client financial APIs, shared data services, model metadata and RiskCalc-related workflows; automated EDF-X API test cases; reports, calculation dialogs and product UI; and help migrating another team from a Dynamo-based service to a shared data service.',
        },
        {
          q: 'What are the actual numbers?',
          a: 'Two, and only two. A sales evaluation required comparing roughly 5,000 scorecard-generated PDs with Moody\'s results, and the portfolio was returned with the qualitative overlay applied in two working days. No other metric from this period is claimed anywhere on this site.',
        },
        {
          q: 'Why is this case study sanitized?',
          a: 'Because it describes engineering she did inside a financial institution. The page covers architecture, patterns and the reasoning behind them — never internal Moody\'s details, client data, or anything that is not hers to publish.',
        },
        {
          q: 'Why did she leave?',
          a: 'By choice, in August 2025, to build in agentic AI full time rather than study it on the side. The chapter that followed is a deliberate build-and-validation phase, documented on this site as such.',
        },
      ],
    },
    cta: {
      heading: 'Workflows worth turning into systems',
      body: 'If your company has an operational workflow that deserves to be reliable software, that is the conversation Brenda is interested in.',
      ctaLabel: 'Read the consulting build log',
      ctaHref: '/agentic-ai-consulting',
      secondaryLabel: 'Financial systems background',
      secondaryHref: '/financial-systems',
    },
  },
  es: {
    slug: 'moodys',
    altSlug: 'moodys-credit-intelligence',
    readingTime: '8 min de lectura',
    seo: {
      title: 'Inteligencia de crédito a escala: lo que construí en Moody\'s',
      description:
        'Case study sanitizado de analítica de crédito full-stack en Moody\'s Analytics: overlays cualitativos, diseño de API con estado, lógica de decisión de modelos y procesamiento fiable.',
    },
    header: {
      kicker: 'Case study · Moody\'s Analytics',
      h1: 'Inteligencia de crédito a escala: lo que construí de verdad en Moody\'s',
      subtitle:
        'Un case study sanitizado de analítica de crédito full-stack, overlays cualitativos, diseño de API con estado, lógica de decisión de modelos y procesamiento fiable.',
      date: '1 sep 2026',
    },
    nav: { breadcrumbHome: 'Inicio', breadcrumbCurrent: 'Moody\'s Analytics' },
    directAnswer:
      'De abril de 2023 a agosto de 2025, Brenda Manrique fue Assistant Director — Software Engineer en el equipo de Predictive Analytics / Credit Default Modeling Solutions de Moody\'s Analytics. Trabajó full-stack en EDF-X, Credit Analytics y EDF-X Scorecard: overlays cualitativos, diseño de API con estado, lógica de decisión de modelos de crédito y flujos de refresco programado. Esta página está deliberadamente sanitizada: describe la ingeniería, no detalles internos de Moody\'s.',
    sections: {
      role: {
        heading: 'El rol',
        blocks: [
          {
            kind: 'prose',
            text: 'Entró en abril de 2023 como Assistant Director — Software Engineer en Predictive Analytics / Credit Default Modeling Solutions. La línea del CV — «construir y optimizar software backend y frontend» — era exacta, pero escondía lo interesante: trabajar en productos y servicios que convierten datos de empresas en decisiones de riesgo de crédito.',
          },
          {
            kind: 'prose',
            text: 'El trabajo tocó EDF-X, Credit Analytics, EDF-X Scorecard, overlays cualitativos, estados financieros de clientes, metadatos de modelos, flujos en AWS/S3, PostgreSQL y servicios internos compartidos.',
          },
          {
            kind: 'callout',
            text: 'Este case study está deliberadamente sanitizado: describe la ingeniería, no detalles internos de Moody\'s.',
          },
          {
            kind: 'metrics',
            items: [
              { value: '≈5.000', label: 'PDs de scorecard', detail: 'en un flujo de cartera comercial' },
              { value: '2 días', label: 'cartera completa entregada', detail: 'con el overlay cualitativo aplicado' },
              { value: 'Full-stack', label: 'frontend + backend', detail: 'más APIs y cloud/datos' },
            ],
          },
        ],
      },
      overlay: {
        heading: 'Overlay cualitativo en bloque',
        blocks: [
          {
            kind: 'prose',
            text: 'Un modelo de crédito puede producir una probabilidad de impago base, pero un analista puede necesitar además entradas cualitativas estructuradas — sector y mercado, empresa, gestión y otros factores configurados — para producir una PD ajustada y un rating implícito.',
          },
          {
            kind: 'flow',
            steps: ['Entidad', 'PD base', 'Categorías cualitativas', 'Puntuación global', 'PD ajustada', 'Rating implícito'],
            caption: 'De la salida de un modelo a un rating que un analista puede defender.',
          },
          {
            kind: 'prose',
            text: 'El flujo en bloque del equipo se convirtió en un diferenciador comercial real. Una evaluación de ventas requería comparar unas 5.000 PDs generadas por scorecard con los resultados de Moody\'s. Las respuestas se pudieron mapear al proceso de overlay en bloque y la cartera se devolvió con el overlay aplicado en dos días laborables.',
          },
        ],
      },
      'api-v2': {
        heading: 'De llamadas sin estado a una API con estado',
        blocks: [
          {
            kind: 'prose',
            text: 'El comportamiento anterior tenía un conjunto de problemas conocido: timeouts, reenvío repetido de los mismos datos financieros, IDs de proceso que el usuario tenía que gestionar, estado distinto entre la UI y la API, y cada consumidor de la API expuesto a reimplementar batching y concurrencia.',
          },
          {
            kind: 'steps',
            items: [
              {
                label: 'Permanencia de los datos de entidad',
                detail: 'La personalización y los estados financieros deben sobrevivir más allá de una sola petición.',
              },
              {
                label: 'Un solo estado entre UI y API',
                detail: 'La interfaz que uses para interactuar con una entidad no debería determinar qué versión de esa entidad existe.',
              },
              {
                label: 'Ejecución gestionada',
                detail: 'Batching, concurrencia y fiabilidad son responsabilidad del servicio, no algo que se copie en cada integración de cliente.',
              },
            ],
          },
          {
            kind: 'flow',
            steps: ['Petición grande', 'Metadatos de ejecución', 'Lotes óptimos', 'Workers concurrentes', 'Estado de proceso persistente', 'Resultados'],
          },
        ],
      },
      'model-logic': {
        heading: 'Lógica de decisión del modelo de crédito',
        blocks: [
          {
            kind: 'prose',
            text: 'Implementó lógica que elegía o suprimía comportamiento del modelo según empresas guiadas por comparables, completitud de los datos financieros, situación legal, elegibilidad del modelo y casos de entidades públicas no soportadas. Generalizada, la forma es simple:',
          },
          { kind: 'code', code: MODEL_LOGIC_CODE },
          {
            kind: 'callout',
            text: 'Esto importa para su dirección en IA: los sistemas agénticos fiables también necesitan límites de decisión explícitos, fallbacks y explicaciones, en vez de una sola llamada a un modelo sin restricciones.',
          },
        ],
      },
      refresh: {
        heading: 'Refresco programado y procesamiento de eventos',
        blocks: [
          {
            kind: 'prose',
            text: 'Polling programado, comparación de timestamps de origen con el último timestamp procesado, refresco de entidades solo cuando hace falta, registro del estado de ejecución y conexión del job a monitorización tipo CloudWatch.',
          },
          {
            kind: 'flow',
            steps: ['Planificador', 'Último timestamp de origen', 'Comparar estado', 'Encolar / refrescar', 'Persistir última ejecución', 'Métricas'],
          },
        ],
      },
      'full-stack': {
        heading: 'Full-stack, no solo backend',
        blocks: [
          {
            kind: 'bullets',
            items: [
              'Backend y frontend para analítica de crédito, flujos de probabilidad de impago, scorecards y overlays cualitativos.',
              'AWS, S3, PostgreSQL, APIs financieras de cliente, servicios de datos compartidos, metadatos de modelos y flujos relacionados con RiskCalc.',
              'Casos de test automatizados de la API de EDF-X, además de informes, diálogos de cálculo y trabajo de UI de producto.',
              'Ayudó a otro equipo a migrar de un servicio basado en Dynamo a un servicio de datos compartido.',
              'Revisiones de código y resolución de incidencias entre equipos, junto al trabajo de API y migración.',
            ],
          },
        ],
      },
      lessons: {
        heading: 'Lo que se lleva de aquí',
        blocks: [
          {
            kind: 'quote',
            text: 'La parte difícil del software rara vez es «producir una respuesta». Es estado, fiabilidad, compatibilidad, observabilidad, reglas de negocio y cómo se comporta el sistema cuando el camino limpio se rompe.',
          },
          {
            kind: 'prose',
            text: 'El software financiero entrena unos instintos concretos: los datos obsoletos importan, la latencia importa, los fallbacks deterministas importan y un error confiado sale caro. Son exactamente los instintos que un sistema agéntico necesita y rara vez tiene.',
          },
          {
            kind: 'prose',
            text: 'Dejó Moody\'s en agosto de 2025 por decisión propia, para construir en IA agéntica a tiempo completo en lugar de estudiarla en paralelo.',
          },
        ],
      },
    },
    faq: {
      heading: 'Preguntas frecuentes',
      items: [
        {
          q: '¿Qué construyó exactamente en Moody\'s?',
          a: 'Fue ingeniera full-stack en EDF-X, Credit Analytics, EDF-X Scorecard y flujos de modelos de crédito: backend y frontend para flujos de probabilidad de impago, scorecards y overlays cualitativos; trabajo con AWS, S3, PostgreSQL, APIs financieras de cliente, servicios de datos compartidos, metadatos de modelos y flujos relacionados con RiskCalc; tests automatizados de la API de EDF-X; informes, diálogos de cálculo y UI de producto; y apoyo a otro equipo para migrar de un servicio basado en Dynamo a un servicio de datos compartido.',
        },
        {
          q: '¿Cuáles son las cifras reales?',
          a: 'Dos, y solo dos. Una evaluación de ventas requirió comparar unas 5.000 PDs generadas por scorecard con los resultados de Moody\'s, y la cartera se devolvió con el overlay cualitativo aplicado en dos días laborables. Ninguna otra métrica de esta etapa se afirma en este sitio.',
        },
        {
          q: '¿Por qué está sanitizado este case study?',
          a: 'Porque describe ingeniería hecha dentro de una institución financiera. La página cubre arquitectura, patrones y el razonamiento detrás de ellos; nunca detalles internos de Moody\'s, datos de clientes ni nada que no le corresponda publicar.',
        },
        {
          q: '¿Por qué se fue?',
          a: 'Por decisión propia, en agosto de 2025, para construir en IA agéntica a tiempo completo en lugar de estudiarla en paralelo. El capítulo siguiente es una fase deliberada de construcción y validación, documentada como tal en este sitio.',
        },
      ],
    },
    cta: {
      heading: 'Flujos que merecen convertirse en sistemas',
      body: 'Si tu empresa tiene un flujo operativo que merece ser software fiable, esa es la conversación que a Brenda le interesa.',
      ctaLabel: 'Leer el build log de consultoría',
      ctaHref: '/consultoria-ia-agentica',
      secondaryLabel: 'Trayectoria en sistemas financieros',
      secondaryHref: '/sistemas-financieros',
    },
  },
}
