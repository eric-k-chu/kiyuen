import { cn, useKeyboard } from '@/lib'
import { type ReactElement, useState } from 'react'

type Position = {
  row: number
  col: number
}

const SIZE = 9
const FLOOR = SIZE - 1
const LEFT_WALL = 0
const RIGHT_WALL = FLOOR
const GRID = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0],
]

export function Tetris(): ReactElement {
  const [grid, setGrid] = useState(GRID)
  const [pos, setPos] = useState<Position>({ row: 2, col: 4 })

  useKeyboard(
    (key) => {
      switch (key) {
        case 'k':
        case 'ArrowUp':
          setPos((pos) => ({ row: pos.row - 1, col: pos.col }))
          break
        case 'j':
        case 'ArrowDown':
          if (canMoveDown(pos, grid)) {
            setPos((pos) => ({ row: pos.row + 1, col: pos.col }))
          }
          break
        case 'h':
        case 'ArrowLeft':
          if (canMoveLeft(pos, grid)) {
            setPos((pos) => ({ row: pos.row, col: pos.col - 1 }))
          }
          break
        case 'l':
        case 'ArrowRight':
          if (canMoveRight(pos, grid)) {
            setPos((pos) => ({ row: pos.row, col: pos.col + 1 }))
          }
          break
      }
    },
    [pos, grid]
  )

  // useEffect(() => {
  //   if (pos.row === FLOOR || grid[pos.col][pos.row + 1] === 1) {
  //     setGrid((grid) => {
  //       grid[pos.col][pos.row] = 1
  //       return grid
  //     })
  //     setPos({ row: 0, col: 4 })
  //     return
  //   }

  //   const timer = setInterval(() => {
  //     setPos((pos) => ({ row: (pos.row + 1) % SIZE, col: pos.col }))
  //   }, 1000)

  //   return () => {
  //     clearInterval(timer)
  //   }
  // }, [pos.row])

  return (
    <div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${SIZE}, 1fr)`,
        }}
      >
        {grid.map((row, i) => (
          <div key={i}>
            {row.map((cell, j) => (
              <div
                key={`${i}-${j}`}
                className={cn(
                  'flex size-16 items-center justify-center border border-border',
                  isActive(j, i, pos, grid) ? 'bg-accent' : 'bg-transparent'
                )}
              >
                {j}, {i}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className='flex flex-col items-center gap-y-3'>
        <p>row: {pos.row}</p>
        <p>col: {pos.col}</p>
        <div className='flex justify-center gap-x-3'>
          <p>Left: {canMoveLeft(pos, grid) ? 'true' : 'false'}</p>
          <p>Right: {canMoveRight(pos, grid) ? 'true' : 'false'}</p>
          <p>Down: {canMoveDown(pos, grid) ? 'true' : 'false'}</p>
        </div>
      </div>
    </div>
  )
}

function isActive(j: number, i: number, pos: Position, grid: number[][]): boolean {
  if (grid[j][i] === 1) return true
  return j === pos.row && i === pos.col
}

function canMoveLeft(pos: Position, grid: number[][]): boolean {
  if (pos.row === FLOOR) return false
  if (pos.col === LEFT_WALL) return false
  return grid[pos.row][pos.col - 1] === 0
}

function canMoveRight(pos: Position, grid: number[][]): boolean {
  if (pos.row === FLOOR) return false
  if (pos.col === RIGHT_WALL) return false
  return grid[pos.row][pos.col + 1] === 0
}

function canMoveDown(pos: Position, grid: number[][]): boolean {
  if (pos.row === FLOOR) return false
  return grid[pos.row + 1][pos.col] === 0
}
