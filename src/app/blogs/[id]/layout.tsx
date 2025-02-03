import Link from 'next/link'
import type { PropsWithChildren, ReactElement } from 'react'

export default function RootLayout({ children }: PropsWithChildren): ReactElement {
  return (
    <div className='prose prose-invert mx-auto h-dvh max-w-4xl p-8'>
      <nav className='space-x-4'>
        <li className='inline-block'>
          <Link href='/'>Home</Link>
        </li>
        <li className='inline-block'>
          <Link href='/blogs'>Blogs</Link>
        </li>
      </nav>
      {children}
    </div>
  )
}
