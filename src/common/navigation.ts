export type Link = 'About' | 'Experience' | 'Projects' | 'Contact'

export const LINKS: Link[] = ['About', 'Experience', 'Projects', 'Contact']

export function toId(link: Link): string {
  return `#${link.toLowerCase()}`
}
