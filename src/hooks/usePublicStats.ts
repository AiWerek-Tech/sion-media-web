import { useEffect, useState, useCallback } from 'react'
import { fetchPublicStats } from '../firebase/firestore'
import type { PublicStats } from '../types'

export function usePublicStats() {
  const [stats, setStats] = useState<PublicStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const refetch = useCallback(async () => {
    setLoading(true)
    setError(false)
    try {
      const data = await fetchPublicStats()
      setStats(data)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    refetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { stats, loading, error, refetch }
}
