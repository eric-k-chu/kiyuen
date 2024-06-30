import { PORTFOLIO_CONFIG } from '@/config'
import { ExternalLink, MapPin } from 'lucide-react'
import Image from 'next/image'
import { ReactNode } from 'react'
import { SectionContainer } from './SectionContainer'
import { GitHubLink, LinkedInLink } from './Socials'
import { TechTooltip } from './TechTooltip'
import { GridBackground } from './backgrounds'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui'

export function About(): ReactNode {
  const { currentJob, currentLocation } = PORTFOLIO_CONFIG
  return (
    <SectionContainer
      id='about'
      className='relative flex-col-reverse gap-8 overflow-hidden sm:flex-row'
    >
      <GradientOverlay />
      <GridBackground />
      <Card className='z-10 w-[320px]'>
        <CardHeader>
          <CardTitle>Eric Chu</CardTitle>
          <div className='flex items-center gap-x-1 text-sm text-muted-foreground'>
            <MapPin className='inline' size={14} />
            {currentLocation}
          </div>
        </CardHeader>
        <CardContent className='grid gap-4'>
          <section className='flex items-center gap-x-1.5'>
            <span>{`${currentJob.title} at`}</span>
            <a
              href={currentJob.link}
              rel='noreferrer noopener'
              target='_blank'
              className='flex items-center gap-x-2'
            >
              {currentJob.company}
              <ExternalLink size={16} />
            </a>
          </section>
        </CardContent>
        <CardFooter className='items-center gap-x-6'>
          <GitHubLink />
          <LinkedInLink />
          <TechTooltip
            tech='shadcnui'
            size={20}
            className='ml-auto scale-100 dark:invert'
            alt='Using @shadcn/ui'
          />
        </CardFooter>
      </Card>
      <Image
        src='/profile.jpg'
        alt='Eric Chu'
        className='z-10 size-72 rounded-full border-2 object-cover shadow-lg'
        width={200}
        height={0}
        priority
      />
    </SectionContainer>
  )
}

function GradientOverlay(): ReactNode {
  return (
    <div className='pointer-events-none absolute inset-0 z-[1] size-full bg-gradient-to-t from-background to-transparent to-40%' />
  )
}
