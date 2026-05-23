import SectionTitle from '../common/SectionTitle'
import { motion } from 'framer-motion'
import { ArrowRight, Database, Monitor, ShieldCheck, Zap } from 'lucide-react'

const steps = [
  {
    mode: 'Library Mode',
    title: '1. Persiapan Konten',
    desc: 'Operator menyusun playlist, mencari lagu dari berbagai hymnal, dan menyiapkan ayat Alkitab dalam hitungan detik.',
    icon: Database,
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10'
  },
  {
    mode: 'Projection Mode',
    title: '2. Eksekusi Live',
    desc: 'Melalui sistem Cue dan Take, operator mengontrol apa yang tampil di layar utama tanpa risiko kesalahan tayang.',
    icon: Monitor,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10'
  },
  {
    mode: 'Broadcast Beta',
    title: '3. Persiapan Streaming',
    desc: 'Mode broadcast disiapkan sebagai roadmap integrasi streaming, sementara workflow live utama tetap berjalan lewat Projection Mode.',
    icon: Zap,
    color: 'text-violet-400',
    bg: 'bg-violet-400/10'
  },
  {
    mode: 'Management Mode',
    title: '4. Kontrol Ekosistem',
    desc: 'Data di-backup, database dipelihara, dan konfigurasi media dikelola dari satu ruang kerja operasional.',
    icon: ShieldCheck,
    color: 'text-amber-400',
    bg: 'bg-amber-400/10'
  }
]

function WorkflowSection() {
  return (
    <section className="mt-20">
      <SectionTitle
        eyebrow="Alur Operasional"
        title="Dari persiapan lagu sampai layar live"
        align="center"
      />
      <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-slate-400">
        SION Media membagi pekerjaan operator menjadi langkah yang jelas: siapkan konten, preview,
        tayangkan, lalu rawat data setelah ibadah selesai.
      </p>

      <div className="mt-12">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.mode}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/30 p-5 shadow-premium transition hover:border-slate-700 hover:bg-slate-900/50">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${step.bg} ${step.color} border border-white/5 transition-transform group-hover:scale-105`}
                  >
                    <step.icon size={18} />
                  </div>
                  <div>
                    <span className="block text-[9px] font-semibold uppercase tracking-widest text-slate-500">
                      {step.mode}
                    </span>
                    <h3 className="text-sm font-bold text-white leading-tight mt-0.5">{step.title}</h3>
                  </div>
                </div>
                <p className="text-xs leading-relaxed text-slate-400">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-10 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6 lg:p-8"
      >
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-xl font-bold text-white">Sistem keamanan produksi: Cue ke Take</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Operator menyiapkan konten di area{' '}
              <span className="font-bold text-cyan-400">Preview</span>, lalu mengirimnya ke{' '}
              <span className="font-bold text-rose-400">Program</span> hanya saat sudah siap.
              Alur ini menjaga layar jemaat tetap bersih dari kesalahan operator.
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-5 py-2.5 text-xs font-bold text-emerald-400">
              PREVIEW
            </div>
            <ArrowRight className="text-slate-700" size={16} />
            <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 px-5 py-2.5 text-xs font-bold text-rose-400">
              PROGRAM
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default WorkflowSection
