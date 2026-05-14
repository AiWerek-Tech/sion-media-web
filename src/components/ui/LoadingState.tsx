type LoadingStateProps = {
  text?: string
}

function LoadingState({ text = 'Memuat...' }: LoadingStateProps) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-10 text-center text-slate-300 shadow-[0_10px_40px_-25px_rgba(15,23,42,0.9)]">
      <div className="mx-auto mb-6 h-16 w-16 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent"></div>
      <p>{text}</p>
    </div>
  )
}

export default LoadingState
