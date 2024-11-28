import { useState } from 'react'

type Vertical = 'down'

type Horizontal = 'left' | 'right'

export type Direction = Vertical | Horizontal

export type Position = {
  x: number
  y: number
}

export type UsePositionOutput = {
  pos: Position
  move: (dir: Direction) => void
  reset: () => void
}

const factor = {
  down: 1,
  left: -1,
  right: 1,
} as const

export function usePosition(initial: Position): UsePositionOutput {
  const [pos, setPos] = useState(initial)
  return {
    pos,
    move: (dir: Direction): void => {
      if (dir === 'down') {
        setPos((pos) => ({ x: pos.x + factor[dir], y: pos.y }))
      } else {
        setPos((pos) => ({ x: pos.x, y: pos.y + factor[dir] }))
      }
    },
    reset: () => {
      setPos(initial)
    },
  }
}
