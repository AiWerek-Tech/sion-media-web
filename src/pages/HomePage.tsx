import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import HeroSection from '../components/sections/HeroSection'
import FeaturesSection from '../components/sections/FeaturesSection'
import ScreenshotsSection from '../components/sections/ScreenshotsSection'
import WhySection from '../components/sections/WhySection'
import RoadmapSection from '../components/sections/RoadmapSection'
import FaqSection from '../components/sections/FaqSection'
import ReleaseHighlight from '../components/sections/ReleaseHighlight'
import DownloadCtaSection from '../components/sections/DownloadCtaSection'
import StatsPreviewSection from '../components/sections/StatsPreviewSection'

function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <HeroSection />
        <ReleaseHighlight />
        <FeaturesSection />
        <ScreenshotsSection />
        <WhySection />
        <RoadmapSection />
        <FaqSection />
        <StatsPreviewSection />
        <DownloadCtaSection />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
