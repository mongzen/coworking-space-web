import type { Metadata } from 'next'

import './globals.css'
import { Inter } from 'next/font/google'
import { Playfair_Display } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' })

export const metadata: Metadata = {
  title: 'Office — Premium Coworking Space',
  description:
    'Modern coworking space website powered by Payload CMS, optimized for SEO, performance, and responsive layouts.'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  )
}

