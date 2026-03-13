import React from 'react'
import { motion } from 'framer-motion'

const menu = [
  { label: 'About', href: '#' },
  { label: 'Membership', href: '#' },
  { label: 'Feature', href: '#' },
  { label: 'Location', href: '#' },
]

export default function Header() {
  return (
    <header className="w-full bg-white z-50 sticky top-0">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-6 px-6 md:px-12">
        <span className="font-serif text-2xl font-bold tracking-tight">Office</span>
        <ul className="hidden md:flex gap-10 text-lg">
          {menu.map((item) => (
            <li key={item.label}>
              <a className="hover:underline" href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <motion.a
          whileHover={{ scale: 1.05 }}
          className="bg-black text-white px-6 py-2 rounded font-medium shadow hover:bg-white hover:text-black border border-black transition-colors"
          href="#"
        >
          Book Now
        </motion.a>
      </nav>
    </header>
  )
}
