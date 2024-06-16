import {
  About,
  Contact,
  Experience,
  Footer,
  NavBar,
  ParticleBackground,
  Projects,
} from '@/components'
import { ReactElement } from 'react'

export default function Home(): ReactElement {
  return (
    <main className='bg-secondary'>
      <ParticleBackground />
      <NavBar />
      <div className='flex h-screen flex-col items-center'>
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
