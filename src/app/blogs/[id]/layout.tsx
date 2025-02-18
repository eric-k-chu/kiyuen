import Link from 'next/link'
import type { PropsWithChildren, ReactElement } from 'react'

export default function RootLayout({ children }: PropsWithChildren): ReactElement {
  return (
    <>
      <nav className='sticky top-0 z-1 mx-auto flex max-w-4xl justify-between gap-x-4 rounded-md bg-ctp-mantle px-4 py-2 shadow-sm'>
        <p>kiyuen</p>
        <div className='flex items-center gap-x-4'>
          <Link className='underline' href='/'>
            home
          </Link>
          <Link className='underline' href='/blogs'>
            blogs
          </Link>
        </div>
      </nav>
      <div className='p-4'>
        <div className='prose prose-invert mx-auto max-w-4xl rounded-md bg-ctp-mantle p-8'>
          {children}
        </div>
      </div>
    </>
  )
}
