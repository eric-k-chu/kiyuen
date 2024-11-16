import {
  type Dir,
  DirProviderContext,
  type StorageProviderProps,
  getLsItem,
  setLsItem,
} from '@/lib'
import { useEffect, useState } from 'react'

type DirProviderProps = StorageProviderProps<{
  defaultDir?: Dir
}>

export function DirProvider({
  children,
  defaultDir = 'ltr',
  storageKey = 'kiyuen-ui-dir',
}: DirProviderProps) {
  const [dir, setDir] = useState<Dir>(() => getLsItem(storageKey, defaultDir))

  const toggle = (): void => {
    const toggledDir = dir === 'ltr' ? 'rtl' : 'ltr'
    setLsItem(storageKey, toggledDir)
    setDir(toggledDir)
  }

  useEffect(() => {
    const root = window.document.documentElement
    root.dir = dir
  }, [dir])

  return (
    <DirProviderContext.Provider value={{ dir, toggle }}>{children}</DirProviderContext.Provider>
  )
}
