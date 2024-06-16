import { Theme } from '@/model'

export function isDarkMode(theme: Theme): boolean {
  return theme === 'dark'
}
