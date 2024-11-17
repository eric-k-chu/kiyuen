import type { CardData } from '@/config'
import type { ReactNode } from 'react'
import { CardContent } from '../ui'

type Props = {
  content?: CardData['content']
}

export function ResumeContent({ content }: Props): ReactNode {
  if (!content) return

  if (content.type === 'cover') {
    return (
      <CardContent className='flex size-full flex-col items-center justify-center'>
        <h2 className='text-center'>{content.title}</h2>
      </CardContent>
    )
  }

  if (content.type === 'text') {
    return (
      <CardContent>
        <ul className='list-inside list-disc space-y-4'>
          {content.items.map((item) => (
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
        {content.items.map((item) => (
          <li key={item.link} className='list-inside list-disc space-y-4 text-xs'>
            <a
              href={item.link}
              target='_blank'
              rel='noopener noreferrer'
              className='underline underline-offset-4 transition-colors hover:text-flamingo focus:outline-none focus:ring-1 focus:ring-flamingo'
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </CardContent>
  )
}
