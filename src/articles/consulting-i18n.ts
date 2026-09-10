import type { CaseStudyContent, CaseStudyLang } from './case-study'

const INSTALLATION_LAYOUT = `client/
  config/          # approved systems, business rules
  knowledge/       # indexed, versioned sources
  tools/           # allowed actions
  policies/        # approval + escalation rules
runtime/
  agent service
  memory / state
  telemetry
  health checks
ops/
  deployment version
  alerts
  rollback path`

export const consultingContent: Record<CaseStudyLang, CaseStudyContent> = {
  en: {
    slug: 'agentic-ai-consulting',
    altSlug: 'consultoria-ia-agentica',
    readingTime: '7 min read',
    seo: {
      title: 'Building an agentic AI consulting practice before pretending it is one',
      description:
        'A build log: turning a year of self-directed AI work into a professional, supportable delivery model for company agents. Deliberately pre-scale, with the truth boundary stated on the page.',
    },
    header: {
      kicker: 'Build log · Agentic AI consulting',
      h1: 'Building an agentic AI consulting practice before pretending it is one',
      subtitle:
        'How I\'m turning a year of self-directed AI work into a professional, supportable delivery model for company agents.',
      date: 'Sep 1, 2026',
    },
    nav: { breadcrumbHome: 'Home', breadcrumbCurrent: 'Consulting build log' },
    status: 'Build & validation phase — intentionally pre-scale',
    directAnswer:
      'This page documents an agentic AI consulting practice that is deliberately pre-scale. It exists today as research, architecture, prototypes, infrastructure decisions and implementation experiments — plus one live system, the portfolio chat agent. There is no client roster, no production-scale customer metrics and no fleet of enterprise installations, and none is claimed here.',
    sections: {
      why: {
        heading: 'Why she\'s building it this way',
        blocks: [
          {
            kind: 'quote',
            text: 'I left Moody\'s in August 2025 with a specific question: what does a professional AI-agent installation look like after the demo? The interesting part is not whether an LLM can call a tool. The interesting part is ownership, deployment, observability, failure recovery, permissions, updates and the boundary between an agent and the company systems it is allowed to touch.',
          },
          {
            kind: 'prose',
            text: 'Answering that honestly takes building, not reading. So the sequence is deliberate: build the infrastructure, prove it on a system that is genuinely public and genuinely adversarial, then take it to companies.',
          },
        ],
      },
      'the-problems': {
        heading: 'The kind of problem she wants to solve',
        blocks: [
          {
            kind: 'prose',
            text: 'Repetitive company workflows where humans spend their time moving information between inboxes, WhatsApp, calendars, CRMs, documents and internal tools. A useful agent should collect the right inputs, call approved systems, keep state, ask for approval when required, and leave an audit trail.',
          },
          {
            kind: 'flow',
            steps: ['Message / event', 'Agent router', 'Tools + company data', 'Approval gate', 'Action', 'Audit / telemetry'],
          },
          {
            kind: 'callout',
            text: 'Agents that operate workflows — not generic chatbots.',
          },
        ],
      },
      foundation: {
        heading: 'The technical foundation',
        blocks: [
          {
            kind: 'cards',
            items: [
              {
                title: 'Python + FastAPI',
                detail: 'Services she can understand, test and deploy without hiding critical behaviour inside a visual workflow tool.',
              },
              {
                title: 'Docker',
                detail: 'Each installation can be versioned and reproduced.',
              },
              {
                title: 'PostgreSQL',
                detail: 'Durable state and memory where appropriate.',
              },
              {
                title: 'WhatsApp / voice interfaces',
                detail: 'Many operational users will not live inside a new dashboard.',
              },
              {
                title: 'RAG + tools',
                detail: 'So the agent can distinguish "know something" from "do something".',
              },
              {
                title: 'Observability and approvals',
                detail: 'So a consulting company can support the system after go-live.',
              },
            ],
          },
          {
            kind: 'stack',
            items: ['Python', 'FastAPI', 'Docker', 'PostgreSQL', 'RAG', 'Tool use', 'WhatsApp / Voice', 'HITL'],
          },
        ],
      },
      'delivery-model': {
        heading: 'A repeatable client installation',
        blocks: [
          {
            kind: 'quote',
            text: 'The goal is to avoid a future where every client owns a mysterious script on a server.',
          },
          { kind: 'code', code: INSTALLATION_LAYOUT },
          {
            kind: 'prose',
            text: 'The shape matters more than the file names. Configuration, knowledge, tools and policies are per-client and versioned. The runtime, telemetry and health checks are shared. Ops owns the deployment version, the alerts and the rollback path — because without a rollback path there is no support model, only a maintenance emergency waiting to happen.',
          },
        ],
      },
      'truth-boundary': {
        heading: 'Truth boundary',
        blocks: [
          {
            kind: 'table',
            headers: ['Today', 'Not claimed'],
            rows: [
              ['Research and architecture', 'A large client base'],
              ['Prototypes and implementation experiments', 'Production-scale customer metrics'],
              ['Infrastructure decisions', 'A mature fleet of enterprise installations'],
              ['One live system: the portfolio chat agent', 'Revenue or client names'],
            ],
          },
          {
            kind: 'callout',
            text: 'Those belong on the page only after they exist.',
          },
        ],
      },
      next: {
        heading: 'What\'s next',
        blocks: [
          {
            kind: 'quote',
            text: 'The portfolio chat agent is the perfect internal proving ground. It forces me to build RAG, evaluation, security, observability and a user-facing agent without needing to pretend it is a client deployment. After that, the same lessons can feed the consulting platform.',
          },
        ],
      },
    },
    faq: {
      heading: 'Frequently asked questions',
      items: [
        {
          q: 'How many clients does the consulting practice have?',
          a: 'It is pre-scale, in a build and validation phase. There is no client roster to report, and this portfolio does not claim one. What exists today is research, architecture, prototypes, infrastructure decisions and implementation experiments — plus the portfolio chat agent, which is live.',
        },
        {
          q: 'Does she have production AI systems running for clients?',
          a: 'Not at scale, and that is stated plainly. The one system running in public today is this site\'s chat agent. Everything else is prototypes and infrastructure work.',
        },
        {
          q: 'Why publish a practice that has not scaled yet?',
          a: 'Because the engineering is the evidence. A page that showed invented client logos would be worth less than one that shows the architecture, the delivery model and an explicit statement of where the practice actually is. The intent is that nothing on this site has to be walked back later.',
        },
        {
          q: 'What kind of engagement is she looking for?',
          a: 'Conversations with companies that have operational workflows worth turning into reliable agentic systems — the sort where humans currently move information between inboxes, WhatsApp, calendars, CRMs, documents and internal tools.',
        },
      ],
    },
    cta: {
      heading: 'Build something difficult',
      body: 'If you have an operational workflow worth turning into a reliable agentic system, that is the conversation.',
      ctaLabel: 'Connect on LinkedIn',
      ctaHref: 'https://www.linkedin.com/in/brendastephanie/',
      secondaryLabel: 'How the portfolio agent was built',
      secondaryHref: '/portfolio-chat-agent',
    },
  },
  es: {
    slug: 'consultoria-ia-agentica',
    altSlug: 'agentic-ai-consulting',
    readingTime: '7 min de lectura',
    seo: {
      title: 'Construir una práctica de consultoría en IA agéntica antes de fingir que lo es',
      description:
        'Un build log: convertir un año de trabajo autodirigido en IA en un modelo de entrega profesional y mantenible para agentes de empresa. Deliberadamente pre-escala, con el límite de verdad escrito en la página.',
    },
    header: {
      kicker: 'Build log · Consultoría en IA agéntica',
      h1: 'Construir una práctica de consultoría en IA agéntica antes de fingir que lo es',
      subtitle:
        'Cómo estoy convirtiendo un año de trabajo autodirigido en IA en un modelo de entrega profesional y mantenible para agentes de empresa.',
      date: '1 sep 2026',
    },
    nav: { breadcrumbHome: 'Inicio', breadcrumbCurrent: 'Build log de consultoría' },
    status: 'Fase de construcción y validación — pre-escala a propósito',
    directAnswer:
      'Esta página documenta una práctica de consultoría en IA agéntica deliberadamente pre-escala. Hoy existe como investigación, arquitectura, prototipos, decisiones de infraestructura y experimentos de implementación, más un sistema vivo: el agente de chat de este portafolio. No hay cartera de clientes, ni métricas de cliente a escala de producción, ni una flota madura de instalaciones enterprise, y aquí no se afirma ninguna.',
    sections: {
      why: {
        heading: 'Por qué lo construye así',
        blocks: [
          {
            kind: 'quote',
            text: 'Dejé Moody\'s en agosto de 2025 con una pregunta concreta: ¿qué aspecto tiene una instalación profesional de agentes de IA después de la demo? Lo interesante no es si un LLM puede llamar a una herramienta. Lo interesante es la propiedad, el despliegue, la observabilidad, la recuperación ante fallos, los permisos, las actualizaciones y el límite entre un agente y los sistemas de la empresa que se le permite tocar.',
          },
          {
            kind: 'prose',
            text: 'Responder eso con honestidad exige construir, no leer. Por eso la secuencia es deliberada: construir la infraestructura, probarla en un sistema genuinamente público y genuinamente adversarial, y después llevarla a empresas.',
          },
        ],
      },
      'the-problems': {
        heading: 'El tipo de problema que quiere resolver',
        blocks: [
          {
            kind: 'prose',
            text: 'Flujos repetitivos de empresa donde las personas se pasan el tiempo moviendo información entre bandejas de entrada, WhatsApp, calendarios, CRMs, documentos y herramientas internas. Un agente útil debería recoger las entradas correctas, llamar a sistemas aprobados, mantener estado, pedir aprobación cuando toca y dejar un rastro auditable.',
          },
          {
            kind: 'flow',
            steps: ['Mensaje / evento', 'Router del agente', 'Herramientas + datos de empresa', 'Puerta de aprobación', 'Acción', 'Auditoría / telemetría'],
          },
          {
            kind: 'callout',
            text: 'Agentes que operan flujos de trabajo, no chatbots genéricos.',
          },
        ],
      },
      foundation: {
        heading: 'La base técnica',
        blocks: [
          {
            kind: 'cards',
            items: [
              {
                title: 'Python + FastAPI',
                detail: 'Servicios que puede entender, testear y desplegar sin esconder comportamiento crítico dentro de una herramienta visual de workflows.',
              },
              {
                title: 'Docker',
                detail: 'Cada instalación se puede versionar y reproducir.',
              },
              {
                title: 'PostgreSQL',
                detail: 'Estado y memoria duraderos donde tenga sentido.',
              },
              {
                title: 'Interfaces de WhatsApp / voz',
                detail: 'Muchos usuarios operativos no van a vivir dentro de un dashboard nuevo.',
              },
              {
                title: 'RAG + herramientas',
                detail: 'Para que el agente distinga «saber algo» de «hacer algo».',
              },
              {
                title: 'Observabilidad y aprobaciones',
                detail: 'Para que una consultora pueda dar soporte al sistema después del go-live.',
              },
            ],
          },
          {
            kind: 'stack',
            items: ['Python', 'FastAPI', 'Docker', 'PostgreSQL', 'RAG', 'Tool use', 'WhatsApp / Voz', 'HITL'],
          },
        ],
      },
      'delivery-model': {
        heading: 'Una instalación de cliente repetible',
        blocks: [
          {
            kind: 'quote',
            text: 'El objetivo es evitar un futuro donde cada cliente tenga un script misterioso en un servidor.',
          },
          { kind: 'code', code: INSTALLATION_LAYOUT },
          {
            kind: 'prose',
            text: 'La forma importa más que los nombres de fichero. Configuración, conocimiento, herramientas y políticas son por cliente y versionadas. El runtime, la telemetría y los health checks se comparten. Ops es dueño de la versión desplegada, las alertas y el camino de rollback, porque sin camino de rollback no hay modelo de soporte, solo una emergencia de mantenimiento esperando a ocurrir.',
          },
        ],
      },
      'truth-boundary': {
        heading: 'Límite de verdad',
        blocks: [
          {
            kind: 'table',
            headers: ['Hoy', 'No se afirma'],
            rows: [
              ['Investigación y arquitectura', 'Una base amplia de clientes'],
              ['Prototipos y experimentos de implementación', 'Métricas de cliente a escala de producción'],
              ['Decisiones de infraestructura', 'Una flota madura de instalaciones enterprise'],
              ['Un sistema vivo: el agente de chat del portafolio', 'Ingresos o nombres de clientes'],
            ],
          },
          {
            kind: 'callout',
            text: 'Eso solo debería aparecer en la página cuando exista.',
          },
        ],
      },
      next: {
        heading: 'Qué viene ahora',
        blocks: [
          {
            kind: 'quote',
            text: 'El agente de chat del portafolio es el banco de pruebas interno perfecto. Me obliga a construir RAG, evaluación, seguridad, observabilidad y un agente de cara al usuario sin tener que fingir que es un despliegue de cliente. Después, las mismas lecciones alimentan la plataforma de consultoría.',
          },
        ],
      },
    },
    faq: {
      heading: 'Preguntas frecuentes',
      items: [
        {
          q: '¿Cuántos clientes tiene la práctica de consultoría?',
          a: 'Está pre-escala, en fase de construcción y validación. No hay cartera de clientes que reportar y este portafolio no afirma tenerla. Lo que existe hoy es investigación, arquitectura, prototipos, decisiones de infraestructura y experimentos de implementación, más el agente de chat del portafolio, que está vivo.',
        },
        {
          q: '¿Tiene sistemas de IA en producción funcionando para clientes?',
          a: 'No a escala, y se dice sin rodeos. El único sistema funcionando en público hoy es el agente de chat de este sitio. Todo lo demás son prototipos y trabajo de infraestructura.',
        },
        {
          q: '¿Por qué publicar una práctica que aún no ha escalado?',
          a: 'Porque la ingeniería es la prueba. Una página con logos de clientes inventados valdría menos que una que enseña la arquitectura, el modelo de entrega y una declaración explícita de dónde está la práctica de verdad. La intención es que nada de este sitio haya que desdecirlo después.',
        },
        {
          q: '¿Qué tipo de colaboración busca?',
          a: 'Conversaciones con empresas que tengan flujos operativos que merezcan convertirse en sistemas agénticos fiables: esos donde hoy las personas mueven información entre bandejas de entrada, WhatsApp, calendarios, CRMs, documentos y herramientas internas.',
        },
      ],
    },
    cta: {
      heading: 'Construir algo difícil',
      body: 'Si tienes un flujo operativo que merece convertirse en un sistema agéntico fiable, esa es la conversación.',
      ctaLabel: 'Conectar en LinkedIn',
      ctaHref: 'https://www.linkedin.com/in/brendastephanie/',
      secondaryLabel: 'Cómo se construyó el agente del portafolio',
      secondaryHref: '/agente-de-portafolio',
    },
  },
}
