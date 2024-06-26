import { PORTFOLIO_CONFIG } from '@/config'
import type { Experience } from '@/model'
import { ReactNode } from 'react'
import { SectionContainer } from './SectionContainer'
import { TechTooltip } from './TechTooltip'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui'

export function Experience(): React.ReactNode {
  const { experiences } = PORTFOLIO_CONFIG
  return (
    <SectionContainer id='experience'>
      <Card className='max-w-[320px] sm:max-w-4xl'>
        <CardHeader>
          <CardTitle>Experience</CardTitle>
          <CardDescription>Education and Experience</CardDescription>
        </CardHeader>
        <CardContent>
          {experiences.map((tl, idx) => (
            <TimelineCard key={tl.year} {...tl} last={idx === experiences.length - 1} />
          ))}
        </CardContent>
      </Card>
    </SectionContainer>
  )
}

function TimelineCard(props: Experience & { last: boolean }): ReactNode {
  const { year, history, last } = props
  return (
    <>
      {history.map((job, idx) => {
        const { title, company, skills, start, end } = job
        const isLast = last && idx === history.length - 1
        const isFirst = idx === 0
        return (
          <div className='relative py-6 pl-[5rem] sm:pl-24' key={title + company}>
            <div className='pl-2'>
              <p className='mb-1 text-sm font-thin text-muted-foreground sm:text-base'>{company}</p>
              <section className='mb-3 flex items-center'>
                {!isLast && (
                  <div
                    className='absolute left-0 ml-[4.5rem] h-full -translate-x-1/2 translate-y-3 transform self-start bg-muted-foreground px-px sm:ml-20'
                    aria-hidden
                  />
                )}
                <div
                  className='absolute left-0 ml-[4.5rem] box-content size-2 -translate-x-1/2 transform rounded-full bg-primary sm:ml-20'
                  aria-hidden
                />
                {isFirst && (
                  <p className='absolute left-0 inline-flex rounded-full bg-accent px-3 py-1 text-xs text-muted-foreground sm:text-sm'>
                    {year}
                  </p>
                )}
                <div className='flex items-center gap-x-2'>
                  <h4 className='text-base font-semibold sm:text-lg'>{title}</h4>
                  <i className='hidden text-sm text-muted-foreground sm:block'>{`${start} - ${end}`}</i>
                </div>
              </section>
              <section className='flex flex-wrap items-center gap-2 text-sm sm:gap-4'>
                {skills.map((tech) => (
                  <TechTooltip key={tech + company + title + year} tech={tech} />
                ))}
              </section>
            </div>
          </div>
        )
      })}
    </>
  )
}
