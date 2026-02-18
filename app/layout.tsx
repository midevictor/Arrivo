import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { getOrganizationJsonLd } from '@/lib/seo'

import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  metadataBase: new URL('https://arrivo.com'),
  title: {
    default: 'Arrivo - Discover Your Dream Property',
    template: '%s | Arrivo',
  },
  description: 'Find your perfect property with Arrivo. Browse luxury homes, smart investments, and effortless property management.',
  keywords: ['real estate', 'property', 'luxury homes', 'property management', 'investment', 'buy home', 'villa', 'apartment'],
  authors: [{ name: 'Arrivo' }],
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Arrivo',
    title: 'Arrivo - Discover Your Dream Property',
    description: 'Find your perfect property with Arrivo. Browse luxury homes, smart investments, and effortless property management.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Arrivo - Discover Your Dream Property',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arrivo - Discover Your Dream Property',
    description: 'Find your perfect property with Arrivo.',
  },
  icons: {
    icon: '/arrivo-svg.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationJsonLd = getOrganizationJsonLd();

  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {/* Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  )
}
