# brendamanrique.com

**[:gb: English](#the-problem)** | **[:es: Español](#es-versión-en-español)**

> Interactive portfolio with a chat agent that refuses to invent experience — hybrid RAG, CI-gated evals, guardrails and observability.

[![Live](https://img.shields.io/badge/site-brendamanrique.com-blue?style=flat-square)](https://brendamanrique.com)
[![Built with Claude Code](https://img.shields.io/badge/built%20with-Claude%20Code-blueviolet?style=flat-square)](https://claude.ai/code)

---

## The Problem

A portfolio agent is allowed to speak as a representation of someone's professional history. That makes a hallucination worse than a bad answer: it can invent a job, a client, a skill or a result that a recruiter may believe.

Most portfolio chatbots solve the UI. The UI takes an afternoon.

## The Solution

An agent built truth-layer-first. It is **Brenda's portfolio AI** — it refers to her in the third person and never roleplays as her — and every material claim it makes is grounded in portfolio evidence or explicitly labelled as unknown.

**Key properties:**

- **Third-person persona.** The assistant is not Brenda. A first-person persona makes a hallucination sound like a personal claim; that failure mode is designed out.
- **Truth layer before personality.** The agent distinguishes a fact it can support, an interpretation of that fact, work currently in build, and something it does not know.
- **Hybrid retrieval.** Supabase Postgres full-text search + pgvector embeddings, fused with reciprocal rank fusion. A router step first decides whether a question needs portfolio evidence at all.
- **Retrieved text is evidence, never instructions.** Instructions found inside retrieved documents are not followed.
- **Server-issued sessions.** A visitor gets a random server-side token and three questions. The count cannot be reset by refreshing; a server-generated visitor hash adds a second limit.
- **Online scoring.** Every answer is scored for quality, groundedness and safety; low-scoring cases land in a queue.
- **CI-gated evals.** Seven categories — factual, boundary, attribution, status, retrieval, language, safety — must pass before a change merges.
- **Observability.** Tracing and a prompt registry via Langfuse, with a local fallback prompt so prompt retrieval is not a single point of failure.
- **Bilingual (ES/EN)** case studies with JSON-LD, prerendered HTML and cross-linked RAG.
- **GEO-ready** — `llms.txt`, structured data, AI-crawler-friendly `robots.txt`.

### The truth boundary is the product

This portfolio deliberately refuses to claim scale it does not have. The consulting practice is **pre-scale, in a build and validation phase**. There is no client roster, no production-scale customer metrics, and no page implies otherwise.

The only hard metrics anywhere on the site: **≈5,000 scorecard PDs**, **2 working days**, **15+ years**, and dated employment ranges. Everything else is qualitative — enforced by the `boundary` eval category, where the target score is zero tolerance.

---

## Tech Stack

![React](https://img.shields.io/badge/React_19-61DAFB?style=flat&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite_7-646CFF?style=flat&logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_v4-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![Claude](https://img.shields.io/badge/Claude_Sonnet-191919?style=flat&logo=anthropic&logoColor=white)
![Langfuse](https://img.shields.io/badge/Langfuse-000000?style=flat&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?style=flat&logo=supabase&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)

---

## Chat agent architecture

```
Browser widget (holds no secrets)
   ↓ streaming request
Vercel serverless function
   ├─ rate limit + server-issued session
   ├─ safety / scope check
   ├─ router: does this need portfolio evidence?
   ├─ retrieval service
   │    ├─ Postgres full-text
   │    ├─ pgvector embeddings
   │    └─ reciprocal rank fusion
   ├─ model generation (Claude)
   └─ trace + online quality scoring
          ↓
      eval datasets / CI regression gate
```

Full write-up: [`/portfolio-chat-agent`](https://brendamanrique.com/portfolio-chat-agent).

---

## LLMOps dashboard (`/ops`)

A private operations dashboard reading real data from Langfuse and Supabase: conversations, costs, RAG health, security events, eval results and system status.

It carries no owner-specific content — it is infrastructure for whoever runs the agent.

---

## Evals & testing

```bash
npm run evals                # run the suite against CHAT_API_URL
npm run adversarial          # generate + run red-team attacks
npm run prompt:regression    # compare prompt versions
npm run evaluate-traces      # LLM-as-judge over recent production traces
```

| Category | What it verifies |
|---|---|
| `factual` | Dates, titles, companies |
| `boundary` | No invented clients, metrics or scale — **zero tolerance** |
| `attribution` | JPMorgan / Moody's / Money.Net / personal projects kept separate |
| `status` | In-build work is labelled in build |
| `retrieval` | Cites the relevant case study, not the nearest keyword |
| `language` | EN and ES carry identical facts; boundaries don't soften in translation |
| `safety` | Prompt injection, context extraction, refusal to roleplay as Brenda |

See [`evals/README.md`](evals/README.md).

---

## Scripts

| Script | Purpose |
|---|---|
| `npm run rag:sync` | Export article chunks → embed → ingest into Supabase |
| `npm run prompt:sync` | Push `chatbot-prompt.txt` to the Langfuse prompt registry |
| `npm run validate-articles` | Registry/SEO consistency check (build gate) |
| `npm run validate-llms-txt` | Keeps `llms.txt` in sync with site content and truth boundaries |
| `npm run chats` / `chats:tui` | Browse production conversations from the terminal |
| `npm run diagnose:rag` | Inspect retrieval quality for a query |
| `npm run test:contract` / `test:ops` | Ops dashboard contract + UI tests |

---

## Quick start

```bash
npm install
npm run dev          # Vite — note: /api routes need `vercel dev`
vercel dev           # full stack including serverless functions
```

Environment (`.env.local`):

```bash
# Core
ANTHROPIC_API_KEY=

# RAG
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
OPENAI_API_KEY=          # embeddings

# Observability
LANGFUSE_PUBLIC_KEY=
LANGFUSE_SECRET_KEY=
LANGFUSE_BASE_URL=

# Alerts & dashboard
RESEND_API_KEY=
ALERT_EMAIL=
```

---

## Project structure

```
src/
├── App.tsx                    # Home: hero, experience, projects, building now, education, skills
├── i18n.ts                    # ES/EN copy for the home page
├── site.ts                    # Single source of truth for identity (name, domain, links, avatar)
├── AboutPage.tsx              # Entity home (/about, /sobre-mi)
├── FloatingChat.tsx           # Chat widget
├── articles/
│   ├── registry.ts            # Article registry: slugs, SEO, section labels, JSON-LD metadata
│   ├── case-study.tsx         # Shared renderer — articles are data, not bespoke components
│   ├── content-types.tsx      # Block primitives (Prose, Callout, CodeBlock, DataTable…)
│   ├── components.tsx         # Article shell (layout, header, footer, FAQ, CTA)
│   ├── json-ld.ts             # Schema.org graph builder
│   └── *-i18n.ts              # Per-article ES/EN content
├── ops/                       # LLMOps dashboard
api/
├── chat.js                    # Streaming chat endpoint + agentic RAG
├── _shared/{rag,prompt}.js    # Retrieval, prompt registry + fallback
└── ops/                       # Dashboard data endpoints
evals/                         # Eval datasets, assertions, LLM judge, runner
scripts/                       # Build pipeline: chunks, embeddings, sitemap, RSS, prerender
chatbot-prompt.txt             # The agent's system prompt (synced to Langfuse)
```

**Adding a case study** is a data change: write `src/articles/<id>-i18n.ts`, add a registry entry, add a thin component that hands the content to `<CaseStudy>`, and add the route in `src/main.tsx`.

---

## Case studies

| Article | Subject |
|---|---|
| [Moody's Analytics](https://brendamanrique.com/moodys-credit-intelligence) | Credit analytics, qualitative overlays, stateful API design |
| [Financial systems](https://brendamanrique.com/financial-systems) | JPMorgan derivatives/risk, Money.Net terminal |
| [Agentic AI consulting](https://brendamanrique.com/agentic-ai-consulting) | The practice build log — pre-scale, stated as such |
| [Portfolio chat agent](https://brendamanrique.com/portfolio-chat-agent) | This system |
| [Casicornio](https://brendamanrique.com/en/casicornio) | Spanish-language founder/technology publication |
| [Invip](https://brendamanrique.com/invip-accessibility-ai) | AI for visual accessibility, NYU 2015–2018 |
| [Fractal dimension](https://brendamanrique.com/fractal-dimension) | 2010 research — **not** a clinical diagnostic system |
| [Early projects](https://brendamanrique.com/early-projects) | Android thesis, Aquolity, experiments |
| [The story](https://brendamanrique.com/story) | Why the current chapter is a build phase |

---

## License

MIT — see [LICENSE](LICENSE).

---

# :es: Versión en Español

## El Problema

Un agente de portafolio tiene permiso para hablar como representación de la trayectoria profesional de alguien. Eso hace que una alucinación sea peor que una mala respuesta: puede inventar un empleo, un cliente, una habilidad o un resultado que un reclutador se crea.

La mayoría de chatbots de portafolio resuelven la UI. La UI se construye en una tarde.

## La Solución

Un agente construido empezando por la capa de verdad. Es **la IA de portafolio de Brenda** —se refiere a ella en tercera persona y nunca la interpreta— y toda afirmación material está fundamentada en evidencia del portafolio o etiquetada explícitamente como desconocida.

**Propiedades clave:**

- **Persona en tercera persona.** El asistente no es Brenda. Una persona en primera persona haría que una alucinación sonara como una afirmación personal; ese modo de fallo está diseñado fuera.
- **Capa de verdad antes que personalidad.** Distingue entre un hecho que puede sostener, una interpretación de ese hecho, trabajo en construcción y algo que no sabe.
- **Recuperación híbrida.** Full-text de Postgres + embeddings con pgvector en Supabase, fusionados con reciprocal rank fusion. Un router decide primero si la pregunta necesita evidencia.
- **El texto recuperado es evidencia, nunca instrucciones.**
- **Sesiones emitidas por el servidor.** Token aleatorio y tres preguntas; el contador no se reinicia recargando.
- **Scoring online** de calidad, fundamento y seguridad en cada respuesta.
- **Evals con puerta en CI.** Siete categorías que deben pasar antes de fusionar.
- **Observabilidad** con Langfuse y prompt de fallback local.

### El límite de verdad es el producto

Este portafolio se niega deliberadamente a afirmar una escala que no tiene. La práctica de consultoría está **pre-escala, en fase de construcción y validación**. No hay cartera de clientes ni métricas de producción, y ninguna página insinúa lo contrario.

Únicas métricas duras del sitio: **≈5.000 PDs de scorecard**, **2 días laborables**, **15+ años** y los rangos de empleo fechados. Todo lo demás es cualitativo, y lo protege la categoría de evals `boundary`, con tolerancia cero.

## Estructura y scripts

Ver las secciones [Project structure](#project-structure) y [Scripts](#scripts) arriba: los comandos y rutas son idénticos.

## Licencia

MIT — ver [LICENSE](LICENSE).

---

## Contacto

- LinkedIn: [linkedin.com/in/brendastephanie](https://www.linkedin.com/in/brendastephanie/)
- GitHub: [github.com/BrendaManrique](https://github.com/BrendaManrique)

No se publica ningún email personal en el sitio.
