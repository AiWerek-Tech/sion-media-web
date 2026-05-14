import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import SectionTitle from '../components/common/SectionTitle'
import { docsSections } from '../data/docsSections'
import { motion } from 'framer-motion'
import { BookOpen, ChevronRight, Hash } from 'lucide-react'

function DocsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Documentation" title="Panduan ekosistem SION Media" align="center" />
        <p className="mx-auto mt-6 max-w-2xl text-center text-slate-400">
          Pelajari cara kerja integrasi antara aplikasi desktop, portal web, dan infrastruktur cloud untuk mendukung pelayanan multimedia yang handal.
        </p>

        <div className="mt-20 space-y-20">
          {docsSections.map((section, sIndex) => (
            <motion.section 
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: sIndex * 0.1 }}
              className="relative"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                  <p className="mt-1 text-sm text-slate-500">{section.description}</p>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {section.items.map((item) => (
                  <motion.div 
                    key={item.title} 
                    whileHover={{ scale: 1.02 }}
                    className="group rounded-3xl border border-slate-800 bg-slate-900/40 p-6 transition-all hover:border-slate-700 hover:bg-slate-900/60"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-950 text-slate-500 group-hover:text-cyan-400">
                        <Hash size={14} />
                      </div>
                      <ChevronRight size={16} className="text-slate-700 transition-transform group-hover:translate-x-1 group-hover:text-cyan-500" />
                    </div>
                    <h3 className="mt-6 font-bold text-white group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-500 group-hover:text-slate-400 transition-colors">
                      {item.detail}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        <section className="mt-32 rounded-4xl border border-slate-800 bg-slate-900/20 p-12 text-center">
          <h3 className="text-xl font-bold text-white">Butuh bantuan lebih lanjut?</h3>
          <p className="mt-4 text-slate-500 text-sm">Tim kami siap membantu Anda mengonfigurasi SION Media untuk gereja Anda.</p>
          <div className="mt-8">
            <a 
              href="mailto:support@sionmedia.app" 
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-8 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
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
