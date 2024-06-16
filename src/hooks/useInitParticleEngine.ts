'use client'

import { Engine } from '@tsparticles/engine'
import { initParticlesEngine } from '@tsparticles/react'
import { useEffect, useState } from 'react'

export function useInitParticleEngine(cb: (engine: Engine) => Promise<void>): boolean {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function startEngine(): Promise<void> {
      try {
        setIsLoading(true)
        await initParticlesEngine(cb)
      } catch (error) {
        // It's fine if this errors, it's just a background effect
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }
    startEngine()
  }, [cb])

  return isLoading
}
