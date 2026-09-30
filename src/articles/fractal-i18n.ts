import type { CaseStudyContent, CaseStudyLang } from './case-study'

const DISCLAIMER_EN =
  'This was a research prototype, not a clinical diagnostic system. It was never clinically validated and must not be described as one.'

const DISCLAIMER_ES =
  'Fue un prototipo de investigación, no un sistema de diagnóstico clínico. Nunca se validó clínicamente y no debe describirse como tal.'

export const fractalContent: Record<CaseStudyLang, CaseStudyContent> = {
  en: {
    slug: 'fractal-dimension',
    altSlug: 'dimension-fractal',
    readingTime: '4 min read',
    seo: {
      title: 'Fractal dimension in skin-lesion imagery — 2010 research',
      description:
        'A 2010 research prototype exploring fractal dimension as a feature for distinguishing skin-lesion images. Research only, not a clinical diagnostic system.',
    },
    header: {
      kicker: 'Research · 2010 · Award',
      h1: 'Fractal dimension in skin-lesion imagery',
      subtitle:
        'An early research prototype exploring fractal dimension as a feature for distinguishing skin-lesion images.',
      date: 'Sep 1, 2026',
    },
    nav: { breadcrumbHome: 'Home', breadcrumbCurrent: 'Fractal dimension' },
    status: 'Research prototype — not a diagnostic system',
    directAnswer:
      'A 2010 undergraduate research prototype that explored fractal dimension as a feature for distinguishing skin-lesion images, using image samples. It won the poster competition at the AGSE International Congress 2010. It was a prototype, not a complete clinical diagnostic system.',
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
            text: 'Irregular biological shapes are not always well described by ordinary Euclidean measurements. Fractal dimension gives another way to describe boundary irregularity, which made it worth asking whether it could separate one class of image from another.',
          },
          {
            kind: 'flow',
            steps: ['Image samples', 'Fractal-dimension feature', 'Classification'],
            caption: 'An MVP, not a product.',
          },
        ],
      },
      award: {
        heading: 'The award',
        blocks: [
          {
            kind: 'prose',
            text: 'The work won the poster competition at the AGSE (Applied Geoinformatics for Society and Environment) International Congress 2010, during her BSc in Systems Engineering with an Artificial Intelligence concentration at Universidad Católica de Santa María in Peru.',
          },
        ],
      },
      'why-it-stays': {
        heading: 'Why it stays in the portfolio',
        blocks: [
          {
            kind: 'prose',
            text: 'Not because it shipped, and not because it is medically useful. It stays because it dates the interest: a 2010 research award, an AI-concentration degree, an accessibility venture in 2015, applied AI now.',
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
          a: 'No. It is a 2010 research prototype. It was never clinically validated, never deployed for diagnosis, and must not be described as a diagnostic system.',
        },
        {
          q: 'What did the research actually do?',
          a: 'It used skin-lesion image samples and explored fractal dimension as a feature for telling one class of image from another. Image samples, a computed feature, then classification.',
        },
        {
          q: 'What was the award?',
          a: 'It won the poster competition at the AGSE (Applied Geoinformatics for Society and Environment) International Congress in 2010.',
        },
      ],
    },
    cta: {
      heading: 'A long-standing interest',
      body: 'From a 2010 research award to applied AI now. The rest of the early work is in the archive.',
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
      title: 'Dimensión fractal en imágenes de lesiones cutáneas — 2010',
      description:
        'Un prototipo de investigación de 2010 que exploró la dimensión fractal como característica para distinguir imágenes de lesiones cutáneas. Solo investigación, no un sistema de diagnóstico clínico.',
    },
    header: {
      kicker: 'Investigación · 2010 · Premio',
      h1: 'Dimensión fractal en imágenes de lesiones cutáneas',
      subtitle:
        'Un prototipo de investigación temprano que exploró la dimensión fractal como característica para distinguir imágenes de lesiones cutáneas.',
      date: '1 sep 2026',
    },
    nav: { breadcrumbHome: 'Inicio', breadcrumbCurrent: 'Dimensión fractal' },
    status: 'Prototipo de investigación — no es un sistema de diagnóstico',
    directAnswer:
      'Un prototipo de investigación universitaria de 2010 que exploró la dimensión fractal como característica para distinguir imágenes de lesiones cutáneas, usando muestras de imagen. Ganó el concurso de pósters del AGSE International Congress 2010. Fue un prototipo, no un sistema de diagnóstico clínico completo.',
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
            text: 'Las formas biológicas irregulares no siempre se describen bien con medidas euclidianas ordinarias. La dimensión fractal ofrece otra manera de describir la irregularidad del contorno, y por eso merecía la pena preguntarse si podía separar una clase de imagen de otra.',
          },
          {
            kind: 'flow',
            steps: ['Muestras de imagen', 'Característica de dimensión fractal', 'Clasificación'],
            caption: 'Un MVP, no un producto.',
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
            text: 'No porque llegara a producción ni porque sea útil médicamente. Sigue porque fecha el interés: un premio de investigación en 2010, una carrera con concentración en IA, una iniciativa de accesibilidad en 2015, IA aplicada ahora.',
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
          a: 'No. Es un prototipo de investigación de 2010. Nunca fue validado clínicamente, nunca se desplegó para diagnóstico y no debe describirse como un sistema de diagnóstico.',
        },
        {
          q: '¿Qué hacía la investigación exactamente?',
          a: 'Usaba muestras de imagen de lesiones cutáneas y exploraba la dimensión fractal como característica para distinguir una clase de imagen de otra. Muestras de imagen, una característica calculada y después clasificación.',
        },
        {
          q: '¿Cuál fue el premio?',
          a: 'Ganó el concurso de pósters del AGSE (Applied Geoinformatics for Society and Environment) International Congress en 2010.',
        },
      ],
    },
    cta: {
      heading: 'Un interés de larga data',
      body: 'De un premio de investigación en 2010 a la IA aplicada de ahora. El resto del trabajo temprano está en el archivo.',
      ctaLabel: 'Archivo de proyectos iniciales',
      ctaHref: '/proyectos-iniciales',
      secondaryLabel: 'Sobre Brenda',
      secondaryHref: '/sobre-mi',
    },
  },
}
