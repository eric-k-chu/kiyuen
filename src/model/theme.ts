export type Theme = 'light' | 'dark' | 'system' | undefined

export function isDarkMode(theme: Theme): boolean {
  return theme === 'dark'
}
