type FeatureCardProps = {
  title: string
  description: string
  tag: string
}

function FeatureCard({ title, description, tag }: FeatureCardProps) {
  return (
    <article className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-[0_25px_60px_-45px_rgba(15,23,42,0.9)] transition hover:-translate-y-1 hover:border-cyan-500/60">
      <span className="inline-flex rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300">{tag}</span>
      <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 leading-7 text-slate-300">{description}</p>
    </article>
  )
}

export default FeatureCard
