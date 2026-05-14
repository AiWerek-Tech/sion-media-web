import { useState } from 'react'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../../firebase/init'
import { useAuth } from '../../hooks/useAuth'
import type { PublicStats } from '../../types'
import { Save, Shield, Info } from 'lucide-react'
import { motion } from 'framer-motion'

interface AdminPanelProps {
  currentStats: PublicStats
  onStatsUpdate: () => void
}

export function AdminPanel({ currentStats, onStatsUpdate }: AdminPanelProps) {
  const { user } = useAuth()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState<PublicStats>({
    totalChurches: currentStats.totalChurches || 0,
    totalUsers: currentStats.totalUsers || 0,
    activeOrganizations: currentStats.activeOrganizations || 0,
    latestVersion: currentStats.latestVersion || '',
  })

  // Only show admin panel for authenticated users
  if (!user) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-800 p-12 text-center">
        <Shield size={40} className="mx-auto text-slate-700" />
        <p className="mt-4 text-sm font-medium text-slate-600">Admin access restricted. Please sign in to manage statistics.</p>
      </div>
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!db) return

    setLoading(true)
    setSuccess(false)
    try {
      const statsRef = doc(db, 'public_stats', 'summary')
      await updateDoc(statsRef, formData as any)
      onStatsUpdate()
      setSuccess(true)
      setTimeout(() => setSuccess(false), 3000)
    } catch (error) {
      console.error('Error updating stats:', error)
      alert('Failed to update statistics.')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (field: keyof PublicStats, value: string | number) => {
    setFormData((prev: PublicStats) => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="rounded-4xl glass-card overflow-hidden"
    >
      <div className="border-b border-slate-800 bg-slate-900/50 px-8 py-6">
        <div className="flex items-center gap-3">
          <Shield size={20} className="text-cyan-400" />
          <h3 className="text-lg font-bold text-white">Cloud Stats Control</h3>
        </div>
        <p className="mt-1 text-sm text-slate-500">Update metrik publik untuk ditampilkan di website.</p>
      </div>

      <form onSubmit={handleSubmit} className="p-8">
        <div className="grid gap-8 sm:grid-cols-2">
          {[
            { label: 'Total Churches', key: 'totalChurches', type: 'number' },
            { label: 'Total Users', key: 'totalUsers', type: 'number' },
            { label: 'Active Organizations', key: 'activeOrganizations', type: 'number' },
            { label: 'Latest App Version', key: 'latestVersion', type: 'text', placeholder: 'e.g. 1.0.0' },
          ].map((field) => (
            <div key={field.key} className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">
                {field.label}
              </label>
              <input
                type={field.type}
                value={(formData as any)[field.key]}
                onChange={(e) => handleChange(field.key as keyof PublicStats, field.type === 'number' ? parseInt(e.target.value) || 0 : e.target.value)}
                placeholder={field.placeholder}
                className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/10"
              />
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between gap-4 rounded-2xl bg-cyan-500/5 p-4 border border-cyan-500/10">
          <div className="flex items-center gap-3 text-cyan-400">
            <Info size={18} />
            <p className="text-xs leading-relaxed">
              Perubahan ini akan langsung dipublikasikan ke seluruh pengguna website dan aplikasi desktop.
            </p>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="flex shrink-0 items-center gap-2 rounded-xl brand-gradient px-6 py-3 text-sm font-bold text-slate-950 transition hover:scale-105 disabled:opacity-50"
          >
            {loading ? (
              'Updating...'
            ) : (
              <>
                <Save size={18} />
                Save Changes
              </>
            )}
          </button>
        </div>

        {success && (
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-center text-sm font-bold text-emerald-400"
          >
            ✓ Statistics updated successfully!
          </motion.p>
        )}
      </form>
    </motion.div>
  )
}