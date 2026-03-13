import React from 'react'
import { motion } from 'framer-motion'

const stats = [
  { label: 'Rooms Available', value: 40 },
  { label: 'Reading Resource', value: '54+' },
  { label: 'Device Setup', value: 77 },
  { label: 'Hour Open', value: 24 },
]

export default function Stats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: i * 0.15, ease: 'easeOut' }}
          className="flex flex-col items-center"
        >
          <span className="font-serif text-3xl md:text-4xl font-light mb-1">{stat.value}</span>
          <span className="text-base opacity-80">{stat.label}</span>
        </motion.div>
      ))}
    </div>
  )
}
