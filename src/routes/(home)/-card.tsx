import { Card, CardContent, CardDescription, CardHeader, CardTitle, ShadcnUi } from '@/components'
import { useCarousel } from '@/hooks'
import { RESUME_CARDS, cn } from '@/lib'
import type { ReactElement, ReactNode } from 'react'

type Props = {
  currentIndex: number
}

export function ResumeCard(): ReactElement {
  const { current, next, prev } = useCarousel()

  return (
    <div className='relative size-full'>
      <Card
        key={current}
        className='absolute inset-0 size-full animate-fade-in select-none rtl:animate-fade-in-rtl'
      >
        <Header currentIndex={current} />
        <Content currentIndex={current} />
        <div className='absolute right-2 bottom-2 z-[2]'>
          <ShadcnUi />
        </div>
      </Card>
      <Navigate pos='left' onNavigate={prev} />
      <Navigate pos='right' onNavigate={next} />
    </div>
  )
}

function Header({ currentIndex }: Props): ReactNode {
  const header = RESUME_CARDS[currentIndex].header
  if (!header) return

  return (
    <CardHeader>
      <CardTitle>{header.title}</CardTitle>
      <CardDescription className='text-xs'>
        {header.subtitle}
        <br />
        {header.dateRange}
      </CardDescription>
    </CardHeader>
  )
}

function Content({ currentIndex }: Props): ReactNode {
  const content = RESUME_CARDS[currentIndex].content
  if (!content) return

  if (content.type === 'cover') {
    return (
      <CardContent className='flex size-full flex-col items-center justify-center'>
        <h2 className='text-center'>{content.title}</h2>
      </CardContent>
    )
  }

  return (
    <CardContent>
      <ul className='list-inside list-disc space-y-4'>
        {content.items.map((item) => (
          <li key={item.name} className='list-inside list-disc space-y-4 text-xs'>
            {item.link ? (
              <a
                href={item.link}
                target='_blank'
                rel='noopener noreferrer'
                className='underline underline-offset-4 transition-colors hover:text-flamingo focus:outline-none focus:ring-1 focus:ring-flamingo'
              >
                {item.name}
              </a>
            ) : (
              item.name
            )}
          </li>
        ))}
      </ul>
    </CardContent>
  )
}

type NavigateProps = {
  pos: 'left' | 'right'
  onNavigate: () => void
}

function Navigate({ pos, onNavigate }: NavigateProps): ReactElement {
  return (
    <button
      type='button'
      className={cn(
        pos === 'left'
          ? 'left-0 rounded-l-lg bg-gradient-to-r'
          : 'right-0 rounded-r-lg bg-gradient-to-l',
        'absolute z-[1] h-full w-1/6 focus:outline-none',
        'from-0% from-accent/0 to-80% hover:from-accent/30 dark:hover:from-accent/20'
      )}
      onClick={onNavigate}
    />
  )
}
