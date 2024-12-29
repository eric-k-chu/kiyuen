import { cn } from '@/lib'
import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import type { PropsWithChildren, ReactElement } from 'react'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'kiyuen',
  description: 'Eric Chu Portfolio',
}

export default function RootLayout({ children }: PropsWithChildren): ReactElement {
  return (
    <html lang='en'>
      <body className={cn(jetbrainsMono.className)}>{children}</body>
    </html>
  )
}
