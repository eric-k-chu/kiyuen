import type { ReactElement } from 'react'
import { ResumeCard } from './-card'

export function Resume(): ReactElement {
  return (
    <div className='h-full w-56 space-y-4'>
      <ResumeCard />
    </div>
  )
}
