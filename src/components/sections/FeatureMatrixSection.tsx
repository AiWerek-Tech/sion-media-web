import SectionTitle from '../common/SectionTitle'
import { motion } from 'framer-motion'
import { Check, Minus } from 'lucide-react'

const capabilities = [
  { feature: 'Multi-Monitor Routing', sion: true, others: 'Varied' },
  { feature: 'OBS SRT 1080p + Audio', sion: true, others: 'Varied' },
  { feature: 'OBS Live Input ke Desktop/Mobile', sion: true, others: 'Varied' },
  { feature: 'Projection Cue/Take Workflow', sion: true, others: 'Varied' },
  { feature: 'Hot Swap Media Tanpa Clear', sion: true, others: 'Varied' },
  { feature: 'Pemisahan Lirik Semantik (;)', sion: true, others: 'Varied' },
  { feature: 'Stage Display Sync', sion: true, others: 'Varied' },
  { feature: 'Offline Bible Search', sion: true, others: 'Yes' },
  { feature: 'Multi-Hymnal Database', sion: true, others: 'Manual' },
  { feature: 'Fuzzy FTS5 Search', sion: true, others: 'No' },
  { feature: 'Crash Auto-Recovery', sion: true, others: 'No' },
  { feature: 'SION Link Auto-Discovery', sion: true, others: 'Varied' },
  { feature: 'Kode Role & Port Persisten', sion: true, others: 'Varied' },
  { feature: 'PPTX Speaker Notes', sion: true, others: 'Varied' },
  { feature: '100% Free & Open Source', sion: true, others: 'No' },
]

function FeatureMatrixSection() {
  return (
    <section className="mt-32">
      <SectionTitle eyebrow="Technical Capability Matrix" title="Evaluasi Teknis Sekilas" align="center" />
      <p className="mx-auto mt-6 max-w-2xl text-center text-slate-400">
        Bandingkan kapabilitas inti SION Media dengan ekosistem presentasi ibadah pada umumnya. Fitur roadmap ditandai tanpa mengklaim status produksi final.
      </p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 mx-auto max-w-4xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-950/50 text-slate-400">
                <th className="p-6 font-bold uppercase tracking-widest">Kapabilitas</th>
                <th className="p-6 font-bold uppercase tracking-widest text-cyan-400 text-center">SION Media</th>
                <th className="p-6 font-bold uppercase tracking-widest text-slate-500 text-center">Software Umum</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {capabilities.map((row, index) => (
                <tr key={index} className="transition hover:bg-slate-900/80">
                  <td className="p-6 font-medium text-slate-300">{row.feature}</td>
                  <td className="p-6 text-center">
                    {row.sion ? (
                      <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400">
                        <Check size={16} strokeWidth={3} />
                      </div>
                    ) : (
                      <Minus size={16} className="mx-auto text-slate-600" />
                    )}
                  </td>
                  <td className="p-6 text-center text-slate-500 font-medium text-xs uppercase tracking-wider">
                    {row.others}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </section>
  )
}

export default FeatureMatrixSection
