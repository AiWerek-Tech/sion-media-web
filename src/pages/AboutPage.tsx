import { Link } from 'react-router-dom'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import SectionTitle from '../components/common/SectionTitle'
import { motion } from 'framer-motion'
import { Rocket, Target, Cpu, Share2, Monitor, Zap, Layout, Shield } from 'lucide-react'

function AboutPage() {
  const sections = [
    {
      icon: Target,
      title: 'Visi Produk',
      desc: 'Menjadi standar ekosistem multimedia gereja yang menggabungkan kesederhanaan operasional dengan keandalan broadcast profesional.',
      color: 'text-cyan-400',
      bg: 'bg-cyan-400/10'
    },
    {
      icon: Rocket,
      title: 'Misi Multi-Platform',
      desc: 'Menghadirkan aplikasi desktop asli untuk Windows, macOS, dan Linux tanpa kompromi performa untuk menjangkau setiap pelayan gereja.',
      color: 'text-emerald-400',
      bg: 'bg-emerald-400/10'
    },
    {
      icon: Layout,
      title: '4 Mode Operasi',
      desc: 'Satu aplikasi dengan empat dimensi: Library (Persiapan), Projection (Live), Broadcast (Produksi), dan Management (Admin).',
      color: 'text-violet-400',
      bg: 'bg-violet-400/10'
    },
    {
      icon: Shield,
      title: 'Reliabilitas Tinggi',
      desc: 'Arsitektur offline-first dengan sistem crash recovery otomatis memastikan ibadah tetap berjalan lancar dalam kondisi apapun.',
      color: 'text-amber-400',
      bg: 'bg-amber-400/10'
    },
    {
      icon: Share2,
      title: 'Ekosistem Terhubung',
      desc: 'Integrasi mulus antara aplikasi desktop, portal web untuk rilis terbaru, dan cloud statistik publik untuk visibilitas komunitas.',
      color: 'text-rose-400',
      bg: 'bg-rose-400/10'
    },
    {
      icon: Zap,
      title: 'Teknologi Modern',
      desc: 'Dibangun dengan React, TypeScript, dan Electron untuk pengalaman UI yang premium, cepat, dan mudah dimaintain.',
      color: 'text-sky-400',
      bg: 'bg-sky-400/10'
    }
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="About SION Media" title="Evolusi teknologi pelayanan" align="center" />
        
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, index) => (
            <motion.section 
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-4xl glass-card p-8 transition-all hover:border-slate-700"
            >
              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${section.bg} ${section.color} transition-transform group-hover:scale-110`}>
                <section.icon size={28} />
              </div>
              <h2 className="mt-8 text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{section.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
                {section.desc}
              </p>
            </motion.section>
          ))}
        </div>

        <section className="mt-32 rounded-4xl glass-card p-12 text-center overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-3xl -translate-y-1/2 translate-x-1/2" />
          <SectionTitle eyebrow="Open Source" title="Bergabung dengan Komunitas" align="center" />
          <p className="mx-auto mt-8 max-w-2xl text-slate-400">
            SION Media adalah proyek berbasis komunitas. Kami percaya bahwa teknologi terbaik harus dapat diakses oleh semua gereja. Kami mengundang Anda untuk berkontribusi dalam pengembangan, dokumentasi, maupun masukan fitur.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a 
              href="https://github.com/AiWerek-Tech/SION-Media" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-8 py-4 text-sm font-bold text-white transition hover:border-slate-500 hover:bg-slate-800"
            >
              <Cpu size={18} />
              GitHub Repository
            </a>
            <Link 
              to="/download"
              className="flex items-center gap-2 rounded-2xl brand-gradient px-8 py-4 text-sm font-bold text-slate-950 transition hover:scale-105"
            >
              <Monitor size={18} />
              Try Aurora v3.0
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default AboutPage
