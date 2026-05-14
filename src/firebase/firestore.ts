import { doc, getDoc, setDoc, updateDoc, increment } from 'firebase/firestore'
import { db } from './init'
import type { PublicStats } from '../types'

const DEFAULT_PUBLIC_STATS: PublicStats = {
  totalChurches: 0,
  totalUsers: 0,
  activeOrganizations: 0,
  latestVersion: '1.0.0',
}

export async function fetchPublicStats(): Promise<PublicStats> {
  if (!db) {
    throw new Error('Firebase is not configured. Add environment variables and update src/firebase/config.ts')
  }

  const reference = doc(db, 'public_stats', 'summary')
  const snapshot = await getDoc(reference)

  if (!snapshot.exists()) {
    try {
      await setDoc(reference, DEFAULT_PUBLIC_STATS)
    } catch (error) {
      console.warn('Unable to create default public_stats document:', error)
    }

    return DEFAULT_PUBLIC_STATS
  }

  return snapshot.data() as PublicStats
}

/**
 * Increments the installation counter (totalUsers) in global stats
 */
export async function recordInstallation(): Promise<void> {
  if (!db) return

  try {
    const reference = doc(db, 'public_stats', 'summary')
    await updateDoc(reference, {
      totalUsers: increment(1)
    })
  } catch (error) {
    console.warn('Failed to record installation:', error)
  }
}
