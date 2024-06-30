'use client'

import { useLinkParticles } from '@/hooks'
import Particles from '@tsparticles/react'
import { ReactNode } from 'react'

export function ParticleBackground(): ReactNode | undefined {
  const { options, isLoading } = useLinkParticles()

  if (isLoading) return

  return <Particles id='tsparticles' options={options} />
}
