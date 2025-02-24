import { readCachedBlogs } from '@/slib'
import type { Metadata } from 'next'
import Link from 'next/link'
import type { ReactElement } from 'react'

export const metadata: Metadata = {
  title: 'kiyuen - blogs',
  description: 'Browse through my blogs.',
  keywords: [
    'software engineer',
    'full stack developer',
    'programming',
    'coding',
    'portfolio',
    'blogs',
  ],
  openGraph: {
    url: 'https://kiyuen.dev/blogs',
    siteName: 'kiyuen',
    type: 'website',
    title: 'kiyuen - blogs',
    description: 'Browse through my blogs.',
    images: [
      {
        url: 'https://kiyuen.dev/images/thumb/home.png',
        width: 1920,
        height: 900,
        alt: 'kiyuen - blogs',
      },
    ],
  },
}

export default async function Blogs(): Promise<ReactElement> {
  const blogs = await readCachedBlogs()
  return (
    <div className='flex flex-col gap-y-4'>
      {blogs.map((b) => (
        <Link
          key={b.filename}
          href={`/blogs/${b.filename}`}
          className='group flex translate-x-0 items-center justify-between rounded-md p-4 transition-transform hover:translate-x-1 hover:bg-ctp-surface0/20'
        >
          <div>
            <h1 className='font-bold text-lg group-hover:text-ctp-peach'>{b.title}</h1>
            <p className='text-ctp-overlay2 text-sm'>{b.description}</p>
          </div>
          <p className='text-ctp-overlay2 text-sm'>{b.date.toLocaleDateString()}</p>
        </Link>
      ))}
    </div>
  )
}
