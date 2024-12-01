import { toRotated } from './rotate'
import { TETROMINO } from './tetromino'

describe('rotation', () => {
  it('should rotate a J piece 90 deg', () => {
    const rotated = toRotated(TETROMINO.J)
    expect(rotated).toEqual([
      [0, 1, 1],
      [0, 1, 0],
      [0, 1, 0],
    ])
  })
  it('should rotate a L piece 90 deg', () => {
    const rotated = toRotated(TETROMINO.L)
    expect(rotated).toEqual([
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 1],
    ])
  })
  it('should rotate a S piece 90 deg', () => {
    const rotated = toRotated(TETROMINO.S)
    expect(rotated).toEqual([
      [0, 1, 0],
      [0, 1, 1],
      [0, 0, 1],
    ])
  })
  it('should rotate a T piece 90 deg', () => {
    const rotated = toRotated(TETROMINO.T)
    expect(rotated).toEqual([
      [0, 1, 0],
      [0, 1, 1],
      [0, 1, 0],
    ])
  })
  it('should rotate a Z piece 90 deg', () => {
    const rotated = toRotated(TETROMINO.Z)
    expect(rotated).toEqual([
      [0, 0, 1],
      [0, 1, 1],
      [0, 1, 0],
    ])
  })
  it('should rotate an O piece 90 deg', () => {
    const rotated = toRotated(TETROMINO.O)
    expect(rotated).toEqual([
      [1, 1],
      [1, 1],
    ])
  })
  it('should rotate an I piece 90 deg', () => {
    const rotated = toRotated(TETROMINO.I)
    expect(rotated).toEqual([
      [0, 0, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 1, 0],
    ])
  })
})
