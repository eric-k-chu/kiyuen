import rhShiki from '@shikijs/rehype'
import matter, { read } from 'gray-matter'
import { readdir } from 'node:fs/promises'
import np from 'node:path'
import rhStringify from 'rehype-stringify'
import rmkParse from 'remark-parse'
import rmkRehype from 'remark-rehype'
import { unified } from 'unified'
import { type Blog, extractBlogMetadata } from './parser.model'

const BLOGS_DIR = np.join(process.cwd(), 'blogs')

const parser = unified()
  .use(rmkParse)
  .use(rmkRehype)
  .use(rhShiki, { theme: 'catppuccin-mocha' })
  .use(rhStringify)

export async function readBlog(filename: string): Promise<Blog> {
  const filepath = np.join(BLOGS_DIR, `${filename}.md`)
  return readBlogMetadata(filepath)
}

export async function readBlogs(): Promise<Blog[]> {
  const filenames = await readdir(BLOGS_DIR)
  const paths = filenames.map((f) => np.join(BLOGS_DIR, f))
  return Promise.all(paths.map(readBlogMetadata))
}

async function readBlogMetadata(filepath: string): Promise<Blog> {
  const txt = read(filepath)
  const output = matter(txt)
  const document = await parser.process(output.content)
  return {
    ...extractBlogMetadata(output.data),
    filename: np.basename(filepath, '.md'),
    html: document.toString(),
  }
}
