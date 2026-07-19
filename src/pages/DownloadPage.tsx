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
import { ExternalLink, MessageCircle } from 'lucide-react'

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
          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            {/* Left: Main Application Card */}
            <div className="lg:col-span-2">
              <DownloadCard data={latestVersion} />
            </div>

            {/* Right: Companion apps & community */}
            <div className="space-y-6">
              {/* SION Link Desktop */}
              <article className="rounded-3xl border border-indigo-400/20 bg-indigo-400/[0.04] p-6 flex flex-col justify-between h-[210px] shadow-sm">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[.16em] text-indigo-300">Companion jaringan</div>
                  <h2 className="mt-2 text-lg font-bold text-white">SION Link Desktop</h2>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">Untuk PC pemateri atau operator tambahan: auto-discovery, slide visual, Live OBS, dan PowerPoint Bridge modern.</p>
                </div>
                <div>
                  <div className="mt-3 border-t border-indigo-400/10 pt-3 flex items-center justify-between">
                    <span className="text-[10px] text-slate-500 font-mono">v0.5.0-beta.1</span>
                    <a 
                      href="https://github.com/AiWerek-Tech/sion-link-desktop/releases" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="inline-flex items-center gap-1 text-xs font-bold text-indigo-400 hover:text-indigo-300 transition"
                    >
                      GitHub Releases <ExternalLink size={10} />
                    </a>
                  </div>
                </div>
              </article>

              {/* SION Link Mobile */}
              <article className="rounded-3xl border border-emerald-400/20 bg-emerald-400/[0.04] p-6 flex flex-col justify-between h-[210px] shadow-sm">
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-[10px] font-black uppercase tracking-[.16em] text-emerald-300">Android companion</div>
                    <span className="rounded bg-amber-400/10 px-2 py-0.5 text-[8px] font-black uppercase tracking-wider text-amber-300">alpha</span>
                  </div>
                  <h2 className="mt-2 text-lg font-bold text-white">SION Link Mobile</h2>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">Aplikasi Android untuk QR pairing, Presenter, Operator, Live Viewer, dan Stage Display nirkabel.</p>
                </div>
                <div>
                  <div className="mt-3 border-t border-emerald-400/10 pt-3 flex items-center justify-between">
                    <span className="text-[10px] text-slate-500 font-mono">v0.1.0-alpha.1</span>
                    <a 
                      href="https://github.com/AiWerek-Tech/sion-link-mobile/releases" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition"
                    >
                      GitHub Releases <ExternalLink size={10} />
                    </a>
                  </div>
                </div>
              </article>

              {/* WhatsApp Tester Group */}
              <article className="rounded-3xl border border-emerald-500/20 bg-emerald-500/[0.03] p-6 flex flex-col justify-between h-[210px] shadow-sm">
                <div>
                  <div className="flex items-center gap-2">
                    <MessageCircle size={14} className="text-emerald-400" />
                    <div className="text-[10px] font-black uppercase tracking-[.16em] text-emerald-400">Komunitas Tester</div>
                  </div>
                  <h2 className="mt-2 text-lg font-bold text-white">WhatsApp Tester Group</h2>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">Dapatkan update rilis beta instan, diskusikan bug / jaringan lokal langsung dengan pengembang.</p>
                </div>
                <a
                  href="https://chat.whatsapp.com/KvbT1xpGIUPDlyaDW0M5BR"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center rounded-2xl bg-emerald-500 hover:bg-emerald-400 py-3 text-xs font-bold text-slate-950 transition hover:scale-105 active:scale-95"
                >
                  Gabung WhatsApp Group
                </a>
              </article>
            </div>
          </div>
        )}

        <section className="mt-8 rounded-3xl border border-violet-400/15 bg-violet-400/[0.04] p-6 sm:p-8">
          <div className="text-[10px] font-black uppercase tracking-[.16em] text-violet-300">Catatan paket OBS</div>
          <h2 className="mt-2 text-xl font-bold text-white">Tidak perlu instal FFmpeg atau plugin OBS secara manual</h2>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-400">Installer SION Media terbaru membawa runtime SRT yang diperlukan. Setelah instalasi, pengguna cukup mengaktifkan fitur yang sesuai: <b className="text-slate-200">Network Output</b> untuk SION Media → OBS, atau <b className="text-slate-200">OBS Live Input</b> untuk OBS → SION Media → SION Link. Untuk PowerPoint Bridge, install SION Link Desktop di laptop pemateri; Agent modern sudah ikut di paketnya.</p>
        </section>

        <RequirementsSection />
      </main>
      <Footer />
    </div>
  )
}

export default DownloadPage
