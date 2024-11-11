import { EDUCATION, EXPERIENCE } from '@/config'
import { formatDateRange } from '@/lib'
import { useCarousel } from '@/lib/use-carousel'
import type { ReactElement, ReactNode } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

type CardData = {
  header?: ReactNode
  content?: ReactNode
  footer?: ReactNode
}

export const CARDS: CardData[] = [
  {
    content: (
      <CardContent className='flex size-full flex-col items-center justify-center'>
        <h2 className='text-center'>
          Full Stack
          <br />
          Developer
        </h2>
      </CardContent>
    ),
  },
  ...EXPERIENCE.map<CardData>((e) => {
    return {
      header: (
        <CardHeader>
          <CardTitle>{e.title}</CardTitle>
          <CardDescription className='text-xs'>
            {e.company}
            <br />
            {formatDateRange(e.start, e.end)}
          </CardDescription>
        </CardHeader>
      ),
      content: (
        <CardContent>
          <ul className='list-inside list-disc space-y-4'>
            {e.stack.map((s) => (
              <li key={s} className='text-xs'>
                {s}
              </li>
            ))}
          </ul>
        </CardContent>
      ),
    }
  }),
  ...EDUCATION.map<CardData>((e) => {
    return {
      header: (
        <CardHeader>
          <CardTitle>{e.cert}</CardTitle>
          <CardDescription className='text-xs'>
            {e.school}
            <br />
            {formatDateRange(e.start, e.end)}
          </CardDescription>
        </CardHeader>
      ),
      content: (
        <CardContent>
          <ul className='list-inside list-disc space-y-4'>
            {e.projects.map((p) => (
              <li key={p.name} className='text-xs'>
                <a
                  href={p.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='underline underline-offset-4'
                >
                  {p.name}
                </a>
              </li>
            ))}
          </ul>
        </CardContent>
      ),
    }
  }),
]

export function Resume(): ReactElement {
  const { current, next } = useCarousel()

  return (
    <div className='relative size-full'>
      <Card
        key={current}
        className='absolute inset-0 size-full animate-fade-in cursor-pointer select-none'
        onClick={next}
      >
        {CARDS[current].header}
        {CARDS[current].content}
        {CARDS[current].footer}
        <div className='absolute right-2 bottom-2'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256' className='size-5'>
            <title>Built With shadcn-ui</title>
            <rect width='256' height='256' fill='none' />
            <line
              x1='208'
              y1='128'
              x2='128'
              y2='208'
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='32'
            />
            <line
              x1='192'
              y1='40'
              x2='40'
              y2='192'
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='32'
            />
          </svg>
        </div>
      </Card>
    </div>
  )
}
