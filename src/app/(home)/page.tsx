import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Hero } from '../hero'
import { SnapSections } from './sections'

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
    <main className='flex items-center justify-center'>
      <Hero className='hidden sm:grid' />
      <SnapSections />
    </main>
  )
}
