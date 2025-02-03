import { cn } from '@/lib'
import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import type { PropsWithChildren, ReactElement } from 'react'
import './globals.css'
import { Profile } from './profile'

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
        className={cn(
          jetbrainsMono.variable,
          jetbrainsMono.className,
          'mx-auto max-w-screen-lg bg-ctp-mantle text-ctp-text'
        )}
      >
        <nav className='top-0 bottom-0 shrink-0 md:fixed md:w-60'>
          <Profile />
        </nav>
        <main className='grow flex-col md:ml-60 md:flex md:h-dvh md:p-4'>
          <div className='h-full rounded-md bg-ctp-base p-4'>{children}</div>
        </main>
      </body>
    </html>
  )
}
