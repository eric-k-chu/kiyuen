import { Navigation } from '@/components'
import {
  SNAPS,
  type Snap,
  type SnapEducation,
  type SnapExperience,
  type SnapHome,
  formatDateRange,
} from '@/lib'
import type { ReactElement } from 'react'

type Props = {
  props: Snap
}

export const SNAP_ELEMENTS = SNAPS.map((s) => <SnapElement key={s.id} props={s} />)

function SnapElement({ props }: Props): ReactElement {
  switch (props.type) {
    case 'home':
      return <Home {...props} />
    case 'experience':
      return <Experience {...props} />
    case 'education':
      return <Education {...props} />
  }
}

function Home({ id, title, hanzi, name }: SnapHome): ReactElement {
  return (
    <section id={id} className='scroller-section flex flex-col items-center justify-center gap-4'>
      <div className='flex w-full items-center justify-center gap-4'>
        <h1 className='basis-1/2 text-end text-base text-ctp-overlay2 uppercase md:text-lg'>
          {name}
        </h1>
        <div className='py-4 text-ctp-blue [text-orientation:upright] [writing-mode:vertical-lr]'>
          <h1 className='select-none text-2xl md:text-4xl'>{hanzi}</h1>
        </div>
        <h1 className='basis-1/2 text-base text-ctp-overlay2 uppercase md:text-lg'>{title}</h1>
      </div>
      <Navigation className='space-x-4' as='nav' hide={['home']} />
    </section>
  )
}

function Experience(p: SnapExperience): ReactElement {
  return (
    <section className='scroller-section flex items-center justify-center' id={p.title}>
      <div className='space-y-2 px-16'>
        <h2 className='text-base text-ctp-text uppercase md:text-lg'>{p.company}</h2>
        <h3 className='text-base text-ctp-overlay2 uppercase md:text-lg'>
          {formatDateRange(p.start, p.end)}
        </h3>
        <h1 className='text-2xl text-ctp-blue uppercase md:text-4xl'>{p.title}</h1>
        <ul className='flex flex-wrap gap-4 text-ctp-overlay2 text-xs md:text-sm'>
          {p.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Education(p: SnapEducation): ReactElement {
  return (
    <section className='scroller-section flex items-center justify-center' id={p.cert}>
      <div className='space-y-2 px-16'>
        <h2 className='text-base text-ctp-text uppercase md:text-lg'>{p.school}</h2>
        <h3 className='text-base text-ctp-overlay2 uppercase md:text-lg'>
          {formatDateRange(p.start, p.end)}
        </h3>
        <h1 className='text-2xl text-ctp-blue uppercase md:text-4xl'>{p.cert}</h1>
        <ul className='flex flex-wrap gap-4 text-ctp-overlay2 text-xs md:text-sm'>
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
  )
}
