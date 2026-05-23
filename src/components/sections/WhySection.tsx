import SectionTitle from '../common/SectionTitle'
import { motion } from 'framer-motion'
import { Cpu, WifiOff, Zap, Database } from 'lucide-react'

const performanceFactors = [
  {
    title: 'Offline-First Architecture',
    description: 'SION Media beroperasi 100% tanpa bergantung pada koneksi internet. Sangat ideal untuk gereja yang tidak memiliki infrastruktur jaringan.',
    icon: WifiOff
  },
  {
    title: 'Ultra-Low Latency',
    description: 'Dibangun di atas engine React dan Electron yang dioptimalkan, memastikan jeda minimal antara operator menekan "Take" hingga lirik tayang di proyektor.',
    icon: Zap
  },
  {
    title: 'Lightweight & Native',
    description: 'Konsumsi memori yang sangat rendah (<300MB) memungkinkan aplikasi berjalan lancar bahkan di komputer operator spesifikasi menengah ke bawah.',
    icon: Cpu
  },
  {
    title: 'Local Database (SQLite)',
    description: 'Menggunakan SQLite dengan Write-Ahead Logging (WAL) untuk menjamin keamanan data dari korupsi meskipun terjadi mati listrik mendadak.',
    icon: Database
  }
]

function WhySection() {
  return (
    <section className="mt-32">
      <SectionTitle eyebrow="Performance DNA" title="Cepat, Ringan, dan Offline-First" align="center" />
      <p className="mx-auto mt-6 max-w-2xl text-center text-slate-400">
        Keandalan teknis adalah prioritas utama kami. SION Media tidak dirancang untuk memakan resource, melainkan untuk memberikan stabilitas mutlak saat live worship.
      </p>
      
      <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-12">
        {performanceFactors.map((item, index) => (
          <motion.div 
            key={item.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group flex gap-6 rounded-4xl glass-card p-8 transition-all hover:bg-slate-900/60 hover:border-cyan-500/20"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 group-hover:brand-gradient group-hover:text-slate-950 transition-all">
              <item.icon size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default WhySection
