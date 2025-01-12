import { type } from 'arktype'

export interface BlogMetadata {
  title: string
  description: string
  date: Date
}

export interface Blog extends BlogMetadata {
  id: string
  html: string
}

const md = type({
  title: 'string',
  description: 'string',
  date: 'Date >= 0',
})

export function extractBlogMetadata(data: Record<string, unknown>): BlogMetadata {
  const res = md(data)
  if (res instanceof type.errors) throw new Error(res.summary)
  return res
}
