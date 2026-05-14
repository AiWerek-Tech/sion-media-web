import type { LatestVersionData } from '../../types'

type DownloadCardProps = {
  data: LatestVersionData
}

function DownloadCard({ data }: DownloadCardProps) {
  return (
    <section className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 shadow-[0_35px_80px_-50px_rgba(15,23,42,0.9)]">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Latest release</p>
          <h1 className="mt-3 text-4xl font-semibold text-white">SION Media {data.version}</h1>
          <p className="mt-4 max-w-2xl text-slate-300">Release date: <span className="font-semibold text-white">{data.releaseDate}</span></p>
        </div>
        <a
          href={data.downloadUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          Download release
        </a>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Installer size</p>
          <p className="mt-3 text-xl font-semibold text-white">~80 MB</p>
        </div>
        <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Platform</p>
          <p className="mt-3 text-xl font-semibold text-white">Windows • macOS</p>
        </div>
      </div>

      <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Release notes</p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
          {data.notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default DownloadCard
