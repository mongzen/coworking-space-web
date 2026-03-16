'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useMemo, useRef, useState } from 'react'

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

type ParsedCounter = {
  target: number
  suffix: string
}

function parseValue(value: string): ParsedCounter {
  const numeric = Number.parseInt(value.replace(/\D/g, ''), 10)
  return {
    target: Number.isNaN(numeric) ? 0 : numeric,
    suffix: value.replace(/[\d\s]/g, '')
  }
}

function StatCounter({ value, label, shouldStart }: { value: string; label: string; shouldStart: boolean }) {
  const [displayValue, setDisplayValue] = useState(0)
  const parsed = useMemo(() => parseValue(value), [value])

  useEffect(() => {
    if (!shouldStart) return

    const duration = 1400
    const start = performance.now()

    const tick = (time: number) => {
      const progress = Math.min((time - start) / duration, 1)
      setDisplayValue(Math.floor(parsed.target * progress))

      if (progress < 1) {
        requestAnimationFrame(tick)
      }
    }

    requestAnimationFrame(tick)
  }, [parsed.target, shouldStart])

  return (
    <div className="border-t border-black/10 pt-6 md:pt-7">
      <p className="text-5xl leading-none md:text-6xl">{displayValue}{parsed.suffix}</p>
      <p className="mt-3 text-base text-neutral-600">{label}</p>
    </div>
  )
}

function RevealImage({ imageURL, alt, priority = false }: { imageURL: string; alt: string; priority?: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ clipPath: 'inset(0 0 100% 0)', opacity: 0.4 }}
      animate={inView ? { clipPath: 'inset(0 0 0% 0)', opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative h-full w-full overflow-hidden"
    >
      <Image src={imageURL} alt={alt} fill className="object-cover" priority={priority} />
    </motion.div>
  )
}

export function HomepageClient(props: HomepageClientProps) {
  const [startCounter, setStartCounter] = useState(false)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setStartCounter(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  const stats = props.stats.slice(0, 4)
  const images = props.featuredImages.slice(0, 2)

  return (
    <main className="min-h-screen bg-[#f7f7f7] text-black">
      <section className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-cols-1 border-x border-black/10 lg:grid-cols-12">
        <header className="flex items-center justify-between gap-6 border-b border-black/10 px-6 py-5 lg:col-span-12 lg:px-12">
          <motion.p initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-serif leading-none">
            Office
          </motion.p>

          <nav className="hidden items-center gap-12 font-lato text-2xl md:flex md:text-3xl">
            <a href="#about" className="transition hover:opacity-60">About</a>
            <a href="#membership" className="transition hover:opacity-60">Membership</a>
            <a href="#feature" className="transition hover:opacity-60">Feature</a>
            <a href="#location" className="transition hover:opacity-60">Location</a>
          </nav>

          <button className="border border-black bg-black px-5 py-2 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-transparent hover:text-black md:px-8 md:py-3">
            Book Now
          </button>
        </header>

        <div className="order-2 border-t border-black/10 lg:order-1 lg:col-span-3 lg:border-r lg:border-t-0">
          <div className="h-[260px] border-b border-black/10" />
          <div className="relative h-[320px] md:h-[420px] lg:h-[calc(100%-260px)]">
            <RevealImage
              imageURL={images[0]?.imageURL || 'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80'}
              alt="Coworking lounge"
            />
          </div>
        </div>

        <div className="order-1 border-t border-black/10 px-6 py-10 md:px-10 lg:order-2 lg:col-span-6 lg:border-r lg:px-12 lg:py-16" id="about">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl text-6xl leading-[0.95] md:text-8xl"
          >
            {props.heroTitle}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 max-w-lg text-xl text-neutral-700 md:text-4xl"
          >
            {props.heroDescription}
          </motion.p>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2" id="feature">
            {stats.map((stat) => (
              <StatCounter key={stat.label} value={stat.value} label={stat.label} shouldStart={startCounter} />
            ))}
          </div>
        </div>

        <aside className="order-3 border-t border-black/10 lg:col-span-3 lg:border-t-0" id="location">
          <div className="h-[200px] border-b border-black/10" />
          <div className="relative h-[320px] border-b border-black/10 md:h-[420px] lg:h-[540px]">
            <RevealImage
              imageURL={images[1]?.imageURL || 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80'}
              alt="Open office"
              priority
            />
          </div>
          <div className="flex h-[120px] items-center justify-center" id="membership">
            <button className="group flex items-center gap-4 text-2xl font-serif">
              Explore
              <span className="h-px w-14 bg-black transition group-hover:w-20" />
            </button>
          </div>
        </aside>
      </section>
    </main>
  )
}
