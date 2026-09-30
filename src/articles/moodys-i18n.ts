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
    readingTime: '4 min read',
    seo: {
      title: 'Turning credit-domain rules into software at Moody\'s',
      description:
        'Product engineering in Moody\'s Predictive Analytics: model-selection rules in Python, qualitative overlays, and stateful API design for long-running analytics.',
    },
    header: {
      kicker: 'Case study · Moody\'s Analytics',
      h1: 'Turning credit-domain rules into software',
      subtitle:
        'Product engineering across EDF-X, Credit Analytics and Risk Scorecard, in a place where being wrong is expensive.',
      date: 'Sep 1, 2026',
    },
    nav: { breadcrumbHome: 'Home', breadcrumbCurrent: 'Moody\'s Analytics' },
    directAnswer:
      'From April 2023 to August 2025, Brenda Manrique was an Assistant Director — Software Engineer in Moody\'s Analytics Predictive Analytics, in New York. She worked on EDF-X, Credit Analytics and Risk Scorecard: implementing model-selection and business rules in Python, building parts of the qualitative-overlay workflow with the team, and contributing to stateful API and workflow design. This page describes the engineering, not Moody\'s internal architecture.',
    sections: {
      role: {
        heading: 'The role',
        blocks: [
          {
            kind: 'prose',
            text: 'She joined in April 2023 as Assistant Director — Software Engineer in Predictive Analytics, based in New York, working across EDF-X, Credit Analytics and Risk Scorecard. Most of the work was in Python, with TypeScript and Angular in the product layer.',
          },
          {
            kind: 'callout',
            text: 'This page covers engineering problems and her own contribution. It does not describe Moody\'s internal architecture, data flows or model internals.',
          },
        ],
      },
      'model-logic': {
        heading: 'Domain rules as code',
        blocks: [
          {
            kind: 'prose',
            text: 'The part she owned most directly: implementing business and model-selection rules in Python, translating requirements from credit-risk and domain specialists into production logic. Which model applies, when it should be suppressed, what to return when the inputs do not support an answer.',
          },
          { kind: 'code', code: MODEL_LOGIC_CODE },
          {
            kind: 'prose',
            text: 'The shape is unremarkable. What is hard is agreeing on the branches with people who know credit risk far better than you do, then keeping the code honest as the requirements move.',
          },
        ],
      },
      overlay: {
        heading: 'Qualitative overlays',
        blocks: [
          {
            kind: 'prose',
            text: 'A credit model produces a base probability of default, but an analyst may also need structured qualitative inputs — industry and market, company, management — to reach an adjusted PD and an implied rating.',
          },
          {
            kind: 'flow',
            steps: ['Entity', 'Base PD', 'Qualitative categories', 'Overall score', 'Adjusted PD', 'Implied rating'],
            caption: 'From a model output to a rating an analyst can defend.',
          },
          {
            kind: 'prose',
            text: 'She built parts of this workflow as one member of the Predictive Analytics engineering team. The team built the system; her share was specific pieces of it.',
          },
        ],
      },
      'api-v2': {
        heading: 'Stateful APIs for long-running work',
        blocks: [
          {
            kind: 'prose',
            text: 'Analytics jobs that run for minutes rather than milliseconds break the usual request/response assumptions: timeouts, the same inputs resubmitted, process identifiers users have to track themselves, and every API consumer reimplementing batching and concurrency.',
          },
          {
            kind: 'steps',
            items: [
              {
                label: 'Entity data persists',
                detail: 'Customization and inputs survive beyond a single request.',
              },
              {
                label: 'One state across UI and API',
                detail: 'The interface you use should not determine which version of an entity exists.',
              },
              {
                label: 'Managed execution',
                detail: 'Batching, concurrency and reliability belong to the service, not to every integration.',
              },
            ],
          },
          {
            kind: 'prose',
            text: 'She contributed to this design work rather than owning it end to end.',
          },
        ],
      },
      lessons: {
        heading: 'What she carries forward',
        blocks: [
          {
            kind: 'quote',
            text: 'The hard part of software is rarely "produce an answer." It is state, reliability, business rules, and how the system behaves when the clean path breaks.',
          },
          {
            kind: 'prose',
            text: 'Working where model and domain correctness matter teaches a specific discipline: stale data matters, deterministic fallbacks matter, and a confident wrong answer is expensive. That is the habit she brings to AI systems now.',
          },
          {
            kind: 'prose',
            text: 'She left Moody\'s in August 2025.',
          },
        ],
      },
    },
    faq: {
      heading: 'Frequently asked questions',
      items: [
        {
          q: 'What did she work on at Moody\'s?',
          a: 'Product engineering across EDF-X, Credit Analytics and Risk Scorecard in the Predictive Analytics team: business and model-selection rules implemented in Python, parts of the qualitative-overlay workflow built with the team, and contributions to stateful API and workflow design. Mostly Python, plus TypeScript and Angular.',
        },
        {
          q: 'How much of this was her own work?',
          a: 'The model-selection and business rules in Python are hers. The qualitative-overlay workflow and the stateful API design were team work she contributed to. She did not design the credit analytics architecture on her own, and this page does not claim she did.',
        },
        {
          q: 'Why is this case study light on detail?',
          a: 'Because it describes engineering done inside a financial institution. It covers the kind of problem, her scope and the concepts she can discuss publicly — not internal architecture, data flows, model internals or client information.',
        },
        {
          q: 'Are there numbers?',
          a: 'None are published here. Performance and portfolio figures from that work are not hers to publish.',
        },
      ],
    },
    cta: {
      heading: 'Systems where correctness matters',
      body: 'That is the kind of work Brenda is looking for next.',
      ctaLabel: 'Read the applied-AI build log',
      ctaHref: '/applied-ai',
      secondaryLabel: 'Financial systems background',
      secondaryHref: '/financial-systems',
    },
  },
  es: {
    slug: 'moodys',
    altSlug: 'moodys-credit-intelligence',
    readingTime: '4 min de lectura',
    seo: {
      title: 'Convertir reglas de crédito en software en Moody\'s',
      description:
        'Ingeniería de producto en Predictive Analytics de Moody\'s: reglas de selección de modelo en Python, overlays cualitativos y APIs con estado.',
    },
    header: {
      kicker: 'Case study · Moody\'s Analytics',
      h1: 'Convertir reglas de crédito en software',
      subtitle:
        'Ingeniería de producto en EDF-X, Credit Analytics y Risk Scorecard, en un sitio donde equivocarse sale caro.',
      date: '1 sep 2026',
    },
    nav: { breadcrumbHome: 'Inicio', breadcrumbCurrent: 'Moody\'s Analytics' },
    directAnswer:
      'De abril de 2023 a agosto de 2025, Brenda Manrique fue Assistant Director — Software Engineer en Predictive Analytics de Moody\'s Analytics, en Nueva York. Trabajó en EDF-X, Credit Analytics y Risk Scorecard: implementó en Python reglas de negocio y de selección de modelo, construyó partes del flujo de overlay cualitativo junto al equipo y contribuyó al diseño de APIs con estado. Esta página describe la ingeniería, no la arquitectura interna de Moody\'s.',
    sections: {
      role: {
        heading: 'El rol',
        blocks: [
          {
            kind: 'prose',
            text: 'Entró en abril de 2023 como Assistant Director — Software Engineer en Predictive Analytics, con base en Nueva York, trabajando en EDF-X, Credit Analytics y Risk Scorecard. La mayor parte del trabajo fue en Python, con TypeScript y Angular en la capa de producto.',
          },
          {
            kind: 'callout',
            text: 'Esta página cubre problemas de ingeniería y su contribución. No describe la arquitectura interna, los flujos de datos ni las interioridades de los modelos de Moody\'s.',
          },
        ],
      },
      'model-logic': {
        heading: 'Reglas de dominio como código',
        blocks: [
          {
            kind: 'prose',
            text: 'La parte más suya: implementar en Python reglas de negocio y de selección de modelo, traduciendo los requisitos de especialistas en riesgo de crédito y dominio a lógica de producción. Qué modelo aplica, cuándo debe suprimirse y qué devolver cuando las entradas no sostienen una respuesta.',
          },
          { kind: 'code', code: MODEL_LOGIC_CODE },
          {
            kind: 'prose',
            text: 'La forma no tiene nada de especial. Lo difícil es acordar las ramas con gente que sabe mucho más de riesgo de crédito que tú, y mantener el código honesto según se mueven los requisitos.',
          },
        ],
      },
      overlay: {
        heading: 'Overlays cualitativos',
        blocks: [
          {
            kind: 'prose',
            text: 'Un modelo de crédito produce una probabilidad de impago base, pero un analista puede necesitar además entradas cualitativas estructuradas —sector y mercado, empresa, gestión— para llegar a una PD ajustada y un rating implícito.',
          },
          {
            kind: 'flow',
            steps: ['Entidad', 'PD base', 'Categorías cualitativas', 'Puntuación global', 'PD ajustada', 'Rating implícito'],
            caption: 'De la salida de un modelo a un rating que un analista puede defender.',
          },
          {
            kind: 'prose',
            text: 'Construyó partes de este flujo como parte del equipo de ingeniería de Predictive Analytics. El sistema lo construyó el equipo; lo suyo fueron piezas concretas.',
          },
        ],
      },
      'api-v2': {
        heading: 'APIs con estado para procesos largos',
        blocks: [
          {
            kind: 'prose',
            text: 'Los trabajos analíticos que duran minutos y no milisegundos rompen los supuestos habituales de petición/respuesta: timeouts, las mismas entradas reenviadas, identificadores de proceso que el usuario tiene que gestionar y cada consumidor de la API reimplementando batching y concurrencia.',
          },
          {
            kind: 'steps',
            items: [
              {
                label: 'Los datos de entidad persisten',
                detail: 'La personalización y las entradas sobreviven más allá de una sola petición.',
              },
              {
                label: 'Un solo estado entre UI y API',
                detail: 'La interfaz que uses no debería determinar qué versión de una entidad existe.',
              },
              {
                label: 'Ejecución gestionada',
                detail: 'Batching, concurrencia y fiabilidad son del servicio, no de cada integración.',
              },
            ],
          },
          {
            kind: 'prose',
            text: 'Contribuyó a este diseño; no fue suyo de principio a fin.',
          },
        ],
      },
      lessons: {
        heading: 'Lo que se lleva de aquí',
        blocks: [
          {
            kind: 'quote',
            text: 'La parte difícil del software rara vez es «producir una respuesta». Es estado, fiabilidad, reglas de negocio y cómo se comporta el sistema cuando el camino limpio se rompe.',
          },
          {
            kind: 'prose',
            text: 'Trabajar donde la corrección del modelo y del dominio importa enseña una disciplina concreta: los datos obsoletos importan, los fallbacks deterministas importan y una respuesta equivocada dicha con seguridad sale cara. Ese es el hábito que lleva ahora a los sistemas de IA.',
          },
          {
            kind: 'prose',
            text: 'Dejó Moody\'s en agosto de 2025.',
          },
        ],
      },
    },
    faq: {
      heading: 'Preguntas frecuentes',
      items: [
        {
          q: '¿En qué trabajó en Moody\'s?',
          a: 'Ingeniería de producto en EDF-X, Credit Analytics y Risk Scorecard dentro del equipo de Predictive Analytics: reglas de negocio y de selección de modelo implementadas en Python, partes del flujo de overlay cualitativo construidas con el equipo y contribuciones al diseño de APIs y flujos con estado. Sobre todo Python, más TypeScript y Angular.',
        },
        {
          q: '¿Cuánto de esto fue trabajo suyo?',
          a: 'Las reglas de negocio y de selección de modelo en Python son suyas. El flujo de overlay cualitativo y el diseño de APIs con estado fueron trabajo de equipo al que contribuyó. No diseñó sola la arquitectura de analítica de crédito, y esta página no lo afirma.',
        },
        {
          q: '¿Por qué hay pocos detalles?',
          a: 'Porque describe ingeniería hecha dentro de una institución financiera. Cubre el tipo de problema, su alcance y los conceptos que puede comentar en público; no arquitectura interna, flujos de datos, interioridades de modelos ni información de clientes.',
        },
        {
          q: '¿Hay cifras?',
          a: 'Aquí no se publica ninguna. Las cifras de rendimiento y de cartera de ese trabajo no le corresponde publicarlas.',
        },
      ],
    },
    cta: {
      heading: 'Sistemas donde la corrección importa',
      body: 'Ese es el tipo de trabajo que Brenda busca ahora.',
      ctaLabel: 'Leer el build log de IA aplicada',
      ctaHref: '/ia-aplicada',
      secondaryLabel: 'Trayectoria en sistemas financieros',
      secondaryHref: '/sistemas-financieros',
    },
  },
}
