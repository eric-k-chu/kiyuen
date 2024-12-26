import { Card, CardContent, CardHeader, CardTitle, Menubar, Profile } from '@/components'
import { posts } from '@/lib'
import { Link, createFileRoute } from '@tanstack/react-router'
import type { ReactElement } from 'react'

export const Route = createFileRoute('/blog/')({
  component: Blog,
})

type WithBlogId = {
  blogId: string
}

function Blog(): ReactElement {
  return (
    <section className='flex h-[26rem] justify-center gap-x-3'>
      <Profile />
      <Card className='h-full w-56 animate-fade-in space-y-4 rtl:animate-fade-in-rtl'>
        <CardHeader className='pb-2'>
          <CardTitle>Blogs</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className='list-inside list-disc space-y-4'>
            {posts.map((item) => (
              <li key={item.id}>
                <Link
                  className='hover:underline'
                  to={`/blog/${item.id}`}
                  params={toBlogId(item.id)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Menubar />
    </section>
  )
}

function toBlogId(id: string): WithBlogId {
  return { blogId: id }
}
