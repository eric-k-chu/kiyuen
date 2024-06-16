'use client'

import { useParticleLinks } from '@/hooks'
import Particles from '@tsparticles/react'
import { ReactElement } from 'react'

export function ParticleBackground(): ReactElement {
  const { options } = useParticleLinks()

  return <Particles id='tsparticles' options={options} />
}
