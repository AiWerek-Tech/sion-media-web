import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type FeatureCardProps = {
  title: string
  description: string
  tag: string
  iconName?: string
}

function FeatureCard({ title, description, tag, iconName }: FeatureCardProps) {
  // Map icon name to Lucide component or fallback to Zap
  const IconComponent = (iconName && Icons[iconName as keyof typeof Icons]) as LucideIcon || Icons.Zap
  const Icon: LucideIcon = IconComponent

  return (
    <motion.article 
      whileHover={{ y: -4 }}
      className="glass-card group flex flex-col p-5 transition-colors hover:border-cyan-500/50 hover:bg-slate-900/60"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-950 text-cyan-400 transition group-hover:brand-gradient group-hover:text-slate-950">
          <Icon size={20} />
        </div>
        <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-slate-400 transition group-hover:bg-cyan-500/20 group-hover:text-cyan-300">
          {tag}
        </span>
      </div>
      
      <h3 className="mt-5 text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
        {title}
      </h3>
      
      <p className="mt-2.5 flex-grow text-xs leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
        {description}
      </p>

      <div className="mt-5 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-cyan-400 transition-colors">
        <span>Detail Features</span>
        <Icons.ChevronRight size={12} className="transition-transform group-hover:translate-x-1" />
      </div>
    </motion.article>
  )
}

export default FeatureCard
