import type { CaseStudyContent, CaseStudyLang } from './articles/case-study'

export type StoryLang = CaseStudyLang

export const storyContent: Record<StoryLang, CaseStudyContent> = {
  en: {
    slug: 'story',
    altSlug: 'historia',
    readingTime: '4 min read',
    seo: {
      title: 'Leaving, moving countries, starting again',
      description:
        'Why Brenda Manrique left Moody\'s in 2025, relocated internationally to Berlin, and started building applied-AI systems independently.',
    },
    header: {
      kicker: 'The story',
      h1: 'Leaving, moving countries, starting again',
      subtitle:
        'Why I left Moody\'s in 2025, what an international move actually took, and what I am building now.',
      date: 'Sep 1, 2026',
    },
    nav: { breadcrumbHome: 'Home', breadcrumbCurrent: 'The story' },
    status: 'Independent projects since Aug 2025',
    directAnswer:
      'Brenda Manrique left Moody\'s Analytics in August 2025 and relocated internationally, establishing herself in Berlin. Since then she has been building applied-AI systems and independent software projects, which since March 2026 have focused on deploying and operating small AI systems. She is also looking for her next software-engineering role.',
    sections: {
      'systems-work': {
        heading: 'The work before this',
        blocks: [
          {
            kind: 'prose',
            text: 'She started with AI-focused systems engineering and fractal research: an undergraduate degree with an artificial intelligence concentration, a research award in 2010, a thesis with an honorable mention in 2013.',
          },
          {
            kind: 'prose',
            text: 'Then accessibility AI at NYU, a real-time market terminal at Money.Net, derivatives portfolios and risk platforms at JPMorgan, and credit analytics at Moody\'s. Different surfaces, one job: understand a complicated process well enough to turn it into software.',
          },
        ],
      },
      'the-turn': {
        heading: 'Leaving Moody\'s',
        blocks: [
          {
            kind: 'prose',
            text: 'In August 2025 she left Moody\'s Analytics. She was moving countries, and that is not something you do around someone else\'s roadmap.',
          },
          {
            kind: 'prose',
            text: 'The move took a while: time in Peru with family, roughly three months around Italy, a month in China, and stops in Scotland and Spain. Then Berlin, and the paperwork and logistics of actually establishing yourself somewhere new.',
          },
        ],
      },
      'build-phase': {
        heading: 'Starting again',
        blocks: [
          {
            kind: 'prose',
            text: 'Berlin is where the experimenting started: software products, and a lot of time inside the new AI tooling. The question worth answering was not whether a model can call a tool. It was what a small AI system looks like once someone has to operate it — deployment, permissions, approvals, monitoring, and a rollback path.',
          },
          {
            kind: 'prose',
            text: 'Around March 2026 that turned into something more deliberate: going deep, through projects of her own, on how small AI systems are deployed, monitored and operated. It is project work in the prototype stage, not a business.',
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
                title: 'Applied-AI systems · prototypes',
                detail: 'Python and FastAPI services with retrieval, typed tool boundaries, approval flows and observable deployments.',
              },
              {
                title: 'Portfolio agent · in production',
                detail: 'The chat on this site: hybrid RAG, evals, guardrails and observability, running in public against real questions.',
              },
              {
                title: 'Casicornio · launching',
                detail: 'An independent Spanish-language publication on startups, technology and AI. The first issues are in preparation.',
              },
              {
                title: 'Open to roles',
                detail: 'Senior software engineering and applied-AI roles.',
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
          q: 'Why did she leave Moody\'s?',
          a: 'She left in August 2025 because she was relocating internationally. The move took her through Peru, Italy, China, Scotland and Spain before she established herself in Berlin.',
        },
        {
          q: 'What has she been doing since?',
          a: 'Building applied-AI systems and independent software projects. Since March 2026 those projects have focused on deploying and operating small AI systems, still in the prototype stage. She is also looking for her next software-engineering role.',
        },
        {
          q: 'What is actually running today?',
          a: 'The portfolio chat agent on this site. The rest of the current work is architecture, prototypes, deployed infrastructure and product experimentation, plus Casicornio, which is preparing its first issues.',
        },
      ],
    },
    cta: {
      heading: 'Let us talk',
      body: 'Open to senior software engineering and applied-AI roles, and to conversations about systems where correctness matters.',
      ctaLabel: 'Connect on LinkedIn',
      ctaHref: 'https://www.linkedin.com/in/brendastephanie/',
      secondaryLabel: 'The applied-AI build log',
      secondaryHref: '/applied-ai',
    },
  },
  es: {
    slug: 'historia',
    altSlug: 'story',
    readingTime: '4 min de lectura',
    seo: {
      title: 'Irme, cambiar de país y volver a empezar',
      description:
        'Por qué Brenda Manrique dejó Moody\'s en 2025, se mudó de país hasta instalarse en Berlín y empezó a construir sistemas de IA aplicada por su cuenta.',
    },
    header: {
      kicker: 'La historia',
      h1: 'Irme, cambiar de país y volver a empezar',
      subtitle:
        'Por qué dejé Moody\'s en 2025, lo que implicó de verdad mudarse de país y qué estoy construyendo ahora.',
      date: '1 sep 2026',
    },
    nav: { breadcrumbHome: 'Inicio', breadcrumbCurrent: 'La historia' },
    status: 'Proyectos independientes desde ago 2025',
    directAnswer:
      'Brenda Manrique dejó Moody\'s Analytics en agosto de 2025 y se mudó de país hasta establecerse en Berlín. Desde entonces construye sistemas de IA aplicada y proyectos de software propios, que desde marzo de 2026 se centran en desplegar y operar sistemas de IA pequeños. También busca su siguiente puesto de ingeniería de software.',
    sections: {
      'systems-work': {
        heading: 'El trabajo anterior',
        blocks: [
          {
            kind: 'prose',
            text: 'Empezó con ingeniería de sistemas centrada en IA e investigación fractal: una carrera con concentración en inteligencia artificial, un premio de investigación en 2010 y una tesis con mención honorífica en 2013.',
          },
          {
            kind: 'prose',
            text: 'Después vinieron la IA para accesibilidad en NYU, el terminal de mercados en tiempo real en Money.Net, las carteras de derivados y las plataformas de riesgo en JPMorgan, y la analítica de crédito en Moody\'s. Superficies distintas, un mismo trabajo: entender un proceso complicado lo bastante bien como para convertirlo en software.',
          },
        ],
      },
      'the-turn': {
        heading: 'Dejar Moody\'s',
        blocks: [
          {
            kind: 'prose',
            text: 'En agosto de 2025 dejó Moody\'s Analytics. Se mudaba de país, y eso no se hace alrededor de la hoja de ruta de otra persona.',
          },
          {
            kind: 'prose',
            text: 'La mudanza llevó su tiempo: temporada en Perú con la familia, unos tres meses por Italia, un mes en China y paradas en Escocia y España. Después Berlín, con todo el papeleo y la logística de establecerse de verdad en un sitio nuevo.',
          },
        ],
      },
      'build-phase': {
        heading: 'Volver a empezar',
        blocks: [
          {
            kind: 'prose',
            text: 'En Berlín empezó a experimentar: productos de software y mucho tiempo dentro del nuevo herramental de IA. La pregunta que valía la pena responder no era si un modelo puede llamar a una herramienta, sino cómo es un sistema de IA pequeño cuando alguien tiene que operarlo: despliegue, permisos, aprobaciones, monitorización y camino de rollback.',
          },
          {
            kind: 'prose',
            text: 'Hacia marzo de 2026 eso se convirtió en algo más deliberado: profundizar, con proyectos propios, en cómo se despliegan, se monitorizan y se operan sistemas de IA pequeños. Es trabajo de proyectos en fase de prototipos, no un negocio.',
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
                title: 'Sistemas de IA aplicada · prototipos',
                detail: 'Servicios en Python y FastAPI con recuperación, límites de herramientas tipados, flujos de aprobación y despliegues observables.',
              },
              {
                title: 'Agente de portafolio · en producción',
                detail: 'El chat de este sitio: RAG híbrido, evals, guardrails y observabilidad, funcionando en público contra preguntas reales.',
              },
              {
                title: 'Casicornio · por lanzar',
                detail: 'Una publicación independiente en español sobre startups, tecnología e IA. Los primeros números están en preparación.',
              },
              {
                title: 'Abierta a roles',
                detail: 'Roles senior de ingeniería de software y de IA aplicada.',
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
          q: '¿Por qué dejó Moody\'s?',
          a: 'Se fue en agosto de 2025 porque se mudaba de país. La mudanza la llevó por Perú, Italia, China, Escocia y España antes de establecerse en Berlín.',
        },
        {
          q: '¿Qué ha hecho desde entonces?',
          a: 'Construir sistemas de IA aplicada y proyectos de software propios. Desde marzo de 2026 esos proyectos se centran en desplegar y operar sistemas de IA pequeños, todavía en fase de prototipos. También busca su siguiente puesto de ingeniería de software.',
        },
        {
          q: '¿Qué está funcionando hoy realmente?',
          a: 'El agente de chat de este portafolio. El resto del trabajo actual es arquitectura, prototipos, infraestructura desplegada y experimentación con productos, más Casicornio, que está preparando sus primeros números.',
        },
      ],
    },
    cta: {
      heading: 'Hablemos',
      body: 'Abierta a roles senior de ingeniería de software y de IA aplicada, y a conversaciones sobre sistemas donde la corrección importa.',
      ctaLabel: 'Conectar en LinkedIn',
      ctaHref: 'https://www.linkedin.com/in/brendastephanie/',
      secondaryLabel: 'El build log de IA aplicada',
      secondaryHref: '/ia-aplicada',
    },
  },
}
