import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArticleLayout } from './articles/components'
import { LINKEDIN_URL, SITE_NAME, SITE_URL } from './site'

const content = {
  es: {
    title: 'Política de Privacidad',
    lastUpdated: 'Última actualización: 30 de septiembre de 2026',
    intro: 'Esta política describe qué datos se tratan cuando visitas brendamanrique.com, para qué y qué opciones tienes. La responsable es Brenda Manrique (Berlín, Alemania).',
    sections: [
      {
        heading: 'Qué datos se recopilan',
        items: [
          'Analíticas de visitas (solo con tu permiso donde la ley lo exige): página visitada, página de origen, país, navegador, sistema operativo y tipo de dispositivo, mediante Vercel Web Analytics. No usa cookies ni guarda tu dirección IP; las visitas se agrupan con un identificador que se descarta a las 24 horas.',
          'Mensajes del chat: cuando usas el agente de chat de este sitio (la IA de portafolio de Brenda), tus mensajes se envían para generar respuestas. No se solicita información personal; evita incluirla.',
          'Audio del modo voz: si activas el modo voz, el audio se procesa en tiempo real y no se guarda.',
          'Identificador seudónimo y ubicación aproximada: el chat y el modo voz tienen un límite diario. Para aplicarlo, tu dirección IP se convierte en un código cifrado irreversible (un hash con clave secreta) y la IP en sí nunca se guarda. Junto a ese código se guardan el país, la región y la ciudad aproximados de la conexión, cuántas veces has usado el chat o la voz y cuándo fue la primera y la última vez. No se guarda el contenido de los mensajes con estos datos.',
        ],
      },
      {
        heading: 'Para qué y con qué base legal',
        items: [
          'Analíticas: entender qué contenido se lee y mejorar el sitio. En la UE, EEE, Reino Unido y Suiza solo se activan si aceptas (consentimiento, art. 6.1.a RGPD). En otras regiones se activan por defecto por interés legítimo y puedes desactivarlas.',
          'Chat y voz: responder a tus preguntas sobre la experiencia profesional de Brenda (art. 6.1.b/f RGPD). Las trazas de conversación se guardan para mejorar la calidad y detectar usos indebidos.',
          'Identificador seudónimo y ubicación: aplicar el límite diario, proteger el servicio frente a abusos y entender, de forma agregada, desde dónde y con qué frecuencia se usa el chat (interés legítimo, art. 6.1.f RGPD). Estos datos no se cruzan con otras fuentes para identificar a personas o empresas.',
        ],
      },
      {
        heading: 'Terceros',
        items: [
          'Vercel: aloja el sitio y ofrece las analíticas sin cookies.',
          'Anthropic (Claude): procesa los mensajes del chat para generar respuestas.',
          'OpenAI (Realtime API): procesa el audio del modo voz en tiempo real.',
          'Langfuse: guarda trazas de las conversaciones para observabilidad y calidad.',
          'Supabase: guarda los identificadores seudónimos con sus contadores y ubicación, y el índice de contenido del sitio.',
          'Resend: envía a Brenda un aviso interno cuando un mensaje parece un intento de abuso, con el texto de ese mensaje.',
          'Algunos de estos proveedores tratan datos fuera de tu país, incluido Estados Unidos, con las garantías contractuales que ofrecen (p. ej., cláusulas contractuales tipo).',
        ],
      },
      {
        heading: 'Cookies y almacenamiento local',
        body: 'Este sitio no usa cookies. El navegador guarda en su almacenamiento local solo lo necesario para funcionar: tu tema visual, tu decisión sobre las analíticas y, durante la sesión, la conversación del chat y los avisos de idioma ya mostrados. Nada de esto se envía a terceros.',
      },
      {
        heading: 'Cuánto tiempo se conservan',
        items: [
          'Identificador seudónimo y ubicación: una limpieza mensual borra los que llevan 90 días sin actividad, así que no se conservan más de unos cuatro meses desde tu última visita.',
          'Analíticas de visitas: Vercel descarta el identificador de visita a las 24 horas y solo conserva cifras agregadas.',
          'Audio del modo voz: no se conserva.',
        ],
      },
      {
        heading: 'Tus opciones',
        items: [
          'Puedes aceptar o rechazar las analíticas en cualquier momento desde "Preferencias de privacidad", en el pie de página.',
          'Si tu navegador envía Global Privacy Control o Do Not Track, las analíticas quedan desactivadas automáticamente.',
          'No se venden ni se comparten datos personales con fines de publicidad (incluida la definición de "venta" y "compartir" de las leyes de privacidad de EE. UU., como la CCPA/CPRA).',
        ],
      },
      {
        heading: 'Tus derechos',
        items: [
          'Según el RGPD (UE/EEE), el UK GDPR, la LGPD (Brasil), la PIPEDA (Canadá) y las leyes estatales de EE. UU., puedes solicitar acceso, rectificación, supresión o portabilidad de tus datos, oponerte a su tratamiento o retirar tu consentimiento.',
          'Como este sitio no tiene cuentas de usuario, apenas guarda datos que te identifiquen. Si escribes, indica la fecha aproximada de tu visita para poder localizarlos.',
          'También puedes presentar una reclamación ante tu autoridad de protección de datos (en Berlín: Berliner Beauftragte für Datenschutz und Informationsfreiheit).',
        ],
      },
      {
        heading: 'No hay cuentas de usuario',
        body: 'Este sitio no requiere registro ni inicio de sesión. No se recopilan nombres, emails ni contraseñas a través del sitio web.',
      },
      {
        heading: 'Contacto',
        body: 'No se publica ningún email personal en este sitio. Para cualquier consulta o solicitud sobre privacidad, puedes escribir por LinkedIn:',
        link: LINKEDIN_URL,
        linkLabel: 'linkedin.com/in/brendastephanie',
      },
    ],
    backHome: 'Volver al inicio',
  },
  en: {
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: September 30, 2026',
    intro: 'This policy describes what data is processed when you visit brendamanrique.com, why, and what choices you have. The controller is Brenda Manrique (Berlin, Germany).',
    sections: [
      {
        heading: 'What data is collected',
        items: [
          'Visit analytics (only with your permission where the law requires it): page visited, referring page, country, browser, operating system and device type, through Vercel Web Analytics. It uses no cookies and does not store your IP address; visits are grouped with an identifier that is discarded after 24 hours.',
          "Chat messages: when you use this site's chat agent (Brenda's portfolio AI), your messages are sent to generate answers. No personal information is requested; please avoid including any.",
          'Voice mode audio: if you turn on voice mode, audio is processed in real time and not stored.',
          'Pseudonymous identifier and approximate location: chat and voice mode have a daily limit. To enforce it, your IP address is turned into an irreversible code (a hash with a secret key) and the IP itself is never stored. Stored with that code: the approximate country, region and city of the connection, how many times you have used chat or voice, and when you first and last did. Message content is not stored with this data.',
        ],
      },
      {
        heading: 'Why, and on what legal basis',
        items: [
          'Analytics: understanding which content gets read and improving the site. In the EU, EEA, UK and Switzerland they only run if you accept (consent, GDPR Art. 6(1)(a)). Elsewhere they run by default on the basis of legitimate interest, and you can turn them off.',
          "Chat and voice: answering your questions about Brenda's professional experience (GDPR Art. 6(1)(b)/(f)). Conversation traces are kept to improve quality and detect misuse.",
          'Pseudonymous identifier and location: enforcing the daily limit, protecting the service from abuse, and understanding in aggregate where the chat is used from and how often (legitimate interest, GDPR Art. 6(1)(f)). This data is not combined with other sources to identify people or companies.',
        ],
      },
      {
        heading: 'Third parties',
        items: [
          'Vercel: hosts the site and provides the cookieless analytics.',
          'Anthropic (Claude): processes chat messages to generate answers.',
          'OpenAI (Realtime API): processes voice mode audio in real time.',
          'Langfuse: stores conversation traces for observability and quality.',
          "Supabase: stores the pseudonymous identifiers with their counters and location, and the index of the site's content.",
          'Resend: sends Brenda an internal alert, including the message text, when a message looks like an abuse attempt.',
          'Some of these providers process data outside your country, including in the United States, under the contractual safeguards they offer (e.g. Standard Contractual Clauses).',
        ],
      },
      {
        heading: 'Cookies and local storage',
        body: 'This site uses no cookies. Your browser keeps only what the site needs to work in local storage: your visual theme, your analytics choice and, for the session, the chat conversation and which language prompts you have already seen. None of it is sent to third parties.',
      },
      {
        heading: 'How long data is kept',
        items: [
          'Pseudonymous identifier and location: a monthly cleanup deletes any that have been inactive for 90 days, so they are kept no longer than about four months after your last visit.',
          'Visit analytics: Vercel discards the visit identifier after 24 hours and keeps only aggregate figures.',
          'Voice mode audio: not kept.',
        ],
      },
      {
        heading: 'Your choices',
        items: [
          'You can accept or decline analytics at any time from "Privacy choices" in the footer.',
          'If your browser sends Global Privacy Control or Do Not Track, analytics are switched off automatically.',
          'Personal data is not sold or shared for advertising, including as "sale" and "sharing" are defined under US state privacy laws such as the CCPA/CPRA.',
        ],
      },
      {
        heading: 'Your rights',
        items: [
          'Under the GDPR (EU/EEA), UK GDPR, LGPD (Brazil), PIPEDA (Canada) and US state privacy laws, you can ask to access, correct, delete or port your data, object to its processing, or withdraw your consent.',
          'Because the site has no user accounts, it holds very little that identifies you. If you get in touch, include the approximate date of your visit so the data can be found.',
          'You can also complain to your data protection authority (in Berlin: Berliner Beauftragte für Datenschutz und Informationsfreiheit).',
        ],
      },
      {
        heading: 'No user accounts',
        body: 'This site does not require registration or login. No names, emails, or passwords are collected through the website.',
      },
      {
        heading: 'Contact',
        body: 'No personal email is published on this site. For any privacy question or request, you can reach out on LinkedIn:',
        link: LINKEDIN_URL,
        linkLabel: 'linkedin.com/in/brendastephanie',
      },
    ],
    backHome: 'Back to home',
  },
} as const

