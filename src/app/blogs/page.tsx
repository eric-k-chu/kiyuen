import { readBlogs } from '@/slib'
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
  const blogs = await readBlogs()
  return (
    <div className='mx-auto grid h-dvh max-w-4xl grid-cols-2 gap-4 p-8'>
      {blogs.map((b, i) => (
        <Link
          key={b.filename}
          href={`/blogs/${b.filename}`}
          data-front={i === 0}
          className='col-span-full h-64 scale-100 rounded-md border border-ctp-subtext0 p-8 shadow transition-transform hover:scale-[1.01] hover:border-ctp-flamingo data-[front=true]:col-span-full data-[front=true]:h-96 data-[front=true]:border-ctp-flamingo md:col-span-1'
        >
          <h1 className='font-bold text-xl'>{b.title}</h1>
          <p className='text-gray-600 text-sm'>{b.description}</p>
        </Link>
      ))}
    </div>
  )
}
