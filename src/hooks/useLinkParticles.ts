'use client'

import { setBgColor, setParticleColor } from '@/common'
import { ParticleOutput } from '@/model'
import { ISourceOptions } from '@tsparticles/engine'
import { loadLinksPreset } from '@tsparticles/preset-links'
import { useTheme } from 'next-themes'
import { useMemo } from 'react'
import { useInitParticleEngine } from './useInitParticleEngine'

export function useLinkParticles(): ParticleOutput {
  const { theme } = useTheme()
  const isLoading = useInitParticleEngine(loadLinksPreset)

  // Consider passing in a friendlier options object as an input and converting it to an ISourceOptions
  const options = useMemo<ISourceOptions>(() => {
    return {
      background: setBgColor(theme),
      particles: {
        ...setParticleColor(theme),
        links: {
          ...setParticleColor(theme),
          width: 2,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'bounce',
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 120,
        },
        size: {
          value: { min: 3, max: 3 },
        },
      },
      preset: 'links',
    }
  }, [theme])

  return { isLoading, options }
}
