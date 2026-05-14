import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/70 px-6 py-16 shadow-[0_40px_100px_-65px_rgba(15,23,42,0.95)] sm:px-10 lg:px-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.12),_transparent_25%)]" />
      <div className="relative mx-auto max-w-3xl text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">SION Media</p>
        <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">A polished software portal for worship and church media teams.</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Discover releases, review changelog updates, and explore public adoption metrics from a modern, GitHub Pages friendly website.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link to="/download" className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
            Download latest release
          </Link>
          <Link to="/statistics" className="inline-flex items-center justify-center rounded-full border border-slate-800 bg-slate-950/90 px-7 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-500 hover:text-white">
            View public statistics
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
