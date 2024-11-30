import { Button, NavLink, type NavLinkProps } from '@/components'
import { TetrisIcon } from '@/components/icon'
import { createFileRoute } from '@tanstack/react-router'
import type { ReactElement, ReactNode } from 'react'

export const Route = createFileRoute('/(play)/play')({
  component: (): ReactElement => (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4'>
      <GameCard
        to='/play/tetris'
        linkClassName='text-xs md:text-base text-muted group flex flex-col items-center justify-center'
      >
        <TetrisIcon className='size-24 fill-muted transition-colors group-hover:fill-accent-foreground' />
        <p>Tetris</p>
      </GameCard>
      <SkeletonCard count={3} />
    </div>
  ),
})

function GameCard({ ...props }: NavLinkProps): ReactElement {
  return (
    <NavLink {...props} variant='outline' className='size-32 animate-fade-in md:size-48'>
      {props.children}
    </NavLink>
  )
}

function SkeletonCard({ count }: { count: number }): ReactNode {
  return Array.from({ length: count })
    .fill(null)
    .map((_, i) => (
      <Button
        key={i}
        className='size-32 animate-fade-in text-muted text-xs md:size-48 md:text-base'
        variant='outline'
      >
        Coming Soon...
      </Button>
    ))
}
