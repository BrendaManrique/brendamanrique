import type { CaseStudyContent, CaseStudyLang } from './case-study'

const TRUTH_LAYER_CODE = `claim = retrieve(question)
if claim.source_strength == "verified":
    answer_with_citation(claim)
elif claim.source_strength == "in_progress":
    answer_with_status_label(claim)
else:
    say_you_do_not_know()`

const TARGET_ARCHITECTURE = `Browser widget
   ↓ streaming request
FastAPI / edge gateway
   ├─ rate limit + session
   ├─ safety / scope check
   ├─ intent classification
   ├─ retrieval service
   │    ├─ structured profile facts
   │    ├─ case-study chunks
   │    └─ project/build-status metadata
   ├─ tool router (later)
   ├─ model generation
   └─ trace + quality scoring
          ↓
      eval dataset / regression tests`

export const portfolioAgentContent: Record<CaseStudyLang, CaseStudyContent> = {
  en: {
    slug: 'portfolio-chat-agent',
    altSlug: 'agente-de-portafolio',
    readingTime: '11 min read',
    seo: {
      title: 'The chat bubble is the least interesting part',
      description:
        'An engineering build plan for a portfolio agent that can represent my work without inventing experience — RAG, evals, guardrails, observability, and voice only after factual reliability.',
    },
    header: {
      kicker: 'Case study · Portfolio chat agent',
      h1: 'The chat bubble is the least interesting part',
      subtitle:
        'An original engineering build plan for a portfolio agent that can represent my work without inventing experience — RAG, evals, guardrails, observability and voice only after factual reliability.',
      date: 'Sep 1, 2026',
    },
    nav: { breadcrumbHome: 'Home', breadcrumbCurrent: 'Portfolio chat agent' },
    status: 'Built and running on this site',
    directAnswer:
      'The floating chat on this site is the system described below: hybrid retrieval over a portfolio corpus, server-side session limits, guardrails, online answer scoring and CI evals that must pass before a change merges. The design constraint is unusual — the agent is allowed to speak as a representation of a professional history, so a hallucination can invent a job. Scale and client metrics are still not claimed.',
    sections: {
      'the-hard-part': {
        heading: 'The hard part',
        blocks: [
          {
            kind: 'quote',
            text: 'The UI can be built in an afternoon. The hard requirement is different: the agent is allowed to speak as a representation of my professional history. That means a hallucination is not merely a bad answer — it can invent a job, a client, a skill or a result that a recruiter may believe.',
          },
          {
            kind: 'prose',
            text: 'Everything below follows from that one constraint. This is also why the assistant does not roleplay as Brenda: it is her portfolio AI, it refers to her in the third person, and it says so when identity matters.',
          },
        ],
      },
      'truth-layer': {
        heading: '1. Build a truth layer before a personality',
        blocks: [
          {
            kind: 'prose',
            text: 'Separate source-of-truth material from nice prose. The agent should know the difference between a fact it can support, an interpretation of that fact, a project currently being built, and something it simply does not know.',
          },
          { kind: 'code', code: TRUTH_LAYER_CODE },
        ],
      },
      rag: {
        heading: '2. RAG is not "put the résumé in a vector database"',
        blocks: [
          {
            kind: 'prose',
            text: 'A recruiter question may cross several documents. The target design is hybrid retrieval over small, evidence-rich chunks, with metadata such as company, project, timeframe, technology, claim type and verification status.',
          },
          {
            kind: 'flow',
            steps: ['Question', 'Intent', 'Hybrid retrieval', 'Rerank / diversify', 'Evidence set', 'Answer + sources'],
          },
        ],
      },
      tools: {
        heading: '3. Knowledge and actions are different systems',
        blocks: [
          {
            kind: 'prose',
            text: 'Later tools might open a case study, generate a role-specific summary, create a contact handoff, or schedule a conversation. Each needs an explicit schema and permission boundary.',
          },
          {
            kind: 'quote',
            text: 'I do not want a system where "the LLM can call APIs" is the security model.',
          },
        ],
      },
      adversarial: {
        heading: '4. A public agent is an adversarial surface',
        blocks: [
          {
            kind: 'bullets',
            items: [
              'Hard scope boundaries.',
              'Input and output checks.',
              'Tool allowlists.',
              'Secrets kept completely outside retrieval.',
              'Rate limits.',
              'Logging for suspicious patterns.',
              'Safe fallback behaviour.',
            ],
          },
          {
            kind: 'callout',
            text: 'No single "system prompt saying don\'t do that" is enough.',
          },
        ],
      },
      evals: {
        heading: '5. Evals make the persona credible',
        blocks: [
          {
            kind: 'cards',
            items: [
              { title: 'Factual', detail: 'Dates, titles, companies.' },
              { title: 'Boundary', detail: 'Does not invent current clients or claim the consulting business is scaled.' },
              { title: 'Attribution', detail: 'Keeps JPMorgan, Moody\'s and personal projects separate.' },
              { title: 'Status', detail: 'Calls in-build work "in build".' },
              { title: 'Retrieval', detail: 'Cites the relevant case study, not the nearest keyword.' },
              { title: 'Language', detail: 'EN and ES with the same facts.' },
            ],
          },
          {
            kind: 'quote',
            text: 'The most important eval: "Does the agent make me sound more accomplished than the evidence supports?" The correct score is zero tolerance.',
          },
        ],
      },
      observability: {
        heading: '6. Observability turns bad conversations into engineering work',
        blocks: [
          {
            kind: 'prose',
            text: 'Each trace records the retrieved chunks, the tool calls, model latency, a token and cost estimate, safety decisions and groundedness. A bad answer stops being an anecdote and becomes a test case.',
          },
          {
            kind: 'flow',
            steps: ['Conversation', 'Trace', 'Score', 'Failure bucket', 'New eval', 'Fix / regression gate'],
          },
        ],
      },
      memory: {
        heading: '7. Memory is mostly a product decision',
        blocks: [
          {
            kind: 'prose',
            text: 'Session context is enough for v1. Long-term memory creates privacy and data-retention obligations without much recruiter value.',
          },
          {
            kind: 'quote',
            text: 'I would rather have excellent retrieval over my own data than remember strangers.',
          },
        ],
      },
      voice: {
        heading: '8. Voice comes after factual reliability',
        blocks: [
          {
            kind: 'prose',
            text: 'Voice multiplies failure modes: transcription, interruption, latency, speech cost and the particular awkwardness of a confident spoken hallucination. It is a capability to add once the facts hold, not before.',
          },
        ],
      },
      architecture: {
        heading: '9. Target architecture',
        blocks: [
          { kind: 'code', code: TARGET_ARCHITECTURE },
        ],
      },
      done: {
        heading: '10. What "done" means',
        blocks: [
          {
            kind: 'bullets',
            items: [
              'The agent answers the top professional questions correctly.',
              'Every material claim is grounded in portfolio evidence.',
              'It refuses to manufacture clients, metrics or skills.',
              'Retrieval failures are observable.',
              'The evaluation suite runs before deployment.',
              'One fact can be updated without rewriting a giant prompt.',
            ],
          },
        ],
      },
      shipped: {
        heading: 'What shipped',
        blocks: [
          {
            kind: 'flow',
            steps: ['Knowledge corpus', 'Ingestion + embeddings', 'Hybrid retrieval', 'Serverless chat API', 'Online scoring', 'Tracing', 'CI evals'],
            caption: 'Postgres full-text and pgvector, fused; evals must pass before a change merges.',
          },
          {
            kind: 'bullets',
            items: [
              'A static front end with a widget that holds no secrets.',
              'Serverless API functions (Vercel) for session creation and chat.',
              'Server-issued sessions: a visitor gives email and intent, receives a random server-side session token, and can ask three questions. The count cannot be reset by refreshing; a server-generated visitor hash adds a second limit.',
              'Hybrid retrieval over a Supabase Postgres corpus: full-text search plus pgvector embeddings, combined with reciprocal rank fusion.',
              'A router step that decides whether a question needs portfolio evidence at all.',
              'Retrieved text treated as evidence, never as instructions.',
              'Every answer scored online for quality, groundedness and safety; low-scoring cases land in a queue.',
              'Tracing and a prompt registry via Langfuse, with a local fallback prompt so prompt retrieval is not a single point of failure.',
              'A GitHub Action that pulls production failures into regression-test pull requests; the eval suite must pass before merge.',
            ],
          },
          {
            kind: 'callout',
            text: 'A gated closed loop, not autonomous production prompt mutation.',
          },
          {
            kind: 'prose',
            text: 'Privacy: the email collected before the three-question demo is used for demo access and abuse prevention, not a newsletter. Visitor identifiers are hashed server-side.',
          },
          {
            kind: 'prose',
            text: 'Next: expanding the eval set from real production questions through automated regression intake, adding Turnstile, and voice — only after factual reliability holds.',
          },
        ],
      },
    },
    faq: {
      heading: 'Frequently asked questions',
      items: [
        {
          q: 'Does the agent speak as Brenda?',
          a: 'No, and that is deliberate. It is Brenda\'s portfolio AI. It refers to her in the third person and says so whenever identity matters. A first-person persona makes a hallucination sound like a personal claim, which is exactly the failure mode this build is designed to prevent.',
        },
        {
          q: 'What is the most important eval?',
          a: '"Does the agent make her sound more accomplished than the evidence supports?" The target score is zero tolerance. Concretely, that means the agent must not invent clients, must call the consulting practice pre-scale, must label in-build work as in build, and must never describe the fractal-dimension research as a clinical diagnostic system.',
        },
        {
          q: 'How does retrieval work?',
          a: 'Hybrid retrieval over a Supabase Postgres corpus: full-text search and pgvector embeddings combined with reciprocal rank fusion. A router step first decides whether a question needs portfolio evidence at all, and retrieved text is treated as evidence, never as instructions — instructions found inside retrieved documents are not followed.',
        },
        {
          q: 'Why only three questions per visitor?',
          a: 'Abuse prevention on a public adversarial surface. Sessions are server-issued, so the count cannot be reset by refreshing, and a server-generated visitor hash adds a second limit. The email collected before the demo is for access and abuse prevention, not a newsletter, and visitor identifiers are hashed server-side.',
        },
        {
          q: 'Is the closed loop autonomous?',
          a: 'No. A GitHub Action pulls production failures into regression-test pull requests, and the eval suite must pass before merge. It is a gated closed loop — a human merges, and prompts are never mutated autonomously in production.',
        },
      ],
    },
    cta: {
      heading: 'Ask it something',
      body: 'The chat on this page is the system described above. It will tell you what it does not know.',
      ctaLabel: 'Read the consulting build log',
      ctaHref: '/agentic-ai-consulting',
      secondaryLabel: 'About Brenda',
      secondaryHref: '/about',
    },
  },
  es: {
    slug: 'agente-de-portafolio',
    altSlug: 'portfolio-chat-agent',
    readingTime: '11 min de lectura',
    seo: {
      title: 'La burbuja de chat es la parte menos interesante',
      description:
        'Un plan de ingeniería para un agente de portafolio que puede representar mi trabajo sin inventar experiencia: RAG, evals, guardrails, observabilidad y voz solo después de la fiabilidad factual.',
    },
    header: {
      kicker: 'Case study · Agente de chat del portafolio',
      h1: 'La burbuja de chat es la parte menos interesante',
      subtitle:
        'Un plan de construcción original para un agente de portafolio que puede representar mi trabajo sin inventar experiencia: RAG, evals, guardrails, observabilidad y voz solo después de la fiabilidad factual.',
      date: '1 sep 2026',
    },
    nav: { breadcrumbHome: 'Inicio', breadcrumbCurrent: 'Agente de portafolio' },
    status: 'Construido y funcionando en este sitio',
    directAnswer:
      'El chat flotante de este sitio es el sistema descrito abajo: recuperación híbrida sobre un corpus de portafolio, límites de sesión en servidor, guardrails, scoring online de cada respuesta y evals en CI que deben pasar antes de fusionar un cambio. La restricción de diseño es poco habitual: el agente habla como representación de una trayectoria profesional, así que una alucinación puede inventar un empleo. La escala y las métricas de cliente siguen sin afirmarse.',
    sections: {
      'the-hard-part': {
        heading: 'La parte difícil',
        blocks: [
          {
            kind: 'quote',
            text: 'La UI se construye en una tarde. El requisito difícil es otro: al agente se le permite hablar como representación de mi historia profesional. Eso significa que una alucinación no es simplemente una mala respuesta: puede inventar un empleo, un cliente, una habilidad o un resultado que un reclutador se crea.',
          },
          {
            kind: 'prose',
            text: 'Todo lo de abajo se deriva de esa única restricción. Por eso también el asistente no interpreta a Brenda: es su IA de portafolio, se refiere a ella en tercera persona y lo dice cuando la identidad importa.',
          },
        ],
      },
      'truth-layer': {
        heading: '1. Construir una capa de verdad antes que una personalidad',
        blocks: [
          {
            kind: 'prose',
            text: 'Separar el material que es fuente de verdad de la prosa bonita. El agente debe distinguir entre un hecho que puede sostener, una interpretación de ese hecho, un proyecto que se está construyendo ahora mismo y algo que sencillamente no sabe.',
          },
          { kind: 'code', code: TRUTH_LAYER_CODE },
        ],
      },
      rag: {
        heading: '2. RAG no es «meter el CV en una base vectorial»',
        blocks: [
          {
            kind: 'prose',
            text: 'La pregunta de un reclutador puede cruzar varios documentos. El diseño objetivo es recuperación híbrida sobre chunks pequeños y ricos en evidencia, con metadatos como empresa, proyecto, periodo, tecnología, tipo de afirmación y estado de verificación.',
          },
          {
            kind: 'flow',
            steps: ['Pregunta', 'Intención', 'Recuperación híbrida', 'Rerank / diversificar', 'Conjunto de evidencia', 'Respuesta + fuentes'],
          },
        ],
      },
      tools: {
        heading: '3. Conocimiento y acciones son sistemas distintos',
        blocks: [
          {
            kind: 'prose',
            text: 'Más adelante las herramientas podrían abrir un case study, generar un resumen para un rol concreto, crear un traspaso de contacto o agendar una conversación. Cada una necesita un esquema explícito y un límite de permisos.',
          },
          {
            kind: 'quote',
            text: 'No quiero un sistema donde «el LLM puede llamar a APIs» sea el modelo de seguridad.',
          },
        ],
      },
      adversarial: {
        heading: '4. Un agente público es una superficie adversarial',
        blocks: [
          {
            kind: 'bullets',
            items: [
              'Límites de alcance duros.',
              'Comprobaciones de entrada y de salida.',
              'Allowlists de herramientas.',
              'Secretos completamente fuera de la recuperación.',
              'Límites de tasa.',
              'Logging de patrones sospechosos.',
              'Comportamiento de fallback seguro.',
            ],
          },
          {
            kind: 'callout',
            text: 'Ningún «prompt de sistema que diga que no hagas eso» es suficiente por sí solo.',
          },
        ],
      },
      evals: {
        heading: '5. Los evals hacen creíble la persona',
        blocks: [
          {
            kind: 'cards',
            items: [
              { title: 'Factual', detail: 'Fechas, títulos, empresas.' },
              { title: 'Límite', detail: 'No inventa clientes actuales ni afirma que la consultoría está escalada.' },
              { title: 'Atribución', detail: 'Mantiene separados JPMorgan, Moody\'s y los proyectos personales.' },
              { title: 'Estado', detail: 'Llama «en construcción» al trabajo en construcción.' },
              { title: 'Recuperación', detail: 'Cita el case study relevante, no la palabra clave más cercana.' },
              { title: 'Idioma', detail: 'EN y ES con los mismos hechos.' },
            ],
          },
          {
            kind: 'quote',
            text: 'El eval más importante: «¿El agente me hace sonar más consumada de lo que la evidencia sostiene?». La puntuación correcta es tolerancia cero.',
          },
        ],
      },
      observability: {
        heading: '6. La observabilidad convierte malas conversaciones en trabajo de ingeniería',
        blocks: [
          {
            kind: 'prose',
            text: 'Cada traza registra los chunks recuperados, las llamadas a herramientas, la latencia del modelo, una estimación de tokens y coste, las decisiones de seguridad y el grado de fundamento. Una mala respuesta deja de ser una anécdota y se convierte en un caso de test.',
          },
          {
            kind: 'flow',
            steps: ['Conversación', 'Traza', 'Score', 'Bucket de fallo', 'Nuevo eval', 'Fix / gate de regresión'],
          },
        ],
      },
      memory: {
        heading: '7. La memoria es sobre todo una decisión de producto',
        blocks: [
          {
            kind: 'prose',
            text: 'El contexto de sesión basta para la v1. La memoria a largo plazo crea obligaciones de privacidad y retención de datos sin mucho valor para un reclutador.',
          },
          {
            kind: 'quote',
            text: 'Prefiero tener una recuperación excelente sobre mis propios datos que recordar a desconocidos.',
          },
        ],
      },
      voice: {
        heading: '8. La voz llega después de la fiabilidad factual',
        blocks: [
          {
            kind: 'prose',
            text: 'La voz multiplica los modos de fallo: transcripción, interrupción, latencia, coste del habla y la incomodidad particular de una alucinación dicha con seguridad. Es una capacidad para añadir cuando los hechos se sostienen, no antes.',
          },
        ],
      },
      architecture: {
        heading: '9. Arquitectura objetivo',
        blocks: [
          { kind: 'code', code: TARGET_ARCHITECTURE },
        ],
      },
      done: {
        heading: '10. Qué significa «terminado»',
        blocks: [
          {
            kind: 'bullets',
            items: [
              'El agente responde correctamente las principales preguntas profesionales.',
              'Toda afirmación material está fundamentada en evidencia del portafolio.',
              'Se niega a fabricar clientes, métricas o habilidades.',
              'Los fallos de recuperación son observables.',
              'La suite de evaluación se ejecuta antes del despliegue.',
              'Un dato se puede actualizar sin reescribir un prompt gigante.',
            ],
          },
        ],
      },
      shipped: {
        heading: 'Qué se ha entregado',
        blocks: [
          {
            kind: 'flow',
            steps: ['Corpus de conocimiento', 'Ingesta + embeddings', 'Recuperación híbrida', 'API de chat serverless', 'Scoring online', 'Trazas', 'Evals en CI'],
            caption: 'Full-text de Postgres y pgvector, fusionados; los evals deben pasar antes de fusionar un cambio.',
          },
          {
            kind: 'bullets',
            items: [
              'Un front end estático con un widget que no guarda secretos.',
              'Funciones de API serverless (Vercel) para creación de sesión y chat.',
              'Sesiones emitidas por el servidor: la visita da email e intención, recibe un token de sesión aleatorio del servidor y puede hacer tres preguntas. El contador no se reinicia recargando; un hash de visitante generado en servidor añade un segundo límite.',
              'Recuperación híbrida sobre un corpus en Supabase Postgres: búsqueda full-text más embeddings con pgvector, combinados con reciprocal rank fusion.',
              'Un paso de router que decide si la pregunta necesita evidencia del portafolio.',
              'El texto recuperado se trata como evidencia, nunca como instrucciones.',
              'Cada respuesta se puntúa online en calidad, fundamento y seguridad; los casos con baja puntuación van a una cola.',
              'Trazas y registro de prompts con Langfuse, con un prompt de fallback local para que la recuperación del prompt no sea un punto único de fallo.',
              'Una GitHub Action que convierte fallos de producción en pull requests de test de regresión; la suite de evals debe pasar antes de fusionar.',
            ],
          },
          {
            kind: 'callout',
            text: 'Un loop cerrado con puerta, no mutación autónoma de prompts en producción.',
          },
          {
            kind: 'prose',
            text: 'Privacidad: el email que se pide antes de la demo de tres preguntas se usa para acceso a la demo y prevención de abuso, no como newsletter. Los identificadores de visitante se hashean en el servidor.',
          },
          {
            kind: 'prose',
            text: 'Siguiente: ampliar el set de evals con preguntas reales de producción mediante ingesta automática de regresiones, añadir Turnstile y la voz, solo cuando la fiabilidad factual se sostenga.',
          },
        ],
      },
    },
    faq: {
      heading: 'Preguntas frecuentes',
      items: [
        {
          q: '¿El agente habla como si fuera Brenda?',
          a: 'No, y es deliberado. Es la IA de portafolio de Brenda. Se refiere a ella en tercera persona y lo dice siempre que la identidad importa. Una persona en primera persona hace que una alucinación suene como una afirmación personal, que es exactamente el modo de fallo que este diseño quiere evitar.',
        },
        {
          q: '¿Cuál es el eval más importante?',
          a: '«¿El agente la hace sonar más consumada de lo que la evidencia sostiene?». La puntuación objetivo es tolerancia cero. En concreto: el agente no puede inventar clientes, debe llamar pre-escala a la práctica de consultoría, debe etiquetar como «en construcción» el trabajo en construcción y nunca debe describir la investigación de dimensión fractal como un sistema de diagnóstico clínico.',
        },
        {
          q: '¿Cómo funciona la recuperación?',
          a: 'Recuperación híbrida sobre un corpus en Supabase Postgres: búsqueda full-text y embeddings con pgvector combinados con reciprocal rank fusion. Un paso de router decide primero si la pregunta necesita evidencia del portafolio, y el texto recuperado se trata como evidencia, nunca como instrucciones: las instrucciones que aparezcan dentro de un documento recuperado no se siguen.',
        },
        {
          q: '¿Por qué solo tres preguntas por visitante?',
          a: 'Prevención de abuso en una superficie pública y adversarial. Las sesiones las emite el servidor, así que el contador no se reinicia recargando, y un hash de visitante generado en servidor añade un segundo límite. El email que se pide antes de la demo es para acceso y prevención de abuso, no una newsletter, y los identificadores de visitante se hashean en el servidor.',
        },
        {
          q: '¿El loop cerrado es autónomo?',
          a: 'No. Una GitHub Action convierte los fallos de producción en pull requests de test de regresión, y la suite de evals debe pasar antes de fusionar. Es un loop cerrado con puerta: una persona fusiona, y los prompts nunca se mutan de forma autónoma en producción.',
        },
      ],
    },
    cta: {
      heading: 'Pregúntale algo',
      body: 'El chat de esta página es el sistema descrito arriba. Te dirá lo que no sabe.',
      ctaLabel: 'Leer el build log de consultoría',
      ctaHref: '/consultoria-ia-agentica',
      secondaryLabel: 'Sobre Brenda',
      secondaryHref: '/sobre-mi',
    },
  },
}
