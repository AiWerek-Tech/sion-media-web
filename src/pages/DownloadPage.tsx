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
          Situs ini membaca `latest-version.json` sebagai sumber kebenaran rilis untuk aplikasi desktop. Installer Windows, macOS, dan Linux tersedia melalui GitHub Releases, sementara klien desktop memeriksa metadata ini secara otomatis.
        </p>

        {status === 'loading' && <LoadingState text="Memuat data rilis..." />}
        {status === 'error' && (
          <EmptyState title="Data rilis tidak tersedia" message="Tidak dapat memuat informasi rilis terbaru saat ini." />
        )}

        {status === 'success' && latestVersion && (
          <DownloadCard data={latestVersion} />
        )}

        <RequirementsSection />
      </main>
      <Footer />
    </div>
  )
}

export default DownloadPage
