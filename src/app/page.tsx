import { NavBar, ParticleBackground } from '@/components'

export default function Home(): React.ReactElement {
  return (
    <main className='flex min-h-screen items-center justify-center bg-secondary'>
      <NavBar />
      <ParticleBackground />
      <h1>Hello</h1>
    </main>
  )
}
