type EmptyStateProps = {
  title: string
  message: string
}

function EmptyState({ title, message }: EmptyStateProps) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-10 text-center text-slate-300 shadow-[0_10px_40px_-25px_rgba(15,23,42,0.9)]">
      <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Tidak ada data</p>
      <h2 className="mt-4 text-2xl font-semibold text-white">{title}</h2>
      <p className="mt-3 max-w-xl mx-auto text-slate-400">{message}</p>
    </div>
  )
}

export default EmptyState
