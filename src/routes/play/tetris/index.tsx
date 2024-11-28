import { type Position, useKeyboard, useTetris } from '@/hooks'
import { cn } from '@/lib'
import { createFileRoute } from '@tanstack/react-router'
import type { ReactElement } from 'react'

export const Route = createFileRoute('/play/tetris/')({
  component: Tetris,
})

export function Tetris(): ReactElement {
  const { grid, pos, move } = useTetris({ width: 9, height: 9 })

  useKeyboard(
    (key) => {
      switch (key) {
        case 'j':
        case 'ArrowDown':
          move('down')
          break
        case 'h':
        case 'ArrowLeft':
          move('left')
          break
        case 'l':
        case 'ArrowRight':
          move('right')
          break
      }
    },
    [pos, grid]
  )

  return (
    <div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${9}, 1fr)`,
        }}
      >
        {grid.map((row, i) => (
          <div key={i}>
            {row.map((_, j) => (
              <div
                key={`${i}-${j}`}
                className={cn(
                  'flex size-16 items-center justify-center border border-border',
                  isActive(i, j, pos, grid) ? 'bg-accent' : 'bg-transparent'
                )}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

function isActive(j: number, i: number, pos: Position, grid: number[][]): boolean {
  if (grid[i][j] === 1) return true
  return i === pos.x && j === pos.y
}
