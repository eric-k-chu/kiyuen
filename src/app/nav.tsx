import Link from 'next/link'
import type { ReactElement } from 'react'

export function Nav(): ReactElement {
  return (
    <div className='fixed top-2 left-2 flex flex-col gap-4 p-4'>
      <Link href='/' className='text-yang/50 transition-colors hover:text-yang'>
        home
      </Link>
    </div>
  )
}
