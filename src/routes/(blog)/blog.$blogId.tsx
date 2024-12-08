import { useBlog } from '@/hooks'
import { createFileRoute } from '@tanstack/react-router'
import type { ReactElement } from 'react'

export const Route = createFileRoute('/(blog)/blog/$blogId')({
  component: Blog,
})

function Blog(): ReactElement {
  const { blogId } = Route.useParams()
  const { ref, error } = useBlog(`/blog/${blogId}.md`)

  if (error) return <div>{error}</div>

  return <div className='prose dark:prose-invert prose-base py-8' ref={ref} />
}
