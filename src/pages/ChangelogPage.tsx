import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import SectionTitle from '../components/common/SectionTitle'
import VersionTimeline from '../components/ui/VersionTimeline'
import { changelogEntries } from '../data/changelog'

function ChangelogPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Changelog" title="Catatan rilis dan riwayat pembaruan" />
        <p className="max-w-2xl text-slate-400">
          Lacak evolusi SION Media dari versi, catatan build, dan perbaikan platform.
        </p>
        <div className="mt-10 space-y-6">
          <VersionTimeline entries={changelogEntries} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default ChangelogPage
