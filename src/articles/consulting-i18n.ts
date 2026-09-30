import type { CaseStudyContent, CaseStudyLang } from './case-study'

const INSTALLATION_LAYOUT = `config/          # approved systems, business rules
knowledge/       # indexed, versioned sources
tools/           # allowed actions, typed
policies/        # approval + escalation rules
runtime/
  agent service
  state
  telemetry
ops/
  deployment version
  alerts
  rollback path`

export const consultingContent: Record<CaseStudyLang, CaseStudyContent> = {
  en: {
    slug: 'applied-ai',
    altSlug: 'ia-aplicada',
    readingTime: '5 min read',
    seo: {
      title: 'Build log: small applied-AI systems',
      description:
        'What I am building independently: Python and FastAPI services with retrieval, typed tool boundaries, approval flows and deployments you can observe and roll back.',
    },
    header: {
      kicker: 'Build log · Applied AI',
      h1: 'Build log: small applied-AI systems',
      subtitle:
        'What happens to an AI system once somebody has to operate it — and what I am building to find out.',
      date: 'Sep 1, 2026',
    },
    nav: { breadcrumbHome: 'Home', breadcrumbCurrent: 'Applied AI build log' },
    status: 'Prototype and validation stage',
    directAnswer:
      'This is a build log for the applied-AI work Brenda Manrique has been doing independently since moving to Berlin, and for the independent practice she began developing seriously around March 2026. It is in the prototype and validation stage: architecture, prototypes, deployed infrastructure and product experimentation, plus one system in production — the chat agent on this site. No paying clients yet.',
    sections: {
      why: {
        heading: 'The question',
        blocks: [
          {
            kind: 'quote',
            text: 'The interesting part is not whether a model can call a tool. It is what happens next: deployment, permissions, failure recovery, updates, and the boundary between an agent and the systems it is allowed to touch.',
          },
          {
            kind: 'prose',
            text: 'Those are ordinary software questions. They are also the ones that separate a demo from something a team can run on a Tuesday. Answering them takes building, so that is what this is.',
          },
        ],
      },
      'the-problems': {
        heading: 'The kind of problem',
        blocks: [
          {
            kind: 'prose',
            text: 'Repetitive workflows where people spend their time moving information between inboxes, WhatsApp, calendars, documents and internal tools. A useful system collects the right inputs, calls approved systems, keeps state, asks for approval when it matters, and leaves a trail.',
          },
          {
            kind: 'flow',
            steps: ['Message / event', 'Router', 'Typed tools + data', 'Approval gate', 'Action', 'Audit / telemetry'],
          },
        ],
      },
      foundation: {
        heading: 'The stack',
        blocks: [
          {
            kind: 'cards',
            items: [
              {
                title: 'Python + FastAPI',
                detail: 'Services she can read, test and deploy, rather than critical behaviour hidden inside a visual workflow tool.',
              },
              {
                title: 'Docker + VPS',
                detail: 'Each deployment can be versioned and reproduced.',
              },
              {
                title: 'PostgreSQL / Supabase',
                detail: 'Durable state where it is needed.',
              },
              {
                title: 'Retrieval + typed tools',
                detail: 'MCP-style boundaries, so "know something" and "do something" stay separate.',
              },
              {
                title: 'WhatsApp interfaces',
                detail: 'Most operational users are not going to live inside a new dashboard.',
              },
              {
                title: 'Monitoring and approvals',
                detail: 'Including the rollback path, because without one there is no support model.',
              },
            ],
          },
          {
            kind: 'stack',
            items: ['Python', 'FastAPI', 'Docker', 'PostgreSQL', 'Supabase', 'RAG', 'Tool calling', 'HITL'],
          },
        ],
      },
      'delivery-model': {
        heading: 'A shape that repeats',
        blocks: [
          {
            kind: 'prose',
            text: 'The goal is to avoid a future where every deployment is a mysterious script on a server. Configuration, knowledge, tools and policies are per-deployment and versioned. The runtime and telemetry are shared.',
          },
          { kind: 'code', code: INSTALLATION_LAYOUT },
        ],
      },
      next: {
        heading: 'Where it stands',
        blocks: [
          {
            kind: 'prose',
            text: 'The portfolio chat agent is the proving ground: a public, adversarial surface that forces retrieval, evaluation, security and observability to actually work. It is in production. The rest is prototypes and infrastructure, and there are no paying clients yet.',
          },
        ],
      },
    },
    faq: {
      heading: 'Frequently asked questions',
      items: [
        {
          q: 'Does the practice have clients?',
          a: 'Not yet. It is in the prototype and validation stage: architecture, prototypes, deployed infrastructure and product experimentation, plus the portfolio chat agent, which is in production.',
        },
        {
          q: 'When did this start?',
          a: 'The experimenting started after she moved to Berlin in 2025. Around March 2026 it became more deliberate: building the technical foundation for an independent applied-AI practice.',
        },
        {
          q: 'Is she available for employment as well?',
          a: 'Yes. She is looking for her next senior software-engineering or applied-AI role alongside this work.',
        },
      ],
    },
    cta: {
      heading: 'Let us talk',
      body: 'Open to senior software engineering and applied-AI roles, and to conversations about workflows worth turning into reliable software.',
      ctaLabel: 'Connect on LinkedIn',
      ctaHref: 'https://www.linkedin.com/in/brendastephanie/',
      secondaryLabel: 'How the portfolio agent was built',
      secondaryHref: '/portfolio-chat-agent',
    },
  },
  es: {
    slug: 'ia-aplicada',
    altSlug: 'applied-ai',
    readingTime: '5 min de lectura',
    seo: {
      title: 'Build log: sistemas pequeños de IA aplicada',
      description:
        'Lo que construyo por mi cuenta: servicios en Python y FastAPI con recuperación, herramientas tipadas, flujos de aprobación y despliegues observables.',
    },
    header: {
      kicker: 'Build log · IA aplicada',
      h1: 'Build log: sistemas pequeños de IA aplicada',
      subtitle:
        'Qué le pasa a un sistema de IA cuando alguien tiene que operarlo, y qué estoy construyendo para averiguarlo.',
      date: '1 sep 2026',
    },
    nav: { breadcrumbHome: 'Inicio', breadcrumbCurrent: 'Build log de IA aplicada' },
    status: 'Fase de prototipos y validación',
    directAnswer:
      'Este es el build log del trabajo de IA aplicada que Brenda Manrique hace por su cuenta desde que se mudó a Berlín, y de la práctica independiente que empezó a desarrollar en serio hacia marzo de 2026. Está en fase de prototipos y validación: arquitectura, prototipos, infraestructura desplegada y experimentación con productos, más un sistema en producción, el agente de chat de este sitio. Todavía no hay clientes de pago.',
    sections: {
      why: {
        heading: 'La pregunta',
        blocks: [
          {
            kind: 'quote',
            text: 'Lo interesante no es si un modelo puede llamar a una herramienta. Es lo que viene después: despliegue, permisos, recuperación ante fallos, actualizaciones y el límite entre un agente y los sistemas que se le permite tocar.',
          },
          {
            kind: 'prose',
            text: 'Son preguntas de software normales. También son las que separan una demo de algo que un equipo puede tener funcionando un martes cualquiera. Responderlas exige construir, así que eso es esto.',
          },
        ],
      },
      'the-problems': {
        heading: 'El tipo de problema',
        blocks: [
          {
            kind: 'prose',
            text: 'Flujos repetitivos donde las personas se pasan el tiempo moviendo información entre bandejas de entrada, WhatsApp, calendarios, documentos y herramientas internas. Un sistema útil recoge las entradas correctas, llama a sistemas aprobados, mantiene estado, pide aprobación cuando toca y deja rastro.',
          },
          {
            kind: 'flow',
            steps: ['Mensaje / evento', 'Router', 'Herramientas tipadas + datos', 'Puerta de aprobación', 'Acción', 'Auditoría / telemetría'],
          },
        ],
      },
      foundation: {
        heading: 'El stack',
        blocks: [
          {
            kind: 'cards',
            items: [
              {
                title: 'Python + FastAPI',
                detail: 'Servicios que puede leer, testear y desplegar, en vez de comportamiento crítico escondido dentro de una herramienta visual de workflows.',
              },
              {
                title: 'Docker + VPS',
                detail: 'Cada despliegue se puede versionar y reproducir.',
              },
              {
                title: 'PostgreSQL / Supabase',
                detail: 'Estado duradero donde hace falta.',
              },
              {
                title: 'Recuperación + herramientas tipadas',
                detail: 'Límites al estilo MCP, para que «saber algo» y «hacer algo» sigan separados.',
              },
              {
                title: 'Interfaces de WhatsApp',
                detail: 'La mayoría de usuarios operativos no van a vivir dentro de un dashboard nuevo.',
              },
              {
                title: 'Monitorización y aprobaciones',
                detail: 'Incluido el camino de rollback, porque sin él no hay modelo de soporte.',
              },
            ],
          },
          {
            kind: 'stack',
            items: ['Python', 'FastAPI', 'Docker', 'PostgreSQL', 'Supabase', 'RAG', 'Tool calling', 'HITL'],
          },
        ],
      },
      'delivery-model': {
        heading: 'Una forma que se repite',
        blocks: [
          {
            kind: 'prose',
            text: 'El objetivo es evitar un futuro donde cada despliegue sea un script misterioso en un servidor. Configuración, conocimiento, herramientas y políticas son por despliegue y versionadas. El runtime y la telemetría se comparten.',
          },
          { kind: 'code', code: INSTALLATION_LAYOUT },
        ],
      },
      next: {
        heading: 'Dónde está',
        blocks: [
          {
            kind: 'prose',
            text: 'El agente de chat del portafolio es el banco de pruebas: una superficie pública y adversarial que obliga a que la recuperación, la evaluación, la seguridad y la observabilidad funcionen de verdad. Está en producción. El resto son prototipos e infraestructura, y todavía no hay clientes de pago.',
          },
        ],
      },
    },
    faq: {
      heading: 'Preguntas frecuentes',
      items: [
        {
          q: '¿Tiene clientes la práctica?',
          a: 'Todavía no. Está en fase de prototipos y validación: arquitectura, prototipos, infraestructura desplegada y experimentación con productos, más el agente de chat del portafolio, que está en producción.',
        },
        {
          q: '¿Cuándo empezó esto?',
          a: 'La experimentación empezó tras mudarse a Berlín en 2025. Hacia marzo de 2026 se volvió más deliberado: construir la base técnica de una práctica independiente de IA aplicada.',
        },
        {
          q: '¿Está disponible también para un empleo?',
          a: 'Sí. Busca su siguiente rol senior de ingeniería de software o de IA aplicada en paralelo a este trabajo.',
        },
      ],
    },
    cta: {
      heading: 'Hablemos',
      body: 'Abierta a roles senior de ingeniería de software y de IA aplicada, y a conversaciones sobre flujos que merecen convertirse en software fiable.',
      ctaLabel: 'Conectar en LinkedIn',
      ctaHref: 'https://www.linkedin.com/in/brendastephanie/',
      secondaryLabel: 'Cómo se construyó el agente del portafolio',
      secondaryHref: '/agente-de-portafolio',
    },
  },
}
