import SectionTitle from '../common/SectionTitle'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const reasons = [
  {
    title: 'Broadcast Workflow',
    description: 'Workflow Cue → Take → Program dirancang untuk operasi proyeksi live secara profesional, bukan sekadar tampilan biasa.',
  },
  {
    title: 'Multi-Monitor Support',
    description: 'Preview dan program monitor plus stage display membantu tim media menjaga alur ibadah tetap sinkron.',
  },
  {
    title: 'Rich Media Library',
    description: 'Database multi-hymnal dengan pencarian FTS5 dan 525 lagu Lagu Sion default membuat persiapan lebih cepat.',
  },
]

function WhySection() {
  return (
    <section className="mt-32">
      <SectionTitle eyebrow="Why SION Media" title="Dirancang untuk tim ibadah, bukan kompleksitas backend" align="center" />
      
      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {reasons.map((item, index) => (
          <motion.div 
            key={item.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group rounded-4xl glass-card p-8 transition-all hover:bg-slate-900/60"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 group-hover:brand-gradient group-hover:text-slate-950 transition-all">
              <CheckCircle2 size={24} />
            </div>
            <h3 className="mt-8 text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">{item.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default WhySection
