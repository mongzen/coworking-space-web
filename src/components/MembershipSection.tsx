import React from 'react';
import { motion } from 'framer-motion';

const memberships = [
  {
    name: 'Remote Worker',
    price: '22,000',
    features: [
      'Duis aute irure dolor in reprehenderit in voluptate velit esse',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco',
      'Consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    ],
  },
  {
    name: 'Outlying Worker',
    price: '45,000',
    features: [
      'Duis aute irure dolor in reprehenderit in voluptate velit esse',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco',
      'Consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    ],
  },
  {
    name: 'Resiedent',
    price: '78,000',
    features: [
      'Duis aute irure dolor in reprehenderit in voluptate velit esse',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco',
      'Consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    ],
  },
];

export default function MembershipSection() {
  return (
    <section className="bg-charcoal text-bone py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-5xl font-semibold mb-10 text-center"
        >
          Our Memberships
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {memberships.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="bg-bone text-charcoal rounded-xl p-8 shadow-lg flex flex-col gap-4"
            >
              <span className="font-bold text-xl mb-2">{m.name}</span>
              <ul className="text-sm opacity-80 mb-4 list-disc list-inside space-y-1">
                {m.features.map((f, j) => (
                  <li key={j}>{f}</li>
                ))}
              </ul>
              <span className="text-2xl font-serif font-semibold mt-auto">Rs. {m.price}/-</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
