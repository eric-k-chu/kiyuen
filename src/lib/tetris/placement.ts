import type { Position } from './validate'

type Tetromino = {
  matrix: number[][]
  pos: Position
}

export function placeTetromino({ matrix, pos }: Tetromino, board: number[][]): number[][] {
  const newBoard = JSON.parse(JSON.stringify(board)) as number[][]
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const row = pos.row + i
      const col = pos.col + j
      if (matrix[i][j] && newBoard[row] && newBoard[row][col] !== undefined) {
        newBoard[row][col] = matrix[i][j]
      }
    }
  }
  return newBoard
}
