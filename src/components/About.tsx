import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { SectionContainer } from './SectionContainer'
import { GitHubLink, LinkedInLink } from './Socials'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui'

export function About(): React.ReactElement {
  return (
    <SectionContainer id='about' className='flex-col-reverse gap-8 sm:flex-row'>
      <Card className='w-[320px]'>
        <CardHeader>
          <CardTitle>Eric Chu</CardTitle>
          <CardDescription>Chino, California</CardDescription>
        </CardHeader>
        <CardContent className='grid gap-4'>
          <section className='flex items-center gap-x-1.5'>
            <span>Software Engineer at</span>
            <a
              href='https://www.terros.com/'
              rel='noreferrer noopener'
              target='_blank'
              className='flex items-center gap-x-2'
            >
              Terros
              <ExternalLink size={16} />
            </a>
          </section>
        </CardContent>
        <CardFooter className='items-center gap-x-6'>
          <GitHubLink />
          <LinkedInLink />
        </CardFooter>
      </Card>
      <Image
        src='/profile.jpg'
        alt='Eric Chu'
        className='size-72 rounded-full object-cover'
        width={200}
        height={0}
      />
    </SectionContainer>
  )
}
