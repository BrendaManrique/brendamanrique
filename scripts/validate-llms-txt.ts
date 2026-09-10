/**
 * Build-time validation: checks that llms.txt stays in sync with i18n.ts content.
 *
 * Defines "proof points" — key terms/phrases that MUST appear in llms.txt
 * because they represent real content from the website. When i18n.ts adds
 * new sections or projects, add matching proof points here so the check
 * catches the drift on next build.
 *
 * Usage:
 *   npx tsx --tsconfig tsconfig.app.json scripts/validate-llms-txt.ts
 */

import { readFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

// ---------------------------------------------------------------------------
// Proof points: key terms that MUST appear in llms.txt
// Grouped by source section for readable error messages.
// ---------------------------------------------------------------------------

interface ProofPoint {
  /** Where this content lives in the codebase */
  source: string
  /** Terms that must ALL appear in llms.txt (case-insensitive) */
  terms: string[]
}

const PROOF_POINTS: ProofPoint[] = [
  // -- Identity (site.ts + i18n.ts) --
  {
    source: 'site.ts → identity',
    terms: ['Brenda Manrique', 'Berlin', 'brendastephanie', 'BrendaManrique'],
  },
  {
    source: 'i18n.ts → hero',
    terms: ['Agentic AI Systems Builder', '15+ years'],
  },

  // -- Experience (i18n.ts → experience) --
  {
    source: 'i18n.ts → experience',
    terms: ["Moody's Analytics", 'JPMorgan', 'Money.Net', 'DLYA Bantotal', 'EDF-X', 'Athena'],
  },
  {
    source: 'i18n.ts → education',
    terms: ['New York University', 'Universidad Católica de Santa María', 'honorable mention'],
  },

  // -- Articles published (registry.ts) --
  {
    source: 'articles/registry.ts',
    terms: ['Casicornio', 'Invip', 'fractal dimension', 'Early projects'],
  },

  // -- Portfolio agent (portfolio-agent-i18n.ts) --
  {
    source: 'articles/portfolio-agent-i18n.ts → retrieval',
    terms: ['pgvector', 'reciprocal rank fusion', 'Langfuse', 'evidence and never as instructions'],
  },
  {
    source: 'articles/portfolio-agent-i18n.ts → evals',
    terms: ['factual', 'boundary', 'attribution', 'status', 'retrieval', 'language', 'zero tolerance'],
  },
  {
    source: 'chatbot-prompt.txt → third-person persona',
    terms: ['third person', 'never roleplays as her'],
  },

  // -- Truth boundaries (BRENDA-CONTENT §21) — the identity of this portfolio --
  {
    source: 'truth boundaries → pre-scale',
    terms: ['pre-scale', 'build and validation phase', 'no client roster'],
  },
  {
    source: 'truth boundaries → permitted hard metrics',
    terms: ['5,000 scorecard PDs', 'two working days'],
  },
  {
    source: 'truth boundaries → fractal disclaimer',
    terms: ['not a validated clinical', 'never be described as one'],
  },
  {
    source: 'truth boundaries → sanitized Moody\'s case study',
    terms: ['sanitized'],
  },
  {
    source: 'truth boundaries → no German fluency',
    terms: ['no German fluency is claimed'],
  },
  {
    source: 'truth boundaries → no published email',
    terms: ['No personal email is published'],
  },
]

// ---------------------------------------------------------------------------
// Run
// ---------------------------------------------------------------------------

const llmsTxtPath = resolve(root, 'public/llms.txt')
let llmsTxt: string

try {
  llmsTxt = readFileSync(llmsTxtPath, 'utf-8').toLowerCase()
} catch {
  console.error(`\n❌ public/llms.txt not found\n`)
  process.exit(1)
}

let errors = 0

for (const pp of PROOF_POINTS) {
  const missing = pp.terms.filter(t => !llmsTxt.includes(t.toLowerCase()))
  if (missing.length > 0) {
    errors++
    console.error(
      `❌ llms.txt missing content from [${pp.source}]:\n` +
      `   Missing terms: ${missing.map(t => `"${t}"`).join(', ')}\n`
    )
  }
}

if (errors > 0) {
  console.error(
    `\n🔴 llms.txt is out of sync — ${errors} section(s) have missing content.\n` +
    `   Update public/llms.txt to include the missing information,\n` +
    `   or add the proof point to scripts/validate-llms-txt.ts if intentionally omitted.\n`
  )
  process.exit(1)
} else {
  console.log('✅ llms.txt is in sync with i18n content')
}
