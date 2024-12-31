import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Left } from './left'
import { Right } from './right'
import { asciiSm } from './util'

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
    <main className='flex h-dvh w-dvw flex-col items-center gap-4 p-4 sm:flex-row'>
      <Left>
        <pre>{'>'} neofetch</pre>
        <pre className='grid grid-cols-2'>
          <pre className='text-sapphire'>{asciiSm}</pre>
          <pre className='space-y-2'>
            <pre>
              <span className='text-sapphire'>Framework:</span> Next.js
            </pre>
            <pre>
              <span className='text-sapphire'>Host:</span> kiyuen
            </pre>
            <pre>
              <span className='text-sapphire'>Shell:</span> bash 5.1.8
            </pre>
            <pre>
              <span className='text-sapphire'>Terminal:</span> Ghostty
            </pre>
          </pre>
        </pre>
      </Left>
      <div className='grid size-full basis-full grid-rows-2 gap-4 sm:basis-1/2'>
        <Right />
        <Right />
      </div>
    </main>
  )
}
