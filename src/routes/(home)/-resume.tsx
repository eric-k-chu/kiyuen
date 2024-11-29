import { Progress } from '@/components'
import { useCarousel, useDir } from '@/hooks'
import { RESUME_SIZE } from '@/lib'
import type { ReactElement } from 'react'
import meta from '~meta'
import { ResumeCard } from './-card'

export function Resume(): ReactElement {
  return (
    <div className='h-full w-56 space-y-4'>
      <ResumeCard />
      <ResumeProgress />
    </div>
  )
}

function ResumeProgress(): ReactElement {
  const { current } = useCarousel()
  const { dir } = useDir()

  const getSectionIndex = (cardIndex: number) => {
    if (cardIndex === 0) return 0
    if (cardIndex < meta.experience.length + 1) return 1
    return 2
  }

  const indexToSection = (index: number): string => {
    if (index === 0) return ''
    if (index === 1) return 'Experience'
    return 'Education'
  }

  const percent = current / (RESUME_SIZE - 1)

  const index = getSectionIndex(current)

  return (
    <div className='h-6 space-y-2'>
      <Progress value={percent * 100} dir={dir} />
      <h3 className='animate-fade-in-static select-none text-center' key={index}>
        {indexToSection(index)}
      </h3>
    </div>
  )
}
