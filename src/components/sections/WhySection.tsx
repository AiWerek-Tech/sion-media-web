import SectionTitle from '../common/SectionTitle'

const reasons = [
  {
    title: 'Alur ibadah terfokus',
    description: 'Dirancang untuk tim media gereja dengan manajemen lagu, alur pelayanan, dan dukungan presentasi.',
  },
  {
    title: 'Mudah bagi operator',
    description: 'UI ringan dan sinyal rilis yang jelas membantu relawan dan pemimpin ibadah tetap percaya diri setiap pelayanan.',
  },
  {
    title: 'Siap pembaruan dan tangguh',
    description: 'Hosting statis ditambah `latest-version.json` menghadirkan sistem pembaruan desktop andal tanpa kompleksitas backend.',
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
