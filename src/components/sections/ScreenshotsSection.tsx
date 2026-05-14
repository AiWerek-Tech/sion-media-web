import SectionTitle from '../common/SectionTitle'

function ScreenshotsSection() {
  return (
    <section className="mt-20">
      <SectionTitle eyebrow="Screenshots" title="Visual preview of the platform experience" />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {['Overview', 'Release Notes', 'Analytics'].map((label) => (
          <div key={label} className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-6 shadow-[0_25px_60px_-45px_rgba(15,23,42,0.9)]">
            <div className="h-64 rounded-3xl bg-slate-950/80 p-4 text-slate-400 shadow-inner">
              <div className="mb-4 h-5 w-28 rounded-full bg-slate-800"></div>
              <div className="grid gap-3">
                <div className="h-4 w-3/4 rounded-full bg-slate-800"></div>
                <div className="h-4 w-1/2 rounded-full bg-slate-800"></div>
                <div className="h-4 w-5/6 rounded-full bg-slate-800"></div>
                <div className="h-4 w-2/3 rounded-full bg-slate-800"></div>
              </div>
            </div>
            <h3 className="mt-5 text-xl font-semibold text-white">{label}</h3>
            <p className="mt-3 text-slate-400">Preview key screens and content blocks to showcase the SION Media website flow.</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ScreenshotsSection
