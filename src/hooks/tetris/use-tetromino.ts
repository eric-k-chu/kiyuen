import { type Dispatch, type SetStateAction, useState } from 'react'

export const TETROMINOS = {
  J: [
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
  L: [
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ],
  T: [
    [0, 1, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
  S: [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0],
  ],
  Z: [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0],
  ],
  I: [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  O: [
    [1, 1],
    [1, 1],
  ],
}

export type TetrominoMatrix = (typeof TETROMINOS)[keyof typeof TETROMINOS]

type TetrominoType = keyof typeof TETROMINOS

const TETROMINO_KEYS = Object.keys(TETROMINOS) as TetrominoType[]

type Position = {
  row: number
  col: number
}

export type Tetromino = {
  shape: TetrominoMatrix
  pos: Position
}

type Output = [Tetromino, Dispatch<SetStateAction<Tetromino>>]

export function useTetromino(input?: Tetromino): Output {
  return useState({
    shape: getTetromino(input?.shape),
    pos: getInitialPosition(input?.pos),
  })
}

function getTetromino(shape?: TetrominoMatrix): TetrominoMatrix {
  if (shape) return shape
  const key = TETROMINO_KEYS[Math.floor(Math.random() * TETROMINO_KEYS.length)]
  return TETROMINOS[key]
}

function getInitialPosition(pos?: Position): Position {
  if (pos) return pos
  return { row: 0, col: 4 }
}
