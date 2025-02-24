import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { SNAP_ELEMENTS } from './snaps'

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
  return <div className='scroller'>{SNAP_ELEMENTS}</div>
}
