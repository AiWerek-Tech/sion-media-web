import SectionTitle from '../common/SectionTitle'
import { motion } from 'framer-motion'
import { ArrowRight, Database, Monitor, Zap, ShieldCheck } from 'lucide-react'

const steps = [
  {
    mode: 'Library Mode',
    title: '1. Persiapan Konten',
    desc: 'Operator menyusun playlist, mencari lagu dari berbagai Hymnal, dan menyiapkan ayat Alkitab dalam hitungan detik.',
    icon: Database,
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10'
  },
  {
    mode: 'Projection Mode',
    title: '2. Eksekusi Live',
    desc: 'Melalui sistem Cue → Take, operator mengontrol apa yang tampil di layar utama tanpa risiko kesalahan tayang.',
    icon: Monitor,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10'
  },
  {
    mode: 'Broadcast Mode',
    title: '3. Produksi & Streaming',
    desc: 'Output dikirim ke streaming via NDI atau Alpha Keying, sementara musisi melihat panduan di Stage Display.',
    icon: Zap,
    color: 'text-violet-400',
    bg: 'bg-violet-400/10'
  },
  {
    mode: 'Management Mode',
    title: '4. Kontrol Ekosistem',
    desc: 'Seluruh data di-backup otomatis, database dipelihara, dan performa sistem diawasi secara real-time.',
    icon: ShieldCheck,
    color: 'text-amber-400',
    bg: 'bg-amber-400/10'
  }
]

function WorkflowSection() {
  return (
    <section className="mt-32">
      <SectionTitle eyebrow="The Operational Flow" title="Alur Kerja Profesional SION Media" align="center" />
      <p className="mx-auto mt-6 max-w-2xl text-center text-slate-400">
        Dirancang untuk kecepatan dan keamanan operasional, SION Media membagi alur kerja multimedia menjadi empat dimensi yang saling terhubung.
      </p>

      <div className="mt-20 relative">
        {/* Connection Line (Desktop) */}
        <div className="absolute top-1/2 left-0 hidden h-0.5 w-full -translate-y-1/2 bg-slate-800 lg:block" />

        <div className="grid gap-8 lg:grid-cols-4 relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.mode}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col items-center text-center"
            >
              <div className={`flex h-20 w-20 items-center justify-center rounded-3xl ${step.bg} ${step.color} border border-white/5 shadow-2xl transition-transform group-hover:scale-110 mb-8`}>
                <step.icon size={32} />
              </div>

              <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6 shadow-premium transition hover:border-slate-700">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 block">
                  {step.mode}
                </span>
                <h3 className="text-lg font-bold text-white mb-4">{step.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  {step.desc}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="absolute top-10 -right-4 hidden lg:flex items-center justify-center text-slate-700">
                  <ArrowRight size={24} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Broadcast Paradigm Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 rounded-4xl border border-cyan-500/20 bg-cyan-500/5 p-8 lg:p-12"
      >
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white">Sistem Keamanan Produksi: Cue → Take</h3>
            <p className="mt-4 text-slate-400 leading-relaxed">
              SION Media mengadopsi paradigma broadcast profesional. Anda menyiapkan konten di area <span className="text-cyan-400 font-bold">PREVIEW (Cue)</span>, lalu menekannya ke <span className="text-rose-400 font-bold">LIVE (Program)</span> hanya saat sudah benar-benar siap. Kesalahan tayang di depan jemaat kini dapat diminimalisir sepenuhnya.
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-4">
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-6 py-3 text-sm font-bold text-emerald-400">PREVIEW</div>
            <ArrowRight className="text-slate-700" />
            <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 px-6 py-3 text-sm font-bold text-rose-400 animate-pulse">PROGRAM</div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default WorkflowSection
