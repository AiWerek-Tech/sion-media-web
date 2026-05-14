import SectionTitle from '../common/SectionTitle'

const reasons = [
  {
    title: 'Broadcast console workflow',
    description: 'Workflow Cue → Take → Program dirancang untuk operasi proyeksi live secara profesional, bukan sekadar tampilan biasa.',
  },
  {
    title: 'Dukungan multi-monitor',
    description: 'Preview dan program monitor plus stage display membantu tim media menjaga alur ibadah tetap sinkron.',
  },
  {
    title: 'Library ikhtisar lengkap',
    description: 'Database multi-hymnal dengan pencarian FTS5 dan 525 lagu Lagu Sion default membuat persiapan lebih cepat.',
  },
]

function WhySection() {
  return (
    <section className="mt-20">
      <SectionTitle eyebrow="Why SION Media" title="Dirancang untuk tim ibadah, bukan kompleksitas backend" />
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
