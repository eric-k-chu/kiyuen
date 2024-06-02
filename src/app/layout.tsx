import { cn } from '@/common'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Eric Chu',
  description: 'Eric Chu\'s portfolio website',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>): React.ReactElement {
  return (
    <html lang='en'>
      <body
        className={cn('min-h-screen font-sans antialiased', inter.variable)}
      >
        {children}
      </body>
    </html>
  )
}
