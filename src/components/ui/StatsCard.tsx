type StatsCardProps = {
  label: string
  value: string | number
}

function StatsCard({ label, value }: StatsCardProps) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 text-center shadow-[0_25px_60px_-45px_rgba(15,23,42,0.9)]">
      <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">{label}</p>
      <p className="mt-5 text-4xl font-semibold text-white">{value}</p>
    </div>
  )
}

export default StatsCard
