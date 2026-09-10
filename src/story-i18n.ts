import type { CaseStudyContent, CaseStudyLang } from './articles/case-study'

export type StoryLang = CaseStudyLang

export const storyContent: Record<StoryLang, CaseStudyContent> = {
  en: {
    slug: 'story',
    altSlug: 'historia',
    readingTime: '5 min read',
    seo: {
      title: 'This chapter is not "nothing happened."',
      description:
        'Fifteen years of systems work, then a deliberate step away from the employed path in 2025 to learn the new AI stack by building with it. The build phase before the client portfolio.',
    },
    header: {
      kicker: 'The story · Build phase',
      h1: 'This chapter is not "nothing happened."',
      subtitle:
        'Fifteen years building systems from the inside out, a decision to leave Moody\'s in 2025, and the build phase that comes before a client portfolio.',
      date: 'Sep 1, 2026',
    },
    nav: { breadcrumbHome: 'Home', breadcrumbCurrent: 'The story' },
    status: 'Build & validation phase — since Aug 2025',
    directAnswer:
      'Brenda Manrique spent 15+ years building production systems: AI-focused systems engineering and fractal research, then accessibility AI, real-time financial terminals, derivatives and risk platforms, and credit analytics at Moody\'s. In 2025 she stepped away from the employed path to learn the new AI stack by building with it. That gap is not absence — it is the build phase before the client portfolio.',
    sections: {
      'fifteen-years': {
        heading: '15+ years building systems from the inside out',
        blocks: [
          {
            kind: 'prose',
            text: 'She started with AI-focused systems engineering, fractal diagnostics and mobile data frameworks — an undergraduate degree with an artificial intelligence concentration, a research award in 2010, a thesis with an honorable mention in 2013.',
          },
          {
            kind: 'prose',
            text: 'Then came accessibility AI at NYU, real-time financial terminals at Money.Net, derivatives and risk platforms at JPMorgan, and credit analytics at Moody\'s. Different surfaces, one job: understand a complicated process well enough to turn it into software.',
          },
        ],
      },
      'the-turn': {
        heading: 'Leaving Moody\'s',
        blocks: [
          {
            kind: 'prose',
            text: 'In August 2025 she left Moody\'s Analytics by choice. Not because the work ran out — because the question she wanted to answer could not be answered on evenings and weekends.',
          },
          {
            kind: 'quote',
            text: 'What does a professional AI-agent installation look like after the demo?',
          },
          {
            kind: 'prose',
            text: 'Answering that means building the whole thing: deployment, observability, failure recovery, permissions, updates, and the boundary between an agent and the company systems it is allowed to touch. Reading about it is not the same activity.',
          },
        ],
      },
      'build-phase': {
        heading: 'The build phase',
        blocks: [
          {
            kind: 'prose',
            text: 'Since then: assembling an agentic AI consulting practice, prototyping deployable systems, studying Anthropic material hands-on, and running Casicornio — a Spanish-language founder and technology publication that supplies the one feedback loop an engineering career does not give you for free.',
          },
          {
            kind: 'callout',
            text: 'This chapter is not "nothing happened." It is the build phase before the client portfolio.',
          },
          {
            kind: 'prose',
            text: 'It is also stated as such everywhere on this site. There is no client roster, no production-scale customer metrics, and no page that implies otherwise. The engineering is the evidence.',
          },
        ],
      },
      now: {
        heading: 'Where it stands now',
        blocks: [
          {
            kind: 'cards',
            items: [
              {
                title: 'Consulting practice · in build',
                detail: 'Offers, deployment patterns, client architecture, maintainability, observability and repeatable delivery for company AI agents.',
              },
              {
                title: 'Portfolio agent · live',
                detail: 'The chat on this site: hybrid RAG, evals, guardrails and observability, running in public against real questions.',
              },
              {
                title: 'Casicornio · operating',
                detail: 'A founder and technology publication, and a way to learn distribution and editorial systems by doing.',
              },
              {
                title: 'Open to roles',
                detail: 'Senior software and applied-AI roles, and conversations with companies that have operational workflows worth turning into reliable agentic systems.',
              },
            ],
          },
        ],
      },
    },
    faq: {
      heading: 'Frequently asked questions',
      items: [
        {
          q: 'Why is there a gap after Moody\'s?',
          a: 'There is no gap. Since August 2025 she has been in a deliberate build and validation phase: designing an agentic AI consulting practice, prototyping Python/FastAPI agent services with RAG, memory, tool integrations and human approval patterns, studying Anthropic material hands-on, and running Casicornio. It is intentionally pre-scale.',
        },
        {
          q: 'Why leave a senior role to do this?',
          a: 'Because the question she wanted to answer — what a professional AI-agent installation looks like after the demo — required building the whole system, not studying it on the side. She left by choice in August 2025.',
        },
        {
          q: 'What is actually running today?',
          a: 'The portfolio chat agent on this site is live. Everything else in the current chapter is research, architecture, prototypes, infrastructure decisions and implementation experiments, plus Casicornio as an operating project. No client-scale metrics are claimed.',
        },
      ],
    },
    cta: {
      heading: 'Build something difficult',
      body: 'Interested in senior software and applied-AI roles, and in companies with operational workflows worth turning into reliable agentic systems.',
      ctaLabel: 'Connect on LinkedIn',
      ctaHref: 'https://www.linkedin.com/in/brendastephanie/',
      secondaryLabel: 'The consulting build log',
      secondaryHref: '/agentic-ai-consulting',
    },
  },
  es: {
    slug: 'historia',
    altSlug: 'story',
    readingTime: '5 min de lectura',
    seo: {
      title: 'Este capítulo no es «no pasó nada».',
      description:
        'Quince años de trabajo en sistemas y, en 2025, una salida deliberada del camino empleado para aprender el nuevo stack de IA construyendo con él. La fase de construcción previa al portafolio de clientes.',
    },
    header: {
      kicker: 'La historia · Fase de construcción',
      h1: 'Este capítulo no es «no pasó nada».',
      subtitle:
        'Más de quince años construyendo sistemas desde dentro hacia fuera, la decisión de dejar Moody\'s en 2025 y la fase de construcción que precede a un portafolio de clientes.',
      date: '1 sep 2026',
    },
    nav: { breadcrumbHome: 'Inicio', breadcrumbCurrent: 'La historia' },
    status: 'Fase de construcción y validación — desde ago 2025',
    directAnswer:
      'Brenda Manrique lleva más de 15 años construyendo sistemas en producción: ingeniería de sistemas centrada en IA e investigación fractal, después IA para accesibilidad, terminales financieros en tiempo real, plataformas de derivados y riesgo, y analítica de crédito en Moody\'s. En 2025 se apartó del camino empleado para aprender el nuevo stack de IA construyendo con él. Ese hueco no es ausencia: es la fase de construcción previa al portafolio de clientes.',
    sections: {
      'fifteen-years': {
        heading: 'Más de 15 años construyendo sistemas desde dentro hacia fuera',
        blocks: [
          {
            kind: 'prose',
            text: 'Empezó con ingeniería de sistemas centrada en IA, diagnóstico fractal y frameworks de datos móviles: una carrera con concentración en inteligencia artificial, un premio de investigación en 2010 y una tesis con mención honorífica en 2013.',
          },
          {
            kind: 'prose',
            text: 'Después vinieron la IA para accesibilidad en NYU, los terminales financieros en tiempo real en Money.Net, las plataformas de derivados y riesgo en JPMorgan y la analítica de crédito en Moody\'s. Superficies distintas, un mismo trabajo: entender un proceso complicado lo bastante bien como para convertirlo en software.',
          },
        ],
      },
      'the-turn': {
        heading: 'Dejar Moody\'s',
        blocks: [
          {
            kind: 'prose',
            text: 'En agosto de 2025 dejó Moody\'s Analytics por decisión propia. No porque se acabara el trabajo, sino porque la pregunta que quería responder no se responde por las tardes y los fines de semana.',
          },
          {
            kind: 'quote',
            text: '¿Qué aspecto tiene una instalación profesional de agentes de IA después de la demo?',
          },
          {
            kind: 'prose',
            text: 'Responderla implica construirlo todo: despliegue, observabilidad, recuperación ante fallos, permisos, actualizaciones y el límite entre un agente y los sistemas de la empresa que se le permite tocar. Leer sobre ello no es la misma actividad.',
          },
        ],
      },
      'build-phase': {
        heading: 'La fase de construcción',
        blocks: [
          {
            kind: 'prose',
            text: 'Desde entonces: montar una práctica de consultoría en IA agéntica, prototipar sistemas desplegables, estudiar material de Anthropic con las manos, y llevar Casicornio, una publicación en español sobre fundadores y tecnología que aporta el único bucle de feedback que una carrera de ingeniería no regala.',
          },
          {
            kind: 'callout',
            text: 'Este capítulo no es «no pasó nada». Es la fase de construcción previa al portafolio de clientes.',
          },
          {
            kind: 'prose',
            text: 'Y así se dice en todo el sitio. No hay cartera de clientes, ni métricas de cliente a escala de producción, ni una página que insinúe lo contrario. La ingeniería es la prueba.',
          },
        ],
      },
      now: {
        heading: 'Dónde está ahora',
        blocks: [
          {
            kind: 'cards',
            items: [
              {
                title: 'Práctica de consultoría · en construcción',
                detail: 'Ofertas, patrones de despliegue, arquitectura de cliente, mantenibilidad, observabilidad y entrega repetible para agentes de IA de empresa.',
              },
              {
                title: 'Agente de portafolio · vivo',
                detail: 'El chat de este sitio: RAG híbrido, evals, guardrails y observabilidad, funcionando en público contra preguntas reales.',
              },
              {
                title: 'Casicornio · en marcha',
                detail: 'Una publicación sobre fundadores y tecnología, y una forma de aprender distribución y sistemas editoriales haciéndolo.',
              },
              {
                title: 'Abierta a roles',
                detail: 'Roles senior de software e IA aplicada, y conversaciones con empresas que tengan flujos operativos que merezcan convertirse en sistemas agénticos fiables.',
              },
            ],
          },
        ],
      },
    },
    faq: {
      heading: 'Preguntas frecuentes',
      items: [
        {
          q: '¿Por qué hay un hueco después de Moody\'s?',
          a: 'No hay hueco. Desde agosto de 2025 está en una fase deliberada de construcción y validación: diseñar una práctica de consultoría en IA agéntica, prototipar servicios de agente en Python/FastAPI con RAG, memoria, integraciones de herramientas y patrones de aprobación humana, estudiar material de Anthropic con las manos y llevar Casicornio. Es pre-escala a propósito.',
        },
        {
          q: '¿Por qué dejar un rol senior para hacer esto?',
          a: 'Porque la pregunta que quería responder —qué aspecto tiene una instalación profesional de agentes de IA después de la demo— exigía construir el sistema entero, no estudiarlo en paralelo. Se fue por decisión propia en agosto de 2025.',
        },
        {
          q: '¿Qué está funcionando hoy realmente?',
          a: 'El agente de chat del portafolio de este sitio está vivo. Todo lo demás del capítulo actual es investigación, arquitectura, prototipos, decisiones de infraestructura y experimentos de implementación, más Casicornio como proyecto en marcha. No se afirman métricas a escala de cliente.',
        },
      ],
    },
    cta: {
      heading: 'Construir algo difícil',
      body: 'Interesada en roles senior de software e IA aplicada, y en empresas con flujos operativos que merezcan convertirse en sistemas agénticos fiables.',
      ctaLabel: 'Conectar en LinkedIn',
      ctaHref: 'https://www.linkedin.com/in/brendastephanie/',
      secondaryLabel: 'El build log de consultoría',
      secondaryHref: '/consultoria-ia-agentica',
    },
  },
}
