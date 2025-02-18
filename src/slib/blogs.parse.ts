import { transformerCopyButton } from '@rehype-pretty/transformers'
import rehypeShiki from '@shikijs/rehype'
import matter, { read } from 'gray-matter'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'

const parser = unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeShiki, {
    theme: 'catppuccin-mocha',
    transformers: [
      transformerCopyButton({
        visibility: 'always',
        feedbackDuration: 3_000,
      }),
    ],
  })
  .use(rehypeStringify)

export async function parseMarkdown(md: string): Promise<string> {
  const document = await parser.process(md)
  return document.toString()
}

export function parseFrontMatter(filepath: string): ReturnType<typeof matter> {
  const md = read(filepath)
  return matter(md)
}
