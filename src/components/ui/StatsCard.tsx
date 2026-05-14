import { motion } from 'framer-motion'
import { Church, Users, Building, Cpu } from 'lucide-react'

type StatsCardProps = {
  label: string
  value: string | number
  iconName?: 'church' | 'users' | 'building' | 'cpu'
}

function StatsCard({ label, value, iconName }: StatsCardProps) {
  const icons = {
    church: Church,
    users: Users,
    building: Building,
    cpu: Cpu
  }
  const Icon = iconName ? icons[iconName] : Cpu

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group rounded-3xl border border-slate-800 bg-slate-900/40 p-8 shadow-card transition hover:border-cyan-500/50"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-cyan-400 group-hover:brand-gradient group-hover:text-slate-950 transition-all">
          <Icon size={24} />
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 group-hover:text-cyan-400 transition-colors">
            {label}
          </p>
          <h3 className="mt-1 text-3xl font-bold text-white tracking-tight">
            {typeof value === 'number' ? value.toLocaleString('id-ID') : value}
          </h3>
        </div>
      </div>
    </motion.div>
  )
}

export default StatsCard
