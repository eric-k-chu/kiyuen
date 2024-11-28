import { Card, ShadcnUi } from '@/components'
import { CARDS } from '@/config'
import { useCarousel } from '@/lib'
import type { ReactElement } from 'react'
import { ResumeContent } from './ResumeContent'
import { ResumeHeader } from './ResumeHeader'
import { Navigate } from './ResumeNavigate'

export function ResumeCard(): ReactElement {
  const { current, next, prev } = useCarousel()

  return (
    <div className='relative size-full'>
      <Card
        key={current}
        className='absolute inset-0 size-full animate-fade-in select-none rtl:animate-fade-in-rtl'
      >
        <ResumeHeader header={CARDS[current].header} />
        <ResumeContent content={CARDS[current].content} />
        <div className='absolute right-2 bottom-2 z-[2]'>
          <ShadcnUi />
        </div>
      </Card>
      <Navigate pos='left' onNavigate={prev} />
      <Navigate pos='right' onNavigate={next} />
    </div>
  )
}
