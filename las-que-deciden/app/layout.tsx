import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Las que deciden',
  description: 'Los derechos políticos de las mujeres en América Latina',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
