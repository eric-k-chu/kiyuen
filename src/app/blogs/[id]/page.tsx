import { readCachedBlog, readCachedBlogs } from '@/slib'
import type { Metadata, ResolvingMetadata } from 'next'
import type { ReactElement } from 'react'

type WithBlogId = {
  id: string
}

type Props = {
  params: Promise<WithBlogId>
}

export async function generateStaticParams(): Promise<WithBlogId[]> {
  const blogs = await readCachedBlogs()
  return blogs.map((b) => ({ id: b.filename }))
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const [blogParams, parentMeta] = await Promise.all([params, parent])
  const blog = await readCachedBlog(blogParams.id)
  const parentImages = parentMeta.openGraph?.images ?? []

  return {
    title: blog.title,
    openGraph: {
      images: [...parentImages],
    },
  }
}

export default async function Page({ params }: Props): Promise<ReactElement> {
  const filename = (await params).id
  const blog = await readCachedBlog(filename)

  return (
    <>
      <h2>{blog.title}</h2>
      <p>{blog.date.toLocaleDateString()}</p>
      <div dangerouslySetInnerHTML={{ __html: blog.html }} />
    </>
  )
}
