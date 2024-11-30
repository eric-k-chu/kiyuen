import { renderCanvas } from '@/lib'
import type { ReactElement } from 'react'

export function Tetris(): ReactElement {
  return <canvas id='tetris' width='320' height='640' ref={renderCanvas} />
}
