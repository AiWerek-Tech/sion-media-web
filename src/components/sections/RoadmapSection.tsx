import SectionTitle from '../common/SectionTitle'

const roadmapItems = [
  {
    milestone: 'Peluncuran fondasi',
    detail: 'Luncurkan pengalaman website, portal unduhan, dan alur metadata rilis untuk pengguna desktop.',
  },
  {
    milestone: 'Penyempurnaan desktop',
    detail: 'Tambahkan pratinjau aplikasi yang lebih solid, layar fokus presentasi, dan pengalaman operator ibadah ringan.',
  },
  {
    milestone: 'Kepercayaan publik',
    detail: 'Tampilkan metrik adopsi melalui Firestore dan pertahankan transparansi pembaruan dengan riwayat changelog.',
  },
  {
    milestone: 'Skala masa depan',
    detail: 'Siapkan platform untuk dukungan offline lebih baik, sinkron editor, dan adopsi tim gereja yang lebih luas.',
  },
]

function RoadmapSection() {
  return (
    <section className="mt-20 rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 shadow-[0_35px_80px_-45px_rgba(15,23,42,0.95)] animate-[fade-in_0.7s_ease-out_0.15s_forwards]">
      <SectionTitle eyebrow="Roadmap" title="Arah pengembangan SION Media" />
      <div className="mt-10 space-y-4">
        {roadmapItems.map((item) => (
          <div key={item.milestone} className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-[0_25px_60px_-45px_rgba(15,23,42,0.9)] transition hover:-translate-y-1">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">{item.milestone}</p>
            <p className="mt-3 text-slate-300">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default RoadmapSection
