import { type Position, useKeyboard, useTetris } from '@/hooks'
import { cn } from '@/lib'
import { createFileRoute } from '@tanstack/react-router'
import type { ReactElement } from 'react'

export const Route = createFileRoute('/play/tetris/')({
  component: (): ReactElement => <h1 className='animate-fade-in text-muted'>Comming soon...</h1>,
})

export function Tetris(): ReactElement {
  const { grid, pos, move } = useTetris({ width: 10, height: 20 })

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
    [move]
  )

  return (
    <div>
      <div>
        {grid.map((row, i) => (
          <div key={i} className='flex flex-none'>
            {row.map((_, j) => (
              <div
                key={`${i}-${j}`}
                className={cn(
                  'flex size-8 items-center justify-center border border-border text-xs',
                  isActive(i, j, pos, grid) ? 'bg-accent' : 'bg-transparent'
                )}
              />
            ))}
          </div>
        ))}
      </div>
      <div>
        <span>{pos.x}</span>
        <span>, </span>
        <span>{pos.y}</span>
      </div>
    </div>
  )
}

function isActive(i: number, j: number, pos: Position, grid: number[][]): boolean {
  if (grid[i][j] === 1) return true
  return i === pos.x && j === pos.y
}
