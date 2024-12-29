import { Yang } from '@/components'
import type { ReactElement } from 'react'
import { Hero } from './hero'

export default function NotFound(): ReactElement {
  return (
    <main className='flex items-center justify-center'>
      <Hero />
      <Yang className='gap-2' variant='center'>
        <h1 className='text-2xl tracking-widest sm:text-4xl'>404</h1>
        <h1 className='tracking widest'>This page does not exist.</h1>
      </Yang>
    </main>
  )
}
