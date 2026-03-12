import config from '@payload-config'
import { getPayload } from 'payload'
import { HomepageClient } from '@/components/HomepageClient'
import HeroSection from '../../components/HeroSection'
import FeatureMetrics from '../../components/FeatureMetrics'
import CommunitySection from '../../components/CommunitySection'
import WorkspaceSection from '../../components/WorkspaceSection'
import MembershipSection from '../../components/MembershipSection'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const fallbackData = {
  heroTitle: 'Your Future Office',
  heroDescription:
    'Upgrade your workspace with beautifully designed coworking spaces, premium amenities, and a community that helps your team grow.',
  stats: [
    { label: 'Meeting Rooms', value: '40' },
    { label: 'Co-working Seats', value: '54+' },
    { label: 'Private Suites', value: '77' },
    { label: 'Hot Desks', value: '24' }
  ],
  featuredImages: [
    { imageURL: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80' },
    { imageURL: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80' },
    { imageURL: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80' },
    { imageURL: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80' }
  ],
  cta: {
    title: 'Ready To Visit In Person?',
    description: 'Explore all spaces and choose the best setup for your business in minutes.',
    buttonLabel: 'Book a Tour'
  }
}

export default async function HomePage() {
  const payload = await getPayload({ config })

  try {
    const homepage = await payload.findGlobal({ slug: 'homepage' })

    return (
      <HomepageClient
        heroTitle={homepage.heroTitle || fallbackData.heroTitle}
        heroDescription={homepage.heroDescription || fallbackData.heroDescription}
        stats={homepage.stats?.length ? homepage.stats : fallbackData.stats}
        featuredImages={homepage.featuredImages?.length ? homepage.featuredImages : fallbackData.featuredImages}
        ctaTitle={homepage.cta?.title || fallbackData.cta.title}
        ctaDescription={homepage.cta?.description || fallbackData.cta.description}
        ctaButtonLabel={homepage.cta?.buttonLabel || fallbackData.cta.buttonLabel}
      />
    )
  } catch {
    return (
      <>
        <Navbar />
        <main>
          <HeroSection />
          <FeatureMetrics />
          <CommunitySection />
          <WorkspaceSection />
          <MembershipSection />
        </main>
        <Footer />
      </>
    )
  }
}
