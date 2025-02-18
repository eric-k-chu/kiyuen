import { Footer } from '@/components/footer'
import Link from 'next/link'
import type { PropsWithChildren, ReactElement } from 'react'

export default function RootLayout({ children }: PropsWithChildren): ReactElement {
  return (
    <div className='flex min-h-dvh flex-col gap-y-2'>
      <nav className='sticky top-0 z-1 mx-auto flex w-full max-w-4xl flex-none justify-between gap-x-4 rounded-md bg-ctp-mantle px-8 py-2 shadow-sm'>
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
      <div className='mx-auto w-full max-w-4xl grow rounded-md bg-ctp-mantle p-8'>{children}</div>
      <Footer className='mx-auto block w-full max-w-4xl flex-none text-center' />
    </div>
  )
}
