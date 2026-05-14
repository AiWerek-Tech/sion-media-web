import { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { Church, Building, Save, Loader2, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function ProfileOnboarding() {
  const { user, isNewUser, updateProfile } = useAuth()
  const [churchName, setChurchName] = useState('')
  const [orgName, setOrgName] = useState('')
  const [loading, setLoading] = useState(false)

  if (!isNewUser || !user) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!churchName.trim() || !orgName.trim()) return

    setLoading(true)
    try {
      await updateProfile({
        churchName: churchName.trim(),
        organizationName: orgName.trim(),
        role: 'user',
        lastLogin: new Date().toISOString()
      })
    } catch (error) {
      console.error('Onboarding failed:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 backdrop-blur-xl p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="w-full max-w-lg rounded-4xl border border-slate-800 bg-slate-900 p-8 shadow-2xl sm:p-12"
        >
          <div className="flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl brand-gradient text-slate-950">
              <Sparkles size={32} />
            </div>
            <h2 className="mt-8 text-3xl font-bold text-white">Selamat Datang!</h2>
            <p className="mt-4 text-slate-400">
              Halo <span className="text-cyan-400 font-bold">{user.displayName}</span>, bantu kami mengenal komunitas Anda lebih baik untuk personalisasi ekosistem SION Media.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-12 space-y-6">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                <Church size={14} />
                Nama Gereja
              </label>
              <input
                required
                type="text"
                value={churchName}
                onChange={(e) => setChurchName(e.target.value)}
                placeholder="Contoh: GBI Rock Jakarta"
                className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-5 py-4 text-white outline-none transition focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/10"
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                <Building size={14} />
                Nama Organisasi / Sinode
              </label>
              <input
                required
                type="text"
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
                placeholder="Contoh: Gereja Bethel Indonesia"
                className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-5 py-4 text-white outline-none transition focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/10"
              />
            </div>

            <button
              type="submit"
              disabled={loading || !churchName.trim() || !orgName.trim()}
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl brand-gradient py-5 text-sm font-bold text-slate-950 transition hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
            >
              {loading ? (
                <Loader2 size={20} className="animate-spin" />
              ) : (
                <>
                  <Save size={20} />
                  Selesaikan Profil
                </>
              )}
            </button>
          </form>

          <p className="mt-8 text-center text-[10px] uppercase tracking-[0.2em] text-slate-600">
            Data ini digunakan untuk agregasi statistik publik.
          </p>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
