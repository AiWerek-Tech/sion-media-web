import { Link } from 'react-router-dom'

function StatsPreviewSection() {
  return (
    <section className="mt-20 rounded-[2rem] border border-slate-800 bg-slate-900/80 p-10 shadow-[0_35px_80px_-55px_rgba(15,23,42,0.95)]">
      <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Statistics</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Public adoption metrics, made transparent</h2>
          <p className="mt-4 text-slate-300">View aggregated, privacy-safe usage stats from the SION Media ecosystem.</p>
        </div>
        <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 text-center shadow-[0_25px_60px_-45px_rgba(15,23,42,0.9)]">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Live preview</p>
          <p className="mt-3 text-5xl font-semibold text-white">4.8k</p>
          <p className="mt-2 text-slate-400">Verified installs across churches</p>
          <Link to="/statistics" className="mt-6 inline-flex rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
            Explore statistics
          </Link>
        </div>
      </div>
    </section>
  )
}

export default StatsPreviewSection
