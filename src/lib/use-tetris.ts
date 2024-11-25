import { type Dispatch, type SetStateAction, useEffect, useState } from 'react'
import { useTimer } from './use-timer'

type Position = {
  x: number
  y: number
}

type Dimensions = {
  width: number
  height: number
}

type Input = Dimensions & {
  interval: number
}

type Output = {
  grid: number[][]
  setGrid: Dispatch<SetStateAction<number[][]>>
  pos: Position
  moveY: (dir: 'up' | 'down') => void
  moveX: (dir: 'right' | 'left') => void
  canMoveLeft: () => boolean
  canMoveRight: () => boolean
  canMoveDown: () => boolean
}

export function useTetris({ interval, ...dm }: Input): Output {
  const [grid, setGrid] = useState(constructGrid(dm))
  const [pos, setPos] = useState({ x: 0, y: Math.floor(dm.width / 2) })

  const moveY = (dir: 'up' | 'down'): void => {
    setPos((pos) => ({ x: pos.x + (dir === 'up' ? -1 : 1), y: pos.y }))
  }

  const moveX = (dir: 'right' | 'left'): void => {
    setPos((pos) => ({ x: pos.x, y: pos.y + (dir === 'left' ? -1 : 1) }))
  }

  useTimer(
    () => {
      moveY('down')
    },
    interval,
    []
  )

  useEffect(() => {
    if (!canMoveDown(pos, dm, grid)) {
      setGrid((grid) => {
        const newGrid = [...grid]
        newGrid[pos.x][pos.y] = 1
        return newGrid
      })
      setPos({ x: 0, y: Math.floor(dm.width / 2) })
    }
  }, [grid, pos, dm])

  return {
    grid,
    setGrid,
    pos,
    moveY,
    moveX,
    canMoveLeft: () => canMoveLeft(pos, dm, grid),
    canMoveRight: () => canMoveRight(pos, dm, grid),
    canMoveDown: () => canMoveDown(pos, dm, grid),
  }
}

function constructGrid({ width, height }: Dimensions): number[][] {
  return Array.from({ length: height }, () => Array.from({ length: width }, () => 0))
}

function canMoveLeft(pos: Position, dm: Dimensions, grid: number[][]): boolean {
  if (pos.y === 0) return false
  return grid[pos.x][pos.y - 1] === 0
}

function canMoveRight(pos: Position, dm: Dimensions, grid: number[][]): boolean {
  if (pos.y === dm.width - 1) return false
  return grid[pos.x][pos.y + 1] === 0
}

function canMoveDown(pos: Position, dm: Dimensions, grid: number[][]): boolean {
  if (pos.x === dm.height - 1) return false
  return grid[pos.x + 1][pos.y] === 0
}
