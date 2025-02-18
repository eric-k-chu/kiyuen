import { readdir } from 'node:fs/promises'
import np from 'node:path'
import { cache } from 'react'
import { type Blog, extractBlogMetadata } from './blogs.model'
import { parseFrontMatter, parseMarkdown } from './blogs.parse'

const BLOGS_DIR = np.join(process.cwd(), 'blogs')

export const readCachedBlog = cache(readBlog)

export const readCachedBlogs = cache(readBlogs)

async function readBlog(filename: string): Promise<Blog> {
  const filepath = np.join(BLOGS_DIR, `${filename}.md`)
  return readBlogMetadata(filepath)
}

async function readBlogs(): Promise<Blog[]> {
  const filenames = await readdir(BLOGS_DIR)
  const paths = filenames.map((f) => np.join(BLOGS_DIR, f))
  return Promise.all(paths.map(readBlogMetadata))
}

async function readBlogMetadata(filepath: string): Promise<Blog> {
  const { data, content } = parseFrontMatter(filepath)
  return {
    ...extractBlogMetadata(data),
    filename: np.basename(filepath, '.md'),
    html: await parseMarkdown(content),
  }
}
