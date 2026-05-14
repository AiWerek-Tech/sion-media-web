import { doc, getDoc } from 'firebase/firestore'
import { db } from './init'
import type { PublicStats } from '../types'

export async function fetchPublicStats(): Promise<PublicStats> {
  if (!db) {
    throw new Error('Firebase is not configured. Add environment variables and update src/firebase/config.ts')
  }

  const reference = doc(db, 'public_stats', 'summary')
  const snapshot = await getDoc(reference)

  if (!snapshot.exists()) {
    return {}
  }

  return snapshot.data() as PublicStats
}