interface PrivacySection {
  heading: string
  items?: readonly string[]
  body?: string
  link?: string
  linkLabel?: string
}

export default function PrivacyPolicy({ lang = 'es' }: { lang?: 'es' | 'en' }) {
  const t = content[lang]

  useEffect(() => {
    document.title = `${t.title} | ${SITE_NAME}`

    // noindex
    let robots = document.querySelector('meta[name="robots"]') as HTMLMetaElement
    if (!robots) {
      robots = document.createElement('meta')
      robots.name = 'robots'
      document.head.appendChild(robots)
    }
    robots.content = 'noindex, nofollow'

    // Fix canonical (SPA fallback serves homepage canonical — override it)
    const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
    if (canonical) canonical.href = `${SITE_URL}/${lang === 'es' ? 'privacidad' : 'privacy'}`

    // Fix meta description
    const desc = document.querySelector('meta[name="description"]') as HTMLMetaElement
    if (desc) desc.content = lang === 'es'
      ? 'Politica de privacidad de brendamanrique.com. Como se recopilan y utilizan los datos del chat y la web.'
      : 'Privacy policy for brendamanrique.com. How chat and website data is collected and used.'

    return () => {
      robots.content = 'index, follow'
    }
  }, [lang, t.title])

  return (
    <ArticleLayout lang={lang}>
      <header className="mb-10">
        <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-2">
          {t.title}
        </h1>
        <p className="text-sm text-muted-foreground">{t.lastUpdated}</p>
      </header>

      <article className="prose-custom">
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
          {t.intro}
        </p>

        {(t.sections as readonly PrivacySection[]).map((section, i) => (
          <section key={i} className="mb-8">
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">
              {section.heading}
            </h2>

            {section.items && (
              <ul className="space-y-2 mb-4">
                {section.items.map((item, j) => (
                  <li key={j} className="flex gap-3 text-base text-muted-foreground">
                    <span className="text-primary font-bold shrink-0 mt-0.5">{'●'}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {section.body && (
              <p className="text-base text-muted-foreground leading-relaxed">
                {section.body}
              </p>
            )}

            {section.link && (
              <p className="mt-2">
                <a
                  href={section.link}
                  target="_blank"
                  rel="me noopener noreferrer"
                  className="text-primary underline underline-offset-2 hover:text-primary/80"
                >
                  {section.linkLabel ?? section.link}
                </a>
              </p>
            )}
          </section>
        ))}

        <div className="mt-12 pt-8 border-t border-border">
          <Link
            to={lang === 'es' ? '/es' : '/'}
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            {'← '}{t.backHome}
          </Link>
        </div>
      </article>
    </ArticleLayout>
  )
}
