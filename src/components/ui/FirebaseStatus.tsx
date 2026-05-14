import { isFirebaseConfigured } from '../../firebase/config'
import { useAuth } from '../../hooks/useAuth'

interface FirebaseStatusProps {
  className?: string
}

export function FirebaseStatus({ className = '' }: FirebaseStatusProps) {
  const { user } = useAuth()

  if (!isFirebaseConfigured) {
    return (
      <div className={`flex items-center gap-2 text-sm ${className}`}>
        <div className="h-2 w-2 rounded-full bg-red-500"></div>
        <span className="text-slate-400">Firebase belum dikonfigurasi</span>
      </div>
    )
  }

  return (
    <div className={`flex items-center gap-2 text-sm ${className}`}>
      <div className="h-2 w-2 rounded-full bg-green-500"></div>
      <span className="text-slate-400">
        Firebase connected {user ? '(authenticated)' : '(anonymous)'}
      </span>
    </div>
  )
}