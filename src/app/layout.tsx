import { cn } from '@/lib'
import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import type { PropsWithChildren, ReactElement } from 'react'
import { Footer } from './footer'
import './globals.css'
import { Nav } from './nav'
import { Socials } from './socials'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://kiyuen.dev'),
  openGraph: {
    siteName: 'kiyuen | Software Engineer',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: 'index, follow',
  },
  applicationName: 'kiyuen | Software Engineer',
  appleWebApp: {
    title: 'kiyuen | Software Engineer',
    statusBarStyle: 'black-translucent',
    capable: true,
  },
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
    shortcut: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
}

export default function RootLayout({ children }: PropsWithChildren): ReactElement {
  return (
    <html lang='en'>
      <body
        className={cn(jetbrainsMono.variable, jetbrainsMono.className, 'bg-ctp-base text-ctp-text')}
      >
        <Nav />
        <Socials />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
