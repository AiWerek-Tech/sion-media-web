import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import HeroSection from '../components/sections/HeroSection'
import FeaturesSection from '../components/sections/FeaturesSection'
import RoadmapSection from '../components/sections/RoadmapSection'
import FaqSection from '../components/sections/FaqSection'
import DownloadCtaSection from '../components/sections/DownloadCtaSection'
import WorkflowSection from '../components/sections/WorkflowSection'
import ReleaseHighlight from '../components/sections/ReleaseHighlight'
import MobileCompanionSection from '../components/sections/MobileCompanionSection'
import ObsLiveInputSection from '../components/sections/ObsLiveInputSection'

function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <HeroSection />
        <ReleaseHighlight />
        <WorkflowSection />
        <ObsLiveInputSection />
        <MobileCompanionSection />
        <FeaturesSection />
        <RoadmapSection />
        <FaqSection />
        <DownloadCtaSection />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
