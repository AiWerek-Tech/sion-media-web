import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import SectionTitle from '../components/common/SectionTitle'
import { motion } from 'framer-motion'
import { Rocket, Target, Cpu, Share2, RefreshCw, Zap } from 'lucide-react'

function AboutPage() {
  const sections = [
    {
      icon: Target,
      title: 'Visi Proyek',
      desc: 'Menjadi portal resmi bagi aplikasi desktop SION Media sebagai workflow multimedia gereja yang menggabungkan library Lagu Sion, stage display, dan proyeksi live.',
      color: 'text-cyan-400',
      bg: 'bg-cyan-400/10'
    },
    {
      icon: Rocket,
      title: 'Misi',
      desc: 'Menjadi hub yang menghubungkan pengguna desktop dengan rilis terbaru, changelog, dokumentasi teknis, dan statistik publik tanpa menambahkan kompleksitas backend.',
      color: 'text-emerald-400',
      bg: 'bg-emerald-400/10'
    },
    {
      icon: Cpu,
      title: 'Teknologi Modern',
      desc: 'Dibangun dengan Vite, React 19, dan Tailwind CSS 4 untuk performa maksimal dan kemudahan hosting statis.',
      color: 'text-violet-400',
      bg: 'bg-violet-400/10'
    },
    {
      icon: Share2,
      title: 'Arsitektur Terdistribusi',
      desc: 'Website statis melayani rilis desktop, menyediakan metadata update, dan memvisualisasikan statistik publik serta dokumentasi integrasi.',
      color: 'text-amber-400',
      bg: 'bg-amber-400/10'
    },
    {
      icon: RefreshCw,
      title: 'Otomasi Rilis',
      desc: 'Metadata latest-version.json mendukung deteksi versi dan unduhan rilis otomatis langsung dari aplikasi desktop Electron.',
      color: 'text-rose-400',
      bg: 'bg-rose-400/10'
    },
    {
      icon: Zap,
      title: 'Ecosystem SION',
      desc: 'Satu ekosistem terpadu yang menghubungkan Aplikasi Desktop, Cloud Firebase, dan Portal Web ini.',
      color: 'text-sky-400',
      bg: 'bg-sky-400/10'
    }
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="About Ecosystem" title="Fondasi arsitektur SION Media" align="center" />
        
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

        <section className="mt-32 rounded-4xl glass-card p-12 text-center">
          <SectionTitle eyebrow="Open Source" title="Bergabung dengan Komunitas" align="center" />
          <p className="mx-auto mt-8 max-w-2xl text-slate-400">
            SION Media dikembangkan dengan semangat transparansi. Kami mengundang developer dan tim multimedia gereja untuk berkontribusi dalam dokumentasi, pelaporan bug, atau pengembangan fitur.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a 
              href="https://github.com/AiWerek-Tech/SION-Media" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-8 py-4 text-sm font-bold text-white transition hover:border-slate-500 hover:bg-slate-800"
            >
              GitHub Repository
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default AboutPage
