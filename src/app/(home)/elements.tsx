'use client'

import { useSnap } from '@/hooks'
import type { ReactNode } from 'react'
import { SNAP_ELEMENTS } from './snaps'

export function SnapElements(): ReactNode {
  const { ref, handler } = useSnap()
  return (
    <div className='scroller' ref={ref}>
      {SNAP_ELEMENTS.map(({ id, Element }) => (
        <Element key={id} handler={handler} />
      ))}
    </div>
  )
}
