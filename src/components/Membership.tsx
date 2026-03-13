import React from 'react'
import { motion } from 'framer-motion'

const memberships = [
  {
    name: 'Day Pass',
    price: '$25',
    desc: 'Access to all shared spaces for one day. Perfect for travelers or those needing a change of scenery.'
  },
  {
    name: 'Hot Desk',
    price: '$200/mo',
    desc: 'Flexible seating in open workspace. Great for freelancers and remote workers.'
  },
  {
    name: 'Dedicated Desk',
    price: '$350/mo',
    desc: 'Your own desk in a shared office. Ideal for regulars who want a permanent spot.'
  },
  {
    name: 'Private Office',
    price: 'From $800/mo',
    desc: 'Fully furnished, lockable office for teams or individuals needing privacy.'
  },
]

export default function Membership() {
  return (
    <section id="membership" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="font-serif text-3xl md:text-5xl font-light mb-8 text-center"
        >
          Membership Plans
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {memberships.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col"
            >
              <h3 className="font-serif text-xl mb-2">{m.name}</h3>
              <span className="text-2xl font-medium mb-2">{m.price}</span>
              <p className="text-base opacity-80 flex-1">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
