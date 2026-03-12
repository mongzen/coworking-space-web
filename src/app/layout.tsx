import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Office — Premium Coworking Space',
  description:
    'Modern coworking space website powered by Payload CMS, optimized for SEO, performance, and responsive layouts.'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
