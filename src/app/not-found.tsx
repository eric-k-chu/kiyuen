import { Navigation } from '@/components'
import type { ReactElement } from 'react'

export default function NotFound(): ReactElement {
  return (
    <main className='flex h-dvh flex-col items-center justify-center gap-2 gap-y-4 px-16'>
      <h1 className='text-center text-4xl uppercase tracking-widest sm:text-8xl'>404</h1>
      <h2 className='text-lg uppercase tracking-widest sm:text-2xl'>Not Found</h2>
      <h3 className='text-base text-ctp-subtext0 sm:text-lg'>
        The page you're looking for doesn't exist.
      </h3>
      <Navigation className='space-x-4' />
    </main>
  )
}
