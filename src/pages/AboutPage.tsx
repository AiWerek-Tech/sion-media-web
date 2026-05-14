import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import SectionTitle from '../components/common/SectionTitle'

function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="About" title="Fondasi website SION Media" />
        <div className="grid gap-8 lg:grid-cols-2">
          <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-[0_25px_60px_-45px_rgba(15,23,42,0.8)]">
            <h2 className="text-2xl font-semibold text-slate-100">Visi Proyek</h2>
            <p className="mt-4 text-slate-400">Membangun landing page software yang bersih, mudah digunakan, dan siap berintegrasi dengan aplikasi desktop serta analitik publik.</p>
          </section>
          <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-[0_25px_60px_-45px_rgba(15,23,42,0.8)]">
            <h2 className="text-2xl font-semibold text-slate-100">Misi</h2>
            <p className="mt-4 text-slate-400">Menjadi portal resmi yang menghubungkan pengguna dengan rilis desktop, dokumentasi, dan statistik publik secara transparan.</p>
          </section>
          <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-[0_25px_60px_-45px_rgba(15,23,42,0.8)]">
            <h2 className="text-2xl font-semibold text-slate-100">Teknologi</h2>
            <ul className="mt-4 space-y-2 text-slate-400">
              <li>Vite + React + TypeScript</li>
              <li>Tailwind CSS</li>
              <li>GitHub Pages</li>
              <li>Firebase Auth + Firestore</li>
              <li>GitHub Releases</li>
            </ul>
          </section>
          <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-[0_25px_60px_-45px_rgba(15,23,42,0.8)]">
            <h2 className="text-2xl font-semibold text-slate-100">Ringkasan Arsitektur</h2>
            <p className="mt-4 text-slate-400">Situs statis dengan routing sisi-klien, pembacaan Firestore publik, metadata pembaruan desktop, dan kebutuhan hosting minimal.</p>
          </section>
          <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-[0_25px_60px_-45px_rgba(15,23,42,0.8)]">
            <h2 className="text-2xl font-semibold text-slate-100">Alur Rilis</h2>
            <p className="mt-4 text-slate-400">Website ini menggunakan `public/latest-version.json` sebagai sumber metadata rilis utama sementara aset installer didistribusikan melalui GitHub Releases.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default AboutPage
