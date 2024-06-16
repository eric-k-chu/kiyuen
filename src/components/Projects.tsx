import { PORTFOLIO_CONFIG } from '@/config'
import { Project } from '@/model'
import Image from 'next/image'
import { ReactElement } from 'react'
import { SectionContainer } from './SectionContainer'
import { TechTooltip } from './TechTooltip'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui'

export function Projects(): ReactElement {
  return (
    <SectionContainer id='projects'>
      <div className='grid grid-cols-1 items-center gap-6 sm:grid-cols-2 md:grid-cols-3'>
        {PORTFOLIO_CONFIG.projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </SectionContainer>
  )
}

function ProjectCard(props: Project): ReactElement {
  const { name, description, technologies, repo, live, img } = props
  return (
    <Card className='grid h-[300px] grid-rows-3 overflow-hidden'>
      <CardHeader
        className='justify-center border-t-border bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: `url(${img})`,
          borderImage: 'linear-gradient(hsl(240 100% 20% / 0.5), hsl(0 100% 20% / 0.5)) fill 1',
        }}
      >
        <CardTitle className='text-white'>{name}</CardTitle>
      </CardHeader>
      <CardContent className='space-y-6 pt-6'>
        <em className='text-muted-foreground'>{description}</em>
        <section className='flex flex-wrap items-center gap-2'>
          {technologies.map((tech) => (
            <TechTooltip key={tech} tech={tech} size={24} />
          ))}
        </section>
      </CardContent>
      <CardFooter className='items-center gap-x-6 pb-0 pt-6'>
        <a href={repo} rel='noreferrer noopener' target='_blank'>
          <Image
            className='dark:invert'
            src='/github.svg'
            alt='GitHub Logo'
            width={20}
            height={20}
            priority
          />
        </a>
        {live && (
          <a href={live} rel='noreferrer noopener' target='_blank'>
            <Image
              src='/link.svg'
              alt={`${name} live site`}
              width={20}
              height={20}
              priority
              className='dark:invert'
            />
          </a>
        )}
      </CardFooter>
    </Card>
  )
}
