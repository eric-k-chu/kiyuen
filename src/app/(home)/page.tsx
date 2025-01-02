import { CornerBottomRightIcon, CornerTopLeftIcon } from '@radix-ui/react-icons'
import type { Metadata } from 'next'
import type { ReactElement } from 'react'
import meta from '~meta'

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

export default function Home(): ReactElement {
  return (
    <section className='scroller-section gap-4'>
      <h1 className='basis-1/2 text-end text-lg text-yang/50 uppercase tracking-widest sm:text-2xl'>
        Eric Chu
      </h1>
      <div className='relative p-4 [text-orientation:upright] [writing-mode:vertical-lr]'>
        <CornerTopLeftIcon className='absolute top-0 left-0 size-4 sm:size-6' />
        <h1 className='select-none text-3xl sm:text-6xl'>{meta.hanzi}</h1>
        <CornerBottomRightIcon className='absolute right-0 bottom-0 size-4 sm:size-6' />
      </div>
      <h1 className='basis-1/2 text-lg text-yang/50 uppercase tracking-widest sm:text-2xl'>
        Developer
      </h1>
    </section>
  )
}
