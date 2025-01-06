'use client'

import { useSnap } from '@/hooks'
import { SNAPS } from '@/lib'
import type { ReactElement } from 'react'

export function SnapNav(): ReactElement {
  const { current } = useSnap()
  return (
    <section className='fixed top-0 left-2 flex h-dvh flex-col justify-center gap-2 p-2'>
      {SNAPS.map((s) => (
        <a
          data-state={current === s.id ? 'active' : 'inactive'}
          className='h-4 w-0.5 bg-ctp-overlay0 transition-all data-[state=active]:h-8 data-[state=active]:bg-ctp-overlay2'
          href={`#${s.id}`}
          key={s.id}
        >
          <span className='sr-only'>{s.id}</span>
        </a>
      ))}
    </section>
  )
}
