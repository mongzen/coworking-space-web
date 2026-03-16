import type { Metadata } from 'next'

import './globals.css'
import { Inter } from 'next/font/google'
import { Playfair_Display } from 'next/font/google'
import { Lato } from 'next/font/google'
import { Italiana } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' })
const lato = Lato({ subsets: ['latin'], weight: ['300', '400', '700'], variable: '--font-lato', display: 'swap' })
const italiana = Italiana({ subsets: ['latin'], weight: '400', variable: '--font-italiana', display: 'swap' })

export const metadata: Metadata = {
  title: 'Office — Premium Coworking Space',
  description:
    'Modern coworking space website powered by Payload CMS, optimized for SEO, performance, and responsive layouts.'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${lato.variable} ${italiana.variable}`}>
      <body>{children}</body>
    </html>
  )
}

