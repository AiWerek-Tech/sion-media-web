import { usePublicStats } from '../hooks/usePublicStats'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import SectionTitle from '../components/common/SectionTitle'
import StatsCard from '../components/ui/StatsCard'
import LoadingState from '../components/ui/LoadingState'
import EmptyState from '../components/ui/EmptyState'
import { AdminPanel } from '../components/ui/AdminPanel'

function StatisticsPage() {
  const { stats, loading, error, refetch } = usePublicStats()

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Statistics" title="Analitik penggunaan publik" />
        <p className="max-w-2xl text-slate-400">
          Statistik publik yang dihasilkan dari Firestore untuk SION Media.
        </p>

        {loading && <LoadingState text="Memuat statistik..." />}
        {error && <EmptyState title="Tidak dapat memuat statistik" message="Silakan coba lagi nanti." />}

        {stats && (
          <>
            <div className="grid gap-6 pt-8 sm:grid-cols-2 xl:grid-cols-4">
              <StatsCard label="Total churches" value={stats.totalChurches ?? 0} />
              <StatsCard label="Total users" value={stats.totalUsers ?? 0} />
              <StatsCard label="Active organizations" value={stats.activeOrganizations ?? 0} />
              <StatsCard label="Latest app version" value={stats.latestVersion ?? 'N/A'} />
            </div>

            <div className="mt-12">
              <AdminPanel currentStats={stats} onStatsUpdate={refetch} />
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default StatisticsPage
