'use client'

import { useParticleLinks } from '@/hooks'
import Particles from '@tsparticles/react'

export function ParticleBackground(): React.ReactElement {
  const { options } = useParticleLinks()

  return <Particles id='tsparticles' options={options} />
}
