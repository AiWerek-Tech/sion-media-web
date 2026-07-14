import { motion } from 'framer-motion'
import { ArrowRight, Cable, CheckCircle2, MonitorPlay, Radio, Smartphone, Volume2, Wifi } from 'lucide-react'
import { Link } from 'react-router-dom'

const setupSteps = [
  'Aktifkan OBS Live Input di Pengaturan SION Link.',
  'Salin URL Publisher ke OBS: Settings → Stream → Custom.',
  'Gunakan video H.264, audio AAC 48 kHz, lalu Start Streaming.',
  'SION Link berpindah ke OBS Live secara otomatis.'
]

export default function ObsLiveInputSection() {
  return (
    <section className="mt-20 overflow-hidden rounded-[2rem] border border-violet-400/20 bg-[radial-gradient(circle_at_88%_10%,rgba(139,92,246,.16),transparent_32%),radial-gradient(circle_at_10%_95%,rgba(34,211,238,.10),transparent_34%),rgba(15,23,42,.46)] p-6 sm:p-9 lg:p-12">
      <div className="flex flex-col gap-10 xl:flex-row xl:items-start xl:justify-between">
        <div className="max-w-2xl">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-violet-400/25 bg-violet-400/10 px-3 py-1 text-[10px] font-black uppercase tracking-[.16em] text-violet-300">Baru · OBS Live Input</span>
            <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[10px] font-black uppercase tracking-[.16em] text-emerald-300">Video + audio</span>
          </div>
          <h2 className="mt-5 text-3xl font-black leading-tight tracking-[-.035em] text-white sm:text-4xl">
            Kirim live dari OBS ke <span className="text-violet-300">semua SION Link.</span>
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-400">
            OBS mengirim satu stream SRT ke SION Media. Gateway lokal kemudian menyiapkannya untuk SION Link Desktop dan Android, lengkap dengan audio, reconnect, dan fallback otomatis ke Program Output.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {setupSteps.map((step, index) => (
              <div key={step} className="flex gap-3 rounded-2xl border border-slate-800 bg-slate-950/55 p-4">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-violet-400/10 text-[10px] font-black text-violet-300">{index + 1}</div>
                <p className="text-xs leading-5 text-slate-400">{step}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[11px] font-semibold text-slate-400">
            <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-400" /> FFmpeg & MediaMTX sudah dibundel</span>
            <span className="flex items-center gap-2"><Volume2 size={14} className="text-cyan-400" /> AAC ikut sampai viewer</span>
            <span className="flex items-center gap-2"><Wifi size={14} className="text-amber-300" /> Berjalan di LAN tanpa internet</span>
          </div>

          <Link to="/docs" className="mt-7 inline-flex items-center gap-2 text-xs font-black text-violet-300 transition hover:text-violet-200">
            Buka panduan OBS lengkap <ArrowRight size={15} />
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-xl rounded-3xl border border-slate-700/70 bg-slate-950/75 p-5 shadow-[0_30px_90px_-35px_rgba(139,92,246,.55)] sm:p-7"
        >
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <div className="text-[9px] font-black uppercase tracking-[.18em] text-slate-500">Arsitektur jaringan lokal</div>
              <div className="mt-1 text-sm font-bold text-white">Satu publisher, banyak viewer</div>
            </div>
            <span className="flex items-center gap-2 rounded-full bg-rose-400/10 px-3 py-1.5 text-[9px] font-black uppercase tracking-wider text-rose-300"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-rose-400" /> Live</span>
          </div>

          <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <div className="flex-1 rounded-2xl border border-violet-400/20 bg-violet-400/[.07] p-4">
              <Radio size={20} className="text-violet-300" />
              <div className="mt-3 text-xs font-black text-white">OBS Studio</div>
              <div className="mt-1 text-[9px] text-slate-500">H.264 + AAC melalui SRT</div>
            </div>
            <ArrowRight className="mx-auto rotate-90 text-slate-600 sm:rotate-0" size={17} />
            <div className="flex-1 rounded-2xl border border-cyan-400/20 bg-cyan-400/[.07] p-4">
              <Cable size={20} className="text-cyan-300" />
              <div className="mt-3 text-xs font-black text-white">SION Media</div>
              <div className="mt-1 text-[9px] text-slate-500">SRT gateway · LL-HLS · WHEP</div>
            </div>
          </div>

          <div className="my-3 flex justify-center"><ArrowRight className="rotate-90 text-slate-600" size={17} /></div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-indigo-400/20 bg-indigo-400/[.06] p-4">
              <MonitorPlay size={19} className="text-indigo-300" />
              <div className="mt-3 text-xs font-black text-white">SION Link Desktop</div>
              <div className="mt-1 text-[9px] text-slate-500">Viewer · Presenter · Operator · Stage</div>
            </div>
            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/[.06] p-4">
              <Smartphone size={19} className="text-emerald-300" />
              <div className="mt-3 text-xs font-black text-white">SION Link Mobile</div>
              <div className="mt-1 text-[9px] text-slate-500">Pemutar native · reconnect otomatis</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
