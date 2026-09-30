import { LINKEDIN_URL } from './site';

export const seo = {
  es: {
    title: 'Brenda Manrique — Ingeniera de software senior',
    description:
      'Construyo software útil para sistemas complejos: plataformas financieras, analítica de crédito y agentes de IA. Berlín, remoto.',
  },
  en: {
    title: 'Brenda Manrique — Senior Software Engineer',
    description:
      'I build useful software for complex systems: financial platforms, credit analytics and AI agents. Berlin, remote.',
  },
};

export const translations = {
  es: {
    // --- Hero -------------------------------------------------------------
    greeting: 'Hola, soy',
    heroRole: 'Ingeniera de software senior',
    // Cycled by the typewriter in the hero title; the first one is what
    // crawlers and the pre-hydration render see, so it matches heroRole.
    greetingRoles: [
      'Ingeniera de software senior',
      'Constructora de sistemas de IA agéntica',
      'Applied AI Engineer',
      'Ingeniera full-stack',
      'Ingeniera de sistemas financieros',
    ],
    heroLine: 'Construyo sistemas fiables para finanzas, analítica e IA aplicada.',
    pillLabels: ['Backend', 'Sistemas financieros', 'IA aplicada'],
    location: 'Berlín, Alemania · remoto',
    heroSecondaryCta: 'Ver mi trabajo',
    heroNav: { work: 'Trabajo', projects: 'Proyectos', about: 'Sobre mí' },
    credibility: {
      label: 'Antes en',
      items: ["Moody's Analytics", 'JPMorgan', 'Money.Net'],
    },
    agentCard: {
      badge: 'DEMO',
      state: 'Pregunta por su trabajo — respuestas al instante',
      title: 'Habla con mi IA',
      sub: 'Respuestas reales sobre los sistemas que ha construido, cómo trabaja y qué está construyendo ahora.',
      cta: 'Habla con mi IA',
      ctaSub: '3 preguntas · las respuestas citan su portafolio',
      questions: [
        '¿Qué sistemas de IA está construyendo?',
        '¿Qué construyó en Moody\'s?',
        '¿Qué está haciendo ahora?',
        'Cuéntame su trayectoria.',
      ],
    },

    // --- Narrative (typewriter section) -----------------------------------
    story: {
      context: 'Primero entender el proceso. +Después construir el sistema+.',
      reflections: ['Funciona. De verdad funciona.', '...¿y ahora qué?'],
      hookParagraphs: [
        ['En 2025 dejé Moody\'s y me mudé a Berlín *para aprender el nuevo stack de IA construyendo con él.*'],
        [
          'Las herramientas son nuevas. La disciplina no:',
          'entender cómo ocurre realmente el trabajo y luego +convertirlo en software en el que se pueda confiar+.',
        ],
      ],
      nav: [
        { icon: 'briefcase', label: 'Experiencia', href: '#experience' },
        { icon: 'folder', label: 'Proyectos', href: '#projects' },
        { icon: 'mail', label: 'Contacto', href: '#contact' },
        { icon: 'bot', label: 'Pregúntale', href: '#chat', highlight: true },
      ],
      skipButton: 'Saltar intro',
    },

    // --- Experience -------------------------------------------------------
    experience: {
      title: 'Experiencia',
      lead: 'El hilo conductor es el trabajo de sistemas: convertir procesos financieros y operativos complicados en software en el que se pueda confiar.',
      items: [
        {
          company: 'Proyectos independientes de software e IA',
          role: 'Ingeniera de software independiente',
          period: 'Ago 2025 — Presente',
          location: 'Berlín, Alemania',
          summary:
            'Tras dejar Moody\'s y mudarme de país hasta instalarme en Berlín, empecé a centrarme en la IA aplicada y en proyectos de software propios.',
          highlights: [
            'Diseño y construyo sistemas pequeños de IA aplicada con Python, FastAPI, Postgres/Supabase, recuperación, integraciones de herramientas, flujos de aprobación humana y despliegues observables.',
            'El agente de chat de este sitio está en producción: RAG híbrido, evals en CI, guardrails y trazas.',
            'Proyectos: agente del portafolio, Family Agent, Natalia y Casicornio.',
          ],
          caseStudyUrl: '/ia-aplicada',
          caseStudyLabel: 'Leer: el build log',
        },
        {
          company: "Moody's Analytics",
          role: 'Assistant Director — Software Engineer',
          period: 'Abr 2023 — Ago 2025',
          location: 'Predictive Analytics · Nueva York',
          summary:
            'Ingeniería de producto en EDF-X, Credit Analytics y Risk Scorecard, dentro del equipo de Predictive Analytics.',
          highlights: [
            'Implementé en Python reglas de negocio y de selección de modelo, traduciendo requisitos de especialistas en riesgo de crédito a lógica de producción.',
            'Construí partes del flujo de overlay cualitativo como parte del equipo de ingeniería de Predictive Analytics.',
            'Contribuí al diseño de APIs con estado y de flujos para procesos analíticos de larga duración.',
            'Trabajé sobre todo en Python, además de TypeScript y Angular en la capa de producto.',
          ],
          caseStudyUrl: '/moodys',
          caseStudyLabel: 'Leer: analítica de crédito',
        },
        {
          company: 'JPMorgan Chase & Co.',
          role: 'Software Engineer — Senior Associate',
          period: 'Oct 2018 — Ago 2022',
          location: 'Asset Management · Nueva York',
          highlights: [
            'Lideré la ingeniería y la arquitectura frontend de una aplicación de gestión de carteras de derivados construida sobre Athena, la plataforma de riesgo cross-asset de JPMorgan.',
            'Contribuí también en las capas de backend e integración, con Java, Python, JavaScript, TypeScript y C#.',
            'Participé en el desmantelamiento de una plataforma heredada de Trading, Riesgo y P&L para Renta Fija.',
          ],
          caseStudyUrl: '/sistemas-financieros',
          caseStudyLabel: 'Leer: sistemas financieros',
        },
        {
          company: 'Money.Net',
          role: 'Software Engineer',
          period: 'Ene 2016 — Jun 2018',
          location: 'Terminal de mercados financieros · Manhattan',
          highlights: [
            'Me incorporé mientras se creaba el nuevo terminal de mercados: programé el frontend inicial desde cero y contribuí a partes del backend.',
            'ReactJS, Java 8, WebSockets, gRPC, microservicios y APIs REST en Python para datos de mercado en tiempo real y alto volumen.',
            'Integraciones de mensajería en tiempo real, incluido XMPP, y trabajo continuado según evolucionaba la arquitectura.',
          ],
          caseStudyUrl: '/sistemas-financieros',
          caseStudyLabel: 'Leer: sistemas financieros',
        },
        {
          company: 'Proyectos independientes y desarrollo profesional',
          role: 'Desarrollo freelance y proyectos propios',
          period: 'Ene 2014 — Ago 2015',
          location: 'Nueva York / viajes',
          highlights: [
            'Proyectos freelance, personales y de aprendizaje en JavaScript y Python, mientras preparaba el posgrado y la transición a Nueva York.',
          ],
        },
        {
          company: 'DLYA Bantotal',
          role: 'Technology Developer Consultant',
          period: 'Oct 2012 — May 2013',
          location: 'Core bancario · Perú',
          highlights: [
            'Desarrollé software con GeneXus para cerrar brechas de una implementación de core bancario.',
            'Apoyé temas de negocio relacionados con riesgo de crédito y analicé base de datos y consultas Oracle.',
          ],
        },
      ],
    },

    // --- Independent projects -----------------------------------------
    projects: {
      title: 'Proyectos independientes',
      items: [
        {
          title: 'Agente de chat del portafolio',
          status: 'En producción',
          live: true,
          featured: true,
          desc: 'Un agente de portafolio basado en recuperación, diseñado para responder preguntas sobre mi trabajo sin inventar mi historia profesional.',
          focus: 'RAG · evals · observabilidad · límites de seguridad',
          caseStudyUrl: '/agente-de-portafolio',
        },
        {
          title: 'Family Agent',
          status: 'En desarrollo',
          desc: 'Infraestructura de agentes para flujos reales del hogar: mensajería, herramientas, memoria y aprobaciones humanas.',
          focus: 'Herramientas · memoria · aprobaciones · WhatsApp',
        },
        {
          title: 'Natalia',
          status: 'Experimento',
          desc: 'Un experimento de producto independiente que explora audio asistido por IA, automatización y UX de producto.',
          focus: 'Audio · automatización · UX',
        },
        {
          title: 'Casicornio',
          status: 'Antes del lanzamiento',
          desc: 'Construyendo una publicación en español sobre tecnología y un experimento de automatización.',
          focus: 'Editorial · automatización',
          caseStudyUrl: '/casicornio',
        },
      ],
      closing:
        'Después de mudarme a Berlín y dedicar mi periodo sabático a construir proyectos independientes de software e IA, ahora quiero llevar esa experiencia a un buen equipo de ingeniería.',
    },

    earlierProjects: {
      title: 'Proyectos anteriores',
      items: [
        {
          title: 'Invip — IA para accesibilidad visual',
          badge: '2015–2018 · NYU',
          desc: 'Cofundé Invip y fui su CTO: una startup constituida en EE. UU. con un prototipo funcional que combinaba visión por computador y machine learning para reconocer y categorizar el entorno, con interacción por voz mediante Amazon Alexa. Proyecto premiado en NYU.',
          tech: ['Visión por computador', 'Machine learning', 'Amazon Alexa', 'Accesibilidad'],
          caseStudyUrl: '/invip',
        },
        {
          title: 'Dimensión fractal en imágenes de lesiones cutáneas',
          badge: '2010 · INVESTIGACIÓN',
          desc: 'Prototipo de investigación temprano que exploraba la dimensión fractal como característica para distinguir imágenes de lesiones cutáneas. Ganó el concurso de pósters del AGSE International Congress 2010.',
          disclaimer:
            'Investigación, no un sistema de diagnóstico clínico.',
          tech: ['Geometría fractal', 'Procesamiento de imagen', 'Clasificación'],
          caseStudyUrl: '/dimension-fractal',
        },
        {
          title: 'Framework de componentes gráficos dinámicos',
          badge: '2013 · TESIS · MENCIÓN HONORÍFICA',
          desc: 'Tesis de licenciatura: diseñé e implementé un framework para generar dinámicamente componentes gráficos en aplicaciones de negocio, y lo evalué experimentalmente demostrando una reducción del tiempo de implementación.',
          tech: ['Android', 'Frameworks', 'UI dinámica'],
          caseStudyUrl: '/proyectos-iniciales',
        },
        {
          title: 'Aquolity',
          badge: 'MVP',
          desc: 'MVP de software para Aquolity, un concepto temprano de crowdsourcing para monitorizar la calidad del agua y conectar a quien detecta un problema con quien puede resolverlo.',
          tech: ['Crowdsourcing', 'Marketplace', 'Impacto social'],
          caseStudyUrl: '/proyectos-iniciales',
        },
        {
          title: 'Project Tango y marketplace NFT en Solana',
          badge: 'PROTOTIPOS',
          desc: 'Un prototipo colaborativo de VR/AR para un concurso de Google Project Tango a través del NYC Google Developer Group, donde programé parte del proyecto en C#. Y un prototipo de marketplace NFT en Solana: smart contracts, flujo de minteo, lógica de marketplace y UI de wallet.',
          tech: ['C#', 'VR / AR', 'Solana', 'Smart contracts'],
          caseStudyUrl: '/proyectos-iniciales',
        },
      ],
    },

    // --- Sharing ----------------------------------------------------------
    sharing: {
      title: 'Lo que comparto',
      lead: 'Notas que fui dejando en el camino.',
      items: [
        { platform: 'Medium', title: 'Every Time I Try to Keep Up With AI News, I Get This Strange Feeling', date: 'may 2026', url: 'https://brendamanrique.medium.com/something-d9cdf8a2befc' },
        { platform: 'Medium', title: 'Your Serverless Lambdas Are Bleeding Money: Here’s How to Stop It', date: 'ene 2026', url: 'https://brendamanrique.medium.com/your-serverless-lambdas-are-bleeding-money-heres-how-to-stop-it-3060b44e829f' },
        { platform: 'Medium', title: 'Cracking the MBTI Code: Are you a natural fit for Software Engineering?', date: 'mar 2023', url: 'https://brendamanrique.medium.com/cracking-the-mbti-code-are-you-a-natural-fit-for-software-engineering-a8676d463387' },
        { platform: 'LinkedIn', title: 'Big Data Simple', date: 'nov 2015', url: 'https://es.linkedin.com/pulse/big-data-en-3-palabras-brenda-stephanie' },
        { platform: 'LinkedIn', title: 'There are only 3 true job interview questions', date: 'oct 2015', url: 'https://www.linkedin.com/pulse/only-3-true-job-interview-questions-brenda-stephanie' },
        { platform: 'X', title: '@brendamanrique', date: '', url: 'https://x.com/brendamanrique' },
      ],
    },

    // --- Education --------------------------------------------------------
    education: {
      title: 'Formación',
      degreesTitle: 'Títulos',
      items: [
        {
          org: 'New York University · Tandon School of Engineering · Stern School of Business',
          title: 'MS, Management of Technology',
          period: '2015–2018',
          desc: 'Gestión de proyectos, analítica de datos, contabilidad/finanzas y emprendimiento tecnológico, con una parte sustancial de los créditos cursada en NYU Stern.',
        },
        {
          org: 'Universidad Católica de Santa María · Perú',
          title: 'Ingeniería de Sistemas — concentración en Inteligencia Artificial',
          period: '2007–2013',
          desc: 'Algoritmos y estructuras de datos, arquitectura de computadores, bases de datos e ingeniería de software. Tesis con mención honorífica.',
        },
      ],
      certifications: {
        title: 'Certificaciones',
        groups: [
          {
            label: 'Anthropic Academy',
            note: 'Los cuatro cursos base que abren el camino profesional.',
            items: [
              { name: 'Claude Code in Action', issuer: 'Anthropic', date: 'jun 2026', url: 'https://verify.skilljar.com/c/zmcwhtyfv7gq' },
              { name: 'Building with the Claude API', issuer: 'Anthropic', date: 'jun 2026', url: 'https://verify.skilljar.com/c/hnme35owq5vi' },
              { name: 'Introduction to Model Context Protocol', issuer: 'Anthropic', date: 'jun 2026', url: 'https://verify.skilljar.com/c/nprunad7gakc' },
              { name: 'Introduction to Agent Skills', issuer: 'Anthropic', date: 'jun 2026', url: 'https://verify.skilljar.com/c/bsn72ocju8iw' },
            ],
          },
          {
            label: 'Otros cursos',
            note: '',
            items: [
              { name: 'Multi AI Agent Systems', issuer: 'CrewAI', date: 'may 2024', url: 'https://www.deeplearning.ai/short-courses/multi-ai-agent-systems-with-crewai/' },
              { name: 'React: Testing and Debugging', issuer: 'LinkedIn Learning', date: 'ene 2017', url: 'https://www.linkedin.com/learning/certificates/39b432b93ee74a81028abdc7ef1febfeb177d35b3f9dfa106ae28764e73c5a13' },
              { name: 'Build an NFT Blockchain DApp', issuer: 'Noble Work Foundation', date: '', url: 'http://ude.my/UC-125577d8-61f5-47c9-bbf8-6c550e10a8ef' },
            ],
          },
        ],
      },
    },

    // --- Skills -----------------------------------------------------------
    skills: {
      title: 'Habilidades y stack',
      lead: 'De los sistemas financieros a la IA aplicada',
      capabilities: [
        { icon: '◎', title: 'IA aplicada', desc: 'RAG, tool calling, límites de herramientas tipados, flujos de aprobación humana y evaluación.' },
        { icon: '↔', title: 'Ingeniería de producto full-stack', desc: 'Frontends en React/TypeScript, APIs, modelos de datos y servicios de backend.' },
        { icon: '∿', title: 'Sistemas financieros y de crédito', desc: 'Riesgo, derivados, datos de mercado, scorecards y flujos de cartera.' },
        { icon: '⚙', title: 'Flujos distribuidos', desc: 'Batching, concurrencia, estado, timeouts y procesamiento asíncrono.' },
        { icon: '☁', title: 'Cloud y datos', desc: 'AWS, S3, PostgreSQL, Supabase, Docker, CI/CD e integraciones de servicios.' },
        { icon: '✦', title: 'Reglas de dominio en código', desc: 'Traducir requisitos de especialistas de riesgo y negocio en lógica fiable en Python.' },
      ],
      clouds: [
        { area: 'IA aplicada', items: ['RAG', 'Tool calling', 'MCP', 'FastAPI', 'Human-in-the-loop', 'Evals', 'Observabilidad', 'pgvector'] },
        { area: 'Ingeniería full-stack', items: ['Python', 'TypeScript', 'React', 'JavaScript', 'Java', 'C#', 'Angular', 'APIs REST', 'WebSockets', 'gRPC'] },
        { area: 'Cloud y datos', items: ['AWS', 'S3', 'PostgreSQL', 'Supabase', 'Oracle', 'MySQL', 'Docker', 'CI/CD', 'Procesamiento async'] },
        { area: 'Dominio', items: ['Analítica de crédito', 'Probabilidad de impago', 'Scorecards', 'Derivados', 'Riesgo / P&L', 'Datos de mercado en tiempo real', 'Core bancario'] },
      ],
    },

    // --- Contact ----------------------------------------------------------
    cta: {
      title: 'Hablemos.',
      desc: 'Me interesan las conversaciones sobre sistemas donde la corrección importa.',
      book: 'Agenda una llamada sobre un puesto',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    footerNote:
      'Contenido anclado en el currículum de Brenda y en el trabajo que está haciendo ahora.',

    // --- UI chrome --------------------------------------------------------
    ui: {
      languageBanner: 'This site is available in English',
      languageBannerSwitch: 'Switch to EN',
      languageBannerSwitchPrefix: 'Switch to',
      languageBannerSwitchLang: 'EN',
      languageToggle: 'ES',
      typingIndicator: 'Escribiendo...',
    },
    chat: {
      placeholder: 'Escribe tu pregunta...',
      title: 'IA de portafolio de Brenda',
      subtitle: 'Pregunta por su experiencia y sus proyectos',
      greeting:
        '¡Hola! Soy la **IA de portafolio de Brenda**. Pregúntame lo que quieras sobre su experiencia, sus proyectos y las decisiones de ingeniería detrás de ellos. Si algo no está en el portafolio, te lo diré.',
      error: `La IA está haciendo una pausa breve. Los casos de estudio de esta web cuentan el trabajo de Brenda en detalle — o puedes escribirle directamente por [LinkedIn](${LINKEDIN_URL}).`,
      offline: 'Parece que no hay conexión a internet. Comprueba tu red e inténtalo de nuevo.',
      prompts: [
        { icon: 'briefcase', label: 'Sistemas de IA', query: '¿Qué sistemas de IA está construyendo Brenda?' },
        { icon: 'rocket', label: "Moody's", query: "¿Qué construyó Brenda en Moody's?" },
        { icon: 'help', label: 'Ahora mismo', query: '¿Qué está haciendo Brenda ahora?' },
        { icon: 'mail', label: 'Trayectoria', query: 'Cuéntame la trayectoria de Brenda.' },
      ],
      contactCtaTitle: '¿Quieres hablar con Brenda directamente?',
      contactCtaLabel: 'Conectar en LinkedIn',
      bookCtaLabel: 'Agendar una llamada sobre un puesto',
      limitTitle: 'Has usado tus 5 preguntas',
      limitBody: 'Para seguir la conversación, agenda una llamada con Brenda sobre un puesto — o escríbele por LinkedIn.',
      limitPlaceholder: 'Agenda una llamada para continuar',
      questionsLeft: (n: number) => (n === 1 ? 'Queda 1 pregunta' : `Quedan ${n} preguntas`),
      voice: {
        start: 'Hablar con la IA',
        stop: 'Terminar',
        connecting: 'Conectando...',
        listening: 'Te escucho...',
        thinking: 'Pensando...',
        searching: 'Buscando en el portafolio...',
        speaking: 'Hablando...',
        timeWarning: '15 segundos restantes',
        ended: 'Sesión de voz terminada',
        rateLimited: 'Has alcanzado el límite de 3 sesiones de voz por día',
        unsupported: 'Tu navegador no soporta la entrada de audio',
        micDenied: 'Se necesita acceso al micrófono para el modo voz',
        switchToText: 'Cambiar a texto',
        connection: 'Error de conexión. Inténtalo de nuevo.',
      },
    },
  },

  en: {
    // --- Hero -------------------------------------------------------------
    greeting: "Hi, I'm",
    heroRole: 'Senior Software Engineer',
    greetingRoles: [
      'Senior Software Engineer',
      'Agentic AI Systems Builder',
      'Applied AI Engineer',
      'Full-Stack Engineer',
      'Financial Systems Engineer',
    ],
    heroLine: 'Building reliable systems across finance, analytics and applied AI.',
    pillLabels: ['Backend', 'Financial Systems', 'Applied AI'],
    location: 'Berlin, Germany · remote',
    heroSecondaryCta: 'View my work',
    heroNav: { work: 'Work', projects: 'Projects', about: 'About' },
    credibility: {
      label: 'Previously at',
      items: ["Moody's Analytics", 'JPMorgan', 'Money.Net'],
    },
    agentCard: {
      badge: 'DEMO',
      state: 'Ask about my work — instant answers',
      title: 'Talk to my AI',
      sub: "Get real answers about the systems I've built, how I work, and what I'm building now.",
      cta: 'Talk to my AI',
      ctaSub: '3 questions · answers cite her portfolio',
      questions: [
        'What AI systems is she building?',
        "What did she build at Moody's?",
        'What is she doing now?',
        'Walk me through your background.',
      ],
    },

    // --- Narrative (typewriter section) -----------------------------------
    story: {
      context: 'Understand the process first. +Then build the system+.',
      reflections: ['It works. It actually works.', '...now what?'],
      hookParagraphs: [
        ["In 2025 I left Moody's and moved to Berlin *to learn the new AI stack by building with it.*"],
        [
          'The tools are new. The discipline is not:',
          'learn how the work actually happens, then +turn it into software people can rely on+.',
        ],
      ],
      nav: [
        { icon: 'briefcase', label: 'Experience', href: '#experience' },
        { icon: 'folder', label: 'Projects', href: '#projects' },
        { icon: 'mail', label: 'Contact', href: '#contact' },
        { icon: 'bot', label: 'Ask the AI', href: '#chat', highlight: true },
      ],
      skipButton: 'Skip intro',
    },

    // --- Experience -------------------------------------------------------
    experience: {
      title: 'Experience',
      lead: 'The through-line is systems work: turning complicated financial and operational processes into software that can be trusted to run.',
      items: [
        {
          company: 'Independent Software Engineering & AI Projects',
          role: 'Independent Software Engineer',
          period: 'Aug 2025 — Present',
          location: 'Berlin, Germany',
          summary:
            "Following an international relocation and settling in Berlin, I began focusing more deeply on applied AI and independent software projects.",
          highlights: [
            'Designing and building small applied-AI systems using Python, FastAPI, Postgres/Supabase, retrieval, tool integrations, approval flows and observable deployments.',
            'The chat agent on this site is in production: hybrid RAG, CI-gated evals, guardrails and tracing.',
            'Projects: Portfolio Chat Agent, Family Agent, Natalia and Casicornio.',
          ],
          caseStudyUrl: '/applied-ai',
          caseStudyLabel: 'Read: the build log',
        },
        {
          company: "Moody's Analytics",
          role: 'Assistant Director — Software Engineer',
          period: 'Apr 2023 — Aug 2025',
          location: 'Predictive Analytics · New York',
          summary:
            'Product engineering across EDF-X, Credit Analytics and Risk Scorecard, inside the Predictive Analytics team.',
          highlights: [
            'Implemented business and model-selection rules in Python, translating credit-domain requirements into production logic.',
            "Built parts of the qualitative-overlay workflow as part of the Predictive Analytics engineering team.",
            'Contributed to stateful API and workflow design for long-running analytics processes.',
            'Worked primarily in Python, plus TypeScript and Angular in the product layer.',
          ],
          caseStudyUrl: '/moodys-credit-intelligence',
          caseStudyLabel: 'Read: credit analytics',
        },
        {
          company: 'JPMorgan Chase & Co.',
          role: 'Software Engineer — Senior Associate',
          period: 'Oct 2018 — Aug 2022',
          location: 'Asset Management · New York',
          highlights: [
            "Led frontend engineering and architecture for a derivatives portfolio-management application built on Athena, JPMorgan's cross-asset risk platform.",
            'Contributed across the backend and integration layers, working with Java, Python, JavaScript, TypeScript and C#.',
            'Contributed to decommissioning a legacy Trading, Risk and P&L platform for Fixed Income.',
          ],
          caseStudyUrl: '/financial-systems',
          caseStudyLabel: 'Read: financial systems',
        },
        {
          company: 'Money.Net',
          role: 'Software Engineer',
          period: 'Jan 2016 — Jun 2018',
          location: 'Financial Markets Terminal · Manhattan',
          highlights: [
            'Joined while the new markets terminal was being created: coded the initial frontend from scratch and contributed to parts of the backend.',
            'ReactJS, Java 8, WebSockets, gRPC, microservices and Python REST APIs for real-time, high-volume market data.',
            'Real-time messaging integrations including XMPP, and continued work as the architecture evolved.',
          ],
          caseStudyUrl: '/financial-systems',
          caseStudyLabel: 'Read: financial systems',
        },
        {
          company: 'Independent Projects & Professional Development',
          role: 'Freelance and personal projects',
          period: 'Jan 2014 — Aug 2015',
          location: 'New York / travel',
          highlights: [
            'Completed freelance, personal and learning projects in JavaScript and Python while preparing for graduate study and transitioning to New York.',
          ],
        },
        {
          company: 'DLYA Bantotal',
          role: 'Technology Developer Consultant',
          period: 'Oct 2012 — May 2013',
          location: 'Core Banking · Peru',
          highlights: [
            'Developed software with GeneXus to close gaps in a core-banking implementation.',
            'Supported credit-risk business issues and analysed Oracle databases and queries.',
          ],
        },
      ],
    },

    // --- Independent projects -----------------------------------------
    projects: {
      title: 'Independent Projects',
      items: [
        {
          title: 'Portfolio Chat Agent',
          status: 'In production',
          live: true,
          featured: true,
          desc: 'A retrieval-backed portfolio agent designed to answer questions about my work without inventing professional history.',
          focus: 'RAG · evals · observability · safety boundaries',
          caseStudyUrl: '/portfolio-chat-agent',
        },
        {
          title: 'Family Agent',
          status: 'In development',
          desc: 'Agent infrastructure for real household workflows across messaging, tools, memory and human approvals.',
          focus: 'Tools · memory · approvals · WhatsApp',
        },
        {
          title: 'Natalia',
          status: 'Experiment',
          desc: 'An independent product experiment exploring AI-assisted audio, automation and product UX.',
          focus: 'Audio · automation · UX',
        },
        {
          title: 'Casicornio',
          status: 'Pre-launch',
          desc: 'Building a Spanish-language technology publication and automation experiment.',
          focus: 'Editorial · automation',
          caseStudyUrl: '/en/casicornio',
        },
      ],
      closing:
        "After relocating to Berlin and spending my sabbatical building independent software and AI projects, I'm now looking to bring that experience into a strong engineering team.",
    },

    earlierProjects: {
      title: 'Earlier Projects',
      items: [
        {
          title: 'Invip — AI for Visual Accessibility',
          badge: '2015–2018 · NYU',
          desc: 'She co-founded Invip and served as CTO: a U.S.-incorporated accessibility startup with a working prototype combining computer vision and machine learning to recognize and categorize surroundings, with voice interaction through Amazon Alexa. An award-winning NYU project.',
          tech: ['Computer vision', 'Machine learning', 'Amazon Alexa', 'Accessibility'],
          caseStudyUrl: '/invip-accessibility-ai',
        },
        {
          title: 'Fractal dimension in skin-lesion imagery',
          badge: '2010 · RESEARCH',
          desc: 'An early research prototype exploring fractal dimension as a feature for distinguishing skin-lesion images. Won the poster competition at the AGSE International Congress 2010.',
          disclaimer:
            'Research, not a clinical diagnostic system.',
          tech: ['Fractal geometry', 'Image processing', 'Classification'],
          caseStudyUrl: '/fractal-dimension',
        },
        {
          title: 'Dynamic graphical-component framework',
          badge: '2013 · THESIS · HONORABLE MENTION',
          desc: 'Undergraduate thesis: designed and implemented a framework for dynamically generating graphical components for business applications, and evaluated it experimentally, demonstrating reduced implementation time.',
          tech: ['Android', 'Frameworks', 'Dynamic UI'],
          caseStudyUrl: '/early-projects',
        },
        {
          title: 'Aquolity',
          badge: 'MVP',
          desc: 'A software MVP for Aquolity, an early crowdsourcing concept for monitoring water quality and connecting the people who detect a problem with those able to solve it.',
          tech: ['Crowdsourcing', 'Marketplace', 'Social impact'],
          caseStudyUrl: '/early-projects',
        },
        {
          title: 'Project Tango and a Solana NFT marketplace',
          badge: 'PROTOTYPES',
          desc: 'A collaborative VR/AR prototype for a Google Project Tango contest through the NYC Google Developer Group, where she coded part of the project in C#. And a Solana-based NFT marketplace prototype: smart contracts, minting flow, marketplace logic and wallet UI.',
          tech: ['C#', 'VR / AR', 'Solana', 'Smart contracts'],
          caseStudyUrl: '/early-projects',
        },
      ],
    },

    // --- Sharing ----------------------------------------------------------
    sharing: {
      title: 'Sharing',
      lead: 'Notes left along the way.',
      items: [
        { platform: 'Medium', title: 'Every Time I Try to Keep Up With AI News, I Get This Strange Feeling', date: 'May 2026', url: 'https://brendamanrique.medium.com/something-d9cdf8a2befc' },
        { platform: 'Medium', title: 'Your Serverless Lambdas Are Bleeding Money: Here’s How to Stop It', date: 'Jan 2026', url: 'https://brendamanrique.medium.com/your-serverless-lambdas-are-bleeding-money-heres-how-to-stop-it-3060b44e829f' },
        { platform: 'Medium', title: 'Cracking the MBTI Code: Are you a natural fit for Software Engineering?', date: 'Mar 2023', url: 'https://brendamanrique.medium.com/cracking-the-mbti-code-are-you-a-natural-fit-for-software-engineering-a8676d463387' },
        { platform: 'LinkedIn', title: 'Big Data Simple', date: 'Nov 2015', url: 'https://es.linkedin.com/pulse/big-data-en-3-palabras-brenda-stephanie' },
        { platform: 'LinkedIn', title: 'There are only 3 true job interview questions', date: 'Oct 2015', url: 'https://www.linkedin.com/pulse/only-3-true-job-interview-questions-brenda-stephanie' },
        { platform: 'X', title: '@brendamanrique', date: '', url: 'https://x.com/brendamanrique' },
      ],
    },

    // --- Education --------------------------------------------------------
    education: {
      title: 'Education',
      degreesTitle: 'Degrees',
      items: [
        {
          org: 'New York University · Tandon School of Engineering · Stern School of Business',
          title: 'MS, Management of Technology',
          period: '2015–2018',
          desc: 'Project management, data analytics, accounting/finance and technology entrepreneurship, with substantial graduate coursework at NYU Stern.',
        },
        {
          org: 'Universidad Católica de Santa María · Peru',
          title: 'BSc, Systems Engineering — Artificial Intelligence concentration',
          period: '2007–2013',
          desc: 'Algorithms/data structures, computer architecture, databases and software engineering. Thesis received honorable mention.',
        },
      ],
      certifications: {
        title: 'Certifications',
        groups: [
          {
            label: 'Anthropic Academy',
            note: 'The four core courses that open the professional track.',
            items: [
              { name: 'Claude Code in Action', issuer: 'Anthropic', date: 'Jun 2026', url: 'https://verify.skilljar.com/c/zmcwhtyfv7gq' },
              { name: 'Building with the Claude API', issuer: 'Anthropic', date: 'Jun 2026', url: 'https://verify.skilljar.com/c/hnme35owq5vi' },
              { name: 'Introduction to Model Context Protocol', issuer: 'Anthropic', date: 'Jun 2026', url: 'https://verify.skilljar.com/c/nprunad7gakc' },
              { name: 'Introduction to Agent Skills', issuer: 'Anthropic', date: 'Jun 2026', url: 'https://verify.skilljar.com/c/bsn72ocju8iw' },
            ],
          },
          {
            label: 'Other courses',
            note: '',
            items: [
              { name: 'Multi AI Agent Systems', issuer: 'CrewAI', date: 'May 2024', url: 'https://www.deeplearning.ai/short-courses/multi-ai-agent-systems-with-crewai/' },
              { name: 'React: Testing and Debugging', issuer: 'LinkedIn Learning', date: 'Jan 2017', url: 'https://www.linkedin.com/learning/certificates/39b432b93ee74a81028abdc7ef1febfeb177d35b3f9dfa106ae28764e73c5a13' },
              { name: 'Build an NFT Blockchain DApp', issuer: 'Noble Work Foundation', date: '', url: 'http://ude.my/UC-125577d8-61f5-47c9-bbf8-6c550e10a8ef' },
            ],
          },
        ],
      },
    },

    // --- Skills -----------------------------------------------------------
    skills: {
      title: 'Skills & Stack',
      lead: 'From financial systems to applied AI',
      capabilities: [
        { icon: '◎', title: 'Applied AI', desc: 'RAG, tool calling, typed tool boundaries, human approval flows and evaluation.' },
        { icon: '↔', title: 'Full-Stack Product Engineering', desc: 'React/TypeScript frontends through APIs, data models and backend services.' },
        { icon: '∿', title: 'Financial & Credit Systems', desc: 'Risk, derivatives, market data, scorecards and portfolio workflows.' },
        { icon: '⚙', title: 'Distributed Workflows', desc: 'Batching, concurrency, state, timeouts and asynchronous processing.' },
        { icon: '☁', title: 'Cloud & Data', desc: 'AWS, S3, PostgreSQL, Supabase, Docker, CI/CD and service integrations.' },
        { icon: '✦', title: 'Domain rules in code', desc: 'Translating requirements from risk and business specialists into reliable Python logic.' },
      ],
      clouds: [
        { area: 'Applied AI', items: ['RAG', 'Tool calling', 'MCP', 'FastAPI', 'Human-in-the-loop', 'Evals', 'Observability', 'pgvector'] },
        { area: 'Full-stack engineering', items: ['Python', 'TypeScript', 'React', 'JavaScript', 'Java', 'C#', 'Angular', 'REST APIs', 'WebSockets', 'gRPC'] },
        { area: 'Cloud & data', items: ['AWS', 'S3', 'PostgreSQL', 'Supabase', 'Oracle', 'MySQL', 'Docker', 'CI/CD', 'Async processing'] },
        { area: 'Domain depth', items: ['Credit analytics', 'Probability of default', 'Scorecards', 'Derivatives', 'Risk / P&L', 'Real-time market data', 'Core banking'] },
      ],
    },

    // --- Contact ----------------------------------------------------------
    cta: {
      title: 'Let us talk.',
      desc: "I'm interested in conversations about systems where correctness matters.",
      book: 'Book a call about a role',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    footerNote:
      "Content grounded in Brenda's résumé and the work she is doing now.",

    // --- UI chrome --------------------------------------------------------
    ui: {
      languageBanner: 'Esta web está disponible en español',
      languageBannerSwitch: 'Cambiar a ES',
      languageBannerSwitchPrefix: 'Cambiar a',
      languageBannerSwitchLang: 'ES',
      languageToggle: 'EN',
      typingIndicator: 'Typing...',
    },
    chat: {
      placeholder: 'Type your question...',
      title: "Brenda's portfolio AI",
      subtitle: 'Ask about her experience and projects',
      greeting:
        "Hi! I'm **Brenda's portfolio AI**. Ask me anything about her experience, her projects and the engineering decisions behind them. If something isn't in the portfolio, I'll tell you.",
      error: `The live AI is taking a short break. The case studies on this site cover Brenda's work in depth — or you can reach her directly on [LinkedIn](${LINKEDIN_URL}).`,
      offline: 'It looks like you are offline. Check your connection and try again.',
      prompts: [
        { icon: 'briefcase', label: 'AI systems', query: 'What AI systems is Brenda building?' },
        { icon: 'rocket', label: "Moody's", query: "What did Brenda build at Moody's?" },
        { icon: 'help', label: 'Right now', query: 'What is Brenda doing now?' },
        { icon: 'mail', label: 'Background', query: "Walk me through Brenda's background." },
      ],
      contactCtaTitle: 'Want to talk to Brenda directly?',
      contactCtaLabel: 'Connect on LinkedIn',
      bookCtaLabel: 'Book a call about a role',
      limitTitle: "You've used your 5 questions",
      limitBody: 'To keep the conversation going, book a call with Brenda about a role — or reach out on LinkedIn.',
      limitPlaceholder: 'Book a call to continue',
      questionsLeft: (n: number) => (n === 1 ? '1 question left' : `${n} questions left`),
      voice: {
        start: 'Talk to the AI',
        stop: 'End',
        connecting: 'Connecting...',
        listening: 'Listening...',
        thinking: 'Thinking...',
        searching: 'Searching the portfolio...',
        speaking: 'Speaking...',
        timeWarning: '15 seconds remaining',
        ended: 'Voice session ended',
        rateLimited: 'You have reached the limit of 3 voice sessions per day',
        unsupported: 'Your browser does not support audio input',
        micDenied: 'Microphone access is needed for voice mode',
        switchToText: 'Switch to text',
        connection: 'Connection error. Please try again.',
      },
    },
  },
} as const;

export type Lang = 'es' | 'en';
