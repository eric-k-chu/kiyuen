import {
  About,
  Contact,
  Experience,
  Footer,
  NavBar,
  ParticleBackground,
  Projects,
} from '@/components'

export default function Home(): React.ReactElement {
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
