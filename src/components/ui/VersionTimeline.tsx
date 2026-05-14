import type { ChangelogEntry } from '../../types'

type VersionTimelineProps = {
  entries: ChangelogEntry[]
}

function VersionTimeline({ entries }: VersionTimelineProps) {
  return (
    <div className="space-y-8">
      {entries.map((entry) => (
        <article key={entry.version} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-[0_15px_40px_-30px_rgba(15,23,42,0.9)]">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">{entry.type}</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">{entry.version}</h3>
            </div>
            <p className="text-sm text-slate-400">{entry.date}</p>
          </div>
          <div className="mt-5 space-y-4 text-slate-300">
            {entry.notes.map((note) => (
              <p key={note}>• {note}</p>
            ))}
          </div>
        </article>
      ))}
    </div>
  )
}

export default VersionTimeline
