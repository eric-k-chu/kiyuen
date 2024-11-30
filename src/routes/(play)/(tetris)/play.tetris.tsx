import { Card, NavLink } from '@/components'
import { buildGrid } from '@/hooks'
import { createFileRoute } from '@tanstack/react-router'
import type { ReactElement } from 'react'

export const Route = createFileRoute('/(play)/(tetris)/play/tetris')({
  component: Tetris,
})

const grid = buildGrid({ width: 10, height: 20 })

export function Tetris(): ReactElement {
  return (
    <div className='relative'>
      <div className='blur-sm'>
        {grid.map((row, i) => (
          <div key={i} className='flex flex-none'>
            {row.map((_, j) => (
              <div key={`${i}-${j}`} className='size-8 border border-border' />
            ))}
          </div>
        ))}
      </div>
      <div className='absolute inset-0 flex flex-col items-center justify-center'>
        <Card className='flex flex-col items-center justify-center gap-4 border border-border px-12 pt-8 pb-4'>
          <div className='text-center text-muted'>Coming Soon...</div>
          <NavLink to='/play'>Back</NavLink>
        </Card>
      </div>
    </div>
  )
}
