export type AboutLang = 'es' | 'en'

export const aboutContent = {
  es: {
    slug: 'sobre-mi',
    altSlug: 'about',
    seo: {
      title: 'Brenda Manrique | Ingeniera de software senior',
      description:
        'Ingeniera de software senior en Berlín: sistemas financieros, analítica de crédito e IA aplicada. Moody\'s, JPMorgan, Money.Net.',
    },
    heading: 'Brenda Manrique',
    manifesto: 'Entender un proceso complicado lo bastante bien como para convertirlo en software.',
    storyCta: {
      label: 'Lee la historia completa',
      desc: 'Sistemas financieros, dejar Moody\'s en 2025 y el trabajo de ahora',
      href: '/historia',
    },
    subtitle: 'Ingeniera de software senior · Full-stack, sistemas financieros, IA aplicada',
    location: 'Berlín, Alemania · remoto',
    lastUpdated: 'Septiembre 2026',
    statusLabel: 'Proyectos independientes desde agosto de 2025 · abierta a nuevos roles',
    bio: [
      'Ingeniera de software senior. Su carrera ha pasado por varias superficies —investigación, accesibilidad, mercados financieros, sistemas de riesgo y crédito y ahora IA aplicada— pero el trabajo se ha mantenido consistente: entender un proceso complicado lo bastante bien como para convertirlo en software.',
      'Empezó con ingeniería de sistemas centrada en IA e investigación fractal en Perú. Después llegaron la IA para accesibilidad en NYU, el terminal de mercados en tiempo real de Money.Net, las carteras de derivados y las plataformas de riesgo de JPMorgan y la analítica de crédito en Moody\'s Analytics.',
      'En agosto de 2025 dejó Moody\'s, se mudó de país y se estableció en Berlín. Desde entonces construye sistemas de IA aplicada, el agente de este portafolio y Casicornio. Desde marzo de 2026 esos proyectos se centran en desplegar y operar sistemas de IA pequeños, todavía en fase de prototipos. También busca su siguiente puesto de ingeniería.',
    ],
    seeking: 'Abierta a',
    roles: [
      'Senior Software Engineer',
      'Full-Stack Engineer',
      'Financial Systems Engineer',
      'Applied AI Engineer',
    ],
    availability:
      'Busca su siguiente rol senior de ingeniería de software o de IA aplicada, y le interesan las conversaciones sobre sistemas donde la corrección importa.',
    timelineHeading: 'Trayectoria',
    timeline: [
      { period: '2025–hoy', role: 'Ingeniera de software independiente', company: 'Proyectos independientes de software e IA', desc: 'Prototipos y validación, Berlín' },
      { period: '2023–2025', role: 'Assistant Director — Software Engineer', company: "Moody's Analytics", desc: 'Predictive Analytics, Nueva York' },
      { period: '2018–2022', role: 'Software Engineer — Senior Associate', company: 'JPMorgan Chase & Co.', desc: 'Asset Management · derivados y riesgo, Nueva York' },
      { period: '2016–2018', role: 'Software Engineer', company: 'Money.Net', desc: 'Terminal de mercados financieros, Manhattan' },
      { period: '2014–2015', role: 'Desarrollo freelance y proyectos propios', company: 'Proyectos independientes y desarrollo profesional', desc: 'Nueva York / viajes' },
      { period: '2012–2013', role: 'Technology Developer Consultant', company: 'DLYA Bantotal', desc: 'Core bancario, Perú' },
    ],
    projectsHeading: 'Proyectos y case studies',
    projects: [
      { name: "Moody's Analytics", desc: 'Reglas de crédito en Python, overlays cualitativos y APIs con estado', href: '/moodys' },
      { name: 'Sistemas financieros', desc: 'JPMorgan y Money.Net: derivados, riesgo y datos de mercado en tiempo real', href: '/sistemas-financieros' },
      { name: 'IA aplicada', desc: 'Build log: arquitectura, despliegue y límites de herramientas', href: '/ia-aplicada' },
      { name: 'Agente de portafolio', desc: 'El chat de este sitio: RAG híbrido, evals, guardrails y observabilidad', href: '/agente-de-portafolio' },
      { name: 'Casicornio', desc: 'Publicación en español sobre startups, tecnología e IA', href: '/casicornio' },
      { name: 'Invip', desc: 'IA para accesibilidad visual, NYU 2015–2018 (CTO y cofundadora)', href: '/invip' },
      { name: 'Dimensión fractal', desc: 'Investigación de 2010 — no es un sistema de diagnóstico clínico', href: '/dimension-fractal' },
      { name: 'Proyectos iniciales', desc: 'Tesis, Aquolity y prototipos', href: '/proyectos-iniciales' },
    ],
    educationHeading: 'Formación',
    education: [
      'New York University, Tandon School of Engineering — MS en Management of Technology (2015–2018). Gestión de proyectos, analítica de datos, contabilidad/finanzas y emprendimiento tecnológico, con una parte sustancial de los créditos cursada en NYU Stern.',
      'Universidad Católica de Santa María, Perú — Ingeniería de Sistemas con concentración en Inteligencia Artificial (2007–2013). Tesis con mención honorífica.',
    ],
    skillsHeading: 'Habilidades',
    skills: [
      { area: 'IA aplicada', items: ['RAG', 'Tool calling', 'MCP', 'FastAPI', 'Human-in-the-loop', 'Evals', 'Observabilidad', 'pgvector'] },
      { area: 'Ingeniería full-stack', items: ['Python', 'TypeScript', 'React', 'JavaScript', 'Java', 'C#', 'Angular', 'APIs REST', 'WebSockets', 'gRPC'] },
      { area: 'Cloud y datos', items: ['AWS', 'S3', 'PostgreSQL', 'Supabase', 'Oracle', 'MySQL', 'Docker', 'CI/CD', 'Procesamiento async'] },
      { area: 'Dominio', items: ['Analítica de crédito', 'Probabilidad de impago', 'Scorecards', 'Derivados', 'Riesgo / P&L', 'Datos de mercado en tiempo real', 'Core bancario'] },
    ],
    outsideHeading: 'Fuera de los cargos',
    outside:
      'Voluntariado: liderazgo de equipos en AIESEC, proyectos sociales de Rotary, voluntaria ayudando a organizar charlas y espectáculos del World Science Festival, y voluntaria en una Open Source Conference en las Naciones Unidas. Es secundario respecto al trabajo de ingeniería, pero explica por qué me muevo cómoda entre sistemas técnicos y humanos.',
    languagesHeading: 'Idiomas',
    languages: [
      'Inglés — fluido, trabaja en él a diario',
      'Español — fluido, lengua de Casicornio',
      'Alemán — A2, en aprendizaje; no trabajo en alemán',
    ],
    faqHeading: 'Preguntas frecuentes',
    faq: [
      {
        q: '¿Quién es Brenda Manrique?',
        a: 'Brenda Manrique es ingeniera de software senior, afincada en Berlín y trabajando en remoto. Fue Assistant Director — Software Engineer en Moody\'s Analytics (2023–2025), Software Engineer Senior Associate en JPMorgan Asset Management (2018–2022) y Software Engineer en Money.Net (2016–2018). Antes hizo proyectos freelance y propios en Nueva York, y core bancario en Perú con DLYA Bantotal. Tiene un MS en Management of Technology por NYU Tandon y una licenciatura en Ingeniería de Sistemas con concentración en Inteligencia Artificial por la Universidad Católica de Santa María.',
      },
      {
        q: '¿Qué está construyendo ahora?',
        a: 'Sistemas pequeños de IA aplicada en Python y FastAPI, con recuperación, tool calling, flujos de aprobación humana y despliegues observables; el agente de chat de este portafolio, que está en producción; y Casicornio, una publicación independiente en español sobre startups, tecnología e IA. Son proyectos propios, casi todos en fase de prototipos.',
      },
      {
        q: '¿Ofrece servicios de consultoría?',
        a: 'No. Sus proyectos de IA aplicada son trabajo propio, no un negocio: no ofrece servicios ni acepta clientes a través de este sitio. Lo que existe hoy son prototipos e infraestructura desplegada, más el agente de chat de este sitio, que está en producción.',
      },
      {
        q: '¿Cómo se contacta con ella?',
        a: 'A través de los enlaces de LinkedIn y GitHub de la sección de contacto. No se publica ningún email personal en este sitio, y el asistente de chat tampoco facilita datos de contacto más allá de esos enlaces.',
      },
    ],
    connectHeading: 'Conectar',
    footerNote:
      'Contenido anclado en el currículum de Brenda y en el trabajo que está haciendo ahora.',
  },
  en: {
    slug: 'about',
    altSlug: 'sobre-mi',
    seo: {
      title: 'Brenda Manrique — Senior Software Engineer',
      description:
        'Senior software engineer in Berlin: financial systems, credit analytics and applied AI. Moody\'s, JPMorgan, Money.Net.',
    },
    heading: 'Brenda Manrique',
    manifesto: 'Understand a complicated process well enough to turn it into software.',
    storyCta: {
      label: 'Read the full story',
      desc: 'Financial systems, leaving Moody\'s in 2025, and the work now',
      href: '/story',
    },
    subtitle: 'Senior Software Engineer · Full-stack, financial systems, applied AI',
    location: 'Berlin, Germany · remote',
    lastUpdated: 'September 2026',
    statusLabel: 'Independent projects since August 2025 · open to new roles',
    bio: [
      'A senior software engineer. Her career has moved through several surfaces — research, accessibility, financial markets, risk and credit systems, and now applied AI — but the work has stayed consistent: understand a complicated process well enough to turn it into software.',
      'She started with AI-focused systems engineering and fractal research in Peru. Then came accessibility AI at NYU, a real-time market terminal at Money.Net, derivatives portfolios and risk platforms at JPMorgan, and credit analytics at Moody\'s Analytics.',
      'In August 2025 she left Moody\'s, relocated internationally, and settled in Berlin. Since then she has been building applied-AI systems, this portfolio\'s agent, and Casicornio. Since March 2026 those projects have focused on deploying and operating small AI systems, still in the prototype stage. She is also looking for her next software-engineering role.',
    ],
    seeking: 'Open to',
    roles: [
      'Senior Software Engineer',
      'Full-Stack Engineer',
      'Financial Systems Engineer',
      'Applied AI Engineer',
    ],
    availability:
      "I'm looking for my next senior software engineering or applied-AI role, and I'm interested in conversations about systems where correctness matters.",
    timelineHeading: 'Experience',
    timeline: [
      { period: '2025–now', role: 'Independent Software Engineer', company: 'Independent Software Engineering & AI Projects', desc: 'Prototypes and validation, Berlin' },
      { period: '2023–2025', role: 'Assistant Director — Software Engineer', company: "Moody's Analytics", desc: 'Predictive Analytics, New York' },
      { period: '2018–2022', role: 'Software Engineer — Senior Associate', company: 'JPMorgan Chase & Co.', desc: 'Asset Management · derivatives and risk, New York' },
      { period: '2016–2018', role: 'Software Engineer', company: 'Money.Net', desc: 'Financial markets terminal, Manhattan' },
      { period: '2014–2015', role: 'Freelance and personal projects', company: 'Independent Projects & Professional Development', desc: 'New York / travel' },
      { period: '2012–2013', role: 'Technology Developer Consultant', company: 'DLYA Bantotal', desc: 'Core banking, Peru' },
    ],
    projectsHeading: 'Projects and case studies',
    projects: [
      { name: "Moody's Analytics", desc: 'Credit rules in Python, qualitative overlays and stateful APIs', href: '/moodys-credit-intelligence' },
      { name: 'Financial systems', desc: 'JPMorgan and Money.Net: derivatives, risk and real-time market data', href: '/financial-systems' },
      { name: 'Applied AI', desc: 'The build log: architecture, deployment and tool boundaries', href: '/applied-ai' },
      { name: 'Portfolio chat agent', desc: 'The chat on this site: hybrid RAG, evals, guardrails and observability', href: '/portfolio-chat-agent' },
      { name: 'Casicornio', desc: 'A Spanish-language publication on startups, technology and AI', href: '/en/casicornio' },
      { name: 'Invip', desc: 'AI for visual accessibility, NYU 2015–2018 (CTO and co-founder)', href: '/invip-accessibility-ai' },
      { name: 'Fractal dimension', desc: '2010 research — not a clinical diagnostic system', href: '/fractal-dimension' },
      { name: 'Early projects', desc: 'Thesis, Aquolity and prototypes', href: '/early-projects' },
    ],
    educationHeading: 'Education',
    education: [
      'New York University, Tandon School of Engineering — MS, Management of Technology (2015–2018). Project management, data analytics, accounting/finance and technology entrepreneurship, with substantial graduate coursework at NYU Stern.',
      'Universidad Católica de Santa María, Peru — BSc, Systems Engineering with an Artificial Intelligence concentration (2007–2013). Thesis received honorable mention.',
    ],
    skillsHeading: 'Skills',
    skills: [
      { area: 'Applied AI', items: ['RAG', 'Tool calling', 'MCP', 'FastAPI', 'Human-in-the-loop', 'Evals', 'Observability', 'pgvector'] },
      { area: 'Full-stack engineering', items: ['Python', 'TypeScript', 'React', 'JavaScript', 'Java', 'C#', 'Angular', 'REST APIs', 'WebSockets', 'gRPC'] },
      { area: 'Cloud & data', items: ['AWS', 'S3', 'PostgreSQL', 'Supabase', 'Oracle', 'MySQL', 'Docker', 'CI/CD', 'Async processing'] },
      { area: 'Domain depth', items: ['Credit analytics', 'Probability of default', 'Scorecards', 'Derivatives', 'Risk / P&L', 'Real-time market data', 'Core banking'] },
    ],
    outsideHeading: 'Outside the job titles',
    outside:
      'Volunteering: AIESEC team leadership, Rotary social projects, volunteering to help organise talks and shows at the World Science Festival, and volunteering at an Open Source Conference at the United Nations. Secondary to the engineering work, but it explains why I\'m comfortable moving between technical and human systems.',
    languagesHeading: 'Languages',
    languages: [
      'English — fluent, works in it daily',
      'Spanish — fluent, the language of Casicornio',
      'German — A2, still learning; I do not work in German',
    ],
    faqHeading: 'Frequently asked questions',
    faq: [
      {
        q: 'Who is Brenda Manrique?',
        a: 'Brenda Manrique is a senior software engineer based in Berlin and working remotely. She was Assistant Director — Software Engineer at Moody\'s Analytics (2023–2025), Software Engineer Senior Associate at JPMorgan Asset Management (2018–2022) and Software Engineer at Money.Net (2016–2018). Before that she did freelance and personal projects in New York, and core banking work in Peru with DLYA Bantotal. She holds an MS in Management of Technology from NYU Tandon and a BSc in Systems Engineering with an Artificial Intelligence concentration from Universidad Católica de Santa María.',
      },
      {
        q: 'What is she building now?',
        a: 'Small applied-AI systems in Python and FastAPI, with retrieval, tool calling, human approval flows and observable deployments; this portfolio\'s chat agent, which is in production; and Casicornio, an independent Spanish-language publication on startups, technology and AI. These are her own projects, mostly in the prototype stage.',
      },
      {
        q: 'Does she offer consulting services?',
        a: 'No. Her applied-AI projects are her own work, not a business: she does not offer services or take on clients through this site. What exists today is prototypes and deployed infrastructure, plus this site\'s chat agent, which is in production.',
      },
      {
        q: 'How do I contact her?',
        a: 'Through the LinkedIn and GitHub links in the contact section. No personal email is published on this site, and the chat assistant does not hand out contact details beyond those links.',
      },
    ],
    connectHeading: 'Connect',
    footerNote:
      'Content grounded in Brenda\'s résumé and the work she is doing now.',
  },
} as const
