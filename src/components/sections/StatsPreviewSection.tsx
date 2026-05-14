import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Activity, ArrowRight } from 'lucide-react'

function StatsPreviewSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-32 rounded-4xl glass-card overflow-hidden"
    >
      <div className="grid gap-0 lg:grid-cols-2 lg:items-center">
        <div className="p-10 sm:p-16">
          <div className="flex items-center gap-3 text-cyan-400">
            <Activity size={20} />
            <p className="text-xs font-bold uppercase tracking-[0.3em]">Transparency</p>
          </div>
          <h2 className="mt-8 text-3xl font-bold leading-tight text-white sm:text-4xl">
            Metrik adopsi publik, <br />
            <span className="text-gradient">dibuat transparan</span>
          </h2>
          <p className="mt-6 leading-relaxed text-slate-400">
            Lihat statistik penggunaan teragregasi yang aman privasi dari ekosistem SION Media. 
            Kami membagikan metrik ini untuk membangun kepercayaan komunitas.
          </p>
          <div className="mt-10">
            <Link 
              to="/statistics" 
              className="group inline-flex items-center gap-2 text-sm font-bold text-white transition hover:text-cyan-400"
            >
              Explore all statistics
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="relative h-full bg-slate-900/50 p-10 sm:p-16 flex flex-col items-center justify-center border-l border-slate-800">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.1),_transparent_70%)]" />
          
          <div className="relative text-center">
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-slate-500">Live Adoption</p>
            <motion.p 
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              className="mt-4 text-7xl font-bold tracking-tighter text-white"
            >
              4.8k
            </motion.p>
            <p className="mt-4 text-sm font-medium text-slate-400">Verified installations worldwide</p>
            
            <div className="mt-10 inline-flex items-center gap-4 rounded-2xl bg-slate-950 p-2 pr-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl brand-gradient text-slate-950">
                <Activity size={20} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-300">Updated Real-time</span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default StatsPreviewSection
