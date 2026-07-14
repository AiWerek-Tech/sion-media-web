import { Monitor, Network, Presentation, ShieldCheck, CheckCircle2, Smartphone } from 'lucide-react'
import { motion } from 'framer-motion'

const requirements = [
  {
    os: 'Komputer operator',
    icon: Monitor,
    min: 'Windows 10 (64-bit)',
    rec: 'Windows 11',
  },
  {
    os: 'Jaringan lokal',
    icon: Network,
    min: 'Wi-Fi/LAN satu jaringan',
    rec: 'LAN gigabit untuk SRT/OBS Live 1080p',
  },
  {
    os: 'Bahan presentasi',
    icon: Presentation,
    min: 'PDF, gambar, video, atau PPTX',
    rec: 'PowerPoint/WPS/LibreOffice untuk konversi terbaik',
  },
  {
    os: 'SION Link Mobile',
    icon: Smartphone,
    min: 'Android 7.0 · ARMv7',
    rec: 'Android modern · ARM64',
  }
]

export function RequirementsSection() {
  return (
    <section className="mt-24">
      <div className="flex flex-col items-center text-center">
        <span className="rounded-full bg-slate-800 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-400">
          Compatibility
        </span>
        <h2 className="mt-4 text-3xl font-bold text-white">Minimum Requirements</h2>
        <p className="mt-4 max-w-2xl text-slate-400">
          SION Media Desktop difokuskan untuk Windows x64; companion mobile alpha mendukung Android 7.0 ke atas. Operasional ibadah dapat berjalan offline melalui jaringan lokal.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {requirements.map((req, index) => (
          <motion.div
            key={req.os}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8"
          >
            <div className="flex items-center gap-3 text-cyan-400">
              <req.icon size={20} />
              <h3 className="font-bold text-white">{req.os}</h3>
            </div>
            
            <div className="mt-6 space-y-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Minimum</p>
                <p className="mt-1 text-sm text-slate-300">{req.min}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Recommended</p>
                <p className="mt-1 text-sm text-cyan-400 font-medium">{req.rec}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 rounded-4xl border border-cyan-500/10 bg-cyan-500/5 p-8">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
            <ShieldCheck size={32} />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white">Release Stability: SION Media Beta Candidate</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              v1.1.0-beta.1 mencakup perubahan besar pada SION Link, Stage Display, impor presentasi, OBS Network Output, dan OBS Live Input. Gunakan pada kegiatan uji coba dengan salinan cadangan materi sebelum rilis stabil 1.0.0.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-[10px] font-bold text-slate-300 border border-slate-800">
              <CheckCircle2 size={12} className="text-cyan-400" />
              Public Beta
            </div>
            <div className="flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-[10px] font-bold text-slate-300 border border-slate-800">
              <CheckCircle2 size={12} className="text-cyan-400" />
              Backup Recommended
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
