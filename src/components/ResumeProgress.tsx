import { CARDS, EXPERIENCE } from '@/config'
import { useDir } from '@/lib'
import { useCarousel } from '@/lib/use-carousel'
import type { ReactElement } from 'react'
import { Progress } from './ui/progress'

const SECTIONS = ['', 'Experience', 'Education']

export function ResumeProgress(): ReactElement {
  const { current } = useCarousel()
  const { dir } = useDir()

  const index = (val: number) => {
    if (val === 0) return 0
    if (val < EXPERIENCE.length + 1) return 1
    return 2
  }

  const percent = current / (CARDS.length - 1)

  const key = index(current)

  return (
    <div className='h-6 space-y-2'>
      <Progress value={percent * 100} dir={dir} />
      <h3 className='animate-fade-in-static select-none text-center' key={key}>
        {SECTIONS[key]}
      </h3>
    </div>
  )
}