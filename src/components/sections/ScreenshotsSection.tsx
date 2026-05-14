import SectionTitle from '../common/SectionTitle'
import { motion } from 'framer-motion'
import { Monitor, Music, BookOpen, Settings, Zap, PlayCircle } from 'lucide-react'

const screenshotCards = [
  {
    id: 'library',
    title: 'Library Mode',
    image: 'screenshots/library.png',
    description: 'Pusat manajemen konten ibadah. Cari lagu, kelola database multi-hymnal, dan bangun playlist persiapan dengan cepat.',
    icon: Music,
    features: ['Pencarian FTS5', 'Multi-Hymnal', 'Playlist Builder', 'Metadata Editor'],
  },
  {
    id: 'projection',
    title: 'Projection Mode',
    image: 'screenshots/projection.png',
    description: 'Antarmuka kontrol live. Audience hanya melihat tayangan yang masuk ke Program Deck melalui transisi yang halus.',
    icon: Monitor,
    features: ['Cue-Take System', 'Live Transitions', 'Output States', 'Theme Engine'],
  },
  {
    id: 'broadcast',
    title: 'Broadcast Mode',
    image: 'screenshots/broadcast.png',
    description: 'Dashboard produksi tingkat lanjut untuk streaming dan integrasi layar LED dengan dukungan monitor multi-output.',
    icon: Zap,
    features: ['NDI Output', 'Alpha Keying', 'Multi-Monitor', 'Stage Display Sync'],
  },
]

const secondaryScreenshots = [
  {
    title: 'Management Mode',
    image: 'screenshots/editor.png',
    description: 'Pusat kendali ekosistem untuk backup data, impor lagu massal dari Excel/JSON, dan konfigurasi perangkat keras.',
    icon: Settings
  },
  {
    title: 'Bible Integration',
    image: 'screenshots/bible.png',
    description: 'Modul Alkitab terintegrasi untuk pencarian ayat instan dan pembuatan slide Alkitab secara otomatis saat ibadah.',
    icon: BookOpen
  }
]

function ScreenshotsSection() {
  return (
    <section className="mt-32">
      <SectionTitle eyebrow="Integrated Experience" title="Satu aplikasi, empat dimensi pelayanan" align="center" />
      <p className="mx-auto mt-6 max-w-2xl text-center text-slate-400">
        SION Media dirancang untuk menangani seluruh spektrum multimedia gereja, mulai dari persiapan konten hingga produksi live profesional.
      </p>
      
      {/* Primary Grid */}
      <div className="mt-20 grid gap-8 lg:grid-cols-3">
        {screenshotCards.map((card, index) => (
          <motion.div 
            key={card.id} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group flex flex-col rounded-4xl glass-card overflow-hidden transition-all hover:border-cyan-500/30"
          >
            {/* Screenshot Frame */}
            <div className="relative aspect-video overflow-hidden bg-slate-900 border-b border-slate-800">
              <img 
                src={`${import.meta.env.BASE_URL}${card.image}`} 
                alt={card.title} 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
              
              {/* Play Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400 backdrop-blur-md">
                  <PlayCircle size={32} />
                </div>
              </div>

              {/* Icon Badge */}
              <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950/80 text-cyan-400 backdrop-blur-md border border-slate-800">
                <card.icon size={20} />
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                {card.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                {card.description}
              </p>
              
              <div className="mt-8 flex flex-wrap gap-2">
                {card.features.map((feature) => (
                  <span key={feature} className="rounded-lg bg-slate-950 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 border border-slate-800/50">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Secondary Row */}
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {secondaryScreenshots.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="group relative h-64 overflow-hidden rounded-4xl border border-slate-800 bg-slate-900"
          >
            <img 
              src={`${import.meta.env.BASE_URL}${card.image}`} 
              alt={card.title} 
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-40 group-hover:opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent" />
            
            <div className="absolute inset-y-0 left-0 flex w-2/3 flex-col justify-center p-8 sm:p-12">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 mb-6">
                <card.icon size={20} />
              </div>
              <h3 className="text-2xl font-bold text-white">{card.title}</h3>
              <p className="mt-4 text-sm text-slate-400 line-clamp-2">
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default ScreenshotsSection
