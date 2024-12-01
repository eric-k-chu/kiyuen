import { renderCanvas } from '@/lib'
import type { ReactElement } from 'react'

export function Tetris(): ReactElement {
  return (
    <div>
      <canvas
        id='tetris'
        width='320'
        height='640'
        className='size-full border-border border-t border-l bg-muted'
        ref={renderCanvas}
      />
    </div>
  )
}
