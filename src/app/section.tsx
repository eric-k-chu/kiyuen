import type { ReactElement } from 'react'

export function Section(): ReactElement {
  return (
    <section className='fixed left-2 flex h-dvh flex-col justify-center gap-2 p-4'>
      <a className='h-8 w-0.5 bg-yang' href='#f'>
        <span className='sr-only'>f</span>
      </a>
      <a className='h-4 w-0.5 bg-yang/50' href='#f'>
        <span className='sr-only'>f</span>
      </a>
      <a className='h-4 w-0.5 bg-yang/50' href='#f'>
        <span className='sr-only'>f</span>
      </a>
      <a className='h-4 w-0.5 bg-yang/50' href='#f'>
        <span className='sr-only'>f</span>
      </a>
    </section>
  )
}
