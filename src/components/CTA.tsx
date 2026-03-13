import React from 'react'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="font-serif text-3xl md:text-5xl font-light mb-6"
        >
          Ready to Elevate Your Workday?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="text-lg md:text-xl opacity-80 mb-8"
        >
          Book a tour or become a member today and experience the future of coworking.
        </motion.p>
        <motion.a
          href="#membership"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          className="inline-block px-8 py-3 rounded-full bg-black text-white font-medium text-lg shadow-lg hover:bg-gray-900 transition"
        >
          Get Started
        </motion.a>
      </div>
    </section>
  )
}
