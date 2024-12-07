import purify from 'dompurify'
import { marked } from 'marked'
import { useCallback, useState } from 'react'

type Output = {
  ref: (node: HTMLDivElement | null) => void
  error?: string
}

export function useBlog(filename: string): Output {
  const [error, setError] = useState<string>()
  const ref = useCallback((node: HTMLDivElement | null) => {
    if (!node) return

    fetch(`/blog/${filename}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch blog post')
        }
        return res.text()
      })
      .then((md) => marked(md))
      .then((html) => purify.sanitize(html))
      .then((html) => {
        node.innerHTML = html
      })
      .catch((err) => {
        setError(err.message)
      })
  }, [])
  return { ref, error }
}
