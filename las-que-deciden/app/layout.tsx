import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'

const opensans = Open_Sans({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  })

export const metadata: Metadata = {
  title: 'Las que deciden',
  description: 'Dataviz sobre los derechos políticos de las mujeres en América Latina',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={opensans.className}>{children}</body>
    </html>
  )
}
