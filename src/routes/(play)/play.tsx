import { Button, NavLink, type NavLinkProps } from '@/components'
import { createFileRoute } from '@tanstack/react-router'
import type { ReactElement, ReactNode } from 'react'

export const Route = createFileRoute('/(play)/play')({
  component: (): ReactElement => (
    <div className='grid grid-cols-4 gap-4'>
      <GameCard to='/play/tetris' linkClassName='text-muted'>
        Tetris
      </GameCard>
      <SkeletonCard count={3} />
    </div>
  ),
})

function GameCard({
  skeleton,
  ...props
}: NavLinkProps & { skeleton?: { count: number } }): ReactElement {
  if (skeleton) {
    return (
      <Button className='size-48 animate-fade-in text-muted' variant='outline'>
        Coming Soon...
      </Button>
    )
  }

  return (
    <NavLink {...props} variant='outline' className='size-48 animate-fade-in'>
      {props.children}
    </NavLink>
  )
}

function SkeletonCard({ count }: { count: number }): ReactNode {
  return Array.from({ length: count })
    .fill(null)
    .map((_, i) => (
      <Button key={i} className='size-48 animate-fade-in text-muted' variant='outline'>
        Coming Soon...
      </Button>
    ))
}
