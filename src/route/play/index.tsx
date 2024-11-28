import { Button } from '@/components'
import type { ReactElement } from 'react'
import { Link } from 'react-router'

export function Play(): ReactElement {
  return (
    <div className='flex flex-wrap justify-center gap-3'>
      <GameCard title='Sudoku' />
      <GameCard title='Tetris' />
      <GameCard title='Wordle' />
    </div>
  )
}

function GameCard({ title }: { title: string }): ReactElement {
  return (
    <Button
      asChild
      variant='ghost'
      className='flex size-32 animate-fade-in items-center justify-center rounded-lg border border-border px-4 text-xs'
    >
      <Link to={`/play/${title.toLowerCase()}`}>{title}</Link>
    </Button>
  )
}
