import { type Dir, DirProviderContext, useLocalStorage } from '@/hooks'
import type { StorageProviderProps } from '@/lib'
import { useEffect } from 'react'

export type DirProviderProps = StorageProviderProps<{
  defaultDir?: Dir
}>

export function DirProvider({
  children,
  defaultDir = 'ltr',
  storageKey = 'kiyuen-ui-dir',
}: DirProviderProps) {
  const { item: dir, set } = useLocalStorage({ key: storageKey, fallback: defaultDir })

  const toggle = (): void => {
    const toggledDir = dir === 'ltr' ? 'rtl' : 'ltr'
    set(toggledDir)
  }

  useEffect(() => {
    const root = window.document.documentElement
    root.dir = dir
  }, [dir])

  return (
    <DirProviderContext.Provider value={{ dir, toggle }}>{children}</DirProviderContext.Provider>
  )
}
