import {
  type StorageProviderProps,
  type Theme,
  ThemeProviderContext,
  getLsItem,
  setLsItem,
} from '@/lib'
import { type ReactElement, useEffect, useState } from 'react'

export type ThemeProviderProps = StorageProviderProps<{
  defaultTheme?: Theme
}>

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'kiyuen-ui-theme',
}: ThemeProviderProps): ReactElement {
  const [theme, setTheme] = useState<Theme>(() => getLsItem(storageKey, defaultTheme))

  const set = (theme: Theme): void => {
    setLsItem(storageKey, theme)
    setTheme(theme)
  }

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      root.classList.add(systemTheme)
      return
    }
    root.classList.add(theme)
  }, [theme])

  return (
    <ThemeProviderContext.Provider value={{ theme, set }}>{children}</ThemeProviderContext.Provider>
  )
}
