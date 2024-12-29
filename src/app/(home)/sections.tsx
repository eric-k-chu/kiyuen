'use client'

import { BriefcaseIcon, GraduationCapIcon } from '@/icons'
import { type ReactElement, type ReactNode, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { NavSection } from './nav'
import { SnapSection } from './snap-section'
import { SECTIONS, type Section } from './util'

export function SnapSections(): ReactNode {
  const { ref } = useInView({ threshold: 0.2 })
  const [current, setCurrent] = useState(SECTIONS[0].id)

  const setInView = (inView: boolean, entry: IntersectionObserverEntry): void => {
    const section = entry.target.getAttribute('id')
    if (inView && section) {
      setCurrent(section)
    }
  }

  return (
    <div ref={ref} className='scroller no-scrollbar basis-1/2 bg-yang text-yin'>
      <NavSection current={current} />
      {SECTIONS.map((section) => (
        <SnapSection
          key={section.id}
          id={section.id}
          onViewEnter={setInView}
          data-kind={section.type}
          className='data-[kind=content]:prose grid place-content-center'
        >
          <SectionDisplay {...section} />
        </SnapSection>
      ))}
    </div>
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
      <ul className='list-disc text-sm'>
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
