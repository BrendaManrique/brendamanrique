export type AboutLang = 'es' | 'en'

export const aboutContent = {
  es: {
    slug: 'sobre-mi',
    altSlug: 'about',
    seo: {
      title: 'Brenda Manrique | Constructora de sistemas de IA agéntica',
      description:
        'Brenda Manrique: ingeniera full-stack y de sistemas financieros que ahora construye sistemas de IA agéntica y una práctica de consultoría, desde Berlín.',
    },
    heading: 'Brenda Manrique',
    manifesto: 'Entender un proceso complicado lo bastante bien como para convertirlo en software.',
    storyCta: {
      label: 'Lee la historia completa',
      desc: 'Quince años de sistemas, dejar Moody\'s en 2025 y la fase de construcción',
      href: '/historia',
    },
    subtitle: 'Constructora de sistemas de IA agéntica · Ingeniera full-stack y de sistemas financieros',
    location: 'Berlín, Alemania · remoto',
    lastUpdated: 'Septiembre 2026',
    statusLabel: 'Fase de construcción y validación · pre-escala, desde agosto de 2025',
    bio: [
      'Ingeniera de sistemas con más de 15 años construyendo software en producción. Su carrera ha pasado por varias superficies —investigación, accesibilidad, mercados financieros, sistemas empresariales de riesgo y crédito y ahora IA agéntica— pero el trabajo se ha mantenido sorprendentemente consistente: entender un proceso complicado lo bastante bien como para convertirlo en software.',
      'Empezó con ingeniería de sistemas centrada en IA, diagnóstico fractal y frameworks de datos móviles en Perú. Después llegaron la IA para accesibilidad en NYU, los terminales financieros en tiempo real de Money.Net, las plataformas de derivados y riesgo de JPMorgan y la analítica de crédito en Moody\'s Analytics.',
      'En agosto de 2025 dejó Moody\'s por decisión propia para aprender el nuevo stack de IA construyendo con él. Hoy monta una práctica de consultoría en IA agéntica, prototipa sistemas desplegables, estudia material de Anthropic con las manos y lleva Casicornio. Este capítulo es deliberadamente pre-escala: no hay cartera de clientes ni métricas de producción, y este sitio no afirma tenerlas.',
    ],
    seeking: 'Abierta a',
    roles: [
      'Agentic AI Systems Builder',
      'Senior Software Engineer',
      'Applied AI Engineer',
      'Full-Stack Engineer',
      'Financial Systems Engineer',
    ],
    availability:
      'Me interesan roles senior de software / IA aplicada y conversaciones con empresas que tengan flujos operativos que merezcan convertirse en sistemas agénticos fiables.',
    timelineHeading: 'Trayectoria',
    timeline: [
      { period: '2025–hoy', role: 'Ingeniera independiente de sistemas de IA y fundadora', company: 'Práctica de consultoría en IA agéntica · Casicornio', desc: 'Fase de construcción y validación, Berlín / remoto' },
      { period: '2023–2025', role: 'Assistant Director — Software Engineer', company: "Moody's Analytics", desc: 'Predictive Analytics · Credit Default Modeling Solutions' },
      { period: '2018–2022', role: 'Software Engineer — Senior Associate', company: 'JPMorgan Chase & Co.', desc: 'Derivados y plataformas de riesgo, Nueva York' },
      { period: '2016–2018', role: 'Software Engineer', company: 'Money.Net', desc: 'Terminal de mercados financieros, Manhattan' },
      { period: '2014–2015', role: 'Consultora independiente', company: 'Desarrollo de software', desc: 'Nueva York / viajes' },
      { period: '2012–2013', role: 'Technology Developer Consultant', company: 'DLYA Bantotal', desc: 'Core bancario, Perú' },
    ],
    projectsHeading: 'Proyectos y case studies',
    projects: [
      { name: "Moody's Analytics", desc: 'Analítica de crédito, overlays cualitativos y diseño de API con estado', href: '/moodys' },
      { name: 'Sistemas financieros', desc: 'JPMorgan y Money.Net: derivados, riesgo y datos de mercado en tiempo real', href: '/sistemas-financieros' },
      { name: 'Consultoría en IA agéntica', desc: 'Build log de la práctica: arquitectura, despliegue y modelo de entrega', href: '/consultoria-ia-agentica' },
      { name: 'Agente de portafolio', desc: 'El chat de este sitio: RAG híbrido, evals, guardrails y observabilidad', href: '/agente-de-portafolio' },
      { name: 'Casicornio', desc: 'Publicación en español sobre fundadores y tecnología', href: '/casicornio' },
      { name: 'Invip', desc: 'IA para accesibilidad visual, NYU 2015–2018 (CTO y cofundadora)', href: '/invip' },
      { name: 'Dimensión fractal', desc: 'Investigación de 2010 — no es un sistema de diagnóstico clínico', href: '/dimension-fractal' },
      { name: 'Proyectos iniciales', desc: 'Tesis Android, Aquolity y experimentos', href: '/proyectos-iniciales' },
    ],
    educationHeading: 'Formación',
    education: [
      'New York University, School of Engineering — MSc en Management of Technology (2015–2018). Gestión de proyectos, analítica de datos, contabilidad/finanzas y emprendimiento tecnológico; también cursó asignaturas en Stern.',
      'Universidad Católica de Santa María, Perú — Ingeniería de Sistemas con concentración en Inteligencia Artificial (2007–2013). Tesis con mención honorífica.',
    ],
    skillsHeading: 'Habilidades',
    skills: [
      { area: 'IA agéntica', items: ['Agentes con tool use', 'RAG', 'Memoria', 'FastAPI', 'Human-in-the-loop', 'Despliegue de agentes', 'Evals', 'Observabilidad'] },
      { area: 'Ingeniería full-stack', items: ['React', 'JavaScript / TypeScript', 'Python', 'Java', 'C#', 'APIs REST', 'WebSockets', 'gRPC', 'Microservicios'] },
      { area: 'Cloud y datos', items: ['AWS', 'S3', 'PostgreSQL', 'Oracle', 'MySQL', 'Docker', 'CI/CD', 'Procesamiento async', 'Batching'] },
      { area: 'Dominio', items: ['Analítica de crédito', 'Probabilidad de impago', 'Scorecards', 'Derivados', 'Riesgo / P&L', 'Mercados financieros', 'Core bancario', 'Datos de alta frecuencia'] },
    ],
    outsideHeading: 'Fuera de los cargos',
    outside:
      'Trabajo anterior de voluntariado y comunidad: liderazgo de equipos en AIESEC, proyectos sociales de Rotary, el World Science Festival y una Open Source Conference en las Naciones Unidas. Lo mantengo secundario respecto al trabajo de ingeniería, pero explica por qué me muevo cómoda entre sistemas técnicos y humanos.',
    languagesHeading: 'Idiomas',
    languages: [
      'Inglés — fluido, trabaja en él a diario',
      'Español — fluido, lengua de Casicornio',
      'Alemán — solo idioma de interfaz de este sitio; no se afirma fluidez',
    ],
    faqHeading: 'Preguntas frecuentes',
    faq: [
      {
        q: '¿Quién es Brenda Manrique?',
        a: 'Brenda Manrique es una ingeniera de sistemas con más de 15 años construyendo software en producción, afincada en Berlín y trabajando en remoto. Fue Assistant Director — Software Engineer en Moody\'s Analytics (2023–2025), Software Engineer Senior Associate en JPMorgan (2018–2022) y Software Engineer en Money.Net (2016–2018). Antes trabajó como consultora independiente en Nueva York y en core bancario en Perú con DLYA Bantotal. Tiene un MSc en Management of Technology por NYU y una licenciatura en Ingeniería de Sistemas con concentración en Inteligencia Artificial por la Universidad Católica de Santa María. Desde agosto de 2025 construye una práctica de consultoría en IA agéntica y lleva Casicornio.',
      },
      {
        q: '¿Qué está construyendo ahora?',
        a: 'Una práctica de consultoría en IA agéntica —arquitectura, despliegue, observabilidad y un modelo de entrega repetible para agentes de empresa—, prototipos de servicios de agente en Python/FastAPI con RAG, memoria, integraciones de herramientas e interfaces de WhatsApp y voz, el agente de chat de este portafolio (que está vivo) y Casicornio, una publicación en español sobre fundadores y tecnología. Es una fase deliberada de construcción y validación: pre-escala a propósito.',
      },
      {
        q: '¿Cuántos clientes tiene la práctica de consultoría?',
        a: 'Está pre-escala, en fase de construcción y validación. No hay cartera de clientes que reportar y este portafolio no afirma tenerla. Lo que existe hoy es investigación, arquitectura, prototipos, decisiones de infraestructura y experimentos de implementación, más el agente de chat de este sitio, que está vivo.',
      },
      {
        q: '¿Cómo se contacta con ella?',
        a: 'A través de los enlaces de LinkedIn y GitHub de la sección de contacto. No se publica ningún email personal en este sitio, y el asistente de chat tampoco facilita datos de contacto más allá de esos enlaces.',
      },
    ],
    connectHeading: 'Conectar',
    footerNote:
      'Portafolio reconstruido · contenido anclado en el currículum de Brenda, sus proyectos archivados y su fase de construcción actual. No se afirman métricas de cliente ni de IA en producción donde todavía no existen.',
  },
  en: {
    slug: 'about',
    altSlug: 'sobre-mi',
    seo: {
      title: 'Brenda Manrique — Agentic AI Systems Builder',
      description:
        'Brenda Manrique: full-stack and financial systems engineer now building agentic AI systems and a consulting practice.',
    },
    heading: 'Brenda Manrique',
    manifesto: 'Understand a complicated process well enough to turn it into software.',
    storyCta: {
      label: 'Read the full story',
      desc: 'Fifteen years of systems, leaving Moody\'s in 2025, and the build phase',
      href: '/story',
    },
    subtitle: 'Agentic AI Systems Builder · Full-stack and financial-systems engineer',
    location: 'Berlin, Germany · remote',
    lastUpdated: 'September 2026',
    statusLabel: 'Build & validation phase · pre-scale, since August 2025',
    bio: [
      'A systems engineer with 15+ years building production software. Her career has moved through several surfaces — research, accessibility, financial markets, enterprise risk and credit systems, and now agentic AI — but the work has stayed surprisingly consistent: understand a complicated process well enough to turn it into software.',
      'She started with AI-focused systems engineering, fractal diagnostics and mobile data frameworks in Peru. Then came accessibility AI at NYU, real-time financial terminals at Money.Net, derivatives and risk platforms at JPMorgan, and credit analytics at Moody\'s Analytics.',
      'In August 2025 she left Moody\'s by choice to learn the new AI stack by building with it. Today she is assembling an agentic AI consulting practice, prototyping deployable systems, studying Anthropic material hands-on, and running Casicornio. This chapter is deliberately pre-scale: there is no client portfolio and no production metrics, and this site does not claim any.',
    ],
    seeking: 'Open to',
    roles: [
      'Agentic AI Systems Builder',
      'Senior Software Engineer',
      'Applied AI Engineer',
      'Full-Stack Engineer',
      'Financial Systems Engineer',
    ],
    availability:
      "I'm interested in senior software / applied-AI roles and in conversations with companies that have operational workflows worth turning into reliable agentic systems.",
    timelineHeading: 'Experience',
    timeline: [
      { period: '2025–now', role: 'Independent AI Systems Engineer & Founder', company: 'Agentic AI consulting practice · Casicornio', desc: 'Build & validation phase, Berlin / remote' },
      { period: '2023–2025', role: 'Assistant Director — Software Engineer', company: "Moody's Analytics", desc: 'Predictive Analytics · Credit Default Modeling Solutions' },
      { period: '2018–2022', role: 'Software Engineer — Senior Associate', company: 'JPMorgan Chase & Co.', desc: 'Derivatives and risk platforms, New York' },
      { period: '2016–2018', role: 'Software Engineer', company: 'Money.Net', desc: 'Financial markets terminal, Manhattan' },
      { period: '2014–2015', role: 'Independent consultant', company: 'Software development', desc: 'New York / travel' },
      { period: '2012–2013', role: 'Technology Developer Consultant', company: 'DLYA Bantotal', desc: 'Core banking, Peru' },
    ],
    projectsHeading: 'Projects and case studies',
    projects: [
      { name: "Moody's Analytics", desc: 'Credit analytics, qualitative overlays and stateful API design', href: '/moodys-credit-intelligence' },
      { name: 'Financial systems', desc: 'JPMorgan and Money.Net: derivatives, risk and real-time market data', href: '/financial-systems' },
      { name: 'Agentic AI consulting', desc: 'The practice build log: architecture, deployment and delivery model', href: '/agentic-ai-consulting' },
      { name: 'Portfolio chat agent', desc: 'The chat on this site: hybrid RAG, evals, guardrails and observability', href: '/portfolio-chat-agent' },
      { name: 'Casicornio', desc: 'A Spanish-language founder and technology publication', href: '/en/casicornio' },
      { name: 'Invip', desc: 'AI for visual accessibility, NYU 2015–2018 (CTO and co-founder)', href: '/invip-accessibility-ai' },
      { name: 'Fractal dimension', desc: '2010 research — not a clinical diagnostic system', href: '/fractal-dimension' },
      { name: 'Early projects', desc: 'Android thesis, Aquolity and experiments', href: '/early-projects' },
    ],
    educationHeading: 'Education',
    education: [
      'New York University, School of Engineering — MSc, Management of Technology (2015–2018). Project management, data analytics, accounting/finance and technology entrepreneurship; coursework also taken at Stern.',
      'Universidad Católica de Santa María, Peru — BSc, Systems Engineering with an Artificial Intelligence concentration (2007–2013). Thesis received honorable mention.',
    ],
    skillsHeading: 'Skills',
    skills: [
      { area: 'Agentic AI', items: ['Tool-using agents', 'RAG', 'Memory', 'FastAPI', 'Human-in-the-loop', 'Agent deployment', 'Evals', 'Observability'] },
      { area: 'Full-stack engineering', items: ['React', 'JavaScript / TypeScript', 'Python', 'Java', 'C#', 'REST APIs', 'WebSockets', 'gRPC', 'Microservices'] },
      { area: 'Cloud & data', items: ['AWS', 'S3', 'PostgreSQL', 'Oracle', 'MySQL', 'Docker', 'CI/CD', 'Async processing', 'Batching'] },
      { area: 'Domain depth', items: ['Credit analytics', 'Probability of default', 'Scorecards', 'Derivatives', 'Risk / P&L', 'Financial markets', 'Core banking', 'High-frequency data'] },
    ],
    outsideHeading: 'Outside the job titles',
    outside:
      'Earlier volunteer/community work includes AIESEC team leadership, Rotary social projects, the World Science Festival and an Open Source Conference at the United Nations. I keep this secondary to the engineering work, but it explains why I\'m comfortable moving between technical and human systems.',
    languagesHeading: 'Languages',
    languages: [
      'English — fluent, works in it daily',
      'Spanish — fluent, the language of Casicornio',
      'German — site interface language only; no fluency claimed',
    ],
    faqHeading: 'Frequently asked questions',
    faq: [
      {
        q: 'Who is Brenda Manrique?',
        a: 'Brenda Manrique is a systems engineer with 15+ years building production software, based in Berlin and working remotely. She was Assistant Director — Software Engineer at Moody\'s Analytics (2023–2025), Software Engineer Senior Associate at JPMorgan (2018–2022) and Software Engineer at Money.Net (2016–2018). Before that she worked as an independent consultant in New York and in core banking in Peru with DLYA Bantotal. She holds an MSc in Management of Technology from NYU and a BSc in Systems Engineering with an Artificial Intelligence concentration from Universidad Católica de Santa María. Since August 2025 she has been building an agentic AI consulting practice and running Casicornio.',
      },
      {
        q: 'What is she building now?',
        a: 'An agentic AI consulting practice — architecture, deployment, observability and a repeatable delivery model for company agents — plus prototypes of Python/FastAPI agent services with RAG, memory, tool integrations and WhatsApp/voice interfaces, this portfolio\'s chat agent (which is live), and Casicornio, a Spanish-language founder and technology publication. It is a deliberate build and validation phase: intentionally pre-scale.',
      },
      {
        q: 'How many clients does the consulting practice have?',
        a: 'It is pre-scale, in a build and validation phase. There is no client roster to report, and this portfolio does not claim one. What exists today is research, architecture, prototypes, infrastructure decisions and implementation experiments — plus this site\'s chat agent, which is live.',
      },
      {
        q: 'How do I contact her?',
        a: 'Through the LinkedIn and GitHub links in the contact section. No personal email is published on this site, and the chat assistant does not hand out contact details beyond those links.',
      },
    ],
    connectHeading: 'Connect',
    footerNote:
      'Portfolio rebuild · content grounded in Brenda\'s résumé, archived projects and current build phase. No client scale or production AI metrics are claimed where they do not yet exist.',
  },
} as const
