import { GitHubLink, LinkedInLink } from './Socials'

export function Footer(): React.ReactElement {
  return (
    <footer className='grid min-h-64 w-full grid-cols-2 items-center bg-black p-6'>
      <strong className='text-center text-xl text-white'>Eric Chu</strong>
      <div className='flex items-center justify-center gap-x-4'>
        <GitHubLink className='invert' />
        <LinkedInLink />
      </div>
    </footer>
  )
}
