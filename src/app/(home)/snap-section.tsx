'use client'

import { BriefcaseIcon, GraduationCapIcon } from '@/icons'
import type { ComponentProps, PropsWithChildren, ReactElement } from 'react'
import { InView } from 'react-intersection-observer'
import type { Section } from './util'

type Props = PropsWithChildren<
  ComponentProps<'section'> & {
    id: string
    section: Section
    onViewEnter: (inView: boolean, entry: IntersectionObserverEntry) => void
  }
>

export function SnapSection({ children, id, onViewEnter, section, ...rest }: Props): ReactElement {
  return (
    <InView onChange={onViewEnter} threshold={1}>
      {({ ref }): ReactElement => (
        <section id={id} ref={ref} {...rest}>
          <SectionDisplay {...section} />
        </section>
      )}
    </InView>
  )
}

function SectionDisplay(s: Section): ReactElement {
  if (s.type === 'cover') {
    return <h1 className='text-center font-semibold'>{s.title}</h1>
  }

  const Icon = s.kind === 'experience' ? BriefcaseIcon : GraduationCapIcon
  return (
    <>
      <h4 className='flex items-center gap-2'>
        <Icon className='inline-block size-4' />
        {s.title}
      </h4>
      <div className='mb-2 text-sm'>{s.subtitle}</div>
      <div className='text-sm text-yin/50'>{s.date}</div>
      <ul className='!mt-2 list-disc text-sm'>
        {s.items.map((item) => (
          <li key={item.link ?? item.name}>
            {item.link ? (
              <a href={item.link} target='_blank' rel='noreferrer'>
                {item.name}
              </a>
            ) : (
              item.name
            )}
          </li>
        ))}
      </ul>
    </>
  )
}
