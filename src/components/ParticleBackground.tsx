'use client'

import { useLinkParticles } from '@/hooks'
import Particles from '@tsparticles/react'
import { ReactElement } from 'react'

export function ParticleBackground(): ReactElement | undefined {
  const { options, isLoading } = useLinkParticles()

  if (isLoading) return

  return <Particles id='tsparticles' options={options} />
}
