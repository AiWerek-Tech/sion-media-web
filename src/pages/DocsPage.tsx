import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import SectionTitle from '../components/common/SectionTitle'
import { docsSections } from '../data/docsSections'

function DocsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Documentation" title="Quick start and support guides" />
        <div className="mt-10 space-y-8">
          {docsSections.map((section) => (
            <section key={section.title} className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-[0_25px_60px_-45px_rgba(15,23,42,0.8)]">
              <h2 className="text-2xl font-semibold text-slate-100">{section.title}</h2>
              <p className="mt-3 text-slate-400">{section.description}</p>
              <ul className="mt-6 space-y-3 text-slate-300">
                {section.items.map((item) => (
                  <li key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 shadow-inner"> 
                    <h3 className="font-medium text-slate-100">{item.title}</h3>
                    <p className="mt-1 text-slate-400">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default DocsPage
