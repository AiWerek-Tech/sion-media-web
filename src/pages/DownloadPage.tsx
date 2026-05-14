import { useEffect, useState } from 'react'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import SectionTitle from '../components/common/SectionTitle'
import DownloadCard from '../components/ui/DownloadCard'
import LoadingState from '../components/ui/LoadingState'
import EmptyState from '../components/ui/EmptyState'
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
        <SectionTitle eyebrow="Download" title="Get the latest SION Media release" />

        {status === 'loading' && <LoadingState text="Loading release data..." />}
        {status === 'error' && (
          <EmptyState title="Release data unavailable" message="Unable to load the latest release information right now." />
        )}

        {status === 'success' && latestVersion && (
          <DownloadCard data={latestVersion} />
        )}
      </main>
      <Footer />
    </div>
  )
}

export default DownloadPage
