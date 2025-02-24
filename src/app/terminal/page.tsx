import { Navigation } from '@/components'
import type { ReactElement } from 'react'

export default function Terminal(): ReactElement {
  return (
    <main className='flex h-dvh flex-col items-center justify-center gap-2 px-16'>
      <h2 className='text-lg uppercase tracking-widest sm:text-2xl'>In Development</h2>
      <Navigation className='space-x-4' hide={['terminal']} />
    </main>
  )
}
