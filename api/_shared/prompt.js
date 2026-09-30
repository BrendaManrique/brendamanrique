import FALLBACK from '../../chatbot-prompt.txt'
import { reportError } from './errors.js'

/**
 * Fetch the production system prompt from Langfuse prompt management.
 *
 * v4 moved prompts off the tracing client onto LangfuseClient, and folded the
 * positional `version` argument into the options object:
 *   v3: langfuse.getPrompt(name, version, { type, label, cacheTtlSeconds })
 *   v4: langfuse.prompt.get(name, { version, label, type, cacheTtlSeconds })
 *
 * `client` is a LangfuseClient (or null when Langfuse is unconfigured).
 * Returns the prompt client alongside text/version so callers can link the
 * prompt to their observations via propagateAttributes({ prompt }).
 */
export async function getSystemPrompt(client) {
  try {
    if (client) {
      const prompt = await client.prompt.get('chatbot-system', {
        type: 'text', label: 'production', cacheTtlSeconds: 300,
      })
      return { text: prompt.prompt, version: prompt.version, prompt }
    }
  } catch (err) {
    // The file fallback keeps the chat answering, but on a prompt that may be
    // older than production's — worth knowing about.
    reportError('prompt-fetch', err, { context: { fallback: 'chatbot-prompt.txt' } })
  }
  return { text: FALLBACK, version: 'file', prompt: null }
}
