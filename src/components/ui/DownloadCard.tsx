import { AlertTriangle, Download, ExternalLink, ShieldCheck, MonitorUp, Globe } from 'lucide-react'
import type { LatestVersionData } from '../../types'
import { motion } from 'framer-motion'
import { recordInstallation } from '../../firebase/firestore'

type DownloadCardProps = {
  data: LatestVersionData
}

function DownloadCard({ data }: DownloadCardProps) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-4xl border border-slate-800 bg-slate-900/40 p-8 shadow-premium sm:p-12"
    >
      <div className="flex flex-col gap-8">
        <div className="w-full">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-cyan-400">
              Beta Testing
            </span>
            {data.mandatory && (
              <span className="rounded-full bg-rose-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-rose-400">
                Pembaruan Wajib
              </span>
            )}
          </div>
          
          <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl">
            SION Media <span className="text-cyan-400">v{data.version}</span>
          </h1>
          
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Globe size={16} className="text-slate-500" />
              Rilis: <span className="text-slate-200">{data.releaseDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-emerald-500" />
              Windows x64
            </div>
            <div className="flex items-center gap-2 text-slate-500">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-600 animate-pulse" />
              Linux & macOS: Hadir di versi stabil
            </div>
          </div>


          <div className="mt-8 rounded-2xl border border-slate-800/50 bg-slate-950/50 p-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">Release Notes Summary</h3>
            <div className="mt-4 space-y-2.5 max-h-52 overflow-y-auto scrollbar-thin pr-2">
              {Array.isArray(data.notes) ? data.notes.map((note, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                  <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                  {note}
                </div>
              )) : (
                <p className="text-sm text-slate-300">{data.notes}</p>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-start mt-4 pt-6 border-t border-slate-800/40 w-full">
          <div className="flex flex-1 flex-col sm:flex-row gap-4 w-full">
            <a
              href={data.downloadUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => recordInstallation()}
              className="flex-1 group flex items-center justify-center gap-3 rounded-2xl brand-gradient px-6 py-4.5 text-sm font-bold text-slate-950 transition hover:scale-102"
            >
              <Download size={18} />
              Buka unduhan Windows
            </a>
            
            <a
              href={data.downloadUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-3 rounded-2xl border border-slate-700 bg-slate-950 px-6 py-4.5 text-sm font-bold text-white transition hover:border-slate-500 hover:bg-slate-900"
            >
              <ExternalLink size={18} />
              Lihat GitHub Releases
            </a>
          </div>

          <div className="w-full md:w-80 shrink-0 rounded-2xl border border-amber-400/15 bg-amber-400/[0.05] p-5">
            <div className="flex items-center gap-2 text-amber-300"><AlertTriangle size={15} /><b className="text-xs">Installer beta belum signed</b></div>
            <p className="mt-2 text-[10px] leading-relaxed text-slate-400">Windows SmartScreen dapat meminta konfirmasi. Pastikan file berasal dari halaman GitHub resmi AiWerek Tech.</p>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        <div className="group rounded-3xl border border-slate-800 bg-slate-950/40 p-6 transition hover:border-slate-700">
          <div className="flex items-center gap-3 text-cyan-400">
            <ShieldCheck size={20} />
            <h3 className="text-sm font-bold uppercase tracking-widest">Metadata release</h3>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400 group-hover:text-slate-300">
            Versi terbaru dikelola melalui <code className="text-cyan-400">latest-version.json</code> dan disinkronkan dengan changelog serta artefak GitHub Releases.
          </p>
        </div>
        <div className="group rounded-3xl border border-slate-800 bg-slate-950/40 p-6 transition hover:border-slate-700">
          <div className="flex items-center gap-3 text-cyan-400">
            <MonitorUp size={20} />
            <h3 className="text-sm font-bold uppercase tracking-widest">Kompatibilitas</h3>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400 group-hover:text-slate-300">
            Beta ini ditujukan untuk Windows 10/11 x64. Versi Linux dan macOS dalam tahap perencanaan/pengembangan dan akan hadir resmi pada rilis stabil. Untuk sinkronisasi jaringan, semua perangkat harus berada pada LAN/Wi-Fi yang sama.
          </p>

        </div>
      </div>
    </motion.section>
  )
}

export default DownloadCard
