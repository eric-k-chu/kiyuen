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
          data-active={current === s.id}
          className='h-4 w-0.5 bg-ctp-overlay0 transition-all data-[active=true]:h-8 data-[active=false]:bg-ctp-overlay2'
          href={`#${s.id}`}
          key={s.id}
        >
          <span className='sr-only'>{s.id}</span>
        </a>
      ))}
    </section>
  )
}
