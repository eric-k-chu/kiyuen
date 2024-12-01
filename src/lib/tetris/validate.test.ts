import { TETROMINO } from './tetromino'
import { canMove } from './validate'

describe('canMove', () => {
  const board = Array(20).fill(Array(10).fill(0))

  it('should return true for a target position', () => {
    expect(canMove(TETROMINO.J, { row: 5, col: 5 }, board)).toBe(true)
  })

  it('should return false for an invalid position', () => {
    expect(canMove(TETROMINO.J, { row: 19, col: 5 }, board)).toBe(false)
  })

  it('should return false for an invalid position', () => {
    expect(canMove(TETROMINO.J, { row: 21, col: 5 }, board)).toBe(false)
  })
})
