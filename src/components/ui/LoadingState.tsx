import { Loader2 } from 'lucide-react'

type LoadingStateProps = {
  text?: string
}

function LoadingState({ text = 'Memuat...' }: LoadingStateProps) {
  return (
    <div className="rounded-4xl glass-card flex flex-col items-center justify-center py-20 px-10 text-center">
      <div className="relative">
        <Loader2 size={48} className="animate-spin text-cyan-400" />
        <div className="absolute inset-0 blur-xl bg-cyan-400/20 rounded-full animate-pulse" />
      </div>
      <p className="mt-8 text-sm font-bold uppercase tracking-[0.3em] text-slate-500">
        {text}
      </p>
    </div>
  )
}

export default LoadingState
