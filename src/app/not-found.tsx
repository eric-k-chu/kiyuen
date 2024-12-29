import type { ReactElement } from 'react'
import { Hero } from './hero'

export default function NotFound(): ReactElement {
  return (
    <main className='flex h-dvh items-center justify-center'>
      <Hero />
      <div className='grid h-full basis-1/2 place-content-center place-items-center gap-2 bg-yang text-yin'>
        <h1 className='text-2xl tracking-widest sm:text-4xl'>404</h1>
        <h1 className='tracking widest'>This page does not exist.</h1>
      </div>
    </main>
  )
}
