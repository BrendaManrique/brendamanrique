import { useState, useCallback, useEffect, useMemo, useRef } from 'react'
import { useOpsApi } from './useOpsApi'
import type { OpsTrace } from '../types'

export interface TraceFilters {
  days: number
  lang?: string
  mode?: string
  rag?: string
  jailbreak?: boolean
}

const PAGE_SIZE = 20

interface TracesResponse {
  data: OpsTrace[]
  nextCursor: string | null
  total: number
}

export function useTraces(filters: TraceFilters) {
  // Langfuse's v2 observations API paginates by cursor, not offset, so "load
  // more" carries the previous page's nextCursor instead of an offset. There is
  // no total count to page against either — hasMore is simply "a cursor came back".
  const [cursor, setCursor] = useState<string | null>(null)
  const [allTraces, setAllTraces] = useState<OpsTrace[]>([])
  const [nextCursor, setNextCursor] = useState<string | null>(null)
  const prevDataRef = useRef<TracesResponse | null>(null)

  const params = useMemo(() => {
    const p: Record<string, string> = {
      days: String(filters.days),
      limit: String(PAGE_SIZE),
    }
    if (cursor) p.cursor = cursor
    if (filters.lang) p.lang = filters.lang
    if (filters.mode) p.mode = filters.mode
    if (filters.rag) p.rag = filters.rag
    if (filters.jailbreak) p.jailbreak = 'true'
    return p
  }, [filters, cursor])

  const { data, loading } = useOpsApi<TracesResponse>({
    endpoint: 'traces',
    params,
    cacheTtlMs: 15000,
  })

  // Merge new results when data changes
  useEffect(() => {
    if (!data || data === prevDataRef.current) return
    prevDataRef.current = data
    setNextCursor(data.nextCursor ?? null)

    if (!cursor) {
      setAllTraces(data.data)
    } else {
      setAllTraces(prev => {
        const existingIds = new Set(prev.map(t => t.id))
        const newTraces = data.data.filter(t => !existingIds.has(t.id))
        return [...prev, ...newTraces]
      })
    }
  }, [data, cursor])

  const loadMore = useCallback(() => {
    setCursor(prev => (nextCursor && nextCursor !== prev ? nextCursor : prev))
  }, [nextCursor])

  const resetFilters = useCallback(() => {
    setCursor(null)
    setNextCursor(null)
    setAllTraces([])
    prevDataRef.current = null
  }, [])

  return {
    traces: allTraces,
    total: allTraces.length,
    hasMore: Boolean(nextCursor),
    loading,
    loadMore,
    resetFilters,
  }
}
