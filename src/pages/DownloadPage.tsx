import { useEffect, useState } from 'react'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import SectionTitle from '../components/common/SectionTitle'
import DownloadCard from '../components/ui/DownloadCard'
import LoadingState from '../components/ui/LoadingState'
import EmptyState from '../components/ui/EmptyState'
import { RequirementsSection } from '../components/ui/RequirementsSection'
import { fetchLatestVersion } from '../services/updateService'
import type { LatestVersionData } from '../types'

function DownloadPage() {
  const [latestVersion, setLatestVersion] = useState<LatestVersionData | null>(null)
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    fetchLatestVersion()
      .then((data) => {
        setLatestVersion(data)
        setStatus('success')
      })
      .catch(() => setStatus('error'))
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Download" title="Dapatkan rilis desktop SION Media terbaru" />
        <p className="mt-4 max-w-3xl text-slate-300">
          Rilis beta Windows terdiri dari aplikasi operator SION Media dan companion SION Link Desktop. Metadata versi dibaca dari `latest-version.json`; installer resmi dipublikasikan melalui GitHub Releases.
        </p>

        {status === 'loading' && <LoadingState text="Memuat data rilis..." />}
        {status === 'error' && (
          <EmptyState title="Data rilis tidak tersedia" message="Tidak dapat memuat informasi rilis terbaru saat ini." />
        )}

        {status === 'success' && latestVersion && (
          <DownloadCard data={latestVersion} />
        )}

        <section className="mt-8 grid gap-5 md:grid-cols-2">
          <article className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.05] p-6">
            <div className="text-[10px] font-black uppercase tracking-[.16em] text-cyan-300">Aplikasi utama</div>
            <h2 className="mt-2 text-xl font-bold text-white">SION Media Desktop</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">Untuk PC operator: library, projection, Stage Display, PowerPoint import, OBS SRT, database, dan seluruh pengaturan sistem.</p>
          </article>
          <article className="rounded-3xl border border-indigo-400/20 bg-indigo-400/[0.05] p-6">
            <div className="text-[10px] font-black uppercase tracking-[.16em] text-indigo-300">Companion jaringan</div>
            <h2 className="mt-2 text-xl font-bold text-white">SION Link Desktop</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">Untuk PC pemateri atau operator tambahan: auto-discovery, role access, Live Viewer, Stage, dan PowerPoint Bridge.</p>
          </article>
        </section>

        <RequirementsSection />
      </main>
      <Footer />
    </div>
  )
}

export default DownloadPage
