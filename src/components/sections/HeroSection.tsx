import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Cpu, Download, Layout, Monitor, PlayCircle } from 'lucide-react'

function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative overflow-hidden border-b border-slate-800 bg-slate-950 px-6 py-14 sm:px-10 lg:px-16"
    >
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <motion.div
            variants={itemVariants}
            className="inline-flex flex-wrap items-center gap-3 rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-xs font-bold uppercase tracking-wider text-cyan-300"
          >
            <div className="flex items-center gap-2 border-r border-cyan-500/20 pr-3">
              <Monitor size={14} />
              Windows
            </div>
            <div className="flex items-center gap-2 border-r border-cyan-500/20 pr-3">
              <Cpu size={14} />
              macOS
            </div>
            <div className="flex items-center gap-2">
              <Layout size={14} />
              Linux
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mt-8 max-w-3xl text-4xl font-bold leading-[1.05] text-white sm:text-6xl"
          >
            SION Media
            <span className="mt-3 block text-cyan-300">
              presentasi ibadah yang siap dipakai live
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-400"
          >
            Kelola lagu, susun playlist, siapkan Preview, lalu kirim ke layar jemaat melalui alur
            Cue, Take, dan Program. Fokus utamanya adalah operator gereja yang butuh kontrol jelas,
            cepat, dan stabil saat ibadah berlangsung.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/download"
              className="group inline-flex items-center justify-center gap-2 rounded-xl brand-gradient px-6 py-4 text-sm font-bold text-slate-950 transition hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download size={18} />
              Unduh aplikasi desktop
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/docs"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-6 py-4 text-sm font-bold text-white transition hover:border-slate-500 hover:bg-slate-800"
            >
              <PlayCircle size={18} />
              Lihat alur kerja
            </Link>
          </motion.div>

        </div>

        <motion.div variants={itemVariants} className="relative">
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-premium">
            <img
              src={`${import.meta.env.BASE_URL}screenshots/projection-mode.png`}
              alt="Tampilan Projection Mode SION Media"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3 text-xs font-semibold text-slate-400">
            <span className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-3 py-2 text-emerald-300">
              Preview siap
            </span>
            <span className="rounded-lg border border-cyan-500/20 bg-cyan-500/10 px-3 py-2 text-cyan-300">
              Take terkontrol
            </span>
            <span className="rounded-lg border border-rose-500/20 bg-rose-500/10 px-3 py-2 text-rose-300">
              Status jelas
            </span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default HeroSection
