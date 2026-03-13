import React from 'react'
import { motion } from 'framer-motion'
import Stats from './Stats'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="w-full bg-white pt-12 pb-8 md:pt-24 md:pb-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 md:px-12">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="font-serif text-5xl md:text-7xl font-light leading-tight mb-8"
          >
            Your Future <br /> Office
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-lg md:text-2xl max-w-xl mb-10"
          >
            Upgrade your work space, reduce your stress.
          </motion.p>
          <Stats />
        </div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="flex flex-col gap-4 items-center justify-center"
        >
          <Image
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80"
            alt="Coworking Space"
            width={520}
            height={400}
            className="rounded-xl shadow-lg object-cover w-full h-auto"
            priority
          />
        </motion.div>
      </div>
    </section>
  )
}
