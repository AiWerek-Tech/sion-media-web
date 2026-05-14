import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import SectionTitle from '../components/common/SectionTitle'
import { docsSections } from '../data/docsSections'
import { motion } from 'framer-motion'
import { BookOpen, ChevronRight, CheckCircle, Monitor, Database, Zap, ShieldCheck } from 'lucide-react'

function DocsPage() {
  const getIcon = (title: string) => {
    if (title.includes('Download')) return ShieldCheck
    if (title.includes('Instalasi')) return Database
    if (title.includes('Mode')) return Monitor
    if (title.includes('Workflow')) return Zap
    return BookOpen
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Operator Documentation" title="Panduan Operasional SION Media" align="center" />
        <p className="mx-auto mt-6 max-w-2xl text-center text-slate-400">
          Dokumentasi ini dirancang untuk membantu operator multimedia gereja menguasai ekosistem SION Media dalam hitungan menit.
        </p>

        {/* Quick Start Workflow */}
        <section className="mt-20 rounded-4xl border border-slate-800 bg-slate-900/20 p-8 lg:p-12">
          <h2 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
            <CheckCircle className="text-cyan-400" />
            Langkah Cepat Memulai
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { step: '01', title: 'Unduh & Install', desc: 'Dapatkan installer Aurora v3.0 dari halaman download.' },
              { step: '02', title: 'Siapkan Playlist', desc: 'Gunakan Library Mode untuk menyusun lagu ibadah.' },
              { step: '03', title: 'Mulai Proyeksi', desc: 'Tekan SPACE untuk menayangkan lirik ke audience.' },
            ].map((item) => (
              <div key={item.step} className="relative rounded-2xl bg-slate-950 p-6 border border-slate-800">
                <span className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-lg brand-gradient text-[10px] font-bold text-slate-950">
                  {item.step}
                </span>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-20 space-y-24">
          {docsSections.map((section, sIndex) => {
            const Icon = getIcon(section.title)
            return (
              <motion.section 
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: sIndex * 0.1 }}
                className="relative"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white uppercase tracking-tight">{section.title}</h2>
                    <p className="mt-1 text-sm text-slate-500">{section.description}</p>
                  </div>
                </div>

                <div className="mt-10 grid gap-6 sm:grid-cols-2">
                  {section.items.map((item, iIndex) => (
                    <motion.div 
                      key={item.title} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (sIndex * 0.1) + (iIndex * 0.05) }}
                      className="group flex gap-5 rounded-3xl border border-slate-800/50 bg-slate-900/40 p-6 transition-all hover:border-slate-700 hover:bg-slate-900/60"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-slate-700 group-hover:text-cyan-400 group-hover:bg-cyan-400/5 transition-colors">
                        <span className="text-xs font-bold">{iIndex + 1}</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-white group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                          {item.title}
                          <ChevronRight size={14} className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-500 group-hover:text-slate-400 transition-colors">
                          {item.detail}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )
          })}
        </div>

        {/* Footer Support */}
        <section className="mt-32 rounded-4xl border border-slate-800 bg-slate-900/20 p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500/5 blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <h3 className="text-2xl font-bold text-white relative z-10">Butuh bantuan lebih lanjut?</h3>
          <p className="mt-4 text-slate-500 text-sm relative z-10">Tim SION Media siap membantu komunitas multimedia gereja Anda.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4 relative z-10">
            <a 
              href="https://github.com/AiWerek-Tech/SION-Media/issues" 
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-8 py-4 text-sm font-bold text-white transition hover:bg-slate-800"
            >
              Laporkan Bug
            </a>
            <a 
              href="mailto:support@sionmedia.app" 
              className="flex items-center gap-2 rounded-2xl brand-gradient px-8 py-4 text-sm font-bold text-slate-950 transition hover:scale-105"
            >
              Hubungi Support
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default DocsPage
