import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const showcase = [
  {
    title: 'Private Offices',
    desc: 'Elegant, quiet, and fully equipped for productivity.',
    img: '/images/office.jpg',
  },
  {
    title: 'Open Workspace',
    desc: 'Collaborative areas with natural light and premium amenities.',
    img: '/images/open-space.jpg',
  },
  {
    title: 'Meeting Rooms',
    desc: 'State-of-the-art spaces for teams and presentations.',
    img: '/images/meeting-room.jpg',
  },
]

export default function WorkspaceShowcase() {
  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="font-serif text-3xl md:text-5xl font-light mb-12 text-center"
        >
          Discover Our Spaces
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-10">
          {showcase.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: 'easeOut' }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
            >
              <Image src={item.img} alt={item.title} width={480} height={320} className="object-cover w-full h-56" />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-serif text-xl mb-2">{item.title}</h3>
                <p className="text-base opacity-80 flex-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
