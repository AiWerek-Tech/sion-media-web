import { useEffect, useState } from 'react'
import { fetchLatestVersion } from '../../services/updateService'
import type { LatestVersionData } from '../../types'

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
    <section className="mt-10 rounded-[2rem] border border-cyan-500/20 bg-slate-900/80 p-6 text-slate-100 shadow-[0_35px_80px_-50px_rgba(15,23,42,0.8)] sm:p-8 animate-[fade-in_0.7s_ease-out_0.1s_forwards]">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex flex-wrap gap-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              Static + update-ready
            </div>
            {release?.version === '1.0.0' ? (
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-200 animate-pulse">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                First release live
              </div>
            ) : null}
          </div>
          <p className="mt-4 text-sm uppercase tracking-[0.35em] text-cyan-300">Sorotan rilis</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">Rilis desktop SION Media</h3>
          {status === 'loading' && <p className="mt-2 text-slate-400">Memuat metadata rilis aplikasi…</p>}
          {status === 'error' && <p className="mt-2 text-slate-400">Metadata rilis tidak tersedia. Silakan buka GitHub Releases untuk installer terbaru.</p>}
          {release && (
            <p className="mt-2 text-slate-300">
              Versi <span className="font-semibold text-white">{release.version}</span> — dirilis pada <span className="font-semibold text-white">{release.releaseDate}</span>.
              {release.mandatory ? ' Pembaruan wajib.' : ''}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="https://github.com/AiWerek-Tech/SION-Media/releases/latest"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Open GitHub Releases
          </a>
          <a
            href="/#/download"
            className="inline-flex items-center justify-center rounded-full border border-slate-800 bg-slate-950/90 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-500 hover:text-white"
          >
            View download page
          </a>
        </div>
      </div>
    </section>
  )
}

export default ReleaseHighlight
