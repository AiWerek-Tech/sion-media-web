import { useAuth } from '../../hooks/useAuth'
import { brandingUtils } from '../../utils/brandingUtils'

interface AuthButtonProps {
  variant?: 'button' | 'link'
  className?: string
}

export function AuthButton({ variant = 'button' }: AuthButtonProps) {
  const { user, loading, signIn, signOut } = useAuth()

  if (loading) {
    return (
      <div className="flex items-center gap-2">
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-cyan-500 border-t-transparent"></div>
        <span className="text-sm text-slate-400">Memuat...</span>
      </div>
    )
  }

  if (user) {
    if (variant === 'link') {
      return (
        <div className="flex items-center gap-4">
          <span className="text-sm text-slate-300">Selamat datang, {user.displayName}</span>
          <button
            onClick={signOut}
            className="text-sm text-slate-400 hover:text-slate-200 transition-colors"
          >
            Keluar
          </button>
        </div>
      )
    }

    return (
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          {user.photoURL && (
            <img
              src={user.photoURL}
              alt={user.displayName || 'User'}
              className="h-6 w-6 rounded-full"
            />
          )}
          <span className="text-sm text-slate-300 hidden sm:block">
            {user.displayName}
          </span>
        </div>
        <button
          onClick={signOut}
          className={`${brandingUtils.getPrimaryButtonClasses('ghost')} text-xs`}
        >
          Keluar
        </button>
      </div>
    )
  }

  if (variant === 'link') {
    return (
      <button
        onClick={signIn}
        className="text-sm text-slate-400 hover:text-slate-200 transition-colors"
      >
        Masuk
      </button>
    )
  }

  return (
    <button
      onClick={signIn}
      className={brandingUtils.getPrimaryButtonClasses('outline')}
    >
      Masuk dengan Google
    </button>
  )
}