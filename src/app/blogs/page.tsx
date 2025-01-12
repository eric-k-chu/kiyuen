import { readBlogs } from '@/lib'
import type { ReactElement } from 'react'

export default async function Blogs(): Promise<ReactElement> {
  const blogs = await readBlogs()
  return (
    <div className='flex h-dvh items-center justify-center'>
      {blogs.map((blog) => (
        <div key={blog.title}>
          <h1>{blog.title}</h1>
          <p>{blog.description}</p>
          <p>{blog.date.toDateString()}</p>
        </div>
      ))}
    </div>
  )
}
