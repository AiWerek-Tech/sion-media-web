import { useState } from 'react'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../../firebase/init'
import { useAuth } from '../../contexts/AuthContext'
import { brandingUtils } from '../../utils/brandingUtils'
import type { PublicStats } from '../../types'

interface AdminPanelProps {
  currentStats: PublicStats
  onStatsUpdate: () => void
}

export function AdminPanel({ currentStats, onStatsUpdate }: AdminPanelProps) {
  const { user } = useAuth()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<PublicStats>({
    totalChurches: currentStats.totalChurches || 0,
    totalUsers: currentStats.totalUsers || 0,
    activeOrganizations: currentStats.activeOrganizations || 0,
    latestVersion: currentStats.latestVersion || '',
  })

  // Only show admin panel for authenticated users (you can add role checking here)
  if (!user) {
    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!db) return

    setLoading(true)
    try {
      const statsRef = doc(db, 'public_stats', 'summary')
      await updateDoc(statsRef, formData)
      onStatsUpdate()
      alert('Statistics updated successfully!')
    } catch (error) {
      console.error('Error updating stats:', error)
      alert('Failed to update statistics. Check console for details.')
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
    <div className={`${brandingUtils.getBackgroundColor('surface')} rounded-lg border ${brandingUtils.getBorderRadius('lg')} p-6`}>
      <h3 className="text-lg font-semibold text-slate-100 mb-4">Admin Panel - Update Statistics</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">
              Total Churches
            </label>
            <input
              type="number"
              value={formData.totalChurches}
              onChange={(e) => handleChange('totalChurches', parseInt(e.target.value) || 0)}
              className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-slate-100 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">
              Total Users
            </label>
            <input
              type="number"
              value={formData.totalUsers}
              onChange={(e) => handleChange('totalUsers', parseInt(e.target.value) || 0)}
              className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-slate-100 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">
              Active Organizations
            </label>
            <input
              type="number"
              value={formData.activeOrganizations}
              onChange={(e) => handleChange('activeOrganizations', parseInt(e.target.value) || 0)}
              className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-slate-100 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">
              Latest Version
            </label>
            <input
              type="text"
              value={formData.latestVersion}
              onChange={(e) => handleChange('latestVersion', e.target.value)}
              placeholder="e.g., 1.2.3"
              className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-slate-100 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`${brandingUtils.getPrimaryButtonClasses('solid')} disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {loading ? 'Updating...' : 'Update Statistics'}
        </button>
      </form>
    </div>
  )
}