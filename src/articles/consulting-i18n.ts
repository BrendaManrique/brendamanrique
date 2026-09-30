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
        'What I am building on my own: Python and FastAPI services with retrieval, typed tool boundaries, approval flows and deployments you can observe and roll back.',
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
      'This is a build log of the applied-AI projects Brenda Manrique has been building on her own since moving to Berlin. It is hands-on project work to learn what it takes to run small AI systems for real, not a business: she does not offer services through this site. Most of it is prototypes and infrastructure; one system is in production — the chat agent on this site.',
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
            text: 'The portfolio chat agent is the proving ground: a public, adversarial surface that forces retrieval, evaluation, security and observability to actually work. It is in production. The rest is prototypes and infrastructure.',
          },
        ],
      },
    },
    faq: {
      heading: 'Frequently asked questions',
      items: [
        {
          q: 'Is this a consulting business?',
          a: 'No. It is a build log of her own projects, a way to go deep on applied AI. She does not offer services or take on clients through this site. Most of it is prototypes and infrastructure; the portfolio chat agent is in production.',
        },
        {
          q: 'When did this start?',
          a: 'The experimenting started after she moved to Berlin in 2025. Around March 2026 it became more deliberate, with a focus on how these systems are deployed, monitored and rolled back.',
        },
        {
          q: 'Is she looking for a job?',
          a: 'Yes. She is looking for her next senior software-engineering or applied-AI role. These projects are part of how she keeps her engineering sharp.',
        },
      ],
    },
    cta: {
      heading: 'Let us talk',
      body: 'Open to senior software-engineering and applied-AI roles. Happy to talk about any of this.',
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
      'Este es el build log de los proyectos de IA aplicada que Brenda Manrique construye por su cuenta desde que se mudó a Berlín. Es trabajo práctico para aprender qué hace falta para operar sistemas de IA pequeños de verdad, no un negocio: no ofrece servicios a través de este sitio. Casi todo son prototipos e infraestructura; un sistema está en producción, el agente de chat de este sitio.',
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
            text: 'El agente de chat del portafolio es el banco de pruebas: una superficie pública y adversarial que obliga a que la recuperación, la evaluación, la seguridad y la observabilidad funcionen de verdad. Está en producción. El resto son prototipos e infraestructura.',
          },
        ],
      },
    },
    faq: {
      heading: 'Preguntas frecuentes',
      items: [
        {
          q: '¿Es un negocio de consultoría?',
          a: 'No. Es el build log de sus propios proyectos, una forma de profundizar en IA aplicada. No ofrece servicios ni acepta clientes a través de este sitio. Casi todo son prototipos e infraestructura; el agente de chat del portafolio está en producción.',
        },
        {
          q: '¿Cuándo empezó esto?',
          a: 'La experimentación empezó tras mudarse a Berlín en 2025. Hacia marzo de 2026 se volvió más deliberada, centrada en cómo se despliegan, se monitorizan y se revierten estos sistemas.',
        },
        {
          q: '¿Está buscando empleo?',
          a: 'Sí. Busca su siguiente rol senior de ingeniería de software o de IA aplicada. Estos proyectos son parte de cómo mantiene su ingeniería al día.',
        },
      ],
    },
    cta: {
      heading: 'Hablemos',
      body: 'Abierta a roles senior de ingeniería de software y de IA aplicada. Encantada de hablar de cualquiera de estos temas.',
      ctaLabel: 'Conectar en LinkedIn',
      ctaHref: 'https://www.linkedin.com/in/brendastephanie/',
      secondaryLabel: 'Cómo se construyó el agente del portafolio',
      secondaryHref: '/agente-de-portafolio',
    },
  },
}
