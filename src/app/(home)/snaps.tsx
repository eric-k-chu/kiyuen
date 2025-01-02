'use client'

import { Corners } from '@/components'
import type { SnapHandler } from '@/hooks'
import { SNAPS, type Snap, type SnapHome, formatDateRange } from '@/lib'
import type { ReactElement } from 'react'
import { InView } from 'react-intersection-observer'
import type meta from '~meta'

type Props = {
  handler: SnapHandler
}

export const SNAP_ELEMENTS = SNAPS.map((s) => ({
  id: s.id,
  Element: (props: Props): ReactElement => <SnapElement {...props} snap={s} />,
}))

function SnapElement({ handler, snap }: Props & { snap: Snap }): ReactElement {
  switch (snap.type) {
    case 'home':
      return <Home handler={handler} {...snap} />
    case 'experience':
      return <Experience handler={handler} {...snap} />
    case 'education':
      return <Education handler={handler} {...snap} />
  }
}

function Home({ handler, id, title, hanzi, name }: Props & SnapHome): ReactElement {
  return (
    <InView onChange={handler} threshold={1}>
      {({ ref }): ReactElement => (
        <section
          id={id}
          className='scroller-section flex items-center justify-center gap-4'
          ref={ref}
        >
          <h1 className='basis-1/2 text-end text-lg text-yang/50 uppercase tracking-widest sm:text-2xl'>
            {name}
          </h1>
          <Corners as='div' className='[text-orientation:upright] [writing-mode:vertical-lr]'>
            <h1 className='select-none text-3xl tracking-[1rem] sm:text-6xl'>{hanzi}</h1>
          </Corners>
          <h1 className='basis-1/2 text-lg text-yang/50 uppercase tracking-widest sm:text-2xl'>
            {title}
          </h1>
        </section>
      )}
    </InView>
  )
}

function Experience(p: Props & (typeof meta.experience)[number]): ReactElement {
  return (
    <InView onChange={p.handler} threshold={1}>
      {({ ref }): ReactElement => (
        <section
          className='scroller-section flex items-center justify-center'
          ref={ref}
          id={p.title}
        >
          <div className='space-y-2 px-16'>
            <h2 className='text-lg uppercase tracking-widest sm:text-2xl'>{p.company}</h2>
            <h3 className='text-base text-yang/50 uppercase tracking-widest sm:text-lg'>
              {formatDateRange(p.start, p.end)}
            </h3>
            <h1 className='text-3xl uppercase tracking-widest sm:text-6xl'>{p.title}</h1>
            <ul className='flex flex-wrap gap-4 text-xs sm:text-base'>
              {p.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </InView>
  )
}

function Education(p: Props & (typeof meta.education)[number]): ReactElement {
  return (
    <InView onChange={p.handler} threshold={1}>
      {({ ref }): ReactElement => (
        <section
          className='scroller-section flex items-center justify-center'
          ref={ref}
          id={p.cert}
        >
          <div className='space-y-2 px-16'>
            <h2 className='text-lg uppercase tracking-widest sm:text-2xl'>{p.school}</h2>
            <h3 className='text-base text-yang/50 uppercase tracking-widest sm:text-lg'>
              {formatDateRange(p.start, p.end)}
            </h3>
            <h1 className='text-3xl uppercase tracking-widest sm:text-6xl'>{p.cert}</h1>
            <ul className='flex flex-wrap gap-4 text-xs sm:text-base'>
              {p.projects.map((p) => (
                <li key={p.link}>
                  <a href={p.link} target='_blank' rel='noopener noreferrer' className='underline'>
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </InView>
  )
}
