import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import { initializeApp, getApps, getApp } from 'firebase/app'
import { firebaseConfig, isFirebaseConfigured } from './config'

let auth: ReturnType<typeof getAuth> | null = null
let provider: GoogleAuthProvider | null = null

if (isFirebaseConfigured) {
  const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
  auth = getAuth(app)
  provider = new GoogleAuthProvider()
}

export async function signInWithGoogle() {
  if (!isFirebaseConfigured || !auth || !provider) {
    throw new Error('Firebase auth is not configured. Provide config values in src/firebase/config.ts')
  }

  const result = await signInWithPopup(auth, provider)
  return result.user
}

export async function signOutUser() {
  if (!isFirebaseConfigured || !auth) {
    throw new Error('Firebase auth is not configured. Provide config values in src/firebase/config.ts')
  }

  return signOut(auth)
}
