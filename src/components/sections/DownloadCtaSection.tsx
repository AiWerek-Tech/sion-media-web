import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Download, Monitor, Laptop, Smartphone, ExternalLink, ArrowRight } from 'lucide-react'
import { recordInstallation } from '../../firebase/firestore'

function DownloadCtaSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative mt-20 overflow-hidden rounded-4xl border border-slate-800 bg-slate-900/20 p-8 shadow-premium sm:p-12"
    >
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />
 
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
          <Download size={24} />
        </div>
        
        <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl">
          Unduh Ekosistem <span className="text-gradient">SION Media</span>
        </h2>
        
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400">
          Unduh masing-masing komponen aplikasi nirkabel SION Media untuk PC operator utama, laptop podium pemateri, dan ponsel Android tester.
        </p>

        {/* 3 Download Cards Grid */}
        <div className="mt-10 grid gap-6 w-full max-w-4xl sm:grid-cols-3">
          
          {/* Card 1: SION Media */}
          <div className="flex flex-col justify-between rounded-3xl border border-cyan-500/15 bg-slate-950/45 p-6 transition hover:border-cyan-500/35">
            <div className="text-left">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                <Monitor size={20} />
              </div>
              <h3 className="mt-4 text-base font-bold text-white">SION Media Desktop</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                Aplikasi utama untuk server operator: lirik, Alkitab, mixed rundown, OBS input/output, dan media.
              </p>
            </div>
            <Link
              to="/download"
              onClick={() => recordInstallation()}
              className="mt-6 group flex items-center justify-center gap-2 rounded-xl brand-gradient px-4 py-2.5 text-xs font-black text-slate-950 transition hover:scale-[1.02]"
            >
              Unduh Installer
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Card 2: SION Link Desktop */}
          <div className="flex flex-col justify-between rounded-3xl border border-indigo-500/15 bg-slate-950/45 p-6 transition hover:border-indigo-500/35">
            <div className="text-left">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                <Laptop size={20} />
              </div>
              <h3 className="mt-4 text-base font-bold text-white">SION Link Desktop</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                Companion nirkabel laptop pemateri untuk PowerPoint Bridge Phase 2 (kontrol dua arah & kompresi slide).
              </p>
            </div>
            <a
              href="https://github.com/AiWerek-Tech/sion-link-desktop/releases"
              target="_blank"
              rel="noreferrer"
              className="mt-6 flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/50 px-4 py-2.5 text-xs font-bold text-white transition hover:border-slate-500 hover:bg-slate-900"
            >
              Rilis Desktop <ExternalLink size={12} />
            </a>
          </div>

          {/* Card 3: SION Link Mobile */}
          <div className="flex flex-col justify-between rounded-3xl border border-emerald-500/15 bg-slate-950/45 p-6 transition hover:border-emerald-500/35">
            <div className="text-left">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                <Smartphone size={20} />
              </div>
              <h3 className="mt-4 text-base font-bold text-white">SION Link Mobile</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                Aplikasi Android native untuk QR pairing, presenter slide, Stage Display, kord musik, dan OBS Live player.
              </p>
            </div>
            <a
              href="https://github.com/AiWerek-Tech/sion-link-mobile/releases"
              target="_blank"
              rel="noreferrer"
              className="mt-6 flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/50 px-4 py-2.5 text-xs font-bold text-white transition hover:border-slate-500 hover:bg-slate-900"
            >
              Rilis Mobile <ExternalLink size={12} />
            </a>
          </div>

        </div>

        <p className="mt-8 text-[10px] font-bold uppercase tracking-widest text-slate-600">
          Windows 10/11 x64 · Android 7+ · Linux & macOS hadir di versi stabil
        </p>
      </div>
    </motion.section>
  )
}

export default DownloadCtaSection
