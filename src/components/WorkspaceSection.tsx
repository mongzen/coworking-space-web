import React from 'react';
import { motion } from 'framer-motion';

const spaces = [
  {
    title: 'Ready To Move',
    img: '/space1.jpg',
  },
  {
    title: 'One And Two Year Lease Available',
    img: '/space2.jpg',
  },
  {
    title: 'One Time 30+ People Work Space',
    img: '/space3.jpg',
  },
  {
    title: 'Consultant Space',
    img: '/space4.jpg',
  },
  {
    title: 'Work Space',
    img: '/space5.jpg',
  },
];

export default function WorkspaceSection() {
  return (
    <section className="bg-bone py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-5xl font-semibold mb-10 text-center"
        >
          Space To Suit Your Needs
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {spaces.map((space, i) => (
            <motion.div
              key={space.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-lg bg-white flex flex-col"
            >
              <img
                src={space.img}
                alt={space.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4 flex-1 flex items-center justify-center">
                <span className="font-medium text-center text-lg md:text-xl text-charcoal">
                  {space.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
