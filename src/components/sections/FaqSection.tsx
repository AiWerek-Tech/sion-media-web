import SectionTitle from '../common/SectionTitle'

const faqItems = [
  {
    question: 'Bagaimana aplikasi desktop mengetahui ada rilis baru?',
    answer: 'Klien desktop membaca `latest-version.json` dan membandingkan versi saat ini dengan metadata versi terbaru. Jika aplikasi sudah usang, ia dapat meminta pengguna mengunduh rilis terbaru.',
  },
  {
    question: 'Mengapa menggunakan GitHub Releases dan `latest-version.json` bersama?',
    answer: 'GitHub Releases menampung file installer dan catatan rilis, sedangkan `latest-version.json` menyediakan endpoint metadata statis untuk pengecekan versi dan alur pembaruan ringan.',
  },
  {
    question: 'Apakah website memerlukan server backend?',
    answer: 'Tidak. Website dihosting statis di GitHub Pages dan hanya menggunakan Firebase untuk statistik publik dan autentikasi opsional, bukan sebagai backend penuh.',
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
