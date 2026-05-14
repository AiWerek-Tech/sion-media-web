import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { onAuthStateChanged, type User } from 'firebase/auth'
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { firebaseConfig, isFirebaseConfigured } from '../firebase/config'

interface AuthContextType {
  user: User | null
  loading: boolean
  signIn: () => Promise<void>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!isFirebaseConfigured) {
      setLoading(false)
      return
    }

    const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
    const auth = getAuth(app)

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const signIn = async () => {
    if (!isFirebaseConfigured) {
      throw new Error('Firebase is not configured')
    }

    const { signInWithGoogle } = await import('../firebase/auth')
    await signInWithGoogle()
  }

  const signOut = async () => {
    if (!isFirebaseConfigured) {
      throw new Error('Firebase is not configured')
    }

    const { signOutUser } = await import('../firebase/auth')
    await signOutUser()
  }

  const value: AuthContextType = {
    user,
    loading,
    signIn,
    signOut,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}