import { cn } from '@/lib'
import { AppShell } from '@/providers'
import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import type { ReactElement } from 'react'
import './globals.css'

// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// })

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// })

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'kiyuen',
  description: 'Eric Chu Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>): ReactElement {
  return (
    <html lang='en'>
      <body
        className={cn(
          `${jetbrainsMono.variable} flex min-h-screen flex-col items-center justify-center p-4 antialiased`
        )}
      >
        <AppShell defaultDir='ltr' defaultTheme='dark'>
          {children}
        </AppShell>
      </body>
    </html>
  )
}
