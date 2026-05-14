import SectionTitle from '../common/SectionTitle'

const screenshotCards = [
  {
    title: 'Song Management',
    description: 'Atur set ibadah dengan daftar putar seret dan lepaskan, metadata lagu, dan pencarian cepat di perpustakaan Anda.',
    features: ['Drag & drop reordering', 'Song metadata editor', 'Quick search & filter', 'Set organization'],
  },
  {
    title: 'Projection Mode',
    description: 'Presentasi layar penuh dengan tampilan lirik bersih, latar belakang gambar, dan transisi mulus untuk ibadah.',
    features: ['Full-screen projection', 'Clean lyrics layout', 'Background images', 'Smooth transitions'],
  },
  {
    title: 'Release & Analytics',
    description: 'Lacak versi aplikasi, lihat pembaruan changelog, dan pantau metrik adopsi publik melalui antarmuka desktop.',
    features: ['Version tracking', 'Changelog viewer', 'Public stats', 'Update notifications'],
  },
]

function ScreenshotsSection() {
  return (
    <section className="mt-20">
      <SectionTitle eyebrow="Screenshots" title="Pratinjau antarmuka aplikasi desktop" />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {screenshotCards.map((card) => (
          <div key={card.title} className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-6 shadow-[0_25px_60px_-45px_rgba(15,23,42,0.9)] transition hover:-translate-y-1">
            <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/90 p-5 shadow-inner">
              <div className="mb-4 flex h-4 items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-500" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <div className="space-y-4">
                {card.title === 'Song Management' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded bg-cyan-500/20 flex items-center justify-center">
                          <span className="text-xs font-bold text-cyan-400">♪</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">Amazing Grace</p>
                          <p className="text-xs text-slate-400">Traditional Hymn</p>
                        </div>
                      </div>
                      <span className="text-xs text-slate-500">4:32</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded bg-emerald-500/20 flex items-center justify-center">
                          <span className="text-xs font-bold text-emerald-400">♪</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">How Great Thou Art</p>
                          <p className="text-xs text-slate-400">Contemporary Worship</p>
                        </div>
                      </div>
                      <span className="text-xs text-slate-500">5:18</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-slate-800/30 p-3 border-2 border-dashed border-slate-600">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded bg-slate-700 flex items-center justify-center">
                          <span className="text-xs text-slate-500">+</span>
                        </div>
                        <p className="text-sm text-slate-500">Add song to set</p>
                      </div>
                    </div>
                  </div>
                )}
                {card.title === 'Projection Mode' && (
                  <div className="space-y-4">
                    <div className="rounded-lg bg-slate-800/30 p-4 text-center">
                      <div className="mb-4 h-32 rounded bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                        <div className="text-center">
                          <p className="text-lg font-bold text-white mb-2">Amazing Grace</p>
                          <p className="text-sm text-slate-300">How sweet the sound</p>
                          <p className="text-sm text-slate-300">That saved a wretch like me</p>
                          <p className="text-sm text-slate-400 mt-2">Verse 1</p>
                        </div>
                      </div>
                      <div className="flex justify-center gap-2">
                        <div className="h-2 w-8 rounded-full bg-cyan-500"></div>
                        <div className="h-2 w-2 rounded-full bg-slate-600"></div>
                        <div className="h-2 w-2 rounded-full bg-slate-600"></div>
                        <div className="h-2 w-2 rounded-full bg-slate-600"></div>
                      </div>
                    </div>
                    <div className="flex justify-center gap-4">
                      <button className="rounded-full bg-slate-700 p-3 text-slate-400 hover:bg-slate-600">
                        <span className="text-lg">⏮</span>
                      </button>
                      <button className="rounded-full bg-cyan-500 p-3 text-white">
                        <span className="text-lg">⏸</span>
                      </button>
                      <button className="rounded-full bg-slate-700 p-3 text-slate-400 hover:bg-slate-600">
                        <span className="text-lg">⏭</span>
                      </button>
                    </div>
                  </div>
                )}
                {card.title === 'Release & Analytics' && (
                  <div className="space-y-3">
                    <div className="rounded-lg bg-slate-800/50 p-3">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm font-medium text-white">Current Version</p>
                        <span className="rounded-full bg-emerald-500/20 px-2 py-1 text-xs text-emerald-400">v1.0.0</span>
                      </div>
                      <p className="text-xs text-slate-400">Latest release: 14 May 2026</p>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-3">
                      <p className="text-sm font-medium text-white mb-2">Public Statistics</p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <p className="text-lg font-bold text-cyan-400">4.8k</p>
                          <p className="text-xs text-slate-400">Installs</p>
                        </div>
                        <div className="text-center">
                          <p className="text-lg font-bold text-emerald-400">127</p>
                          <p className="text-xs text-slate-400">Churches</p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg bg-slate-800/30 p-3 border border-cyan-500/30">
                      <p className="text-xs text-cyan-400">✓ Update available: v1.0.1</p>
                      <button className="mt-2 w-full rounded bg-cyan-500 py-2 text-xs font-medium text-slate-950 hover:bg-cyan-400">
                        Download Update
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <h3 className="mt-5 text-xl font-semibold text-white">{card.title}</h3>
            <p className="mt-3 text-slate-300">{card.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {card.features.map((feature) => (
                <span key={feature} className="rounded-full bg-slate-800/50 px-3 py-1 text-xs text-slate-400">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ScreenshotsSection
