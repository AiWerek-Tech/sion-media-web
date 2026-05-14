import { createContext, useEffect, useState, type ReactNode } from 'react'
import { onAuthStateChanged, type User } from 'firebase/auth'
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { doc, getDoc, setDoc, getFirestore, increment, updateDoc } from 'firebase/firestore'
import { firebaseConfig, isFirebaseConfigured } from '../firebase/config'

export interface UserProfile {
  churchName: string
  organizationName: string
  role: 'admin' | 'user'
  createdAt: string
  lastLogin: string
}

interface AuthContextType {
  user: User | null
  profile: UserProfile | null
  loading: boolean
  isNewUser: boolean
  signIn: () => Promise<void>
  signOut: () => Promise<void>
  updateProfile: (data: Partial<UserProfile>) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export { AuthContext }

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)
  const [isNewUser, setIsNewUser] = useState(false)

  useEffect(() => {
    if (!isFirebaseConfigured) {
      setLoading(false)
      return
    }

    const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
    const auth = getAuth(app)
    const db = getFirestore(app)

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser)
      
      if (currentUser) {
        // Fetch profile from Firestore
        try {
          const profileRef = doc(db, 'users', currentUser.uid)
          const snapshot = await getDoc(profileRef)
          
          if (snapshot.exists()) {
            setProfile(snapshot.data() as UserProfile)
            setIsNewUser(false)
          } else {
            setProfile(null)
            setIsNewUser(true)
          }
        } catch (error) {
          console.error('Error fetching profile:', error)
        }
      } else {
        setProfile(null)
        setIsNewUser(false)
      }
      
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

  const updateProfile = async (data: Partial<UserProfile>) => {
    if (!user || !isFirebaseConfigured) return

    const app = getApp()
    const db = getFirestore(app)
    const profileRef = doc(db, 'users', user.uid)
    
    const newProfile: UserProfile = {
      churchName: '',
      organizationName: '',
      role: 'user',
      createdAt: new Date().toISOString(),
      lastLogin: new Date().toISOString(),
      ...(profile || {}),
      ...data
    }

    await setDoc(profileRef, newProfile, { merge: true })
    setProfile(newProfile)
    
    // Increment global active organizations counter if this is a first-time profile completion
    if (isNewUser) {
      try {
        const statsRef = doc(db, 'public_stats', 'summary')
        await updateDoc(statsRef, {
          activeOrganizations: increment(1)
        })
      } catch (error) {
        console.warn('Failed to increment global counter:', error)
      }
    }
    
    setIsNewUser(false)
  }

  const value: AuthContextType = {
    user,
    profile,
    loading,
    isNewUser,
    signIn,
    signOut,
    updateProfile
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}