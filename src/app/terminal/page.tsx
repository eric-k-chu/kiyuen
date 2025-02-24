import { CornerDownRight } from 'lucide-react'
import Link from 'next/link'
import type { ReactElement } from 'react'

export default function Terminal(): ReactElement {
  return (
    <main className='flex h-dvh flex-col items-center justify-center gap-2 px-16'>
      <h2 className='text-lg uppercase tracking-widest sm:text-2xl'>In Development</h2>
      <Link href='/' className='px-4 py-2 text-ctp-text'>
        <CornerDownRight className='mr-2 inline size-4' />
        Home
      </Link>
    </main>
  )
}
