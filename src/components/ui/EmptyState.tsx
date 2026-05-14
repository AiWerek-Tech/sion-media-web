import { AlertCircle } from 'lucide-react'

type EmptyStateProps = {
  title: string
  message: string
}

function EmptyState({ title, message }: EmptyStateProps) {
  return (
    <div className="rounded-4xl glass-card flex flex-col items-center justify-center py-20 px-10 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-400">
        <AlertCircle size={32} />
      </div>
      <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.4em] text-rose-400/70">Oops! Something went wrong</p>
      <h2 className="mt-4 text-2xl font-bold text-white">{title}</h2>
      <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-500">{message}</p>
      
      <button 
        onClick={() => window.location.reload()}
        className="mt-8 rounded-xl border border-slate-800 bg-slate-900 px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-slate-300 transition hover:border-slate-700 hover:text-white"
      >
        Try Reloading
      </button>
    </div>
  )
}

export default EmptyState
