import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight, Zap, Download } from 'lucide-react'
import { fetchLatestVersion } from '../../services/updateService'
import type { LatestVersionData } from '../../types'
import { Link } from 'react-router-dom'

function ReleaseHighlight() {
  const [release, setRelease] = useState<LatestVersionData | null>(null)
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')

  useEffect(() => {
    fetchLatestVersion()
      .then((data) => {
        setRelease(data)
        setStatus('success')
      })
      .catch(() => setStatus('error'))
  }, [])

  return (
    <motion.section 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-12 rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-6 backdrop-blur-sm sm:p-8"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-5">
          <div className="hidden h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 sm:flex">
            <Zap size={28} />
          </div>
          <div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-cyan-500/10 px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-cyan-400">
                Release Highlight
              </span>
              {release?.version === '1.0.0' && (
                <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  First Public Build
                </span>
              )}
            </div>
            
            <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">
              SION Media Desktop {release ? `v${release.version}` : 'Latest Release'}
            </h3>
            
            {status === 'loading' && <p className="mt-2 text-sm text-slate-500">Checking latest metadata...</p>}
            {status === 'error' && <p className="mt-2 text-sm text-rose-400">Metadata unavailable. Check GitHub Releases.</p>}
            {release && (
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Pembaruan terbaru dirilis pada <span className="text-slate-200">{release.releaseDate}</span>. 
                Sangat direkomendasikan untuk stabilitas live worship.
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            to="/download"
            className="flex items-center gap-2 rounded-xl brand-gradient px-6 py-3 text-sm font-bold text-slate-950 transition hover:scale-105"
          >
            <Download size={18} />
            Download Now
          </Link>
          <a
            href="https://github.com/AiWerek-Tech/SION-Media/releases/latest"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:border-slate-500 hover:bg-slate-900"
          >
            <ExternalLink size={18} />
            Changelog
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </motion.section>
  )
}

export default ReleaseHighlight
