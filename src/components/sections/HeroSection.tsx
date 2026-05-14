import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Download, Activity, ArrowRight, Zap, Shield, Layout } from 'lucide-react'

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
      className="relative overflow-hidden rounded-4xl border border-slate-800 bg-slate-900/40 px-6 py-20 shadow-premium sm:px-10 lg:px-16"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 h-[500px] w-[500px] bg-cyan-500/10 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] bg-sky-500/10 blur-[100px] rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 text-xs font-medium tracking-wider text-cyan-400 uppercase">
          <Zap size={14} />
          Ecosystem Presentation System
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="mt-8 text-4xl font-bold leading-[1.1] text-white sm:text-6xl lg:text-7xl">
          Professional worship <br />
          <span className="text-gradient">presentation system</span>
        </motion.h1>
        
        <motion.p variants={itemVariants} className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
          SION Media adalah platform broadcast-style untuk manajemen lirik, 
          proyeksi multi-monitor, dan sinkronisasi metadata ibadah secara profesional.
        </motion.p>
        
        <motion.div variants={itemVariants} className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <Link to="/download" className="group flex items-center gap-2 rounded-full brand-gradient px-8 py-4 text-sm font-bold text-slate-950 transition hover:scale-105 active:scale-95">
            <Download size={18} />
            Download Latest Release
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link to="/statistics" className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/50 px-8 py-4 text-sm font-bold text-white transition hover:border-slate-500 hover:bg-slate-900">
            <Activity size={18} />
            View Public Statistics
          </Link>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-20 grid gap-6 sm:grid-cols-3">
          {[
            { 
              icon: Layout, 
              label: 'Desktop-Ready', 
              value: 'Kontrol proyektor dan live preview dengan UI broadcast-grade.' 
            },
            { 
              icon: Zap, 
              label: 'Ultra-Fast', 
              value: 'Pencarian FTS5 dan rendering virtualized untuk ribuan lagu.' 
            },
            { 
              icon: Shield, 
              label: 'Enterprise-Grade', 
              value: 'Sistem proteksi runtime dan manajemen metadata terpusat.' 
            },
          ].map((item) => (
            <div key={item.label} className="group rounded-3xl border border-slate-800 bg-slate-950/50 p-6 text-left transition hover:border-slate-600 hover:bg-slate-900/80">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-800 bg-slate-900 text-cyan-400 transition group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10">
                <item.icon size={20} />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">{item.label}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400 group-hover:text-slate-300">{item.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default HeroSection
