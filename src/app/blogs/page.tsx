import { chunk } from '@/lib'
import { readBlogs } from '@/slib'
import Link from 'next/link'
import type { ReactElement } from 'react'

export default async function Blogs(): Promise<ReactElement> {
  const blogs = await readBlogs()
  const chunks = chunk(blogs, 3)
  return (
    <div className='mx-auto grid h-dvh max-w-2xl grid-cols-2 gap-4 md:grid-cols-4'>
      {chunks.map((blogs, i) => (
        <div className='grid gap-4' key={i}>
          {blogs.map((blog) => (
            <Link
              key={blog.title}
              href={`/blogs/${blog.title}`}
              className='rounded-md border border-ctp-rosewater p-4 shadow'
            >
              <h1 className='font-bold text-xl'>{blog.title}</h1>
              <p className='text-gray-600 text-sm'>{blog.description}</p>
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
}
