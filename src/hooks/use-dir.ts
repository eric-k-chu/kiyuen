import { createContext, useContext } from 'react'

export type Dir = 'rtl' | 'ltr'

type DirProviderState = {
  dir: Dir
  toggle: () => void
}

export const DirProviderContext = createContext<DirProviderState>({
  dir: 'ltr',
  toggle: () => undefined,
})

export function useDir(): DirProviderState {
  const context = useContext(DirProviderContext)
  if (context === undefined) throw new Error('useDir must be used within a DirProvider')
  return context
}
