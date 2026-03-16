import config from '@payload-config'
import { getPayload } from 'payload'
import { HomepageClient } from '@/components/HomepageClient'

const fallbackData = {
  heroTitle: 'Your Future Office',
  heroDescription: 'Upgrade your work space, reduce your stress',
  stats: [
    { label: 'Rooms Available', value: '40' },
    { label: 'Reading Resource', value: '54+' },
    { label: 'Device Setup', value: '77' },
    { label: 'Hour Open', value: '24' }
  ],
  featuredImages: [
    { imageURL: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80' },
    { imageURL: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80' }
  ],
  cta: {
    title: 'Ready To Visit In Person?',
    description: 'Explore all spaces and choose the best setup for your business in minutes.',
    buttonLabel: 'Book a Tour'
  }
}

export default async function HomePage() {
  try {
    const payload = await getPayload({ config })
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
      <HomepageClient
        heroTitle={fallbackData.heroTitle}
        heroDescription={fallbackData.heroDescription}
        stats={fallbackData.stats}
        featuredImages={fallbackData.featuredImages}
        ctaTitle={fallbackData.cta.title}
        ctaDescription={fallbackData.cta.description}
        ctaButtonLabel={fallbackData.cta.buttonLabel}
      />
    )
  }
}
