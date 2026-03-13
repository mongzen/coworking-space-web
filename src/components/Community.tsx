import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Community() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="font-serif text-3xl md:text-5xl font-light mb-8 text-center"
        >
          A Community of Creators & Innovators
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="max-w-2xl mx-auto text-center text-lg md:text-xl opacity-80 mb-12"
        >
          Join a vibrant network of professionals, entrepreneurs, and creatives. Our space is designed to foster collaboration, inspiration, and growth.
        </motion.p>
        <div className="flex flex-wrap justify-center gap-8">
          <Image src="/images/community-1.jpg" alt="Community 1" width={320} height={220} className="rounded-xl object-cover shadow-md" />
          <Image src="/images/community-2.jpg" alt="Community 2" width={320} height={220} className="rounded-xl object-cover shadow-md" />
          <Image src="/images/community-3.jpg" alt="Community 3" width={320} height={220} className="rounded-xl object-cover shadow-md" />
        </div>
      </div>
    </section>
  )
}
