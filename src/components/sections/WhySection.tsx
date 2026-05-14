import SectionTitle from '../common/SectionTitle'

const reasons = [
  { title: 'Clear launch portal', description: 'One central place for downloads, changelog, docs, and statistics.' },
  { title: 'Static-friendly design', description: 'Fully compatible with GitHub Pages and modern static hosting.' },
  { title: 'Desktop update-ready', description: 'Supports `latest-version.json` for Electron update workflows.' },
]

function WhySection() {
  return (
    <section className="mt-20">
      <SectionTitle eyebrow="Why SION Media" title="A website built around release stability and visibility" />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {reasons.map((item) => (
          <div key={item.title} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-[0_25px_60px_-45px_rgba(15,23,42,0.9)]">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">{item.title}</p>
            <p className="mt-4 text-slate-300">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhySection
