import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/70 px-6 py-16 shadow-[0_40px_100px_-65px_rgba(15,23,42,0.95)] sm:px-10 lg:px-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.12),_transparent_25%)]" />
      <div className="relative mx-auto max-w-3xl text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">SION Media</p>
        <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Professional worship presentation system untuk operator gereja.</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          SION Media adalah aplikasi desktop broadcast-style untuk manajemen lagu, playlist, proyeksi lirik, stage display, dan update metadata untuk tim pelayanan.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link to="/download" className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
            Download latest release
          </Link>
          <Link to="/statistics" className="inline-flex items-center justify-center rounded-full border border-slate-800 bg-slate-950/90 px-7 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-500 hover:text-white">
            View public statistics
          </Link>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {[
            { label: 'Desktop-ready', value: 'Aplikasi Electron dengan kontrol proyektor dan live preview' },
            { label: 'Library ibadah', value: 'Manajemen lagu, metadata tempo, dan playlist service' },
            { label: 'Visual & Alkitab', value: 'Background, video, dan bacaan Alkitab untuk setiap layanan' },
          ].map((item) => (
            <div key={item.label} className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5 text-left shadow-[0_25px_60px_-45px_rgba(15,23,42,0.9)]">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">{item.label}</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection
