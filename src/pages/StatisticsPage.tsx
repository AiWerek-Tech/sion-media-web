import { usePublicStats } from '../hooks/usePublicStats'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import SectionTitle from '../components/common/SectionTitle'
import StatsCard from '../components/ui/StatsCard'
import LoadingState from '../components/ui/LoadingState'
import EmptyState from '../components/ui/EmptyState'
import { AdminPanel } from '../components/ui/AdminPanel'
import { motion } from 'framer-motion'

function StatisticsPage() {
  const { stats, loading, error, refetch } = usePublicStats()

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Statistics" title="Analitik penggunaan publik" align="center" />
        <p className="mx-auto mt-6 max-w-2xl text-center text-slate-400">
          Metrik penggunaan SION Media yang diagregasi secara real-time dari Firestore. 
          Data ini mencerminkan jangkauan pelayanan kami di berbagai komunitas.
        </p>

        {loading && (
          <div className="mt-20">
            <LoadingState text="Sinkronisasi data cloud..." />
          </div>
        )}
        
        {error && (
          <div className="mt-20">
            <EmptyState title="Koneksi Cloud Terputus" message="Tidak dapat mengambil metrik terbaru. Silakan periksa koneksi internet Anda." />
          </div>
        )}

        {stats && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-20"
          >
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <StatsCard label="Total Churches" value={stats.totalChurches ?? 0} iconName="church" />
              <StatsCard label="Total Users" value={stats.totalUsers ?? 0} iconName="users" />
              <StatsCard label="Active Orgs" value={stats.activeOrganizations ?? 0} iconName="building" />
              <StatsCard label="Latest Version" value={stats.latestVersion ?? 'v1.0.0'} iconName="cpu" />
            </div>

            <div className="mt-24">
              <div className="mb-12 text-center">
                <span className="rounded-full bg-slate-800 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Administrative Access
                </span>
                <h2 className="mt-4 text-3xl font-bold text-white">Stats Management</h2>
              </div>
              <AdminPanel currentStats={stats} onStatsUpdate={refetch} />
            </div>
          </motion.div>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default StatisticsPage
