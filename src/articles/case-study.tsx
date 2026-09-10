import { Link } from 'react-router-dom'
import { articleRegistry } from './registry'
import { buildJsonLdFromRegistry } from './json-ld'
import { useArticleSeo } from './use-article-seo'
import {
  ArticleLayout,
  ArticleHeader,
  ArticleFooter,
  FaqSection,
  CaseStudyCta,
  MetricsGrid,
  StatusBadge,
} from './components'
import {
  H2,
  H3,
  Prose,
  Callout,
  Manifesto,
  CardStack,
  BulletList,
  StepList,
  CodeBlock,
  DataTable,
  FloatingToc,
} from './content-types'

// ---------------------------------------------------------------------------
// Content model
//
// Every case study is data: an ordered map of sections, each holding an ordered
// list of blocks. One renderer draws them all, so adding an article means
// writing an i18n file — not another 500-line component.
//
// `kind` is in export-chunks' EXCLUDE_KEYS, so these discriminators never leak
// into the RAG corpus.
// ---------------------------------------------------------------------------

export type Block =
  | { kind: 'prose'; text: string }
  | { kind: 'lead'; text: string }
  | { kind: 'callout'; text: string }
  | { kind: 'warning'; text: string }
  | { kind: 'quote'; text: string }
  | { kind: 'h3'; text: string }
  | { kind: 'flow'; steps: readonly string[]; caption?: string }
  | { kind: 'bullets'; items: readonly string[] }
  | { kind: 'cards'; items: readonly { title: string; detail: string }[] }
  | { kind: 'steps'; items: readonly { label: string; detail: string }[] }
  | { kind: 'code'; code: string }
  | { kind: 'table'; headers: readonly string[]; rows: readonly (readonly string[])[] }
  | { kind: 'metrics'; items: readonly { value: string; label: string; detail?: string }[] }
  | { kind: 'stack'; items: readonly string[] }

export interface CaseStudySection {
  heading: string
  blocks: readonly Block[]
}

export interface CaseStudyContent {
  slug: string
  altSlug: string
  readingTime: string
  seo: { title: string; description: string }
  header: { kicker: string; h1: string; subtitle: string; date: string }
  nav: { breadcrumbHome: string; breadcrumbCurrent: string }
  /** Citable ~60-word answer rendered directly under the H1. */
  directAnswer: string
  /** Optional pulsing status chip (build phase, live, historical research…). */
  status?: string
  sections: Record<string, CaseStudySection>
  faq: { heading: string; items: readonly { q: string; a: string }[] }
  cta: {
    heading: string
    body: string
    ctaLabel: string
    ctaHref: string
    secondaryLabel?: string
    secondaryHref?: string
  }
}

export type CaseStudyLang = 'es' | 'en'

// ---------------------------------------------------------------------------
// Flow — a horizontal chain of steps (Question → Retrieval → Answer)
// ---------------------------------------------------------------------------

