import React from 'react';
import { motion } from 'framer-motion';

export default function CommunitySection() {
  return (
    <section className="bg-charcoal text-bone py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-5xl font-semibold mb-8 text-center"
        >
          A Community At Work
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="bg-bone text-charcoal rounded-xl p-6 shadow-lg flex flex-col gap-2"
          >
            <span className="font-bold text-lg mb-2">100+ Renowned Companies</span>
            <span className="text-sm opacity-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</span>
            <a href="#" className="mt-2 text-charcoal underline text-sm font-medium">Learn More</a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="bg-bone text-charcoal rounded-xl p-6 shadow-lg flex flex-col gap-2"
          >
            <span className="font-bold text-lg mb-2">3 Buildings Available For Co-Work</span>
            <span className="text-sm opacity-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</span>
            <a href="#" className="mt-2 text-charcoal underline text-sm font-medium">Learn More</a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="bg-bone text-charcoal rounded-xl p-6 shadow-lg flex flex-col gap-2"
          >
            <span className="font-bold text-lg mb-2">Space To Make Your Own</span>
            <span className="text-sm opacity-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</span>
            <a href="#" className="mt-2 text-charcoal underline text-sm font-medium">Explore</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
