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
        <SectionTitle eyebrow="Download" title="Dapatkan aplikasi ekosistem SION Media" />
        <p className="mt-4 max-w-3xl text-slate-300">
          Paket pengujian mencakup SION Media Desktop, SION Link Desktop, dan SION Link Mobile untuk Android. Metadata versi dibaca dari <code className="text-cyan-300">latest-version.json</code>; artefak publik resmi tetap didistribusikan melalui GitHub Releases.
        </p>

        {status === 'loading' && <LoadingState text="Memuat data rilis..." />}
        {status === 'error' && (
          <EmptyState title="Data rilis tidak tersedia" message="Tidak dapat memuat informasi rilis terbaru saat ini." />
        )}

        {status === 'success' && latestVersion && (
          <DownloadCard data={latestVersion} />
        )}

        <section className="mt-8 grid gap-5 md:grid-cols-3">
          <article className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.05] p-6">
            <div className="text-[10px] font-black uppercase tracking-[.16em] text-cyan-300">Aplikasi utama</div>
            <h2 className="mt-2 text-xl font-bold text-white">SION Media Desktop</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">Untuk PC operator: library, projection, Stage Display, PowerPoint, OBS Network Output, dan OBS Live Input. FFmpeg 8.1.2 serta MediaMTX 1.17.0 sudah termasuk.</p>
            <div className="mt-5 border-t border-cyan-400/10 pt-4 text-xs leading-relaxed text-slate-500">v1.1.0-beta.1 · Windows 10/11 x64 · 232.14 MB</div>
          </article>
          <article className="rounded-3xl border border-indigo-400/20 bg-indigo-400/[0.05] p-6">
            <div className="text-[10px] font-black uppercase tracking-[.16em] text-indigo-300">Companion jaringan</div>
            <h2 className="mt-2 text-xl font-bold text-white">SION Link Desktop</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">Untuk PC pemateri atau operator tambahan: auto-discovery, role access, slide visual, OBS Live, Live Viewer, Stage, dan PowerPoint Bridge.</p>
            <div className="mt-5 border-t border-indigo-400/10 pt-4 text-xs leading-relaxed text-slate-500">v1.1.0-beta.1 · Windows 10/11 x64 · 89.64 MB</div>
          </article>
          <article className="rounded-3xl border border-emerald-400/20 bg-emerald-400/[0.05] p-6">
            <div className="flex items-center justify-between gap-3">
              <div className="text-[10px] font-black uppercase tracking-[.16em] text-emerald-300">Android companion</div>
              <span className="rounded-full bg-amber-400/10 px-2.5 py-1 text-[9px] font-black uppercase tracking-wider text-amber-300">Internal alpha</span>
            </div>
            <h2 className="mt-2 text-xl font-bold text-white">SION Link Mobile</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">Aplikasi Android native untuk QR pairing, Presenter, Operator, Live Viewer, Stage Display, slide visual, dan OBS Live dengan audio. Belum didistribusikan melalui Play Store.</p>
            <div className="mt-5 border-t border-emerald-400/10 pt-4 text-xs leading-relaxed text-slate-500">0.1.0-alpha.1 · Android 7+ · ARM64/ARMv7 · 101.03 MB · APK v2 verified</div>
          </article>
        </section>

        <section className="mt-8 rounded-3xl border border-violet-400/15 bg-violet-400/[0.04] p-6 sm:p-8">
          <div className="text-[10px] font-black uppercase tracking-[.16em] text-violet-300">Catatan paket OBS</div>
          <h2 className="mt-2 text-xl font-bold text-white">Tidak perlu instal FFmpeg atau plugin OBS secara manual</h2>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-400">Installer SION Media terbaru membawa runtime SRT yang diperlukan. Setelah instalasi, pengguna cukup mengaktifkan fitur yang sesuai: <b className="text-slate-200">Network Output</b> untuk SION Media → OBS, atau <b className="text-slate-200">OBS Live Input</b> untuk OBS → SION Media → SION Link.</p>
        </section>

        <RequirementsSection />
      </main>
      <Footer />
    </div>
  )
}

export default DownloadPage
