import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Rooms Available', value: 40 },
  { label: 'Reading Resource', value: 54 },
  { label: 'Desk Space', value: 77 },
  { label: 'Hour Open', value: 24 },
];

export default function FeatureMetrics() {
  return (
    <section className="bg-bone py-12 md:py-20">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.15, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center"
          >
            <span className="font-serif text-4xl md:text-5xl font-semibold mb-2">
              {stat.value}
            </span>
            <span className="text-base md:text-lg text-center opacity-80">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
