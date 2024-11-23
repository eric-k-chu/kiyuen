import { type ReactElement, useMemo, useState } from 'react'

const GRID = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
]

export function Tetris(): ReactElement {
  const [grid, setGrid] = useState(GRID)

  const isFull = useMemo(() => grid.some((row) => row.every((cell) => cell === 1)), [grid])

  return (
    <div
      ref={(node) => {
        if (node === null) return

        const id = setInterval(() => {
          if (isFull) {
            clearInterval(id)
            return
          }
          setGrid((prev) => {
            const next = [...prev]
            const i = Math.floor(Math.random() * 8)
            const j = Math.floor(Math.random() * 8)
            next[i][j] = 1
            return next
          })
        }, 1000)
      }}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(8, 1fr)',
        gridTemplateRows: 'repeat(8, 1fr)',
      }}
    >
      {grid.map((row, i) => (
        <div key={i}>
          {row.map((cell, j) => (
            <div
              key={j}
              className={`size-16 border border-border ${cell === 1 ? 'bg-accent' : 'bg-transparent'}`}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
