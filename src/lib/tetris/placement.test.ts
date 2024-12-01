import { placeTetromino } from './placement'
import { TETROMINO } from './tetromino'

describe('placeTetromino', () => {
  it('should place a tetromino on the board', () => {
    const board = Array(3).fill(Array(10).fill(0))

    const tetromino = {
      matrix: TETROMINO.J,
      pos: { row: 1, col: 5 },
    }
    const result = placeTetromino(tetromino, board)
    console.log(result)
    expect(result).toEqual([
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
    ])
  })
})
