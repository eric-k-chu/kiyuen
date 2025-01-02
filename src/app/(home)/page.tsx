import { SNAPS } from '@/lib'
import { SnapProvider } from '@/providers'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { SnapElements } from './elements'
import { SnapNav } from './nav'

export const metadata: Metadata = {
  title: 'kiyuen',
  description: 'Learn about my career as a software engineer.',
  keywords: [
    'software engineer',
    'full stack developer',
    'programming',
    'coding',
    'portfolio',
    'coding',
  ],
  openGraph: {
    url: 'https://kiyuen.dev',
    type: 'website',
    title: 'kiyuen',
    description: 'Learn about my career as a software engineer.',
    images: [
      {
        url: 'https://kiyuen.dev/images/thumb/home.png',
        width: 1920,
        height: 900,
        alt: 'kiyuen - home',
      },
    ],
  },
}

export default function Home(): ReactNode {
  return (
    <SnapProvider snaps={SNAPS}>
      <SnapElements />
      <SnapNav />
    </SnapProvider>
  )
}
