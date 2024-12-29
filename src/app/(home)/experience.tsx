import { SnapSection } from '@/components'
import { BriefcaseIcon } from '@/icons'
import { formatDateRange } from '@/lib'
import type { ReactNode } from 'react'
import meta from '~meta'

export default function Experience(): ReactNode {
  return meta.experience.map((experience, index) => (
    <SnapSection key={index} id={`snap-${index + 2}`} className='prose p-8'>
      <h4 className='flex items-center gap-2'>
        <BriefcaseIcon className='inline-block size-4' />
        {experience.title}
      </h4>
      <div className='mb-2 text-sm'>{experience.company}</div>
      <div className='text-muted-foreground text-sm'>
        {formatDateRange(experience.start, experience.end)}
      </div>
      <ul className='list-disc text-sm'>
        {experience.stack.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </SnapSection>
  ))
}
