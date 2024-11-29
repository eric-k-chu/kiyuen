import { buildGrid } from './use-grid'

describe('buildGrid', () => {
  it('returns a grid of 0s with the given dimensions', () => {
    const dimensions = { width: 10, height: 20 }
    const grid = buildGrid(dimensions)
  })
})
