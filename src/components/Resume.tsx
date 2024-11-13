import { CARDS, type CardData } from '@/config'
import { useCarousel } from '@/lib/use-carousel'
import type { ReactElement } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

export function Resume(): ReactElement {
  const { current, next } = useCarousel()

  return (
    <div className='relative size-full'>
      <Card
        key={current}
        className='absolute inset-0 size-full animate-fade-in cursor-pointer select-none'
        onClick={next}
      >
        {CARDS[current].header && <ResumeHeader {...CARDS[current].header} />}
        {CARDS[current].content && <ResumeContent {...CARDS[current].content} />}
        <div className='absolute right-2 bottom-2'>
          <ShadcnUi />
        </div>
      </Card>
    </div>
  )
}

function ResumeHeader({
  title,
  subtitle,
  dateRange,
}: NonNullable<CardData['header']>): ReactElement {
  return (
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription className='text-xs'>
        {subtitle}
        <br />
        {dateRange}
      </CardDescription>
    </CardHeader>
  )
}

function ResumeContent(props: NonNullable<CardData['content']>): ReactElement {
  if (props.type === 'cover') {
    return (
      <CardContent className='flex size-full flex-col items-center justify-center'>
        <h2 className='text-center'>{props.title}</h2>
      </CardContent>
    )
  }

  if (props.type === 'text') {
    return (
      <CardContent>
        <ul className='list-inside list-disc space-y-4'>
          {props.items.map((item) => (
            <li key={item} className='list-inside list-disc space-y-4 text-xs'>
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    )
  }

  return (
    <CardContent>
      <ul className='list-inside list-disc space-y-4'>
        {props.items.map((item) => (
          <li key={item.link} className='list-inside list-disc space-y-4 text-xs'>
            <a
              href={item.link}
              target='_blank'
              rel='noopener noreferrer'
              className='underline underline-offset-4'
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </CardContent>
  )
}

function ShadcnUi(): ReactElement {
  return (
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
  )
}
