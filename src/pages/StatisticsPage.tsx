import { usePublicStats } from '../hooks/usePublicStats'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import SectionTitle from '../components/common/SectionTitle'
import StatsCard from '../components/ui/StatsCard'
import LoadingState from '../components/ui/LoadingState'
import EmptyState from '../components/ui/EmptyState'

function StatisticsPage() {
  const { stats, loading, error } = usePublicStats()

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Statistics" title="Public usage analytics" />
        <p className="max-w-2xl text-slate-400">
          Aggregated public statistics from Firestore for SION Media.
        </p>

        {loading && <LoadingState text="Loading statistics..." />}
        {error && <EmptyState title="Unable to load statistics" message="Please try again later." />}

        {stats && (
          <div className="grid gap-6 pt-8 sm:grid-cols-2 xl:grid-cols-4">
            <StatsCard label="Total churches" value={stats.totalChurches ?? 0} />
            <StatsCard label="Total users" value={stats.totalUsers ?? 0} />
            <StatsCard label="Active organizations" value={stats.activeOrganizations ?? 0} />
            <StatsCard label="Latest app version" value={stats.latestVersion ?? 'N/A'} />
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default StatisticsPage
