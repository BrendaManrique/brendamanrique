export const seo = {
  es: {
    title: 'Brenda Manrique — Constructora de sistemas de IA agéntica',
    description:
      'Brenda Manrique: ingeniera full-stack y de sistemas financieros que ahora construye sistemas de IA agéntica y una práctica de consultoría.',
  },
  en: {
    title: 'Brenda Manrique — Agentic AI Systems Builder',
    description:
      'Brenda Manrique: full-stack and financial systems engineer now building agentic AI systems and a consulting practice.',
  },
};

export const translations = {
  es: {
    // --- Hero -------------------------------------------------------------
    greeting: 'Hola, soy',
    greetingRoles: [
      'Constructora de sistemas de IA agéntica',
      'Ingeniera de software senior',
      'Applied AI Engineer',
      'Ingeniera full-stack',
      'Ingeniera de sistemas financieros',
    ],
    heroLines: [
      'con más de una década en software de producción',
      'en finanzas, analítica y sistemas inteligentes.',
    ],
    heroSubtitle:
      'Construyo sistemas full-stack, infraestructura de crédito y financiera, y ahora agentes de IA que usan herramientas. Desde que dejé Moody\'s en 2025, he estado construyendo deliberadamente la base técnica de una práctica de consultoría en IA agéntica y llevando Casicornio.',
    pillLabels: ['Ingeniera full-stack', 'IA agéntica', 'Sistemas financieros', 'Fase de construcción · pre-escala'],
    location: 'Berlín, Alemania · remoto',
    credibility: {
      label: 'Construido / estudiado en',
      items: ["MOODY'S ANALYTICS", 'JPMORGAN', 'NYU', 'MONEY.NET'],
    },
    agentCard: {
      badge: 'DEMO',
      state: 'Pregunta por su trabajo — respuestas al instante',
      title: 'Habla con mi IA',
      sub: 'Respuestas reales sobre los sistemas que ha construido, cómo trabaja y qué está construyendo ahora.',
      cta: '✦ Habla con mi IA',
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
      context: '+15 años construyendo+ sistemas desde dentro hacia fuera.',
      reflections: ['Funciona. De verdad funciona.', '...¿y ahora qué?'],
      hookParagraphs: [
        ['En 2025 dejé el camino empleado para aprender el nuevo stack de IA *construyendo con él.*'],
        [
          'Este capítulo no es «no pasó nada».',
          'Es la +fase de construcción+ previa al portafolio de clientes.',
        ],
      ],
      why: 'Empecé con ingeniería de sistemas centrada en IA, diagnóstico fractal y frameworks de datos móviles. Después vinieron la IA para accesibilidad, los terminales financieros en tiempo real, las plataformas de derivados y riesgo, y la analítica de crédito en Moody\'s.',
      seeking: [
        'Ahora monto una práctica de consultoría en IA agéntica.',
        'Prototipos desplegables, estudio con las manos, y Casicornio.',
        'Construir algo difícil.',
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
      lead: 'El hilo conductor es el trabajo de sistemas: convertir flujos financieros, operativos o humanos desordenados en software en el que se pueda confiar.',
      items: [
        {
          company: 'Práctica de consultoría en IA agéntica · Casicornio',
          role: 'Ingeniera independiente de sistemas de IA y fundadora',
          period: 'Ago 2025 — Presente',
          location: 'Berlín / remoto',
          status: 'Fase de construcción y validación',
          summary:
            'Transición deliberada del software empresarial a la IA agéntica de grado producción: construir la práctica, la infraestructura y los prototipos antes de escalar la entrega a clientes.',
          highlights: [
            'Diseño una oferta de consultoría en torno a agentes que operan flujos de trabajo, no chatbots genéricos.',
            'Prototipo servicios de agente en Python/FastAPI, RAG, memoria, integraciones de herramientas, interfaces de WhatsApp y voz, despliegue con Docker, monitorización y patrones de aprobación humana.',
            'Estudio material y cursos de Anthropic y aplico los conceptos directamente en experimentos que funcionan.',
            'Construyo la infraestructura operativa necesaria para sostener despliegues futuros en empresas de forma fiable y mantenible.',
            'Llevo Casicornio, una publicación y experimento de medios independiente en español sobre fundadores y tecnología.',
          ],
          callout:
            'Esto es pre-escala a propósito. No presento un portafolio de clientes grande que todavía no existe; enseño el trabajo de ingeniería, el pensamiento de sistemas y el proceso de construcción que lo preceden.',
          caseStudyUrl: '/consultoria-ia-agentica',
          caseStudyLabel: 'Leer: build log de la consultoría',
        },
        {
          company: "Moody's Analytics",
          role: 'Assistant Director — Software Engineer',
          period: 'Abr 2023 — Ago 2025',
          location: 'Predictive Analytics · Credit Default Modeling Solutions',
          summary:
            'Ingeniera full-stack en EDF-X, Credit Analytics, EDF-X Scorecard y flujos de modelos de crédito.',
          highlights: [
            'Backend y frontend para analítica de crédito, flujos de probabilidad de impago, scorecards y overlays cualitativos.',
            'AWS, S3, PostgreSQL, APIs financieras de cliente, servicios de datos compartidos, metadatos de modelos y flujos relacionados con RiskCalc.',
            'Casos de test automatizados de la API de EDF-X, además de informes, diálogos de cálculo y trabajo de UI de producto.',
            'Ayudé a otro equipo a migrar de un servicio basado en Dynamo a un servicio de datos compartido.',
            'Conceptos de API con estado: datos financieros persistidos, estado de proceso, batching y concurrencia fiables, menos timeouts en cliente y menos orquestación duplicada.',
          ],
          metrics: [
            { value: '≈5.000', label: 'PDs de scorecard en un flujo de cartera comercial' },
            { value: '2 días', label: 'cartera completa entregada con overlay cualitativo' },
            { value: 'Full-stack', label: 'frontend + backend + APIs + cloud/datos' },
          ],
          caseStudyUrl: '/moodys',
          caseStudyLabel: 'Leer: inteligencia de crédito a escala',
        },
        {
          company: 'JPMorgan Chase & Co.',
          role: 'Software Engineer — Senior Associate',
          period: 'Oct 2018 — Ago 2022',
          location: 'Banca de inversión / gestión de activos · Nueva York',
          highlights: [
            'Lideré el desarrollo frontend y contribuí en backend a una solución de gestión de carteras de derivados sobre Athena, la plataforma propietaria de riesgo cross-asset de JPMorgan.',
            'Java, JavaScript y Python, infraestructura de cómputo privada y CI/CD.',
            'Desarrollé software de apoyo al desmantelamiento de una plataforma de Trading, Riesgo y P&L para Renta Fija.',
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
            'Construí un terminal financiero desde cero con programación asíncrona y de red, WebSockets, gRPC y microservicios.',
            'Componentes de alto rendimiento en React y Java 8 para streaming de mercado de alta frecuencia.',
            'APIs REST en Python e integraciones de chat en tiempo real, incluido XMPP.',
          ],
          caseStudyUrl: '/sistemas-financieros',
          caseStudyLabel: 'Leer: sistemas financieros',
        },
        {
          company: 'Consultora independiente',
          role: 'Desarrollo de software',
          period: 'Ene 2014 — Ago 2015',
          location: 'Nueva York / viajes',
          highlights: [
            'Proyectos en JavaScript y Python mientras cursaba estudios de inglés, aprendía SAP ABAP y preparaba la transición al máster en Management of Technology de NYU.',
          ],
        },
        {
          company: 'DLYA Bantotal',
          role: 'Technology Developer Consultant',
          period: 'Oct 2012 — May 2013',
          location: 'Core bancario · Perú',
          highlights: [
            'Desarrollé software para cerrar brechas de una implementación de core bancario con GeneXus.',
            'Apoyé temas de negocio de riesgo de crédito y análisis de base de datos y consultas Oracle.',
          ],
        },
      ],
    },

    // --- Projects ---------------------------------------------------------
    projects: {
      title: 'Proyectos',
      lead: 'El objetivo no es hacer que todo proyecto antiguo parezca moderno. Es mostrar que experimentar con sistemas inteligentes lleva mucho tiempo formando parte del camino.',
      items: [
        {
          title: 'Laboratorio de consultoría en IA agéntica',
          badge: 'ACTUAL · EN CONSTRUCCIÓN',
          featured: true,
          desc: 'Un entorno práctico para diseñar la arquitectura, el despliegue, la observabilidad y el modelo operativo necesarios para entregar sistemas de IA agéntica a empresas sin convertir a cada cliente en un experimento único.',
          tech: ['Python', 'FastAPI', 'Docker', 'RAG', 'Tool use', 'WhatsApp / Voz', 'PostgreSQL', 'HITL'],
          caseStudyUrl: '/consultoria-ia-agentica',
        },
        {
          title: 'Agente de chat del portafolio',
          badge: 'ACTUAL · VIVO',
          desc: 'El asistente de este sitio: responde preguntas sobre su trabajo sin inventar experiencia, cita la evidencia que ha usado y podrá tener voz más adelante.',
          tech: ['RAG agéntico', 'Evals', 'Observabilidad', 'Guardrails', 'Voz después'],
          caseStudyUrl: '/agente-de-portafolio',
        },
        {
          title: 'Casicornio',
          badge: 'MEDIOS / FUNDADORES',
          desc: 'Una publicación y proyecto independiente en español sobre fundadores y tecnología: en parte sistema de contenido, en parte experimento de distribución. Un proyecto en marcha, no la afirmación de un gran negocio de medios.',
          tech: ['Operaciones editoriales', 'Distribución', 'Automatización'],
          caseStudyUrl: '/casicornio',
        },
        {
          title: 'Invip — IA para accesibilidad visual',
          badge: '2015–2018 · NYU',
          desc: 'Proyecto premiado en NYU y empresa constituida en EE. UU.: un asistente de audio para personas con discapacidad visual, con conceptos de machine learning, interfaz de audio y voz de la era Alexa. Su rol: CTO y cofundadora.',
          tech: ['Machine learning', 'Interfaz de voz', 'Accesibilidad'],
          caseStudyUrl: '/invip',
        },
        {
          title: 'Diagnóstico de cáncer de piel con dimensión fractal',
          badge: '2010 · INVESTIGACIÓN · PREMIO',
          desc: 'Investigación temprana que aplicó geometría fractal y medidas de curva de Koch a la irregularidad de muestras de lunares. Ganó el concurso de pósters del AGSE International Congress 2010.',
          disclaimer:
            'Proyecto de investigación histórico. No es un sistema de diagnóstico clínico validado y nunca debe describirse como tal.',
          tech: ['Geometría fractal', 'Curva de Koch', 'Clasificación'],
          caseStudyUrl: '/dimension-fractal',
        },
        {
          title: 'Framework de adquisición de datos en Android',
          badge: '2013 · TESIS · MENCIÓN HONORÍFICA',
          desc: 'Tesis de licenciatura: un framework para implementar aplicaciones móviles de adquisición de datos en Android mediante creación dinámica de componentes gráficos, reduciendo el tiempo de implementación con una estructura reutilizable.',
          tech: ['Android', 'Frameworks', 'UI dinámica'],
          caseStudyUrl: '/proyectos-iniciales',
        },
        {
          title: 'Aquolity',
          badge: 'TECNOLOGÍA SOCIAL',
          desc: 'Un concepto de crowdsourcing para monitorizar la calidad del agua en el mundo, con una capa de coordinación que conecta a quien detecta un problema con quien puede resolverlo.',
          tech: ['Crowdsourcing', 'Marketplace', 'Impacto social'],
          caseStudyUrl: '/proyectos-iniciales',
        },
        {
          title: 'Project Tango + marketplace blockchain',
          badge: 'EXPERIMENTOS',
          desc: 'Un juego de realidad virtual en C# para un concurso de Google Project Tango a través del NYC Google Developer Group, y un proyecto blockchain en Alemania en 2022 con smart contracts y un marketplace para acuñación de NFTs y visualización de wallets.',
          tech: ['C#', 'VR', 'Smart contracts', 'NFT'],
          caseStudyUrl: '/proyectos-iniciales',
        },
      ],
    },

    // --- Building now -----------------------------------------------------
    buildingNow: {
      title: 'Construyendo ahora',
      lead: 'Una transición del empleo empresarial a la propiedad técnica independiente.',
      cards: [
        {
          title: 'Práctica de consultoría',
          desc: 'Definir ofertas, patrones de despliegue, arquitectura de cliente, mantenibilidad, observabilidad y entrega repetible para agentes de IA de empresa.',
        },
        {
          title: 'Casicornio',
          desc: 'Operar una publicación sobre fundadores y tecnología, y aprender distribución, sistemas editoriales y construcción de audiencia haciéndolo.',
        },
        {
          title: 'Estudio de IA agéntica / Anthropic',
          desc: 'Cursos estructurados y estudio con las manos, traducidos inmediatamente en prototipos en lugar de listados como certificados decorativos.',
        },
        {
          title: 'Agente de portafolio',
          desc: 'Construir el RAG, los evals, los guardrails y la observabilidad detrás de un representante de chat y voz de este portafolio.',
        },
      ],
    },

    // --- Education --------------------------------------------------------
    education: {
      title: 'Formación',
      items: [
        {
          org: 'New York University · School of Engineering',
          title: 'MSc, Management of Technology',
          period: '2015–2018',
          desc: 'Gestión de proyectos, analítica de datos, contabilidad/finanzas y emprendimiento tecnológico; también cursó asignaturas en Stern.',
        },
        {
          org: 'Universidad Católica de Santa María · Perú',
          title: 'Ingeniería de Sistemas — concentración en Inteligencia Artificial',
          period: '2007–2013',
          desc: 'Algoritmos y estructuras de datos, arquitectura de computadores, bases de datos e ingeniería de software. Tesis con mención honorífica.',
        },
      ],
      timelineTitle: 'Línea de tiempo',
      timeline: [
        { years: '2007–2013', milestone: 'Ingeniería de Sistemas con concentración en IA en Perú; investigación de dimensión fractal y tesis sobre Android' },
        { years: '2012–2013', milestone: 'Consultoría de core bancario en DLYA Bantotal' },
        { years: '2014–2015', milestone: 'Desarrollo de software independiente mientras estudiaba y viajaba' },
        { years: '2015–2018', milestone: 'MSc en Management of Technology en NYU; Invip, IA para accesibilidad' },
        { years: '2016–2018', milestone: 'Terminal financiero de Money.Net' },
        { years: '2018–2022', milestone: 'Sistemas financieros y de riesgo en JPMorgan' },
        { years: '2022', milestone: 'Proyecto de marketplace blockchain en Alemania' },
        { years: '2023–2025', milestone: "Ingeniería de crédito y analítica predictiva en Moody's Analytics" },
        { years: '2025–hoy', milestone: 'Fase independiente de construcción en IA agéntica, práctica de consultoría y Casicornio' },
      ],
    },

    // --- Skills -----------------------------------------------------------
    skills: {
      title: 'Habilidades y stack',
      lead: 'Del software de producción a los sistemas agénticos',
      capabilities: [
        { icon: '◎', title: 'Arquitectura de IA agéntica', desc: 'Tool use, RAG, memoria, aprobaciones, traspasos a humanos y servicios de agente desplegables.' },
        { icon: '↔', title: 'Ingeniería de producto full-stack', desc: 'Frontends en React/JavaScript, APIs, modelos de datos y servicios de backend.' },
        { icon: '∿', title: 'Sistemas financieros y de crédito', desc: 'Riesgo, derivados, datos de mercado, PDs, scorecards y flujos de cartera.' },
        { icon: '⚙', title: 'Flujos distribuidos', desc: 'Batching, concurrencia, polling, estado, timeouts y procesamiento asíncrono.' },
        { icon: '☁', title: 'Cloud y datos', desc: 'AWS, S3, PostgreSQL, APIs, CI/CD e integraciones de servicios.' },
        { icon: '✦', title: 'I+D aplicada', desc: 'IA para accesibilidad, computación fractal, frameworks móviles y productos experimentales.' },
      ],
      clouds: [
        { area: 'IA agéntica', items: ['Agentes con tool use', 'RAG', 'Memoria', 'FastAPI', 'Human-in-the-loop', 'Despliegue de agentes', 'Evals', 'Observabilidad'] },
        { area: 'Ingeniería full-stack', items: ['React', 'JavaScript / TypeScript', 'Python', 'Java', 'C#', 'APIs REST', 'WebSockets', 'gRPC', 'Microservicios'] },
        { area: 'Cloud y datos', items: ['AWS', 'S3', 'PostgreSQL', 'Oracle', 'MySQL', 'Docker', 'CI/CD', 'Procesamiento async', 'Batching'] },
        { area: 'Dominio', items: ['Analítica de crédito', 'Probabilidad de impago', 'Scorecards', 'Derivados', 'Riesgo / P&L', 'Mercados financieros', 'Core bancario', 'Datos de alta frecuencia'] },
      ],
    },

    // --- Contact ----------------------------------------------------------
    cta: {
      title: 'Construir algo difícil.',
      desc: 'Me interesan roles senior de software / IA aplicada y conversaciones con empresas que tengan flujos operativos que merezcan convertirse en sistemas agénticos fiables.',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    footerNote:
      'Portafolio reconstruido · contenido anclado en el currículum de Brenda, sus proyectos archivados y su fase de construcción actual. No se afirman métricas de cliente ni de IA en producción donde todavía no existen.',

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
      error: 'Error al enviar. Inténtalo de nuevo.',
      offline: 'Parece que no hay conexión a internet. Comprueba tu red e inténtalo de nuevo.',
      prompts: [
        { icon: 'briefcase', label: 'Sistemas de IA', query: '¿Qué sistemas de IA está construyendo Brenda?' },
        { icon: 'rocket', label: "Moody's", query: "¿Qué construyó Brenda en Moody's?" },
        { icon: 'help', label: 'Ahora mismo', query: '¿Qué está haciendo Brenda ahora?' },
        { icon: 'mail', label: 'Trayectoria', query: 'Cuéntame la trayectoria de Brenda.' },
      ],
      contactCtaTitle: '¿Quieres hablar con Brenda directamente?',
      contactCtaLabel: 'Conectar en LinkedIn',
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
    greetingRoles: [
      'Agentic AI Systems Builder',
      'Senior Software Engineer',
      'Applied AI Engineer',
      'Full-Stack Engineer',
      'Financial Systems Engineer',
    ],
    heroLines: [
      'with a decade+ in production software',
      'across finance, analytics + intelligent systems.',
    ],
    heroSubtitle:
      "I build full-stack systems, credit and financial infrastructure, and now tool-using AI agents. Since leaving Moody's in 2025, I've been deliberately building the technical foundation for an agentic-AI consulting practice and running Casicornio.",
    pillLabels: ['Full-Stack Engineer', 'Agentic AI', 'Financial Systems', 'Build phase · pre-scale'],
    location: 'Berlin, Germany · remote',
    credibility: {
      label: 'Built / studied across',
      items: ["MOODY'S ANALYTICS", 'JPMORGAN', 'NYU', 'MONEY.NET'],
    },
    agentCard: {
      badge: 'DEMO',
      state: 'Ask about my work — instant answers',
      title: 'Talk to my AI',
      sub: "Get real answers about the systems I've built, how I work, and what I'm building now.",
      cta: '✦ Talk to my AI',
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
      context: '+15 years building+ systems from the inside out.',
      reflections: ['It works. It actually works.', '...now what?'],
      hookParagraphs: [
        ['In 2025 I stepped away from the employed path to learn the new AI stack by *building with it.*'],
        [
          'This chapter is not "nothing happened."',
          'It is the +build phase+ before the client portfolio.',
        ],
      ],
      why: "I started with AI-focused systems engineering, fractal diagnostics and mobile data frameworks. Then came accessibility AI, real-time financial terminals, derivatives and risk platforms, and credit analytics at Moody's.",
      seeking: [
        "Now I'm assembling an agentic AI consulting practice.",
        'Deployable prototypes, hands-on study, and Casicornio.',
        'Build something difficult.',
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
      lead: 'The through-line is systems work: turning messy financial, operational or human workflows into software that can be trusted to run.',
      items: [
        {
          company: 'Agentic AI Consulting Practice · Casicornio',
          role: 'Independent AI Systems Engineer & Founder',
          period: 'Aug 2025 — Present',
          location: 'Berlin / remote',
          status: 'Build & validation phase',
          summary:
            'Deliberately transitioning from enterprise software into production-grade agentic AI by building the practice, infrastructure and prototypes before scaling client delivery.',
          highlights: [
            'Designing a consulting offer around agents that operate workflows — not generic chatbots.',
            'Prototyping Python/FastAPI agent services, RAG, memory, tool integrations, WhatsApp/voice interfaces, Docker deployment, monitoring and human approval patterns.',
            'Studying Anthropic coursework and material, and applying the concepts directly in working experiments.',
            'Building the operating infrastructure needed to support future company deployments reliably and maintainably.',
            'Running Casicornio, an independent Spanish-language founder/technology publication and media experiment.',
          ],
          callout:
            "This is intentionally pre-scale. I'm not presenting a large client portfolio that does not exist yet; I'm showing the engineering work, systems thinking and build process that precede it.",
          caseStudyUrl: '/agentic-ai-consulting',
          caseStudyLabel: 'Read: the consulting build log',
        },
        {
          company: "Moody's Analytics",
          role: 'Assistant Director — Software Engineer',
          period: 'Apr 2023 — Aug 2025',
          location: 'Predictive Analytics · Credit Default Modeling Solutions',
          summary:
            'Full-stack engineer across EDF-X, Credit Analytics, EDF-X Scorecard and credit-model workflows.',
          highlights: [
            'Built backend and frontend functionality for credit analytics, probability-of-default workflows, scorecards and qualitative overlays.',
            'Worked with AWS, S3, PostgreSQL, client financial APIs, shared data services, model metadata and RiskCalc-related workflows.',
            'Built automated EDF-X API test cases and contributed across reports, calculation dialogs and product UI work.',
            'Helped another team migrate from a Dynamo-based service to a shared data service.',
            'Worked on stateful API concepts: persisted financial data, process status, reliable batching/concurrency, fewer client-side timeouts and less duplicated orchestration.',
          ],
          metrics: [
            { value: '≈5,000', label: 'scorecard PDs in a sales portfolio workflow' },
            { value: '2 days', label: 'full portfolio delivered with qualitative overlay' },
            { value: 'Full-stack', label: 'frontend + backend + APIs + cloud/data' },
          ],
          caseStudyUrl: '/moodys-credit-intelligence',
          caseStudyLabel: 'Read: credit intelligence at scale',
        },
        {
          company: 'JPMorgan Chase & Co.',
          role: 'Software Engineer — Senior Associate',
          period: 'Oct 2018 — Aug 2022',
          location: 'Investment Bank / Asset Management · New York',
          highlights: [
            "Led frontend development and contributed backend work for a derivatives portfolio management solution using Athena, JPMorgan's proprietary cross-asset risk platform.",
            'Worked with Java, JavaScript and Python, private compute infrastructure and CI/CD.',
            'Developed software supporting decommissioning of a Trading, Risk and P&L platform for Fixed Income.',
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
            'Built a financial terminal from scratch using asynchronous/network programming, WebSockets, gRPC and microservices.',
            'Built high-performance React and Java 8 components for high-frequency market streaming.',
            'Created Python REST APIs and real-time chat integrations including XMPP.',
          ],
          caseStudyUrl: '/financial-systems',
          caseStudyLabel: 'Read: financial systems',
        },
        {
          company: 'Independent Consultant',
          role: 'Software development',
          period: 'Jan 2014 — Aug 2015',
          location: 'New York / travel',
          highlights: [
            "Built JavaScript and Python projects while pursuing English studies, SAP ABAP learning and the transition into NYU's Management of Technology program.",
          ],
        },
        {
          company: 'DLYA Bantotal',
          role: 'Technology Developer Consultant',
          period: 'Oct 2012 — May 2013',
          location: 'Core Banking · Peru',
          highlights: [
            'Developed software to close gaps in a core-banking implementation using GeneXus.',
            'Supported credit-risk business issues and Oracle database/query analysis.',
          ],
        },
      ],
    },

    // --- Projects ---------------------------------------------------------
    projects: {
      title: 'Projects',
      lead: 'The point is not to make every old project look modern. It is to show that experimentation with intelligent systems has been part of the path for a long time.',
      items: [
        {
          title: 'Agentic AI Consulting Lab',
          badge: 'CURRENT · IN BUILD',
          featured: true,
          desc: 'A practical environment for designing the architecture, deployment, observability and operating model needed to deliver agentic AI systems to companies without turning every client into a one-off science project.',
          tech: ['Python', 'FastAPI', 'Docker', 'RAG', 'Tool Use', 'WhatsApp / Voice', 'PostgreSQL', 'HITL'],
          caseStudyUrl: '/agentic-ai-consulting',
        },
        {
          title: 'Portfolio Chat Agent',
          badge: 'CURRENT · LIVE',
          desc: 'The assistant running on this site: it answers questions about her work without inventing experience, cites the project evidence it used, and may support voice later.',
          tech: ['Agentic RAG', 'Evals', 'Observability', 'Guardrails', 'Voice later'],
          caseStudyUrl: '/portfolio-chat-agent',
        },
        {
          title: 'Casicornio',
          badge: 'MEDIA / FOUNDERS',
          desc: 'An independent Spanish-language founder/technology publication and project — part content system, part distribution experiment. An operating project, not a claim of a large media business.',
          tech: ['Editorial ops', 'Distribution', 'Automation'],
          caseStudyUrl: '/en/casicornio',
        },
        {
          title: 'Invip — AI for Visual Accessibility',
          badge: '2015–2018 · NYU',
          desc: 'NYU award-winning project and U.S.-incorporated company: an audio assistant for visually impaired people using machine-learning concepts, an audio/speech interface and Amazon Alexa-era voice interaction. Her role: CTO / co-founder.',
          tech: ['Machine learning', 'Speech interface', 'Accessibility'],
          caseStudyUrl: '/invip-accessibility-ai',
        },
        {
          title: 'Skin Cancer Diagnosis using Fractal Dimension',
          badge: '2010 · RESEARCH · AWARD',
          desc: 'An early research project applying fractal geometry and Koch-curve measurements to the irregularity of mole samples, with classification as the goal. Won the poster contest at the AGSE International Congress 2010.',
          disclaimer:
            'Historical research project. This is not a validated clinical diagnostic system and must never be described as one.',
          tech: ['Fractal geometry', 'Koch curve', 'Classification'],
          caseStudyUrl: '/fractal-dimension',
        },
        {
          title: 'Android Data-Acquisition Framework',
          badge: '2013 · THESIS · HONORABLE MENTION',
          desc: 'Undergraduate thesis: a framework for implementing mobile data-acquisition applications on Android through dynamic creation of graphical components, reducing implementation time with a reusable structure.',
          tech: ['Android', 'Frameworks', 'Dynamic UI'],
          caseStudyUrl: '/early-projects',
        },
        {
          title: 'Aquolity',
          badge: 'SOCIAL TECH',
          desc: 'A crowdsourcing concept for monitoring water quality worldwide, with a coordination layer connecting people who detect a problem with those able to deliver an effective solution.',
          tech: ['Crowdsourcing', 'Marketplace', 'Social impact'],
          caseStudyUrl: '/early-projects',
        },
        {
          title: 'Project Tango + Blockchain Marketplace',
          badge: 'EXPERIMENTS',
          desc: 'A C# virtual-reality game for a Google Project Tango contest through the NYC Google Developer Group, and a 2022 Germany-based blockchain project with smart contracts and a marketplace for NFT minting and wallet display.',
          tech: ['C#', 'VR', 'Smart contracts', 'NFT'],
          caseStudyUrl: '/early-projects',
        },
      ],
    },

    // --- Building now -----------------------------------------------------
    buildingNow: {
      title: 'Building now',
      lead: 'A transition from enterprise employment to independent technical ownership.',
      cards: [
        {
          title: 'Consulting practice',
          desc: 'Defining offers, deployment patterns, client architecture, maintainability, observability and repeatable delivery for company AI agents.',
        },
        {
          title: 'Casicornio',
          desc: 'Operating a founder/technology publication and learning distribution, editorial systems and audience-building by doing.',
        },
        {
          title: 'Anthropic / agentic AI study',
          desc: 'Structured coursework and hands-on study translated immediately into prototypes rather than listed as decorative certificates.',
        },
        {
          title: 'Portfolio agent',
          desc: 'Building the RAG, evals, guardrails and observability behind a chat/voice representative of this portfolio.',
        },
      ],
    },

    // --- Education --------------------------------------------------------
    education: {
      title: 'Education',
      items: [
        {
          org: 'New York University · School of Engineering',
          title: 'MSc, Management of Technology',
          period: '2015–2018',
          desc: 'Project management, data analytics, accounting/finance and technology entrepreneurship; coursework also taken at Stern.',
        },
        {
          org: 'Universidad Católica de Santa María · Peru',
          title: 'BSc, Systems Engineering — Artificial Intelligence concentration',
          period: '2007–2013',
          desc: 'Algorithms/data structures, computer architecture, databases and software engineering. Thesis received honorable mention.',
        },
      ],
      timelineTitle: 'Timeline',
      timeline: [
        { years: '2007–2013', milestone: 'Systems Engineering with an AI concentration in Peru; fractal-dimension research and Android thesis work' },
        { years: '2012–2013', milestone: 'Core-banking consulting at DLYA Bantotal' },
        { years: '2014–2015', milestone: 'Independent software development while studying/traveling' },
        { years: '2015–2018', milestone: 'NYU MSc in Management of Technology; Invip accessibility AI venture' },
        { years: '2016–2018', milestone: 'Money.Net financial terminal' },
        { years: '2018–2022', milestone: 'JPMorgan financial/risk systems' },
        { years: '2022', milestone: 'Germany blockchain marketplace project' },
        { years: '2023–2025', milestone: "Moody's Analytics credit / predictive analytics engineering" },
        { years: '2025–present', milestone: 'Independent agentic-AI build phase + consulting practice + Casicornio' },
      ],
    },

    // --- Skills -----------------------------------------------------------
    skills: {
      title: 'Skills & Stack',
      lead: 'From production software to agentic systems',
      capabilities: [
        { icon: '◎', title: 'Agentic AI Architecture', desc: 'Tool use, RAG, memory, approvals, human handoffs and deployable agent services.' },
        { icon: '↔', title: 'Full-Stack Product Engineering', desc: 'React/JavaScript frontends through APIs, data models and backend services.' },
        { icon: '∿', title: 'Financial & Credit Systems', desc: 'Risk, derivatives, market data, PDs, scorecards and portfolio workflows.' },
        { icon: '⚙', title: 'Distributed Workflows', desc: 'Batching, concurrency, polling, state, timeouts, asynchronous processing.' },
        { icon: '☁', title: 'Cloud & Data', desc: 'AWS, S3, PostgreSQL, APIs, CI/CD and service integrations.' },
        { icon: '✦', title: 'Applied R&D', desc: 'Accessibility AI, fractal computation, mobile frameworks and experimental products.' },
      ],
      clouds: [
        { area: 'Agentic AI', items: ['Tool-using agents', 'RAG', 'Memory', 'FastAPI', 'Human-in-the-loop', 'Agent deployment', 'Evals', 'Observability'] },
        { area: 'Full-stack engineering', items: ['React', 'JavaScript / TypeScript', 'Python', 'Java', 'C#', 'REST APIs', 'WebSockets', 'gRPC', 'Microservices'] },
        { area: 'Cloud & data', items: ['AWS', 'S3', 'PostgreSQL', 'Oracle', 'MySQL', 'Docker', 'CI/CD', 'Async processing', 'Batching'] },
        { area: 'Domain depth', items: ['Credit analytics', 'Probability of default', 'Scorecards', 'Derivatives', 'Risk / P&L', 'Financial markets', 'Core banking', 'High-frequency data'] },
      ],
    },

    // --- Contact ----------------------------------------------------------
    cta: {
      title: 'Build something difficult.',
      desc: "I'm interested in senior software / applied-AI roles and in conversations with companies that have operational workflows worth turning into reliable agentic systems.",
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    footerNote:
      "Portfolio rebuild · content grounded in Brenda's résumé, archived projects and current build phase. No client scale or production AI metrics are claimed where they do not yet exist.",

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
      error: 'Failed to send. Please try again.',
      offline: 'It looks like you are offline. Check your connection and try again.',
      prompts: [
        { icon: 'briefcase', label: 'AI systems', query: 'What AI systems is Brenda building?' },
        { icon: 'rocket', label: "Moody's", query: "What did Brenda build at Moody's?" },
        { icon: 'help', label: 'Right now', query: 'What is Brenda doing now?' },
        { icon: 'mail', label: 'Background', query: "Walk me through Brenda's background." },
      ],
      contactCtaTitle: 'Want to talk to Brenda directly?',
      contactCtaLabel: 'Connect on LinkedIn',
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
