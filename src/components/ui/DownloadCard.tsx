import { Download, ExternalLink, ShieldCheck, Cpu, Terminal, Globe } from 'lucide-react'
import type { LatestVersionData } from '../../types'
import { motion } from 'framer-motion'

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
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-cyan-400">
              Latest Stable Release
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
              Verified Build
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-800/50 bg-slate-950/50 p-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">Release Notes Summary</h3>
            <div className="mt-4 space-y-2">
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

        <div className="flex w-full flex-col gap-4 lg:w-auto lg:shrink-0">
          <a
            href={data.downloadUrl}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-center gap-3 rounded-2xl brand-gradient px-8 py-5 text-sm font-bold text-slate-950 transition hover:scale-105"
          >
            <Download size={20} />
            Download for Windows (x64)
          </a>
          
          <a
            href={data.downloadUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-3 rounded-2xl border border-slate-700 bg-slate-950 px-8 py-5 text-sm font-bold text-white transition hover:border-slate-500 hover:bg-slate-900"
          >
            <ExternalLink size={20} />
            View all platforms on GitHub
          </a>

          <div className="mt-4 rounded-2xl bg-slate-900/50 p-5 text-center">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Other Platforms</p>
            <div className="mt-3 flex justify-center gap-6 text-slate-400">
              <div className="flex flex-col items-center gap-1">
                <div className="rounded-lg bg-slate-950 p-2 text-slate-300"><Terminal size={18} /></div>
                <span className="text-[10px]">Linux</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="rounded-lg bg-slate-950 p-2 text-slate-300"><Cpu size={18} /></div>
                <span className="text-[10px]">macOS</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        <div className="group rounded-3xl border border-slate-800 bg-slate-950/40 p-6 transition hover:border-slate-700">
          <div className="flex items-center gap-3 text-cyan-400">
            <ShieldCheck size={20} />
            <h3 className="text-sm font-bold uppercase tracking-widest">Trust & Security</h3>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400 group-hover:text-slate-300">
            Metadata rilis dikelola secara terpusat melalui <code className="text-cyan-400">latest-version.json</code>. 
            Aplikasi desktop memvalidasi checksum dan tanda tangan digital untuk setiap pembaruan.
          </p>
        </div>
        <div className="group rounded-3xl border border-slate-800 bg-slate-950/40 p-6 transition hover:border-slate-700">
          <div className="flex items-center gap-3 text-cyan-400">
            <Terminal size={20} />
            <h3 className="text-sm font-bold uppercase tracking-widest">OS Compatibility</h3>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400 group-hover:text-slate-300">
            Mendukung Windows 10+, macOS (Intel/Apple Silicon), dan distribusi Linux populer. 
            Direkomendasikan menggunakan arsitektur x64 untuk performa optimal.
          </p>
        </div>
      </div>
    </motion.section>
  )
}

export default DownloadCard
