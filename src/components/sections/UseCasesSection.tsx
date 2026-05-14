import SectionTitle from '../common/SectionTitle'
import { motion } from 'framer-motion'
import { Users, Video, Music2, Share2, Shield } from 'lucide-react'

const useCases = [
  {
    title: 'Worship Operators',
    desc: 'Untuk operator yang membutuhkan kecepatan pencarian lagu dan kemudahan proyeksi ayat Alkitab tanpa mengganggu jalannya ibadah.',
    icon: Users,
  },
  {
    title: 'Church Media Teams',
    desc: 'Alur kerja terstruktur untuk tim multimedia yang mengelola banyak layar (Operator, Audience, Stage Display) secara sinkron.',
    icon: Video,
  },
  {
    title: 'Livestream Ministry',
    desc: 'Integrasi NDI dan Alpha Keying memudahkan pengiriman lirik sebagai overlay ke OBS atau vMix tanpa hardware tambahan.',
    icon: Share2,
  },
  {
    title: 'Worship Leaders & Singers',
    desc: 'Stage Display memberikan panduan lirik dan chord yang jelas, membantu tim musik tetap fokus pada penyembahan.',
    icon: Music2,
  },
  {
    title: 'IT & Administrators',
    desc: 'Manajemen database yang tangguh dengan fitur backup otomatis dan pemeliharaan data multi-hymnal yang terpusat.',
    icon: Shield,
  }
]

function UseCasesSection() {
  return (
    <section className="mt-32">
      <SectionTitle eyebrow="Tailored For Ministry" title="Dirancang untuk setiap aspek pelayanan" align="center" />
      
      <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {useCases.map((useCase, index) => (
          <motion.div
            key={useCase.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group rounded-3xl border border-slate-800 bg-slate-900/20 p-8 transition-all hover:border-slate-700 hover:bg-slate-900/40"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-cyan-400 group-hover:brand-gradient group-hover:text-slate-950 transition-colors">
              <useCase.icon size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-4">{useCase.title}</h3>
            <p className="text-sm leading-relaxed text-slate-500 group-hover:text-slate-400 transition-colors">
              {useCase.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default UseCasesSection
