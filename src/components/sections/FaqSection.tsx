import SectionTitle from '../common/SectionTitle'
import { motion } from 'framer-motion'
import { HelpCircle, ChevronRight } from 'lucide-react'

const faqItems = [
  {
    question: 'Bagaimana aplikasi desktop mengetahui ada rilis baru?',
    answer: 'Klien desktop membaca `latest-version.json` dan membandingkan versi saat ini dengan metadata terbaru secara otomatis setiap kali aplikasi dijalankan.',
  },
  {
    question: 'Bisakah SION Media menampilkan lirik dan ayat Alkitab?',
    answer: 'Ya. Aplikasi desktop mendukung mode proyeksi lirik penuh serta pemilihan bacaan Alkitab yang dapat dikirim ke layar presentasi dengan cepat.',
  },
  {
    question: 'Bagaimana cara impor data lagu dan playlist?',
    answer: 'Aplikasi desktop mendukung impor file JSON dan Excel, mendeteksi duplikat, serta menampilkan opsi gabung atau lewati saat konflik terjadi.',
  },
  {
    question: 'Apakah SION Media membutuhkan koneksi internet?',
    answer: 'Sebagian besar fitur bekerja secara offline. Internet hanya dibutuhkan untuk memeriksa pembaruan dan menyinkronkan statistik publik ke Cloud.',
  },
]

function FaqSection() {
  return (
    <section className="mt-32">
      <SectionTitle eyebrow="FAQ" title="Pertanyaan umum tentang SION Media" align="center" />
      
      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        {faqItems.map((item, index) => (
          <motion.article 
            key={item.question}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
            className="group rounded-3xl border border-slate-800 bg-slate-900/40 p-8 transition-all hover:border-slate-700 hover:bg-slate-900/60"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                <HelpCircle size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">{item.question}</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
                  {item.answer}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-16 text-center">
        <a 
          href="https://github.com/AiWerek-Tech/SION-Media/issues" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition hover:text-white"
        >
          Punya pertanyaan lain? Buka diskusi di GitHub
          <ChevronRight size={16} />
        </a>
      </div>
    </section>
  )
}

export default FaqSection
