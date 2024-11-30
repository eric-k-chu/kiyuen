import { TETROMINOS, buildGrid, useTetromino } from '@/hooks'
import { type ReactElement, useState } from 'react'

const init = buildGrid({ width: 10, height: 20 })

export function Tetris(): ReactElement {
  const [tetromino, setTetromino] = useTetromino({ shape: TETROMINOS.J, pos: { row: 0, col: 4 } })
  const [grid, setGrid] = useState(init)

  return (
    <div>
      {grid.map((row, i) => (
        <div key={i} className='flex flex-non'>
          {row.map((num, j) => (
            <Tile key={`${i}-${j}`} num={num} />
          ))}
        </div>
      ))}
    </div>
  )
}

type TileProps = {
  num: number
}

function Tile({ num }: TileProps): ReactElement {
  return (
    <div className={`size-6 border border-border ${num === 1 ? 'bg-accent' : 'bg-transparent'}`} />
  )
}
