import Link from 'next/link'
import type { ReactElement } from 'react'

export default function NotFound(): ReactElement {
  return (
    <div>
      <h2>404 - Not Found</h2>
      <p>The requested page does not exist.</p>
      <Link href='/'>Return Home</Link>
    </div>
  )
}
