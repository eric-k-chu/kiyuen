import { Button, Card, Menubar, Profile } from '@/components'
import { type Post, posts } from '@/lib'
import { Link, createFileRoute, isNotFound, notFound } from '@tanstack/react-router'
import type { ReactElement } from 'react'

export const Route = createFileRoute('/blog/$blogId')({
  loader: ({ params }): Post => {
    const post = posts.find((post) => post.id === params.blogId.toLowerCase())
    if (!post) throw notFound({ routeId: '/blog/$blogId', data: params.blogId })
    return post
  },
  component: RouteComponent,
  notFoundComponent: (c): ReactElement => <PostNotFound data={c.data} />,
})

function RouteComponent(): ReactElement {
  const post = Route.useLoaderData()
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

type PostNotFoundProps = {
  data: unknown
}

function PostNotFound({ data }: PostNotFoundProps): ReactElement {
  return (
    <div className='flex flex-col items-center gap-y-4'>
      <h1 className='text-muted text-xl'>{stringifyData(data)}</h1>
      <Button asChild variant='outline'>
        <Link to='/blog'>Go back</Link>
      </Button>
    </div>
  )
}

function stringifyData(data: unknown): string {
  if (isNotFound(data)) return `Post "${data.data}" not found.`
  return 'Specified post not found.'
}
