import type { ReactElement } from 'react'

export function Footer(): ReactElement {
  const year = new Date().getFullYear()
  return (
    <footer className='fixed bottom-2 left-2 rounded-md bg-ctp-mantle p-2 text-ctp-subtext0 text-xs'>
      <p>
        &copy; <time dateTime={year.toString()}>{year}</time> Eric Chu
      </p>
    </footer>
  )
}
