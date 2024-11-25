import { cn, useKeyboard, useTetris } from '@/lib'
import type { ReactElement } from 'react'

export function Tetris(): ReactElement {
  const { grid, pos, moveY, moveX, canMoveDown, canMoveLeft, canMoveRight } = useTetris({
    interval: 1000,
    width: 9,
    height: 9,
  })
  useKeyboard(
    (key) => {
      switch (key) {
        case 'k':
        case 'ArrowUp':
          // setPos((pos) => ({ row: pos.row - 1, col: pos.col }))
          break
        case 'j':
        case 'ArrowDown':
          if (canMoveDown()) moveY('down')
          break
        case 'h':
        case 'ArrowLeft':
          if (canMoveLeft()) moveX('left')
          break
        case 'l':
        case 'ArrowRight':
          if (canMoveRight()) moveX('right')
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
            {row.map((cell, j) => (
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
      <div className='flex flex-col items-center gap-y-3'>
        <p>x: {pos.x}</p>
        <p>y: {pos.y}</p>
        <div className='flex justify-center gap-x-3'>
          <p>Left: {canMoveLeft() ? 'true' : 'false'}</p>
          <p>Right: {canMoveRight() ? 'true' : 'false'}</p>
          <p>Down: {canMoveDown() ? 'true' : 'false'}</p>
        </div>
      </div>
    </div>
  )
}

function isActive(j: number, i: number, pos: { x: number; y: number }, grid: number[][]): boolean {
  if (grid[i][j] === 1) return true
  return i === pos.x && j === pos.y
}
