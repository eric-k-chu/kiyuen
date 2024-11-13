import { CARDS, EXPERIENCE } from '@/config'
import { useCarousel } from '@/lib/use-carousel'
import type { ReactElement } from 'react'

const TITLES = ['', 'Experience', 'Education']

export function Progress(): ReactElement {
  const { current } = useCarousel()

  const section = (val: number) => {
    if (val === 0) return 0
    if (val < EXPERIENCE.length + 1) return 1
    return 2
  }

  return (
    <div className='h-6 space-y-2'>
      <div
        role='progressbar'
        aria-valuemin={0}
        aria-valuemax={CARDS.length}
        aria-valuenow={current + 1}
        className='h-2 w-full rounded-xl border shadow'
      >
        <div
          aria-hidden
          className={`h-full bg-foreground transition-all ${current + 1 < CARDS.length ? 'rounded-l-xl' : 'rounded-xl'}`}
          style={{ width: `${((current + 1) / CARDS.length) * 100}%` }}
        />
      </div>
      <h3 className='animate-fade-in-static select-none text-center' key={section(current)}>
        {TITLES[section(current)]}
      </h3>
    </div>
  )
}
