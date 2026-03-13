import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const benefits = [
  '24/7 Access & Security',
  'High-Speed Wi-Fi',
  'Premium Coffee & Snacks',
  'Event & Networking Opportunities',
  'Flexible Membership Plans',
  'Printing & Office Supplies',
]

export default function Benefits() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="font-serif text-3xl md:text-5xl font-light mb-8 text-center"
        >
          Benefits of Membership
        </motion.h2>
        <ul className="grid md:grid-cols-2 gap-6 mt-8">
          {benefits.map((benefit, i) => (
            <motion.li
              key={benefit}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: 'easeOut' }}
              className="flex items-center text-lg"
            >
              <CheckCircleIcon className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0" />
              <span>{benefit}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
