import { type } from 'arktype'

export interface BlogMetadata {
  title: string
  description: string
  date: Date
}

export interface Blog extends BlogMetadata {
  filename: string
  /** .md document parsed into HTML */
  html: string
}

const blogSchema = type({
  title: 'string',
  description: 'string',
  date: 'Date >= 0',
})

export function extractBlogMetadata(data: Record<string, unknown>): BlogMetadata {
  const res = blogSchema(data)
  if (res instanceof type.errors) throw new Error(res.summary)
  return res
}
