import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const gallery = [
  '/images/gallery-1.jpg',
  '/images/gallery-2.jpg',
  '/images/gallery-3.jpg',
  '/images/gallery-4.jpg',
  '/images/gallery-5.jpg',
  '/images/gallery-6.jpg',
]

export default function Gallery() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="font-serif text-3xl md:text-5xl font-light mb-12 text-center"
        >
          Gallery
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {gallery.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: 'easeOut' }}
              className="overflow-hidden rounded-xl shadow-md"
            >
              <Image src={src} alt={`Gallery ${i + 1}`} width={400} height={280} className="object-cover w-full h-48 md:h-60" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
