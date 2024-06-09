import { Theme, setBgColor, setParticleColor } from '@/common'
import { ISourceOptions } from '@tsparticles/engine'
import { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { useTheme } from 'next-themes'
import { useEffect, useMemo } from 'react'
import { ParticleOutput } from './model'
import { PARTICLE_OPTIONS } from './options'

export function useParticleLinks(): ParticleOutput {
  const { theme } = useTheme()

  useEffect(() => {
    async function startEngine(): Promise<void> {
      try {
        await initParticlesEngine(loadSlim)
      } catch (error) {
        console.error(error)
      }
    }
    startEngine()
  }, [])

  // Consider passing in a friendlier options object as an input and converting it to an ISourceOptions
  const options = useMemo<ISourceOptions>(() => {
    return {
      ...PARTICLE_OPTIONS,
      background: {
        ...setBgColor(theme as Theme),
      },
      particles: {
        ...PARTICLE_OPTIONS.particles,
        ...setParticleColor(theme as Theme),
        links: {
          ...setParticleColor(theme as Theme),
          distance: 150,
          enable: true,
          opacity: 0.1,
          width: 2,
        },
      },
    }
  }, [theme])

  return { options }
}
