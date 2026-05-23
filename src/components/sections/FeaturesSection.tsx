import FeatureCard from '../ui/FeatureCard'
import { features } from '../../data/features'
import SectionTitle from '../common/SectionTitle'

function FeaturesSection() {
  return (
    <section className="mt-20">
      <SectionTitle eyebrow="Fitur Utama" title="Dibuat untuk operator multimedia gereja" />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            tag={feature.tag}
            iconName={feature.iconName}
          />
        ))}
      </div>
    </section>
  )
}

export default FeaturesSection
