import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, ExternalLink, GraduationCap, Briefcase, ChevronRight, Clock, HelpCircle, Users, Wrench, Languages } from 'lucide-react'
import { aboutContent, type AboutLang } from './about-i18n'
import { AUTHOR_NAME, AVATAR, AVATAR_ALT, AVATAR_SM, GITHUB_URL, LINKEDIN_URL, SITE_URL } from './site'

// `rel: 'me'` is the IndieAuth standard for declaring profiles/sites the person controls.
// Used here for cross-domain entity ownership signals (parsed by Mastodon, Bluesky, KG crawlers).
const SOCIAL_LINKS: { name: string; url: string; rel?: string }[] = [
  { name: 'LinkedIn', url: LINKEDIN_URL, rel: 'me noopener noreferrer' },
  { name: 'GitHub', url: GITHUB_URL, rel: 'me noopener noreferrer' },
]

export default function AboutPage({ lang = 'es' }: { lang?: AboutLang }) {
  const t = aboutContent[lang]
  const altSlug = t.altSlug

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = t.seo.title

    let desc = document.querySelector('meta[name="description"]') as HTMLMetaElement
    if (!desc) { desc = document.createElement('meta'); desc.name = 'description'; document.head.appendChild(desc) }
    desc.content = t.seo.description

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) }
    canonical.href = `${SITE_URL}/${t.slug}`

    const hreflangs = [
      { lang: 'es', href: `${SITE_URL}/sobre-mi` },
      { lang: 'en', href: `${SITE_URL}/about` },
      { lang: 'x-default', href: `${SITE_URL}/about` },
    ]
    document.querySelectorAll('link[hreflang]').forEach(el => el.remove())
    for (const hl of hreflangs) {
      const link = document.createElement('link')
      link.rel = 'alternate'
      link.hreflang = hl.lang
      link.href = hl.href
      document.head.appendChild(link)
    }

    // ProfilePage + FAQPage JSON-LD is SSR'd by prerender (scripts/prerender.tsx → buildAboutJsonLd).
    // No useEffect injection needed for SEO: AI crawlers always do fresh fetches (they don't SPA-navigate).

    return () => {
      document.querySelectorAll('link[hreflang]').forEach(el => el.remove())
    }
  }, [lang, t])

  return (
    <div className="min-h-screen bg-background text-foreground bg-[length:24px_24px] [background-image:radial-gradient(circle,hsl(var(--dot-grid))_1px,transparent_1px)]">
      <main className="max-w-2xl mx-auto px-4 sm:px-6 py-12 md:py-20">

        {/* Header */}
        <header className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-10">
          <img
            src={AVATAR_SM}
            srcSet={`${AVATAR_SM} 96w, ${AVATAR} 227w`}
            sizes="96px"
            alt={AVATAR_ALT}
            className="w-24 h-24 rounded-full border-2 border-border shadow-lg object-cover"
            width={96}
            height={96}
          />
          <div className="text-center sm:text-left">
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-1">
              {t.heading}
            </h1>
            <p className="text-sm text-primary font-medium mb-2">{t.subtitle}</p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                {t.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {t.lastUpdated}
              </span>
            </div>
          </div>
        </header>

        {/* Status — the defining honesty of this portfolio, stated up front */}
        <p className="inline-flex items-center gap-2 mb-6 px-3.5 py-2 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          {t.statusLabel}
        </p>

        {/* Manifesto */}
        <blockquote className="mb-4 border-l-4 border-primary pl-6 pr-4 py-3 text-xl md:text-2xl italic font-display leading-snug text-foreground/90">
          {t.manifesto}
        </blockquote>

        {/* Story CTA */}
        <Link
          to={t.storyCta.href}
          className="flex items-center justify-between mb-10 p-4 rounded-lg bg-primary/5 border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all group"
        >
          <div>
            <p className="font-medium text-primary text-sm group-hover:text-primary transition-colors">{t.storyCta.label}</p>
            <p className="text-xs text-muted-foreground">{t.storyCta.desc}</p>
          </div>
          <ChevronRight className="w-4 h-4 text-primary group-hover:translate-x-0.5 transition-transform shrink-0" />
        </Link>

        {/* Bio */}
        <section className="mb-10">
          {t.bio.map((paragraph, i) => (
            <p key={i} className="text-base text-muted-foreground leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
        </section>

        {/* Seeking */}
        <section className="mb-10 p-4 rounded-lg bg-primary/5 border border-primary/20">
          <p className="text-sm font-medium text-primary mb-2">{t.seeking}</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {t.roles.map((role) => (
              <span key={role} className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                {role}
              </span>
            ))}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{t.availability}</p>
        </section>

        {/* Timeline */}
        <section className="mb-10">
          <h2 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            {t.timelineHeading}
          </h2>
          <div className="space-y-3">
            {t.timeline.map((item) => (
              <div key={item.period} className="flex gap-4 p-3 rounded-lg bg-card border border-border">
                <span className="text-xs font-mono text-primary whitespace-nowrap pt-0.5">{item.period}</span>
                <div>
                  <p className="font-medium text-foreground text-sm">{item.role}</p>
                  <p className="text-xs text-muted-foreground">{item.company} — {item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-10">
          <h2 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-primary" />
            {t.projectsHeading}
          </h2>
          <div className="space-y-2">
            {t.projects.map((project) => (
              <Link
                key={project.name}
                to={project.href}
                className="flex items-center justify-between p-3 rounded-lg bg-card border border-border hover:border-primary/30 hover:bg-primary/5 transition-all group"
              >
                <div>
                  <p className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">{project.name}</p>
                  <p className="text-xs text-muted-foreground">{project.desc}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
              </Link>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-10">
          <h2 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Wrench className="w-4 h-4 text-primary" />
            {t.skillsHeading}
          </h2>
          <div className="space-y-3">
            {t.skills.map((group) => (
              <div key={group.area} className="p-3 rounded-lg bg-card border border-border">
                <p className="font-medium text-foreground text-sm mb-2">{group.area}</p>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span key={item} className="px-2 py-0.5 rounded text-xs bg-muted/30 text-muted-foreground">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-10">
          <h2 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-primary" />
            {t.educationHeading}
          </h2>
          <ul className="space-y-2">
            {t.education.map((item) => (
              <li key={item} className="text-sm text-muted-foreground leading-relaxed">{item}</li>
            ))}
          </ul>
        </section>

        {/* Languages */}
        <section className="mb-10">
          <h2 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Languages className="w-4 h-4 text-primary" />
            {t.languagesHeading}
          </h2>
          <ul className="space-y-1.5">
            {t.languages.map((item) => (
              <li key={item} className="text-sm text-muted-foreground">{item}</li>
            ))}
          </ul>
        </section>

        {/* Outside the job titles */}
        <section className="mb-10">
          <h2 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Users className="w-4 h-4 text-primary" />
            {t.outsideHeading}
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">{t.outside}</p>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-primary" />
            {t.faqHeading}
          </h2>
          <div className="space-y-4">
            {t.faq.map((item) => (
              <div key={item.q} className="p-4 rounded-lg bg-card border border-border">
                <p className="font-medium text-foreground text-sm mb-2">{item.q}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Connect */}
        <section className="mb-10">
          <h2 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <ExternalLink className="w-4 h-4 text-primary" />
            {t.connectHeading}
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel={link.rel ?? 'noopener noreferrer'}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card border border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
              >
                <ExternalLink className="w-3 h-3 text-primary shrink-0" />
                {link.name}
              </a>
            ))}
          </div>
        </section>

        {/* Language toggle */}
        <div className="text-center pt-6 border-t border-border">
          <Link
            to={`/${altSlug}`}
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            {lang === 'es' ? 'Read in English →' : 'Leer en Español →'}
          </Link>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center">
          <p className="text-xs text-muted-foreground leading-relaxed mb-2">{t.footerNote}</p>
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {AUTHOR_NAME}. {lang === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
          </p>
        </footer>
      </main>
    </div>
  )
}
