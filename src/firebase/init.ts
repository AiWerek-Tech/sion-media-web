import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore, type Firestore } from 'firebase/firestore'
import { firebaseConfig, isFirebaseConfigured } from './config'

let db: Firestore | null = null

if (isFirebaseConfigured) {
  const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
  db = getFirestore(app)
}

export { db }
