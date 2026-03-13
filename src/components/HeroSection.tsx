import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="min-h-[60vh] flex flex-col md:flex-row items-center justify-between py-12 md:py-24 bg-bone text-charcoal">
      <div className="flex-1 flex flex-col gap-6 md:gap-10 px-6 md:px-16">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-6xl font-semibold leading-tight"
        >
          Your Future <br /> Office
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-lg md:text-2xl max-w-xl"
        >
          Upgrade your work space, reduce your stress.
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="flex-1 flex flex-col gap-4 items-center justify-center px-6 md:px-0"
      >
        <Image
          src="/hero-office.jpg"
          alt="Coworking Space Hero"
          className="rounded-xl shadow-lg w-full max-w-md object-cover"
          width={500}
          height={500}
        />
      </motion.div>
    </section>
  );
}
