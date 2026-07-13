import { motion } from 'framer-motion'
import { ChevronRight, LockKeyhole, QrCode, Radio, Smartphone, Wifi } from 'lucide-react'
import { Link } from 'react-router-dom'

const capabilities = [
  { icon: QrCode, title: 'QR pairing', text: 'Scan kode role dari SION Media; role dipilih server secara otomatis.' },
  { icon: Radio, title: 'Empat role native', text: 'Presenter, Operator, Live Viewer, dan Stage Display dalam UI mobile khusus.' },
  { icon: LockKeyhole, title: 'Local & secure', text: 'SecureStore, validasi payload, command gating, dan operasi offline melalui LAN.' }
]

export default function MobileCompanionSection() {
  return (
    <section className="mt-20 overflow-hidden rounded-[2rem] border border-emerald-400/15 bg-[radial-gradient(circle_at_15%_10%,rgba(16,185,129,.11),transparent_35%),radial-gradient(circle_at_85%_80%,rgba(34,211,238,.10),transparent_34%),rgba(15,23,42,.45)] p-6 sm:p-9 lg:p-12">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_.82fr]">
        <div>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[10px] font-black uppercase tracking-[.16em] text-emerald-300">New · Android native</span>
            <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-[10px] font-black uppercase tracking-[.16em] text-amber-300">0.1.0-alpha.1 · Internal testing</span>
          </div>
          <h2 className="mt-5 max-w-2xl text-3xl font-black leading-tight tracking-[-.035em] text-white sm:text-4xl">SION Link sekarang hadir sebagai <span className="text-emerald-300">aplikasi Android native.</span></h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">Hubungkan pemateri, operator tambahan, viewer, dan tim panggung tanpa membawa layar kerja desktop. QR menjadi metode utama; input IP dan kode tetap tersedia sebagai fallback.</p>
          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {capabilities.map(({ icon: Icon, title, text }) => <div key={title} className="rounded-2xl border border-slate-800 bg-slate-950/55 p-4"><Icon size={19} className="text-emerald-300"/><h3 className="mt-3 text-sm font-bold text-white">{title}</h3><p className="mt-1.5 text-[11px] leading-5 text-slate-500">{text}</p></div>)}
          </div>
          <Link to="/download" className="mt-7 inline-flex items-center gap-2 text-xs font-black text-emerald-300 transition hover:text-emerald-200">Lihat status distribusi Android <ChevronRight size={15}/></Link>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto w-full max-w-[310px] rounded-[2.8rem] border-[7px] border-slate-800 bg-[#070b14] p-4 shadow-[0_35px_90px_-28px_rgba(16,185,129,.45)]">
          <div className="mx-auto mb-5 h-1.5 w-20 rounded-full bg-slate-700"/>
          <div className="flex items-center gap-2"><div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-600"><Smartphone size={18} className="text-white"/></div><div><div className="text-sm font-black text-white">SION <span className="text-cyan-300">Link</span></div><div className="text-[7px] font-bold uppercase tracking-[.18em] text-slate-500">Mobile companion</div></div></div>
          <div className="mt-6 rounded-full border border-emerald-400/15 bg-emerald-400/[.07] px-3 py-2 text-[8px] font-black uppercase tracking-wider text-emerald-300"><span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400"/>Siap terhubung</div>
          <h3 className="mt-4 text-xl font-black leading-tight text-white">Hubungkan ke <span className="text-cyan-300">SION Media.</span></h3>
          <p className="mt-2 text-[10px] leading-4 text-slate-500">Pilih salah satu metode koneksi.</p>
          <div className="mt-5 rounded-2xl bg-cyan-400 p-4 text-slate-950"><div className="flex items-center gap-3"><div className="rounded-xl bg-slate-950 p-2 text-cyan-300"><QrCode size={22}/></div><div><div className="text-xs font-black">Scan QR koneksi</div><div className="mt-1 text-[8px] font-semibold text-cyan-950">Metode tercepat</div></div></div></div>
          <div className="mt-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-4"><div className="flex items-center gap-3"><div className="rounded-xl bg-blue-500/10 p-2 text-blue-300"><Wifi size={20}/></div><div><div className="text-xs font-bold text-white">Input manual</div><div className="mt-1 text-[8px] text-slate-500">IP · Port · Kode role</div></div></div></div>
          <div className="mt-5 text-center text-[7px] font-bold uppercase tracking-[.15em] text-slate-600">Android 7+ · ARM64 / ARMv7</div>
        </motion.div>
      </div>
    </section>
  )
}
