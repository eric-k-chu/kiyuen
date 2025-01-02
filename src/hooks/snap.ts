'use client'

import { createContext, useContext } from 'react'

export type SnapHandler = (inView: boolean, entry: IntersectionObserverEntry) => void

type SnapContext = {
  ref: (node?: Element | null) => void
  current: string
  handler: SnapHandler
}

export const SnapContext = createContext<SnapContext>({
  ref: (): void => undefined,
  current: '',
  handler: (): void => undefined,
})

export function useSnap(): SnapContext {
  const ctx = useContext(SnapContext)
  if (!ctx) throw new Error('useSnap must be used within a SnapProvider')
  return ctx
}
