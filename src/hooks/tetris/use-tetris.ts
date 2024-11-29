import { useEffect } from 'react'
import { useTimer } from '../use-timer'
import { type Dimensions, useGrid } from './use-grid'
import { type Direction, type Position, usePosition } from './use-position'

type Output = {
  grid: number[][]
  pos: Position
  move: (dir: Direction) => void
}

export function useTetris(dm: Dimensions): Output {
  const [grid, setGrid] = useGrid(dm)
  const { pos, move, reset } = usePosition({ x: 0, y: Math.floor(dm.width / 2) })
  useTimer(() => move('down'), 1000, [])

  useEffect(() => {
    if (!canMoveDown(pos, dm, grid)) {
      setGrid((grid) => reduceGrid(grid, pos))
      reset()
    }
  }, [grid, pos, dm])

  const canMove = (dir: Direction): boolean => {
    if (dir === 'left') return canMoveLeft(pos, grid)
    if (dir === 'right') return canMoveRight(pos, dm, grid)
    if (dir === 'down') return canMoveDown(pos, dm, grid)
    return false
  }

  return {
    grid,
    pos,
    move: (dir: Direction): void => {
      if (canMove(dir)) move(dir)
    },
  }
}

function canMoveDown(pos: Position, dm: Dimensions, grid: number[][]): boolean {
  if (pos.x === dm.height - 1) return false
  return grid[pos.x + 1][pos.y] === 0
}

function canMoveLeft(pos: Position, grid: number[][]): boolean {
  if (pos.y === 0) return false
  return grid[pos.x][pos.y - 1] === 0
}

function canMoveRight(pos: Position, dm: Dimensions, grid: number[][]): boolean {
  if (pos.y === dm.width - 1) return false
  return grid[pos.x][pos.y + 1] === 0
}

function reduceGrid(grid: number[][], pos: Position): number[][] {
  grid[pos.x][pos.y] = 1
  return grid.reduce<number[][]>((acc, row) => {
    if (isRowFilled(row)) {
      acc.unshift(Array.from({ length: row.length }, () => 0))
    } else {
      acc.push(row)
    }
    return acc
  }, [])
}

function isRowFilled(row: number[]): boolean {
  return row.every((cell) => cell === 1)
}
