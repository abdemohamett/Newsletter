import { Navbar } from '@/components/nav/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'

const font = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Newsletter',
  description: 'Newsletter - The newsletter platform built for growth',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
