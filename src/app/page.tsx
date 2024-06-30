import { About, Contact, Experience, Footer, NavBar, Projects } from '@/components'
import { ReactNode } from 'react'

export default function Home(): ReactNode {
  return (
    <main className='flex h-screen flex-col items-center'>
      <NavBar />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
