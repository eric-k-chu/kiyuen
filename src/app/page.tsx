import { MainCarousel, ParticleBackground } from '@/components'

export default function Home(): React.ReactElement {
  return (
    <main className='bg-secondary'>
      <ParticleBackground />
      <MainCarousel />
    </main>
  )
}
