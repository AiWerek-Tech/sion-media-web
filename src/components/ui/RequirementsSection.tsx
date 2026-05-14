import { Monitor, Cpu, HardDrive, ShieldCheck, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

const requirements = [
  {
    os: 'Windows',
    icon: Monitor,
    min: 'Windows 10 (64-bit)',
    rec: 'Windows 11',
  },
  {
    os: 'macOS',
    icon: Cpu,
    min: 'macOS 12 (Monterey)',
    rec: 'macOS 14 (Sonoma) - Apple Silicon',
  },
  {
    os: 'Linux',
    icon: HardDrive,
    min: 'Ubuntu 22.04+, Fedora 38+',
    rec: 'Distribusi dengan AppImage support',
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
          SION Media dioptimalkan untuk berjalan pada hardware standar operator multimedia gereja.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
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

      <div className="mt-12 rounded-4xl border border-emerald-500/10 bg-emerald-500/5 p-8">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">
            <ShieldCheck size={32} />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white">Release Stability: "Aurora"</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Setiap rilis v3.x telah melalui pengujian internal untuk memastikan stabilitas database SQLite dan performa output Dual-Screen. 
              Kami merekomendasikan penggunaan versi stabil untuk kebutuhan ibadah live.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-[10px] font-bold text-slate-300 border border-slate-800">
              <CheckCircle2 size={12} className="text-emerald-400" />
              Verified Build
            </div>
            <div className="flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-[10px] font-bold text-slate-300 border border-slate-800">
              <CheckCircle2 size={12} className="text-emerald-400" />
              Production Ready
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
