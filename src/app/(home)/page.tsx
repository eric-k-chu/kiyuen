import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'kiyuen',
  description: 'Learn about my career as a software engineer.',
  keywords: ['software engineer', 'full stack developer', 'programming', 'coding', 'portfolio'],
  openGraph: {
    url: 'https://kiyuen.dev',
    siteName: 'kiyuen',
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
  return <main>Foo Bar</main>
}
