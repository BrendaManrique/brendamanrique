// ---------------------------------------------------------------------------
// Minimal OpenTelemetry ContextManager backed by AsyncLocalStorage.
//
// @opentelemetry/context-async-hooks is not usable here: it is CJS-only and its
// entrypoint pulls in AsyncHooksContextManager, which calls async_hooks.createHook()
// — unsupported on the Vercel Edge runtime that every Langfuse-traced function in
// this repo declares. AsyncLocalStorage on its own *is* supported, and it is all
// the ContextManager interface needs, so this implements the interface directly.
//
// Without an active context manager, OpenTelemetry's context.active() always
// returns ROOT_CONTEXT, and propagateAttributes() silently drops sessionId/tags
// instead of putting them on the trace and its child observations.
// ---------------------------------------------------------------------------

import { ROOT_CONTEXT } from '@opentelemetry/api'

export class AsyncLocalStorageContextManager {
  constructor(asyncLocalStorage) {
    this._als = asyncLocalStorage
    this._enabled = false
  }

  active() {
    if (!this._enabled) return ROOT_CONTEXT
    return this._als.getStore() ?? ROOT_CONTEXT
  }

  with(context, fn, thisArg, ...args) {
    if (!this._enabled) return fn.call(thisArg, ...args)
    return this._als.run(context, () => fn.call(thisArg, ...args))
  }

  bind(context, target) {
    if (!this._enabled) return target
    if (typeof target === 'function') {
      const self = this
      return function boundToContext(...args) {
        return self.with(context, () => target.apply(this, args))
      }
    }
    return target
  }

  enable() {
    this._enabled = true
    return this
  }

  disable() {
    this._enabled = false
    if (this._als) this._als.disable?.()
    return this
  }
}

/**
 * Resolve AsyncLocalStorage across runtimes: Vercel Edge exposes it as a global,
 * Node exposes it from node:async_hooks. Returns null when neither is available,
 * so the caller can fall back to running without context propagation rather than
 * crashing the request.
 */
export async function createContextManager() {
  let AsyncLocalStorage = globalThis.AsyncLocalStorage
  if (!AsyncLocalStorage) {
    try {
      ({ AsyncLocalStorage } = await import('node:async_hooks'))
    } catch {
      return null
    }
  }
  if (!AsyncLocalStorage) return null
  return new AsyncLocalStorageContextManager(new AsyncLocalStorage()).enable()
}
