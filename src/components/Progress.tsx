import { EXPERIENCE } from '@/config'
import { useCarousel } from '@/lib/use-carousel'
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import type { ReactElement } from 'react'
import { CARDS } from './Resume'

const TITLES = ['Profile', 'Experience', 'Education']

export function Progress(): ReactElement {
  const { current, next, prev } = useCarousel()

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
        className='relative h-2 w-full rounded-xl border shadow'
      >
        <div
          aria-hidden
          className={`h-full bg-foreground transition-all ${current + 1 < CARDS.length ? 'rounded-l-xl' : 'rounded-xl'}`}
          style={{ width: `${((current + 1) / CARDS.length) * 100}%` }}
        />
      </div>
      <section className='flex w-full items-center'>
        <button className='basis-1/3' onClick={prev} type='button'>
          <ChevronLeftIcon className='mx-auto' />
        </button>
        <h3
          className='basis-1/3 animate-fade-in-static select-none text-center'
          key={section(current)}
        >
          {TITLES[section(current)]}
        </h3>
        <button className='basis-1/3' onClick={next} type='button'>
          <ChevronRightIcon className='mx-auto' />
        </button>
      </section>
    </div>
  )
}
