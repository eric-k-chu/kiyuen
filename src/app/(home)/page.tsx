import { SnapSection } from '@/components'
import type { ReactNode } from 'react'
import Education from './education'
import Experience from './experience'
import { NavSection } from './nav'

export default function Home(): ReactNode {
  return (
    <>
      <NavSection />
      <SnapSection id='snap-1'>
        <h1 className='text-center font-semibold'>Full Stack Software Developer</h1>
      </SnapSection>
      <Experience />
      <Education />
    </>
  )
}
