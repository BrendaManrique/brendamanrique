/**
 * Generates the home OG image (public/og-image.png, 1200x630) from scripts/og-template.html.
 *
 * - Renders the HTML with Playwright (Chromium) → PNG. Replicates the hero design tokens 1:1
 *   (no AI-generated art, no fetched metrics).
 * - Idempotent: only regenerates when the resolved template actually changes (hash tracked in
 *   og-image.state.json), so it doesn't churn the binary on every build.
 * - Graceful skip when Chromium isn't available (e.g. Vercel CI) — the committed png is served as-is.
 *
 * Usage: npx tsx scripts/generate-og-image.ts
 */

import { readFileSync, writeFileSync, existsSync, rmSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { resolve, dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { tmpdir } from 'node:os'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')
const TEMPLATE = join(__dirname, 'og-template.html')
const OUT_PNG = join(ROOT, 'public', 'og-image.png')
const STATE = join(__dirname, 'og-image.state.json')

function readState(): { hash?: string } {
  try {
    return JSON.parse(readFileSync(STATE, 'utf-8'))
  } catch {
    return {}
  }
}

async function main() {
  console.log('🖼  Generating OG image...\n')

  // Resolve template with runtime file:// asset paths.
  const fontSG = 'file://' + join(ROOT, 'public', 'fonts', 'space-grotesk-latin.woff2')
  const fontDM = 'file://' + join(ROOT, 'public', 'fonts', 'dm-sans-latin.woff2')
  const avatar = 'file://' + join(ROOT, 'public', 'brenda-archive.jpg')
  const html = readFileSync(TEMPLATE, 'utf-8')
    .replaceAll('__FONT_SG__', fontSG)
    .replaceAll('__FONT_DM__', fontDM)
    .replaceAll('__AVATAR__', avatar)

  // Idempotent: skip when nothing about the rendered page changed.
  const hash = createHash('sha256').update(html).digest('hex').slice(0, 16)
  if (readState().hash === hash && existsSync(OUT_PNG)) {
    console.log('  ⏭ No template change — og-image.png is current')
    return
  }

  const tmpHtml = join(tmpdir(), `og-render-${Date.now()}.html`)
  writeFileSync(tmpHtml, html, 'utf-8')

  // Render with Playwright. Graceful skip if Chromium isn't installed (e.g. CI).
  let chromium: typeof import('playwright').chromium
  try {
    ;({ chromium } = await import('playwright'))
  } catch {
    console.log('  ⏭ Playwright not available — skipping (committed png will be served)')
    rmSync(tmpHtml, { force: true })
    return
  }

  let browser
  try {
    browser = await chromium.launch()
  } catch (err) {
    console.log(`  ⏭ Chromium unavailable (${(err as Error).message.split('\n')[0]}) — skipping; committed png served as-is`)
    rmSync(tmpHtml, { force: true })
    return
  }

  try {
    const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 })
    await page.goto('file://' + tmpHtml, { waitUntil: 'networkidle' })
    await page.evaluate(() => (document as unknown as { fonts: { ready: Promise<unknown> } }).fonts.ready)
    await page.screenshot({ path: OUT_PNG, type: 'png' })
    await browser.close()
  } catch (err) {
    await browser.close().catch(() => {})
    rmSync(tmpHtml, { force: true })
    throw err
  }

  writeFileSync(STATE, JSON.stringify({ hash, updated: new Date().toISOString() }, null, 2) + '\n')
  rmSync(tmpHtml, { force: true })
  console.log('  ✓ og-image.png regenerated')
}

main()
