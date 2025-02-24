---
title: Blogs in Next.js
description: Creating a personal blog with Next.js
date: 2025-01-12
---

## Building the Workflow for Blogs

Since Next.js isn't designed to be a content-driven framework, it doesn't have built-in markdown support. You'll have to manually build the entire design for storing markdown files, parsing them, and rendering them on the page.

## Storing Markdown Files for Personal Blogs

To keep blogs completely separate from the application, I prefer keeping a directory outside of `app` or `src` for blogs only.

## Reading and Parsing Markdown Files

The general approach is to read the markdown files, parse them, and render them as HTML. For this site, I used [gray-matter](https://github.com/jonschlinkert/gray-matter) to read markdown files and parse the front matter from it, [remark](https://github.com/remarkjs/remark) to parse markdown files, and [rehype](https://github.com/rehypejs/rehype) to convert the parsed markdown to serialized HTML. For syntax highlighting, I used [shikijs](https://github.com/shikijs/shiki).

```typescript
import matter, { read } from 'gray-matter'

export function parseFrontMatter(filepath: string): ReturnType<typeof matter> {
  const md = read(filepath)
  return matter(md)
}
```

```typescript
import rehypeShiki from '@shikijs/rehype'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'

const parser = unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeShiki, {
    theme: 'catppuccin-mocha',
  })
  .use(rehypeStringify)

export async function parseMarkdown(md: string): Promise<string> {
  const result = await parser.process(md)
  return result.toString()
}
```

## Putting it All Together

You can then create functions that read blogs or a specific blog.

```typescript
import { readdir } from 'node:fs/promises'
import np from 'node:path'
import { type Blog, extractBlogMetadata } from './blogs.model'
import { parseFrontMatter, parseMarkdown } from './blogs.parse'

const BLOGS_DIR = np.join(process.cwd(), 'blogs')

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
```
