import { createFileRoute } from '@tanstack/react-router'
import type { ReactElement } from 'react'

export const Route = createFileRoute('/play/')({
  component: (): ReactElement => <h1 className='animate-fade-in text-muted'>Coming soon...</h1>,
})
