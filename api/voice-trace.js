import { startObservation, propagateAttributes } from '@langfuse/tracing'
import { waitUntil } from '@vercel/functions'
import { classifyIntent, containsFingerprint, sendJailbreakAlert } from './_shared/rag.js'
import { initTracing, flushTracing, setTraceTags, parseTraceparent } from './_shared/langfuse.js'

export const config = {
  runtime: 'edge',
}

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }

  try {
    const { traceparent, sessionId, transcript = [], durationMs, lang } = await req.json()

    // v4 joins an existing trace through the parent span context carried by the
    // traceparent that /api/voice-token issued, not by re-opening a trace id.
    const parentSpanContext = parseTraceparent(traceparent)
    if (!parentSpanContext) {
      return new Response(JSON.stringify({ error: 'Missing or malformed traceparent' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const processor = await initTracing()
    if (!processor) {
      return new Response(JSON.stringify({ ok: true }), {
        headers: { 'Content-Type': 'application/json' },
      })
    }

    // Classify intent from all user messages
    const userMessages = transcript.filter(t => t.role === 'user').map(t => t.text)
    const allTags = new Set(['voice', lang])
    let jailbreakDetected = false

    for (const msg of userMessages) {
      const tags = classifyIntent(msg)
      tags.forEach(t => allTags.add(t))
      if (tags.includes('jailbreak-attempt')) jailbreakDetected = true
    }

    // Check for fingerprint leaks in assistant responses
    const assistantMessages = transcript.filter(t => t.role === 'assistant').map(t => t.text)
    let leakDetected = false
    for (const msg of assistantMessages) {
      if (containsFingerprint(msg)) {
        leakDetected = true
        allTags.add('prompt-leak-detected')
        break
      }
    }

    // Estimate voice costs (OpenAI Realtime API pricing)
    // ~$0.06/min input audio, ~$0.24/min output audio
    // Estimate 40/60 split user/assistant based on message counts
    const durationMin = (durationMs || 0) / 60000
    const userRatio = transcript.length > 0
      ? userMessages.length / transcript.length
      : 0.4
    const audioInputCost = durationMin * userRatio * 0.06
    const audioOutputCost = durationMin * (1 - userRatio) * 0.24
    const voiceTotalCost = audioInputCost + audioOutputCost

    // The session summary is a child of the voice-session root rather than an
    // update to it: the root observation was exported when /api/voice-token
    // returned, and a v4 observation is written once, when it ends. The ops
    // dashboard reads voice session metadata off this observation.
    await propagateAttributes(
      { traceName: 'voice-session', ...(sessionId ? { sessionId } : {}) },
      async () => {
        const transcriptGen = startObservation('voice-transcript', {
          input: userMessages.join('\n'),
          output: assistantMessages.join('\n'),
          model: 'gpt-realtime',
          costDetails: {
            input: audioInputCost,
            output: audioOutputCost,
            total: voiceTotalCost,
          },
          metadata: {
            durationMs,
            turnCount: transcript.length,
            userMessageCount: userMessages.length,
            jailbreakDetected,
            leakDetected,
            turns: transcript.length,
            cost: {
              audioInput: audioInputCost,
              audioOutput: audioOutputCost,
              voice: voiceTotalCost,
              total: voiceTotalCost,
            },
          },
        }, { asType: 'generation', parentSpanContext })
        setTraceTags(transcriptGen, [...allTags])
        transcriptGen.end()
      },
    )

    // Send jailbreak alert if detected
    if (jailbreakDetected) {
      waitUntil(sendJailbreakAlert(`[VOICE JAILBREAK] ${userMessages.join(' | ')}`))
    }

    await flushTracing()

    return new Response(JSON.stringify({ ok: true }), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Voice trace error:', error)
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
