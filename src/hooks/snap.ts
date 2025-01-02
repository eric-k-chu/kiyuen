'use client'

import { createContext, useContext } from 'react'

type SnapContext = {
  ref: (node?: Element | null) => void
  id: string
  handler: (inView: boolean, entry: IntersectionObserverEntry) => void
}

export const SnapContext = createContext<SnapContext>({
  ref: (node?: Element | null): void => undefined,
  id: '',
  handler: (inView: boolean, entry: IntersectionObserverEntry): void => undefined,
})

export function useSnap(): SnapContext {
  const ctx = useContext(SnapContext)
  if (!ctx) throw new Error('useSnap must be used within a SnapProvider')
  return ctx
}