function Flow({ steps, caption }: { steps: readonly string[]; caption?: string }) {
  return (
    <div className="mb-6">
      <div className="flex flex-wrap items-center gap-x-2 gap-y-2 p-4 rounded-lg bg-card border border-border">
        {steps.map((step, i) => (
          <span key={step} className="flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-md bg-primary/10 text-primary text-sm font-medium">
              {step}
            </span>
            {i < steps.length - 1 && (
              <span aria-hidden="true" className="text-muted-foreground/60 text-sm">→</span>
            )}
          </span>
        ))}
      </div>
      {caption && <p className="text-xs text-muted-foreground text-center mt-2">{caption}</p>}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Block renderer
// ---------------------------------------------------------------------------

function renderBlock(block: Block, key: number) {
  switch (block.kind) {
    case 'prose':
      return <Prose key={key}>{block.text}</Prose>
    case 'lead':
      return <Prose key={key} variant="hook">{block.text}</Prose>
    case 'callout':
      return <Callout key={key}>{block.text}</Callout>
    case 'warning':
      return (
        <Callout key={key} className="bg-amber-500/10 border-amber-500/60">
          {block.text}
        </Callout>
      )
    case 'quote':
      return <Manifesto key={key}>{block.text}</Manifesto>
    case 'h3':
      return <H3 key={key}>{block.text}</H3>
    case 'flow':
      return <Flow key={key} steps={block.steps} caption={block.caption} />
    case 'bullets':
      return <BulletList key={key} items={block.items} />
    case 'cards':
      return <CardStack key={key} items={block.items.map(i => ({ title: i.title, detail: i.detail }))} />
    case 'steps':
      return <StepList key={key} items={block.items} />
    case 'code':
      return <CodeBlock key={key}>{block.code}</CodeBlock>
    case 'table':
      return <DataTable key={key} headers={block.headers} rows={block.rows} />
    case 'metrics':
      return <MetricsGrid key={key} items={block.items} columns={block.items.length >= 4 ? 4 : 3} />
    case 'stack':
      return (
        <div key={key} className="flex flex-wrap gap-2 mb-6">
          {block.items.map(item => (
            <span key={item} className="px-3 py-1.5 rounded-full bg-card border border-border text-sm text-muted-foreground">
              {item}
            </span>
          ))}
        </div>
      )
  }
}

// ---------------------------------------------------------------------------
// CaseStudy — the single renderer used by every article component
// ---------------------------------------------------------------------------

export function CaseStudy({
  articleId,
  lang,
  content,
}: {
  articleId: string
  lang: CaseStudyLang
  content: Record<CaseStudyLang, CaseStudyContent>
}) {
  const t = content[lang]
  const config = articleRegistry.find(a => a.id === articleId)
  const meta = config?.seoMeta

  useArticleSeo({
    lang,
    slug: t.slug,
    altSlug: t.altSlug,
    title: t.seo.title,
    description: t.seo.description,
    publishedTime: meta?.datePublished ?? '2026-09-01',
    modifiedTime: meta?.dateModified,
    articleTags: meta?.articleTags ?? '',
    jsonLd: buildJsonLdFromRegistry(articleId, lang, t),
    xDefaultSlug: config?.xDefaultSlug ?? content.es.slug,
  })

  return (
    <ArticleLayout lang={lang}>
      <FloatingToc
        ctas={[{ href: '#cta-block', label: lang === 'es' ? 'Hablemos' : "Let's talk", variant: 'anchor' }]}
      />
      <ArticleHeader
        lang={lang}
        kicker={t.header.kicker}
        h1={t.header.h1}
        subtitle={t.header.subtitle}
        date={t.header.date}
        dateISO={meta?.datePublished}
        dateModifiedISO={meta?.dateModified}
        readingTime={t.readingTime}
      />

      {t.status && <StatusBadge text={t.status} />}

      <Callout className="bg-accent/10 border-accent/40">{t.directAnswer}</Callout>

      <article className="prose-custom">
        {Object.entries(t.sections).map(([id, section]) => (
          <section key={id}>
            <H2 id={id}>{section.heading}</H2>
            {section.blocks.map((block, i) => renderBlock(block, i))}
          </section>
        ))}

        <FaqSection heading={t.faq.heading} items={t.faq.items} />

        <div id="cta-block">
          <CaseStudyCta
            heading={t.cta.heading}
            body={t.cta.body}
            ctaLabel={t.cta.ctaLabel}
            ctaHref={t.cta.ctaHref}
            external={t.cta.ctaHref.startsWith('http')}
            secondaryLabel={t.cta.secondaryLabel}
            secondaryHref={t.cta.secondaryHref}
          />
        </div>
      </article>

      <ArticleFooter lang={lang} utmCampaign={articleId} />
    </ArticleLayout>
  )
}

/** Inline prose link segment: {pre}<a>{label}</a>{post} — internal (Link) or external (a) */
export function ProseLink({ seg }: { seg: { pre: string; label: string; href: string; post: string } }) {
  const external = seg.href.startsWith('http')
  return (
    <Prose>
      {seg.pre}
      {external ? (
        <a href={seg.href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{seg.label}</a>
      ) : (
        <Link to={seg.href} className="text-primary hover:underline">{seg.label}</Link>
      )}
      {seg.post}
    </Prose>
  )
}
