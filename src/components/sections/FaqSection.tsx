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
    answer: 'Tidak untuk operasional ibadah. SION Link, Stage Display, PowerPoint Bridge, dan SRT bekerja melalui jaringan lokal. Internet hanya diperlukan untuk pembaruan dan layanan web.',
  },
  {
    question: 'Apakah PowerPoint dan Speaker Notes didukung?',
    answer: 'Ya. PPTX dapat diimpor bersama judul dan Speaker Notes. Konversi otomatis menggunakan PowerPoint, WPS Presentation, atau LibreOffice yang tersedia.',
  },
  {
    question: 'Apakah perlu plugin khusus untuk OBS Studio?',
    answer: 'Tidak. Aktifkan OBS Network Output di SION Media, lalu masukkan URL SRT sebagai Media Source di OBS pada komputer lain.',
  },
  {
    question: 'Bagaimana perangkat menemukan server SION Link?',
    answer: 'SION Link Desktop memindai LAN/Wi-Fi secara otomatis. Pada SION Link Mobile, scan QR role adalah cara utama; IP, port 41732, dan kode akses tersedia sebagai fallback manual.',
  },
  {
    question: 'Apakah SION Link Mobile sudah tersedia di Play Store?',
    answer: 'Belum. Versi 0.1.0-alpha.1 masih berupa APK internal testing dengan debug signing. Distribusi publik dilakukan setelah pengujian perangkat fisik, hardening keamanan, dan release signing selesai.',
  },
  {
    question: 'Apa saja role pada SION Link Mobile?',
    answer: 'Pemateri mendapat kontrol Previous/Next, Operator mendapat kontrol produksi, sedangkan Live Viewer dan Stage Display bersifat read-only. Role ditentukan otomatis oleh kode dari SION Media.',
  },
]

function FaqSection() {
  return (
    <section className="mt-20">
      <SectionTitle eyebrow="FAQ" title="Pertanyaan umum tentang SION Media" align="center" />
      
      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {faqItems.map((item, index) => (
          <motion.article 
            key={item.question}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
            className="group rounded-2xl border border-slate-800 bg-slate-900/30 p-5 transition-all hover:border-slate-700 hover:bg-slate-900/50"
          >
            <div className="flex items-start gap-3.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                <HelpCircle size={18} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug">
                  {item.question}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
                  {item.answer}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a 
          href="https://github.com/AiWerek-Tech/SION-Media/issues" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 transition hover:text-white"
        >
          Punya pertanyaan lain? Buka diskusi di GitHub
          <ChevronRight size={14} />
        </a>
      </div>
    </section>
  )
}

export default FaqSection
