import type { Metadata } from 'next'
import { Oswald, Inter } from 'next/font/google' // 1. Import Oswald and Inter
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

// 2. Set up the font variables
const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter' // This will be the default
})

const oswald = Oswald({ 
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-oswald' // This will be for titles
})

export const metadata: Metadata = {
  title: 'Amazia - Your path, your journey, your Algeria',
  description: 'Discover authentic Algerian cultural experiences, connect with local guides, and join a thriving community of travelers.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      {/* 3. Apply both font variables to the body */}
      <body className={`${inter.variable} ${oswald.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}