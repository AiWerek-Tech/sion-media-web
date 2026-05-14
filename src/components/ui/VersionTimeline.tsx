import type { ChangelogEntry } from '../../types'
import { motion } from 'framer-motion'
import { Calendar, Tag, CheckCircle2 } from 'lucide-react'

type VersionTimelineProps = {
  entries: ChangelogEntry[]
}

function VersionTimeline({ entries }: VersionTimelineProps) {
  return (
    <div className="relative space-y-12 before:absolute before:left-8 before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-slate-800 lg:before:left-1/2">
      {entries.map((entry, index) => (
        <motion.article 
          key={entry.version}
          initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className={`relative flex flex-col gap-8 lg:flex-row ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}
        >
          {/* Dot */}
          <div className="absolute left-8 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-slate-950 lg:left-1/2">
            <div className={`h-2 w-2 rounded-full ${index === 0 ? 'bg-cyan-400' : 'bg-slate-700'}`} />
          </div>

          {/* Date side */}
          <div className="ml-16 flex flex-col justify-center lg:ml-0 lg:w-1/2 lg:px-12 lg:text-right">
            <div className={`flex items-center gap-2 text-sm font-bold text-slate-500 ${index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'}`}>
              <Calendar size={14} />
              {entry.date}
            </div>
          </div>

          {/* Content side */}
          <div className="ml-16 lg:ml-0 lg:w-1/2 lg:px-12">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-8 shadow-card transition hover:border-slate-700">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-cyan-400">
                  <Tag size={10} className="mr-1 inline" />
                  {entry.type}
                </span>
                <h3 className="text-xl font-bold text-white">v{entry.version}</h3>
              </div>
              
              <ul className="mt-6 space-y-4">
                {entry.notes.map((note, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-slate-400">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-500/50" />
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  )
}

export default VersionTimeline
