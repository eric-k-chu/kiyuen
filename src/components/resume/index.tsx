import type { ReactElement } from 'react'
import { ResumeCard } from './card'
import { ResumeProgress } from './progress'

export function Resume(): ReactElement {
  return (
    <div className='h-full w-56 space-y-4'>
      <ResumeCard />
      <ResumeProgress />
    </div>
  )
}
