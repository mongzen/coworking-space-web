'use client'

import { motion } from 'framer-motion'
import Image from 'next/image';

type Stat = { label: string; value: string }
type FeatureImage = { imageURL: string }

type HomepageClientProps = {
  heroTitle: string
  heroDescription: string
  stats: Stat[]
  featuredImages: FeatureImage[]
  ctaTitle: string
  ctaDescription: string
  ctaButtonLabel: string
}

export function HomepageClient(props: HomepageClientProps) {
  return (
    <main className="mx-auto max-w-7xl space-y-20 px-6 py-10 md:px-10 md:py-14">
      <section className="grid gap-8 md:grid-cols-2 md:items-end">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="mb-3 text-sm uppercase tracking-[0.2em]">Coworking Experience</p>
          <h1 className="section-title">{props.heroTitle}</h1>
          <p className="mt-4 max-w-xl text-base text-neutral-700 md:text-lg">{props.heroDescription}</p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {props.stats.map((stat) => (
              <div key={stat.label} className="rounded border border-neutral-200 bg-white p-4 shadow-sm">
                <p className="text-3xl font-semibold">{stat.value}</p>
                <p className="mt-1 text-sm text-neutral-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 gap-4"
        >
          {props.featuredImages.slice(0, 4).map((image, idx) => (
            <div key={`${image.imageURL}-${idx}`} className="overflow-hidden rounded-xl">
              <Image
                className="h-48 w-full object-cover transition duration-700 hover:scale-105 md:h-56"
                src={image.imageURL}
                alt="Coworking environment"
                loading={idx > 0 ? 'lazy' : 'eager'}
                width={400}
                height={300}
              />
            </div>
          ))}
        </motion.div>
      </section>

      <section className="rounded-2xl bg-charcoal px-6 py-14 text-center text-bone md:px-8">
        <h2 className="section-title text-bone">{props.ctaTitle}</h2>
        <p className="mx-auto mt-3 max-w-xl text-neutral-300">{props.ctaDescription}</p>
        <button className="mt-8 rounded border border-bone px-5 py-3 text-sm uppercase tracking-wider transition hover:bg-bone hover:text-charcoal">
          {props.ctaButtonLabel}
        </button>
      </section>
    </main>
  )
}
