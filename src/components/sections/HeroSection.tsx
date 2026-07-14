import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Download, MonitorUp, Radio, Smartphone, Wifi } from 'lucide-react'

const highlights = [
  { icon: Wifi, label: 'SION Link', value: 'Auto-discovery LAN' },
  { icon: Radio, label: 'OBS dua arah', value: 'SRT + H.264/AAC' },
  { icon: MonitorUp, label: 'Stage', value: 'Notes & next cue' },
  { icon: Smartphone, label: 'Mobile', value: 'Android native alpha' }
]

function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative overflow-hidden rounded-4xl border border-slate-800 bg-[radial-gradient(circle_at_12%_10%,rgba(34,211,238,.15),transparent_34%),radial-gradient(circle_at_90%_15%,rgba(99,102,241,.14),transparent_32%),#020617] px-5 py-10 sm:px-9 lg:px-12 lg:py-14"
    >
      <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[.92fr_1.08fr]">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-[10px] font-black uppercase tracking-[.16em] text-cyan-300">
              v1.1.0-beta.1
            </span>
            <span className="rounded-full border border-amber-400/20 bg-amber-400/8 px-3 py-1 text-[10px] font-bold uppercase tracking-[.14em] text-amber-300">
              Windows beta · Android alpha
            </span>
          </div>

          <h1 className="mt-6 max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-[-.04em] text-white sm:text-5xl lg:text-6xl">
            Satu sistem untuk{' '}
            <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
              ibadah, panggung, dan broadcast.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            Siapkan lagu, Alkitab, PDF, gambar, atau PowerPoint; tayangkan dengan workflow Preview–Take;
            kontrol melalui SION Link; lalu kirim Program Output ke OBS atau terima OBS Live di semua viewer melalui SRT.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/download"
              className="group inline-flex items-center gap-2 rounded-xl brand-gradient px-5 py-3 text-xs font-black text-slate-950 transition hover:scale-[1.02]"
            >
              <Download size={16} /> Unduh beta Windows
              <ArrowRight size={15} className="transition group-hover:translate-x-1" />
            </Link>
            <Link
              to="/docs"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/70 px-5 py-3 text-xs font-bold text-white transition hover:border-slate-500"
            >
              Panduan mulai cepat
            </Link>
          </div>
        </div>

        <div>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-2 shadow-premium">
            <img
              src={`${import.meta.env.BASE_URL}screenshots/projection-mode.png`}
              alt="Projection Mode SION Media dengan workflow Preview dan Live"
              className="aspect-video w-full rounded-2xl object-cover object-top"
            />
          </div>
          <div className="mt-3 grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
            {highlights.map(({ icon: Icon, label, value }) => (
              <div key={label} className="rounded-xl border border-slate-800 bg-slate-900/65 p-3">
                <div className="flex items-center gap-2 text-cyan-300">
                  <Icon size={14} />
                  <span className="text-[10px] font-black uppercase tracking-wider">{label}</span>
                </div>
                <div className="mt-1 text-[10px] text-slate-400">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default HeroSection
