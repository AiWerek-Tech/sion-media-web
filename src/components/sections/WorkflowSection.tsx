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
    <section className="mt-32">
      <SectionTitle
        eyebrow="Alur Operasional"
        title="Dari persiapan lagu sampai layar live"
        align="center"
      />
      <p className="mx-auto mt-6 max-w-2xl text-center text-slate-400">
        SION Media membagi pekerjaan operator menjadi langkah yang jelas: siapkan konten, preview,
        tayangkan, lalu rawat data setelah ibadah selesai.
      </p>

      <div className="relative mt-20">
        <div className="absolute top-1/2 left-0 hidden h-0.5 w-full -translate-y-1/2 bg-slate-800 lg:block" />

        <div className="relative z-10 grid gap-8 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.mode}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col items-center text-center"
            >
              <div
                className={`mb-8 flex h-20 w-20 items-center justify-center rounded-2xl ${step.bg} ${step.color} border border-white/5 shadow-2xl transition-transform group-hover:scale-105`}
              >
                <step.icon size={32} />
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 shadow-premium transition hover:border-slate-700">
                <span className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  {step.mode}
                </span>
                <h3 className="mb-4 text-lg font-bold text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{step.desc}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="absolute top-10 -right-4 hidden items-center justify-center text-slate-700 lg:flex">
                  <ArrowRight size={24} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-8 lg:p-12"
      >
        <div className="flex flex-col items-center gap-10 lg:flex-row">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white">Sistem keamanan produksi: Cue ke Take</h3>
            <p className="mt-4 leading-relaxed text-slate-400">
              Operator menyiapkan konten di area{' '}
              <span className="font-bold text-cyan-400">Preview</span>, lalu mengirimnya ke{' '}
              <span className="font-bold text-rose-400">Program</span> hanya saat sudah siap.
              Alur ini menjaga layar jemaat tetap bersih dari kesalahan operator.
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-4">
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-6 py-3 text-sm font-bold text-emerald-400">
              PREVIEW
            </div>
            <ArrowRight className="text-slate-700" />
            <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 px-6 py-3 text-sm font-bold text-rose-400">
              PROGRAM
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default WorkflowSection
