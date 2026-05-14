import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import SectionTitle from '../components/common/SectionTitle'

function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="About" title="SION Media website foundation" />
        <div className="grid gap-8 lg:grid-cols-2">
          <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-[0_25px_60px_-45px_rgba(15,23,42,0.8)]">
            <h2 className="text-2xl font-semibold text-slate-100">Project Vision</h2>
            <p className="mt-4 text-slate-400">Membangun landing page software yang bersih, mudah digunakan, dan siap berintegrasi dengan desktop app serta publik analytics.</p>
          </section>
          <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-[0_25px_60px_-45px_rgba(15,23,42,0.8)]">
            <h2 className="text-2xl font-semibold text-slate-100">Mission</h2>
            <p className="mt-4 text-slate-400">Menjadi portal resmi yang menghubungkan pengguna dengan rilis desktop, dokumentasi, dan statistik publik secara transparan.</p>
          </section>
          <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-[0_25px_60px_-45px_rgba(15,23,42,0.8)]">
            <h2 className="text-2xl font-semibold text-slate-100">Technology Stack</h2>
            <ul className="mt-4 space-y-2 text-slate-400">
              <li>Vite + React + TypeScript</li>
              <li>Tailwind CSS</li>
              <li>GitHub Pages</li>
              <li>Firebase Auth + Firestore</li>
              <li>GitHub Releases</li>
            </ul>
          </section>
          <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-[0_25px_60px_-45px_rgba(15,23,42,0.8)]">
            <h2 className="text-2xl font-semibold text-slate-100">Architecture Summary</h2>
            <p className="mt-4 text-slate-400">Static site foundation with client-side routing, public Firestore reads, desktop update metadata, and minimal hosting requirements.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default AboutPage
