import { Footer, Navigation } from '@/components'
import type { PropsWithChildren, ReactElement } from 'react'

export default function RootLayout({ children }: PropsWithChildren): ReactElement {
  return (
    <div className='flex min-h-dvh flex-col gap-y-2'>
      <nav className='mx-auto flex w-full max-w-4xl flex-none items-center justify-between gap-x-4 rounded-md px-4 py-2'>
        <p className='text-ctp-blue'>kiyuen</p>
        <Navigation as='div' className='space-x-4' hide={['blogs']} />
      </nav>
      <div className='mx-auto w-full max-w-4xl grow rounded-md'>{children}</div>
      <Footer className='mx-auto block w-full max-w-4xl flex-none text-center' />
    </div>
  )
}
