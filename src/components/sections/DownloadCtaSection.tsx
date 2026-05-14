import { Link } from 'react-router-dom'
import SectionTitle from '../common/SectionTitle'

function DownloadCtaSection() {
  return (
    <section className="mt-20 rounded-[2rem] border border-slate-800 bg-slate-900/80 p-10 shadow-[0_35px_80px_-55px_rgba(15,23,42,0.95)] sm:p-14">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <SectionTitle eyebrow="Download" title="Get the latest release for your team" />
          <p className="mt-4 max-w-2xl text-slate-300">Direct download links, release metadata, and changelog access are only one click away.</p>
        </div>
        <Link to="/download" className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
          Visit download page
        </Link>
      </div>
    </section>
  )
}

export default DownloadCtaSection
