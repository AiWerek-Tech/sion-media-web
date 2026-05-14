import SectionTitle from '../common/SectionTitle'

const faqItems = [
  {
    question: 'Bagaimana aplikasi desktop mengetahui ada rilis baru?',
    answer: 'Klien desktop membaca `latest-version.json` dan membandingkan versi saat ini dengan metadata terbaru. Jika diperlukan, aplikasi menjelaskan bahwa ada versi baru dan mengarahkan ke GitHub Releases.',
  },
  {
    question: 'Bisakah SION Media menampilkan lirik dan ayat Alkitab secara langsung?',
    answer: 'Ya. Aplikasi desktop mendukung mode proyeksi lirik penuh serta pemilihan bacaan Alkitab yang dapat dikirim ke layar presentasi.',
  },
  {
    question: 'Bagaimana cara impor data lagu dan playlist?',
    answer: 'Aplikasi desktop mendukung impor file JSON dan Excel, mendeteksi duplikat, serta menampilkan opsi gabung atau lewati saat konflik terjadi.',
  },
  {
    question: 'Bagaimana website terkait dengan aplikasi desktop?',
    answer: 'Website menyediakan portal unduhan, metadata update, changelog, dan statistik publik yang digunakan oleh aplikasi desktop dan tim media.',
  },
]

function FaqSection() {
  return (
    <section className="mt-20 animate-[fade-in_0.7s_ease-out_0.2s_forwards]">
      <SectionTitle eyebrow="FAQ" title="Pertanyaan umum tentang alur rilis dan pembaruan aplikasi" />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {faqItems.map((item) => (
          <article key={item.question} className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-6 shadow-[0_25px_60px_-45px_rgba(15,23,42,0.9)] transition hover:-translate-y-1">
            <h3 className="text-lg font-semibold text-white">{item.question}</h3>
            <p className="mt-4 text-slate-300">{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default FaqSection
