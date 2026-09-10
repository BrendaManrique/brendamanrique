# Evals Suite — Brenda's portfolio agent

Suite de evaluaciones para el agente de portafolio: habla **de** Brenda en tercera
persona, nunca **como** Brenda.

## Qué son los Evals

Los **evals** son tests sistemáticos para medir la calidad de un sistema de IA.
En este proyecto la pregunta más importante no es si la respuesta suena bien:

> **¿El agente hace sonar a Brenda más consumada de lo que la evidencia sostiene?**
> La puntuación correcta es **tolerancia cero**.

## Categorías de Tests

| Categoría | Qué verifica | Target |
|-----------|--------------|--------|
| `factual` | Fechas, títulos, empresas | 100% |
| `boundary` | No inventa clientes, métricas ni escala | 100% — tolerancia cero |
| `attribution` | Mantiene separados JPMorgan, Moody's, Money.Net y proyectos propios | 100% |
| `status` | Llama «en construcción» a lo que está en construcción | 100% |
| `retrieval` | Cita el case study relevante, no la palabra clave más cercana | 90%+ |
| `language` | EN/ES con los mismos hechos, sin ablandar límites al traducir | 100% |
| `safety` | Resiste inyección de prompt, extracción y roleplay como Brenda | 100% |

### Límites de verdad que los evals protegen

- La práctica de consultoría está **pre-escala**, en fase de construcción y validación.
  No hay cartera de clientes y el agente no puede inventarla.
- La investigación de dimensión fractal (2010) **no** es un sistema de diagnóstico clínico.
- Casicornio es un proyecto en marcha, no un gran negocio de medios.
- No se afirma fluidez en alemán.
- Las únicas métricas duras permitidas: ≈5.000 PDs de scorecard, 2 días laborables,
  15+ años y los rangos de empleo fechados.

## Cómo Ejecutar

**Opción 1: Local con Vercel Dev** (recomendado para desarrollo)
```bash
# Terminal 1: Iniciar servidor con edge functions
vercel dev

# Terminal 2: Ejecutar evals
npm run evals
```

**Opción 2: Contra producción** (para validar el deploy)
```bash
CHAT_API_URL=https://brendamanrique.com/api/chat npm run evals
```

> **Nota:** `npm run dev` (Vite) no sirve las edge functions de `/api/chat`. Usa `vercel dev` para desarrollo local.

## Estructura

```
evals/
├── README.md           # Esta documentación
├── datasets/             # Tests en formato JSON
│   ├── factual.json      # Fechas, títulos, empresas
│   ├── boundary.json     # Límites de verdad (§21) — la categoría crítica
│   ├── attribution.json  # Cada trabajo atribuido a su empleador correcto
│   ├── status.json       # En construcción / vivo / archivado
│   ├── retrieval.json    # Cita el artículo correcto; el router salta lo innecesario
│   ├── language.json     # EN/ES con hechos idénticos
│   └── safety.json       # Inyección, extracción, roleplay
├── assertions.ts       # Funciones de assertion
├── llm-judge.ts        # Evaluador con Haiku
├── runner.ts           # Script principal
└── results/            # Reportes generados
```

## Tipos de Assertions

### Deterministas (90% de tests)

| Tipo | Descripción |
|------|-------------|
| `contains` | Contiene texto exacto |
| `contains_any` | Contiene al menos uno de los valores |
| `not_contains` | NO contiene el texto |
| `max_words` | Máximo N palabras |
| `min_words` | Mínimo N palabras |
| `regex` | Match de patrón regex |
| `language` | Detecta idioma (ES/EN) |
| `rag_used` / `rag_not_used` | El router usó (o no) recuperación |
| `source_includes` / `source_not_includes` | Qué artículo se citó |

### Con LLM Judge (10% de tests)

| Tipo | Descripción |
|------|-------------|
| `llm_judge` | Haiku evalúa según criterio subjetivo |

## Formato de Dataset

```json
{
  "name": "categoria_nombre",
  "description": "Descripción de qué evalúa",
  "tests": [
    {
      "id": "test-id",
      "description": "Qué verifica este test",
      "input": "Pregunta al chatbot",
      "lang": "es",
      "assertions": [
        { "type": "contains", "value": "texto esperado" },
        { "type": "llm_judge", "criteria": "criterio subjetivo" }
      ]
    }
  ]
}
```

## Reporte de Resultados

Después de cada ejecución se genera un reporte en `results/report-YYYY-MM-DD.md` con:

- Resumen general
- Pass rate por categoría
- Detalle de cada test con input, response y assertions

## Variables de Entorno

| Variable | Default | Descripción |
|----------|---------|-------------|
| `CHAT_API_URL` | `http://localhost:3000/api/chat` | URL del API del chat |
| `ANTHROPIC_API_KEY` | (requerido para LLM judge) | API key de Anthropic |

### Configurar API Key (para LLM Judge)

```bash
# Copia el ejemplo y añade tu key
cp evals/.env.example evals/.env.local

# Edita el archivo con tu key real
# El archivo .env.local está en .gitignore (no se sube a GitHub)
```

**Nota:** sin `ANTHROPIC_API_KEY` fallan las assertions `llm_judge`. Las deterministas
(`contains`, `language`, `rag_used`, `source_includes`…) funcionan sin esa variable.

## Por qué existe esta suite

Un agente con permiso para hablar de la trayectoria profesional de alguien puede
inventar un empleo, un cliente o una métrica que un reclutador se crea. Los evals
son lo que hace creíble la persona: convierten cada límite del portafolio en un
test que tiene que pasar antes de fusionar un cambio.
