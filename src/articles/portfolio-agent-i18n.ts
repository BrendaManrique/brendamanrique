import type { CaseStudyContent, CaseStudyLang } from './case-study'

const TRUTH_LAYER_CODE = `claim = retrieve(question)
if claim.source_strength == "verified":
    answer_with_citation(claim)
elif claim.source_strength == "in_progress":
    answer_with_status_label(claim)
else:
    say_you_do_not_know()`

const ARCHITECTURE = `Browser widget
   ↓ streaming request
Serverless API (Vercel)
   ├─ rate limit + server-issued session
   ├─ safety / scope check
   ├─ router: does this need evidence?
   ├─ hybrid retrieval
   │    ├─ Postgres full-text
   │    └─ pgvector embeddings
   │    └─ reciprocal rank fusion
   ├─ model generation (Claude)
   └─ trace + online scoring
          ↓
      eval datasets / CI gate`

export const portfolioAgentContent: Record<CaseStudyLang, CaseStudyContent> = {
  en: {
    slug: 'portfolio-chat-agent',
    altSlug: 'agente-de-portafolio',
    readingTime: '6 min read',
    seo: {
      title: 'A portfolio agent that cannot invent my career',
      description:
        'Hybrid retrieval over a portfolio corpus, guardrails, online scoring and CI-gated evals — so visitors can ask about my experience without an LLM making it up.',
    },
    header: {
      kicker: 'Case study · Portfolio chat agent',
      h1: 'A portfolio agent that cannot invent my career',
      subtitle:
        'I wanted visitors to be able to ask questions about my experience without allowing an LLM to invent my professional history. Everything else followed from that.',
      date: 'Sep 1, 2026',
    },
    nav: { breadcrumbHome: 'Home', breadcrumbCurrent: 'Portfolio chat agent' },
    status: 'In production on this site',
    directAnswer:
      'The chat on this site is built around one constraint: it speaks about a real professional history, so a hallucination can invent a job. It uses hybrid retrieval over a portfolio corpus, server-issued sessions, guardrails, online answer scoring, and CI evals that must pass before a change merges. Built with AI-assisted development.',
    sections: {
      'the-hard-part': {
        heading: 'The constraint',
        blocks: [
          {
            kind: 'prose',
            text: 'The UI is an afternoon. The requirement is not: the agent speaks as a representation of a real career, so a wrong answer can invent a job, a client or a skill that a recruiter believes.',
          },
          {
            kind: 'callout',
            text: 'The agent is intentionally constrained to the evidence in this portfolio and is tested against factual, attribution and safety regressions.',
          },
          {
            kind: 'prose',
            text: 'That is also why it does not roleplay as Brenda. It is her portfolio AI, it refers to her in the third person, and it says so when identity matters.',
          },
        ],
      },
      'truth-layer': {
        heading: 'A truth layer before a personality',
        blocks: [
          {
            kind: 'prose',
            text: 'Source-of-truth material is kept separate from prose. The agent distinguishes a fact it can support, a project currently being built, and something it simply does not know.',
          },
          { kind: 'code', code: TRUTH_LAYER_CODE },
        ],
      },
      rag: {
        heading: 'Retrieval',
        blocks: [
          {
            kind: 'prose',
            text: 'A recruiter question often crosses several documents, so retrieval runs over small, evidence-rich chunks carrying metadata: company, project, timeframe, technology, claim type. Postgres full-text search and pgvector embeddings are combined with reciprocal rank fusion, and a router step first decides whether a question needs evidence at all.',
          },
          {
            kind: 'flow',
            steps: ['Question', 'Router', 'Hybrid retrieval', 'Fusion', 'Evidence set', 'Answer + sources'],
          },
          {
            kind: 'prose',
            text: 'Retrieved text is treated as evidence, never as instructions. Instructions found inside a retrieved document are not followed.',
          },
        ],
      },
      adversarial: {
        heading: 'A public agent is an adversarial surface',
        blocks: [
          {
            kind: 'bullets',
            items: [
              'Hard scope boundaries, with input and output checks.',
              'Secrets kept entirely outside retrieval.',
              'Server-issued sessions: three questions, and the count cannot be reset by refreshing.',
              'Rate limits and logging for suspicious patterns.',
              'Safe fallback behaviour.',
            ],
          },
          {
            kind: 'prose',
            text: 'The email collected before the demo is for access and abuse prevention, not a newsletter. Visitor identifiers are hashed server-side.',
          },
        ],
      },
      evals: {
        heading: 'Evals',
        blocks: [
          {
            kind: 'cards',
            items: [
              { title: 'Factual', detail: 'Dates, titles, companies.' },
              { title: 'Boundary', detail: 'Does not invent clients, revenue or scale.' },
              { title: 'Attribution', detail: 'Keeps JPMorgan, Moody\'s and personal projects separate.' },
              { title: 'Status', detail: 'Calls prototypes prototypes.' },
              { title: 'Retrieval', detail: 'Cites the relevant case study, not the nearest keyword.' },
              { title: 'Language', detail: 'EN and ES with the same facts.' },
            ],
          },
          {
            kind: 'quote',
            text: 'The eval that matters most: does the agent make her sound more accomplished than the evidence supports?',
          },
        ],
      },
      observability: {
        heading: 'Observability',
        blocks: [
          {
            kind: 'prose',
            text: 'Each trace records the retrieved chunks, model latency, a token and cost estimate, safety decisions and groundedness. A bad answer stops being an anecdote and becomes a test case.',
          },
          {
            kind: 'flow',
            steps: ['Conversation', 'Trace', 'Score', 'Failure bucket', 'New eval', 'Regression gate'],
          },
        ],
      },
      architecture: {
        heading: 'Architecture',
        blocks: [
          { kind: 'code', code: ARCHITECTURE },
          {
            kind: 'prose',
            text: 'Tracing and a prompt registry run on Langfuse, with a local fallback prompt so prompt retrieval is not a single point of failure. A GitHub Action pulls production failures into regression-test pull requests; a human merges, and prompts are never mutated autonomously in production.',
          },
        ],
      },
      shipped: {
        heading: 'What is running',
        blocks: [
          {
            kind: 'bullets',
            items: [
              'A static front end with a widget that holds no secrets.',
              'Serverless API functions on Vercel for session creation and chat.',
              'Hybrid retrieval over a Supabase Postgres corpus.',
              'Online scoring of every answer for quality, groundedness and safety.',
              'A CI-gated eval suite across six categories.',
            ],
          },
          {
            kind: 'prose',
            text: 'It was built with AI-assisted development tools, which is worth saying out loud on a page about not overstating things. Next: more evals drawn from real production questions, Turnstile, and voice once the facts hold.',
          },
        ],
      },
    },
    faq: {
      heading: 'Frequently asked questions',
      items: [
        {
          q: 'Does the agent speak as Brenda?',
          a: 'No. It is Brenda\'s portfolio AI, refers to her in the third person, and says so whenever identity matters. A first-person persona makes a hallucination sound like a personal claim.',
        },
        {
          q: 'How does retrieval work?',
          a: 'Hybrid retrieval over a Supabase Postgres corpus: full-text search and pgvector embeddings combined with reciprocal rank fusion. A router step first decides whether a question needs portfolio evidence, and retrieved text is treated as evidence, never as instructions.',
        },
        {
          q: 'Why only three questions per visitor?',
          a: 'Abuse prevention on a public surface. Sessions are server-issued so the count cannot be reset by refreshing, and a server-generated visitor hash adds a second limit.',
        },
        {
          q: 'Was it built with AI assistance?',
          a: 'Yes. The code is hers and she can explain every part of it, but it was written with AI-assisted development tools rather than by hand alone.',
        },
      ],
    },
    cta: {
      heading: 'Ask it something',
      body: 'The chat on this page is the system described above. It will tell you what it does not know.',
      ctaLabel: 'Read the applied-AI build log',
      ctaHref: '/applied-ai',
      secondaryLabel: 'About Brenda',
      secondaryHref: '/about',
    },
  },
  es: {
    slug: 'agente-de-portafolio',
    altSlug: 'portfolio-chat-agent',
    readingTime: '6 min de lectura',
    seo: {
      title: 'Un agente de portafolio que no puede inventarme la carrera',
      description:
        'Recuperación híbrida sobre el portafolio, guardrails, scoring online y evals en CI: preguntar por mi experiencia sin que un LLM se la invente.',
    },
    header: {
      kicker: 'Case study · Agente de chat del portafolio',
      h1: 'Un agente de portafolio que no puede inventarme la carrera',
      subtitle:
        'Quería que se pudieran hacer preguntas sobre mi experiencia sin dejar que un LLM inventara mi historia profesional. Todo lo demás salió de ahí.',
      date: '1 sep 2026',
    },
    nav: { breadcrumbHome: 'Inicio', breadcrumbCurrent: 'Agente de portafolio' },
    status: 'En producción en este sitio',
    directAnswer:
      'El chat de este sitio se construyó alrededor de una restricción: habla de una trayectoria profesional real, así que una alucinación puede inventar un empleo. Usa recuperación híbrida sobre un corpus del portafolio, sesiones emitidas por el servidor, guardrails, scoring online de cada respuesta y evals en CI que deben pasar antes de fusionar un cambio. Construido con herramientas de desarrollo asistido por IA.',
    sections: {
      'the-hard-part': {
        heading: 'La restricción',
        blocks: [
          {
            kind: 'prose',
            text: 'La UI se hace en una tarde. El requisito no: el agente habla como representación de una carrera real, así que una respuesta equivocada puede inventar un empleo, un cliente o una habilidad que un reclutador se crea.',
          },
          {
            kind: 'callout',
            text: 'El agente está limitado a propósito a la evidencia de este portafolio y se prueba contra regresiones factuales, de atribución y de seguridad.',
          },
          {
            kind: 'prose',
            text: 'Por eso tampoco interpreta a Brenda. Es su IA de portafolio, se refiere a ella en tercera persona y lo dice cuando la identidad importa.',
          },
        ],
      },
      'truth-layer': {
        heading: 'Una capa de verdad antes que una personalidad',
        blocks: [
          {
            kind: 'prose',
            text: 'El material que es fuente de verdad se mantiene separado de la prosa. El agente distingue entre un hecho que puede sostener, un proyecto que se está construyendo y algo que sencillamente no sabe.',
          },
          { kind: 'code', code: TRUTH_LAYER_CODE },
        ],
      },
      rag: {
        heading: 'Recuperación',
        blocks: [
          {
            kind: 'prose',
            text: 'La pregunta de un reclutador suele cruzar varios documentos, así que la recuperación funciona sobre chunks pequeños y ricos en evidencia con metadatos: empresa, proyecto, periodo, tecnología, tipo de afirmación. La búsqueda full-text de Postgres y los embeddings con pgvector se combinan con reciprocal rank fusion, y un router decide primero si la pregunta necesita evidencia.',
          },
          {
            kind: 'flow',
            steps: ['Pregunta', 'Router', 'Recuperación híbrida', 'Fusión', 'Conjunto de evidencia', 'Respuesta + fuentes'],
          },
          {
            kind: 'prose',
            text: 'El texto recuperado se trata como evidencia, nunca como instrucciones. Las instrucciones que aparezcan dentro de un documento recuperado no se siguen.',
          },
        ],
      },
      adversarial: {
        heading: 'Un agente público es una superficie adversarial',
        blocks: [
          {
            kind: 'bullets',
            items: [
              'Límites de alcance duros, con comprobaciones de entrada y salida.',
              'Secretos completamente fuera de la recuperación.',
              'Sesiones emitidas por el servidor: tres preguntas, y el contador no se reinicia recargando.',
              'Límites de tasa y logging de patrones sospechosos.',
              'Comportamiento de fallback seguro.',
            ],
          },
          {
            kind: 'prose',
            text: 'El email que se pide antes de la demo es para acceso y prevención de abuso, no una newsletter. Los identificadores de visitante se hashean en el servidor.',
          },
        ],
      },
      evals: {
        heading: 'Evals',
        blocks: [
          {
            kind: 'cards',
            items: [
              { title: 'Factual', detail: 'Fechas, títulos, empresas.' },
              { title: 'Límite', detail: 'No inventa clientes, ingresos ni escala.' },
              { title: 'Atribución', detail: 'Mantiene separados JPMorgan, Moody\'s y los proyectos personales.' },
              { title: 'Estado', detail: 'Llama prototipos a los prototipos.' },
              { title: 'Recuperación', detail: 'Cita el case study relevante, no la palabra clave más cercana.' },
              { title: 'Idioma', detail: 'EN y ES con los mismos hechos.' },
            ],
          },
          {
            kind: 'quote',
            text: 'El eval que más importa: ¿el agente la hace sonar más consumada de lo que la evidencia sostiene?',
          },
        ],
      },
      observability: {
        heading: 'Observabilidad',
        blocks: [
          {
            kind: 'prose',
            text: 'Cada traza registra los chunks recuperados, la latencia del modelo, una estimación de tokens y coste, las decisiones de seguridad y el grado de fundamento. Una mala respuesta deja de ser una anécdota y se convierte en un caso de test.',
          },
          {
            kind: 'flow',
            steps: ['Conversación', 'Traza', 'Score', 'Bucket de fallo', 'Nuevo eval', 'Gate de regresión'],
          },
        ],
      },
      architecture: {
        heading: 'Arquitectura',
        blocks: [
          { kind: 'code', code: ARCHITECTURE },
          {
            kind: 'prose',
            text: 'Las trazas y el registro de prompts funcionan sobre Langfuse, con un prompt de fallback local para que la recuperación del prompt no sea un punto único de fallo. Una GitHub Action convierte los fallos de producción en pull requests de test de regresión; una persona fusiona, y los prompts nunca se mutan de forma autónoma en producción.',
          },
        ],
      },
      shipped: {
        heading: 'Qué está funcionando',
        blocks: [
          {
            kind: 'bullets',
            items: [
              'Un front end estático con un widget que no guarda secretos.',
              'Funciones de API serverless en Vercel para creación de sesión y chat.',
              'Recuperación híbrida sobre un corpus en Supabase Postgres.',
              'Scoring online de cada respuesta en calidad, fundamento y seguridad.',
              'Una suite de evals con puerta en CI sobre seis categorías.',
            ],
          },
          {
            kind: 'prose',
            text: 'Se construyó con herramientas de desarrollo asistido por IA, que conviene decir en voz alta en una página sobre no exagerar. Siguiente: más evals a partir de preguntas reales de producción, Turnstile y la voz cuando los hechos se sostengan.',
          },
        ],
      },
    },
    faq: {
      heading: 'Preguntas frecuentes',
      items: [
        {
          q: '¿El agente habla como si fuera Brenda?',
          a: 'No. Es la IA de portafolio de Brenda, se refiere a ella en tercera persona y lo dice siempre que la identidad importa. Una persona en primera persona hace que una alucinación suene como una afirmación personal.',
        },
        {
          q: '¿Cómo funciona la recuperación?',
          a: 'Recuperación híbrida sobre un corpus en Supabase Postgres: búsqueda full-text y embeddings con pgvector combinados con reciprocal rank fusion. Un router decide primero si la pregunta necesita evidencia del portafolio, y el texto recuperado se trata como evidencia, nunca como instrucciones.',
        },
        {
          q: '¿Por qué solo tres preguntas por visitante?',
          a: 'Prevención de abuso en una superficie pública. Las sesiones las emite el servidor, así que el contador no se reinicia recargando, y un hash de visitante generado en servidor añade un segundo límite.',
        },
        {
          q: '¿Se construyó con ayuda de IA?',
          a: 'Sí. El código es suyo y puede explicar cada parte, pero se escribió con herramientas de desarrollo asistido por IA, no solo a mano.',
        },
      ],
    },
    cta: {
      heading: 'Pregúntale algo',
      body: 'El chat de esta página es el sistema descrito arriba. Te dirá lo que no sabe.',
      ctaLabel: 'Leer el build log de IA aplicada',
      ctaHref: '/ia-aplicada',
      secondaryLabel: 'Sobre Brenda',
      secondaryHref: '/sobre-mi',
    },
  },
}
