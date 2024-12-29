'use client'

import { Yang } from '@/components'
import type { ReactElement } from 'react'
import { MobileHero } from '../hero'
import { NavSection } from './nav'
import { SnapSection } from './snap-section'
import { useSnapView } from './use-snap-view'
import { SECTIONS } from './util'

export function SnapSections(): ReactElement {
  const { ref, id, handler } = useSnapView({ threshold: 0.2, initialId: SECTIONS[0].id })

  return (
    <Yang ref={ref} className='scroller no-scrollbar basis-full sm:basis-1/2'>
      <MobileHero />
      <NavSection current={id} />
      {SECTIONS.map((section) => (
        <SnapSection
          key={section.id}
          id={section.id}
          onViewEnter={handler}
          data-kind={section.type}
          className='data-[kind=content]:prose grid place-content-center'
          section={section}
        />
      ))}
    </Yang>
  )
}
