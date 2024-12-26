import { Card, Menubar, Profile } from '@/components'
import { posts } from '@/lib'
import { createFileRoute } from '@tanstack/react-router'
import type { ReactElement } from 'react'

export const Route = createFileRoute('/blog/$blogId')({
  component: RouteComponent,
})

function RouteComponent(): ReactElement {
  const { blogId } = Route.useParams()
  const post = posts.find((post) => post.id === blogId.toLowerCase())
  if (!post) return <div>Post not found</div>

  return (
    <>
      <Menubar className='mb-4 flex w-full max-w-lg flex-row sm:hidden' />
      <section className='flex flex-1 justify-center gap-x-3'>
        <Profile className='hidden sm:flex' />
        <Card className='flex-1 animate-fade-in p-4 rtl:animate-fade-in-rtl'>
          <div
            className='prose dark:prose-invert'
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </Card>
        <Menubar className='hidden sm:flex' />
      </section>
    </>
  )
}
