import { Button } from '@/components'
import type { FileRouteTypes } from '@/routeTree.gen'
import { Link, createFileRoute } from '@tanstack/react-router'
import type { ReactElement } from 'react'

export const Route = createFileRoute('/play/')({
  component: (): ReactElement => (
    <div className='flex flex-wrap justify-center gap-3'>
      <GameCard to='/play/tetris' title='Tetris' />
    </div>
  ),
})

type GameCardProps = {
  to: FileRouteTypes['fullPaths']
  title: string
}

function GameCard({ to, title }: GameCardProps): ReactElement {
  return (
    <Button
      asChild
      variant='ghost'
      className='flex size-32 animate-fade-in items-center justify-center rounded-lg border border-border px-4 text-xs'
    >
      <Link to={to}>{title}</Link>
    </Button>
  )
}
