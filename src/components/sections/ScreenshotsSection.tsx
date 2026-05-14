import SectionTitle from '../common/SectionTitle'
import { motion } from 'framer-motion'
import { Play, SkipBack, SkipForward, Music, Activity } from 'lucide-react'

const screenshotCards = [
  {
    id: 'library',
    title: 'Library & Playlist',
    description: 'Kelola database multi-hymnal, susun playlist layanan, dan atur cue dengan drag-and-drop untuk setiap ibadah.',
    features: ['Multi-hymnal support', 'Playlist builder', 'Song metadata', 'Quick filters'],
  },
  {
    id: 'projection',
    title: 'Projection & Preview',
    description: 'Mode proyeksi layar penuh dan preview monitor mendukung presentasi lirik dan ayat Alkitab yang mulus.',
    features: ['Full-screen output', 'Preview/program monitor', 'Background media', 'Live transitions'],
  },
  {
    id: 'analytics',
    title: 'Release & Analytics',
    description: 'Pantau statistik publik dan kelola pembaruan rilis desktop secara otomatis melalui sinkronisasi metadata.',
    features: ['Auto-update check', 'Public statistics', 'Version metadata', 'Release notes'],
  },
]

function ScreenshotsSection() {
  return (
    <section className="mt-32">
      <SectionTitle eyebrow="Screenshots" title="Pratinjau antarmuka aplikasi desktop" align="center" />
      
      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {screenshotCards.map((card, index) => (
          <motion.div 
            key={card.id} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group rounded-4xl glass-card p-2 transition-all hover:border-slate-600"
          >
            <div className="relative overflow-hidden rounded-[calc(2rem-4px)] border border-slate-800 bg-slate-950/90 p-6 shadow-inner">
              {/* Window Controls */}
              <div className="mb-6 flex items-center gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                <div className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
              </div>

              {/* UI Mockup Content */}
              <div className="min-h-[180px]">
                {card.id === 'library' && (
                  <div className="space-y-3">
                    {[
                      { name: 'Amazing Grace', type: 'Traditional', color: 'text-cyan-400', bg: 'bg-cyan-400/10' },
                      { name: 'How Great Thou Art', type: 'Worship', color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
                    ].map((song) => (
                      <div key={song.name} className="flex items-center justify-between rounded-xl bg-slate-900/50 p-3 border border-slate-800/50">
                        <div className="flex items-center gap-3">
                          <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${song.bg} ${song.color}`}>
                            <Music size={14} />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-white">{song.name}</p>
                            <p className="text-[10px] text-slate-500">{song.type}</p>
                          </div>
                        </div>
                        <div className="h-1.5 w-8 rounded-full bg-slate-800" />
                      </div>
                    ))}
                    <div className="flex items-center gap-3 rounded-xl border border-dashed border-slate-800 p-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-slate-600">
                        <span className="text-lg">+</span>
                      </div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-600">Add to Playlist</p>
                    </div>
                  </div>
                )}

                {card.id === 'projection' && (
                  <div className="flex flex-col items-center">
                    <div className="relative w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900 p-4 text-center">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent" />
                      <div className="relative z-10">
                        <p className="text-sm font-bold text-white">Amazing Grace</p>
                        <p className="mt-1 text-[10px] leading-relaxed text-slate-400">
                          How sweet the sound<br />
                          That saved a wretch like me
                        </p>
                        <div className="mt-4 flex justify-center gap-1.5">
                          <div className="h-1 w-4 rounded-full bg-cyan-500" />
                          <div className="h-1 w-1 rounded-full bg-slate-800" />
                          <div className="h-1 w-1 rounded-full bg-slate-800" />
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 flex gap-3">
                      <button className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-slate-500"><SkipBack size={14} /></button>
                      <button className="flex h-10 w-10 items-center justify-center rounded-full brand-gradient text-slate-950"><Play size={18} fill="currentColor" /></button>
                      <button className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-slate-500"><SkipForward size={14} /></button>
                    </div>
                  </div>
                )}

                {card.id === 'analytics' && (
                  <div className="space-y-3">
                    <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-3">
                      <div className="flex items-center justify-between">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Current Build</p>
                        <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-400">v1.0.0</span>
                      </div>
                      <p className="mt-1 text-[10px] text-slate-400">Latest Stable Release</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-3 text-center">
                        <p className="text-lg font-bold text-white">4.8k</p>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Installs</p>
                      </div>
                      <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-3 text-center">
                        <p className="text-lg font-bold text-white">127</p>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Churches</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-3">
                      <div className="flex items-center gap-2 text-cyan-400">
                        <Activity size={12} />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Update Ready</span>
                      </div>
                      <span className="text-[10px] font-bold text-white">v1.0.1</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{card.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {card.features.map((feature) => (
                  <span key={feature} className="rounded-lg bg-slate-900 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 border border-slate-800/50">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default ScreenshotsSection
