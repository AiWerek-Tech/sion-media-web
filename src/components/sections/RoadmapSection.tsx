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
    <section className="mt-20 rounded-[2rem] border border-slate-800 bg-slate-900/40 p-6 sm:p-8 shadow-[0_35px_80px_-45px_rgba(15,23,42,0.95)]">
      <SectionTitle eyebrow="Roadmap" title="Arah pengembangan SION Media" />
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {roadmapItems.map((item, index) => (
          <div
            key={item.milestone}
            className="flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 shadow-[0_25px_60px_-45px_rgba(15,23,42,0.9)] transition hover:-translate-y-1"
          >
            <div>
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                  Fase 0{index + 1}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
              </div>
              <h3 className="mt-3 text-sm font-bold text-cyan-300 leading-tight">
                {item.milestone}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                {item.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default RoadmapSection
