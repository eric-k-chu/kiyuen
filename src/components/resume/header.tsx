import type { CardData } from '@/config'
import type { ReactNode } from 'react'
import { CardDescription, CardHeader, CardTitle } from '../ui'

type Props = {
  header?: CardData['header']
}

export function ResumeHeader({ header }: Props): ReactNode {
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
