import type { ReactElement } from 'react'
import meta from '~meta'

const sections = [
  'Home',
  ...meta.experience.map((e) => e.title),
  ...meta.education.map((e) => e.cert),
]

export function NavSection(): ReactElement {
  return (
    <nav className='absolute right-4 z-10 grid h-full place-content-center gap-4'>
      {sections.map((section, index) => (
        <a href={`#snap-${index + 1}`} key={section} className='size-2 rounded-full bg-[#1e1e1e]'>
          <span className='sr-only'>{section}</span>
        </a>
      ))}
    </nav>
  )
}
