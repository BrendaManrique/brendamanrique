import type { CaseStudyContent, CaseStudyLang } from './case-study'

const DISCLAIMER_EN =
  'Historical research project. This is not a validated clinical diagnostic system and must never be described as one. It is kept in the portfolio as evidence of a long-standing interest in computational intelligence.'

const DISCLAIMER_ES =
  'Proyecto de investigación histórico. No es un sistema de diagnóstico clínico validado y nunca debe describirse como tal. Se conserva en el portafolio como prueba de un interés de larga data en la inteligencia computacional.'

export const fractalContent: Record<CaseStudyLang, CaseStudyContent> = {
  en: {
    slug: 'fractal-dimension',
    altSlug: 'dimension-fractal',
    readingTime: '4 min read',
    seo: {
      title: 'Skin cancer classification using fractal dimension — 2010 research',
      description:
        'A 2010 research project applying fractal geometry and Koch-curve measurements to the irregularity of mole samples. Historical research only — not a validated clinical diagnostic system.',
    },
    header: {
      kicker: 'Research · 2010 · Award',
      h1: 'Skin cancer classification using fractal dimension',
      subtitle:
        'An early research project applying fractal geometry and Koch-curve measurements to the irregularity of mole samples, with classification as the goal.',
      date: 'Sep 1, 2026',
    },
    nav: { breadcrumbHome: 'Home', breadcrumbCurrent: 'Fractal dimension' },
    status: 'Historical research — not a diagnostic system',
    directAnswer:
      'This is a 2010 undergraduate research project that applied fractal geometry and Koch-curve measurements to the irregularity of mole samples, with classification as the goal. It won the poster contest at the AGSE International Congress 2010. It is historical research: not a validated clinical diagnostic system, and it must never be described as one.',
    sections: {
      disclaimer: {
        heading: 'Read this first',
        blocks: [
          { kind: 'warning', text: DISCLAIMER_EN },
        ],
      },
      idea: {
        heading: 'The idea',
        blocks: [
          {
            kind: 'prose',
            text: 'Irregular biological shapes are not always well described by ordinary Euclidean measurements. Fractal dimension gives another way to describe complexity and boundary irregularity — which is why it was worth asking whether it could separate one class of shape from another.',
          },
          {
            kind: 'flow',
            steps: ['Mathematical representation', 'Computational measurement', 'Classification'],
            caption: 'The pattern, not a product.',
          },
        ],
      },
      award: {
        heading: 'The award',
        blocks: [
          {
            kind: 'prose',
            text: 'The work won the poster contest at the AGSE (Applied Geoinformatics for Society and Environment) International Congress 2010, during her BSc in Systems Engineering with an Artificial Intelligence concentration at Universidad Católica de Santa María in Peru.',
          },
        ],
      },
      'why-it-stays': {
        heading: 'Why it stays in the portfolio',
        blocks: [
          {
            kind: 'prose',
            text: 'Not because it shipped, and not because it is medically useful — it is neither. It stays because it dates the interest. A 2010 research award, an AI-concentration degree, an accessibility AI venture in 2015 and agentic systems today form a trajectory, and the trajectory is the point.',
          },
          { kind: 'warning', text: DISCLAIMER_EN },
        ],
      },
    },
    faq: {
      heading: 'Frequently asked questions',
      items: [
        {
          q: 'Is this a medical diagnostic system?',
          a: 'No. It is a historical research project from 2010. It was never clinically validated, was never deployed for diagnosis, and must never be described as a diagnostic system. It is kept in the portfolio as evidence of a long-standing interest in computational intelligence.',
        },
        {
          q: 'What did the research actually do?',
          a: 'It applied fractal geometry and Koch-curve measurements to the irregularity of mole samples, with classification as the goal. The pattern was mathematical representation, then computational measurement, then classification.',
        },
        {
          q: 'What was the award?',
          a: 'The poster contest at the AGSE (Applied Geoinformatics for Society and Environment) International Congress 2010.',
        },
      ],
    },
    cta: {
      heading: 'A long-standing interest',
      body: 'From a 2010 research award to agentic systems today. The rest of the early work is in the archive.',
      ctaLabel: 'Early projects archive',
      ctaHref: '/early-projects',
      secondaryLabel: 'About Brenda',
      secondaryHref: '/about',
    },
  },
  es: {
    slug: 'dimension-fractal',
    altSlug: 'fractal-dimension',
    readingTime: '4 min de lectura',
    seo: {
      title: 'Clasificación de cáncer de piel con dimensión fractal — investigación de 2010',
      description:
        'Un proyecto de investigación de 2010 que aplicó geometría fractal y medidas de curva de Koch a la irregularidad de muestras de lunares. Solo investigación histórica: no es un sistema de diagnóstico clínico validado.',
    },
    header: {
      kicker: 'Investigación · 2010 · Premio',
      h1: 'Clasificación de cáncer de piel con dimensión fractal',
      subtitle:
        'Un proyecto de investigación temprano que aplicó geometría fractal y medidas de curva de Koch a la irregularidad de muestras de lunares, con la clasificación como objetivo.',
      date: '1 sep 2026',
    },
    nav: { breadcrumbHome: 'Inicio', breadcrumbCurrent: 'Dimensión fractal' },
    status: 'Investigación histórica — no es un sistema de diagnóstico',
    directAnswer:
      'Es un proyecto de investigación universitaria de 2010 que aplicó geometría fractal y medidas de curva de Koch a la irregularidad de muestras de lunares, con la clasificación como objetivo. Ganó el concurso de pósters del AGSE International Congress 2010. Es investigación histórica: no es un sistema de diagnóstico clínico validado y nunca debe describirse como tal.',
    sections: {
      disclaimer: {
        heading: 'Léelo primero',
        blocks: [
          { kind: 'warning', text: DISCLAIMER_ES },
        ],
      },
      idea: {
        heading: 'La idea',
        blocks: [
          {
            kind: 'prose',
            text: 'Las formas biológicas irregulares no siempre se describen bien con medidas euclidianas ordinarias. La dimensión fractal ofrece otra manera de describir complejidad e irregularidad de contorno, y por eso merecía la pena preguntarse si podía separar una clase de forma de otra.',
          },
          {
            kind: 'flow',
            steps: ['Representación matemática', 'Medición computacional', 'Clasificación'],
            caption: 'El patrón, no un producto.',
          },
        ],
      },
      award: {
        heading: 'El premio',
        blocks: [
          {
            kind: 'prose',
            text: 'El trabajo ganó el concurso de pósters del AGSE (Applied Geoinformatics for Society and Environment) International Congress 2010, durante su licenciatura en Ingeniería de Sistemas con concentración en Inteligencia Artificial en la Universidad Católica de Santa María, en Perú.',
          },
        ],
      },
      'why-it-stays': {
        heading: 'Por qué sigue en el portafolio',
        blocks: [
          {
            kind: 'prose',
            text: 'No porque llegara a producción ni porque sea útil médicamente: no es ninguna de las dos cosas. Sigue porque fecha el interés. Un premio de investigación en 2010, una carrera con concentración en IA, una iniciativa de IA para accesibilidad en 2015 y sistemas agénticos hoy forman una trayectoria, y la trayectoria es lo que cuenta.',
          },
          { kind: 'warning', text: DISCLAIMER_ES },
        ],
      },
    },
    faq: {
      heading: 'Preguntas frecuentes',
      items: [
        {
          q: '¿Es un sistema de diagnóstico médico?',
          a: 'No. Es un proyecto de investigación histórico de 2010. Nunca fue validado clínicamente, nunca se desplegó para diagnóstico y nunca debe describirse como un sistema de diagnóstico. Se conserva en el portafolio como prueba de un interés de larga data en la inteligencia computacional.',
        },
        {
          q: '¿Qué hacía la investigación exactamente?',
          a: 'Aplicaba geometría fractal y medidas de curva de Koch a la irregularidad de muestras de lunares, con la clasificación como objetivo. El patrón era representación matemática, después medición computacional y después clasificación.',
        },
        {
          q: '¿Cuál fue el premio?',
          a: 'El concurso de pósters del AGSE (Applied Geoinformatics for Society and Environment) International Congress 2010.',
        },
      ],
    },
    cta: {
      heading: 'Un interés de larga data',
      body: 'De un premio de investigación en 2010 a los sistemas agénticos de hoy. El resto del trabajo temprano está en el archivo.',
      ctaLabel: 'Archivo de proyectos iniciales',
      ctaHref: '/proyectos-iniciales',
      secondaryLabel: 'Sobre Brenda',
      secondaryHref: '/sobre-mi',
    },
  },
}
