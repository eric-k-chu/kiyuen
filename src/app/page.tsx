import { MainCarousel, ParticleBackground } from '@/components'

export default function Home(): React.ReactElement {
  return (
    <main className='h-screen bg-secondary'>
      <ParticleBackground />
      <MainCarousel />
    </main>
  )
}
