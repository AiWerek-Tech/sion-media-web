import { useAuth } from '../../hooks/useAuth'
import { LogIn, LogOut, User as UserIcon, Loader2, Church } from 'lucide-react'
import { motion } from 'framer-motion'

interface AuthButtonProps {
  variant?: 'button' | 'link'
}

export function AuthButton({ variant = 'button' }: AuthButtonProps) {
  const { user, profile, loading, signIn, signOut } = useAuth()

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-slate-500">
        <Loader2 size={16} className="animate-spin" />
        <span className="text-xs font-bold uppercase tracking-widest">Loading</span>
      </div>
    )
  }

  if (user) {
    if (variant === 'link') {
      return (
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            {user.photoURL ? (
              <img src={user.photoURL} alt="User" className="h-6 w-6 rounded-full border border-slate-700" />
            ) : (
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-slate-400">
                <UserIcon size={12} />
              </div>
            )}
            <span className="text-sm font-medium text-slate-300">{user.displayName?.split(' ')[0]}</span>
          </div>
          <button
            onClick={signOut}
            className="group flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-slate-500 transition hover:bg-rose-500/10 hover:text-rose-400"
            title="Keluar"
          >
            <LogOut size={14} />
          </button>
        </div>
      )
    }

    return (
      <motion.div 
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950 p-1.5 pr-4 shadow-inner"
      >
        {user.photoURL ? (
          <img src={user.photoURL} alt="User" className="h-8 w-8 rounded-xl" />
        ) : (
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-slate-400">
            <UserIcon size={16} />
          </div>
        )}
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
              {profile?.churchName ? 'Church Partner' : 'Authenticated'}
            </span>
            {profile?.churchName && <Church size={8} className="text-cyan-400" />}
          </div>
          <span className="text-xs font-bold text-white truncate max-w-[120px]">
            {profile?.churchName || user.displayName}
          </span>
        </div>
        <button
          onClick={signOut}
          className="ml-2 flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition hover:bg-rose-500/10 hover:text-rose-400"
        >
          <LogOut size={16} />
        </button>
      </motion.div>
    )
  }

  if (variant === 'link') {
    return (
      <button
        onClick={signIn}
        className="flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-white"
      >
        <LogIn size={16} />
        Masuk
      </button>
    )
  }

  return (
    <button
      onClick={signIn}
      className="flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-6 py-2.5 text-sm font-bold text-white transition hover:border-slate-700 hover:bg-slate-800"
    >
      <LogIn size={18} className="text-cyan-400" />
      Admin Login
    </button>
  )
}