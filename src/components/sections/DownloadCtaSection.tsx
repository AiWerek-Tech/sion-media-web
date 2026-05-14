import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Download, ArrowRight, Code } from 'lucide-react'
import { recordInstallation } from '../../firebase/firestore'

function DownloadCtaSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative mt-32 overflow-hidden rounded-4xl border border-cyan-500/20 bg-slate-900/40 p-10 shadow-premium sm:p-20"
    >
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
          <Download size={32} />
        </div>
        
        <h2 className="mt-8 text-3xl font-bold text-white sm:text-5xl lg:leading-tight">
          Siap meningkatkan kualitas <br />
          <span className="text-gradient">multimedia ibadah Anda?</span>
        </h2>
        
        <p className="mt-6 max-w-2xl text-lg text-slate-400">
          Unduh SION Media sekarang dan rasakan workflow broadcast-grade yang dirancang khusus untuk operator gereja.
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <Link 
            to="/download" 
            onClick={() => recordInstallation()}
            className="group flex items-center gap-2 rounded-full brand-gradient px-10 py-4 text-sm font-bold text-slate-950 transition hover:scale-105"
          >
            Download Latest Release
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <a 
            href="https://github.com/AiWerek-Tech/SION-Media"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/50 px-10 py-4 text-sm font-bold text-white transition hover:border-slate-500 hover:bg-slate-900"
          >
            <Code size={18} />
            Source Code
          </a>
        </div>
        
        <p className="mt-8 text-xs font-bold uppercase tracking-widest text-slate-600">
          Windows 10+ • macOS • Linux
        </p>
      </div>
    </motion.section>
  )
}

export default DownloadCtaSection
