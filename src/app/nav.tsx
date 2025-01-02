import Link from 'next/link'
import type { ReactElement } from 'react'

export function Nav(): ReactElement {
  return (
    <div className='fixed top-2 left-2 flex flex-col gap-4 p-4'>
      <Link href='/about' className='text-yang/50 transition-colors hover:text-yang'>
        about
      </Link>
      <Link href='/blog' className='text-yang/50 transition-colors hover:text-yang'>
        blog
      </Link>
    </div>
  )
}
