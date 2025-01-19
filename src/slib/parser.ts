import rhShiki from '@shikijs/rehype'
import { read } from 'gray-matter'
import { readdir } from 'node:fs/promises'
import path from 'node:path'
import rhStringify from 'rehype-stringify'
import rmkParse from 'remark-parse'
import rmkRehype from 'remark-rehype'
import { unified } from 'unified'
import { type Blog, type BlogMetadata, extractBlogMetadata } from './parser.model'

const BLOGS_DIR = path.join(process.cwd(), 'blogs')

const parser = unified()
  .use(rmkParse)
  .use(rmkRehype)
  .use(rhShiki, { theme: 'catppuccin-mocha' })
  .use(rhStringify)

export async function readBlog(id: string): Promise<Blog> {
  const filepath = path.join(BLOGS_DIR, `${id}.md`)
  const meta = readBlogMetadata(filepath)
  const html = await parser.process(meta.content)
  return {
    id,
    title: meta.title,
    description: meta.description,
    date: meta.date,
    html: html.toString(),
  }
}

export async function readBlogs(): Promise<(BlogMetadata & { content: string; id: string })[]> {
  const filenames = await readdir(BLOGS_DIR)
  const paths = filenames.map((filename) => path.join(BLOGS_DIR, filename))
  return Promise.all(
    paths.map((p) => {
      const meta = readBlogMetadata(p)
      return {
        ...meta,
        id: p,
      } satisfies BlogMetadata & { content: string; id: string }
    })
  )
}

function readBlogMetadata(path: string): BlogMetadata & { content: string } {
  const matter = read(path)
  const meta = extractBlogMetadata(matter.data)
  return {
    title: meta.title,
    description: meta.description,
    date: meta.date,
    content: matter.content,
  }
}

function sortBlogsByDate<T extends { date: Date }>(blogs: T[]): T[] {
  return blogs.sort((a, b) => b.date.getMilliseconds() - a.date.getMilliseconds())
}
