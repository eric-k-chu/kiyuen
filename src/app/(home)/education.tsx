import { SnapSection } from '@/components'
import { GraduationCapIcon } from '@/icons'
import { formatDateRange } from '@/lib'
import type { ReactNode } from 'react'
import meta from '~meta'

export default function Education(): ReactNode {
  return meta.education.map((ed, index) => (
    <SnapSection
      key={index}
      id={`snap-${index + meta.experience.length + 2}`}
      className='prose p-[calc(100vw/48)]'
    >
      <h4 className='flex items-center gap-2'>
        <GraduationCapIcon className='inline-block size-5' />
        {ed.cert}
      </h4>
      <div className='mb-2 text-sm'>{ed.school}</div>
      <div className='text-muted-foreground text-sm'>{formatDateRange(ed.start, ed.end)}</div>
      <ul className='text-sm'>
        {ed.projects.map((s) => (
          <li key={s.link}>
            <a href={s.link} target='_blank' rel='noreferrer'>
              {s.name}
            </a>
          </li>
        ))}
      </ul>
    </SnapSection>
  ))
}
