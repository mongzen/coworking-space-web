import React from 'react'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="py-10 bg-black text-white">
      <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="font-serif text-xl md:text-2xl font-light"
        >
          Coworking Space
        </motion.div>
        <div className="text-sm opacity-70">© {new Date().getFullYear()} All rights reserved.</div>
      </div>
    </footer>
  )
}
