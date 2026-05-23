import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Download, ArrowRight, Code } from 'lucide-react'
import { recordInstallation } from '../../firebase/firestore'

function DownloadCtaSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative mt-20 overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-900/40 p-6 shadow-premium sm:p-12"
    >
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
 
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
          <Download size={24} />
        </div>
        
        <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl lg:leading-tight">
          Siap meningkatkan kualitas <br />
          <span className="text-gradient">multimedia ibadah Anda?</span>
        </h2>
        
        <p className="mt-3 max-w-2xl text-sm text-slate-400">
          Unduh SION Media sekarang dan rasakan workflow broadcast-grade yang dirancang khusus untuk operator gereja.
        </p>
 
        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row">
          <Link 
            to="/download" 
            onClick={() => recordInstallation()}
            className="group flex items-center gap-2 rounded-full brand-gradient px-6 py-3 text-xs font-bold text-slate-950 transition hover:scale-105"
          >
            Download Latest Release
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
          <a 
            href="https://github.com/AiWerek-Tech/SION-Media"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/50 px-6 py-3 text-xs font-bold text-white transition hover:border-slate-500 hover:bg-slate-900"
          >
            <Code size={16} />
            Source Code
          </a>
        </div>
        
        <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-slate-600">
          Windows 10+ • macOS • Linux
        </p>
      </div>
    </motion.section>
  )
}

export default DownloadCtaSection
