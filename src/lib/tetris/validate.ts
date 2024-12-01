export type Position = {
  row: number
  col: number
}

export function canMove(matrix: number[][], target: Position, board: number[][]): boolean {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] && isInvalidPosition({ row, col }, target, board)) {
        return false
      }
    }
  }
  return true
}

function isInvalidPosition(current: Position, target: Position, board: number[][]): boolean {
  const targetRow = board.at(target.row + current.row)
  if (targetRow === undefined) return true
  const targetCol = targetRow.at(target.col + current.col)
  if (targetCol === undefined) return true
  return targetCol !== 0
}
