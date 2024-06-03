import { TIMELINE, Tech, TimelineItem } from '@/common'
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui'

export function Experience(): React.ReactElement {
  return (
    <Card className='mx-auto w-full max-w-3xl'>
      <CardHeader>
        <CardTitle>Experience</CardTitle>
        <CardDescription>Education and Experience</CardDescription>
      </CardHeader>
      <CardContent>
        {TIMELINE.map((tl, idx) => (
          <TimelineCard key={tl.year} {...tl} last={idx === TIMELINE.length - 1} />
        ))}
      </CardContent>
    </Card>
  )
}

function TimelineCard(props: TimelineItem & { last: boolean }): React.ReactElement {
  const { year, exp, last } = props
  return (
    <>
      {exp.map((we, idx) => {
        const { title, place, skills, start, end } = we
        const isLast = last && idx === exp.length - 1
        const isFirst = idx === 0
        return (
          <div className='relative py-4 pl-24' key={title + place}>
            <div className='pl-2'>
              <p className='mb-2 text-base text-primary'>{place}</p>
              <section className='mb-3 flex items-center'>
                {!isLast && (
                  <div
                    className='absolute left-0 ml-20 h-full -translate-x-1/2 translate-y-3 transform self-start bg-muted-foreground px-px'
                    aria-hidden={true}
                  />
                )}
                <div
                  className='absolute left-0 ml-20 box-content size-2 -translate-x-1/2 transform rounded-full bg-primary'
                  aria-hidden={true}
                />
                {isFirst && (
                  <p className='absolute left-0 inline-flex rounded-full bg-accent px-3 py-1 text-sm text-muted-foreground'>
                    {year}
                  </p>
                )}
                <div className='flex items-center gap-x-2'>
                  <h4 className='text-xl font-semibold'>{title}</h4>
                  <em className='text-sm text-muted-foreground'>{`${start} - ${end}`}</em>
                </div>
              </section>
              <section className='flex flex-wrap items-center gap-4 text-sm'>
                {skills.map((tech) => (
                  <TechTooltip key={tech.alt + place + title + year} {...tech} />
                ))}
              </section>
            </div>
          </div>
        )
      })}
    </>
  )
}

function TechTooltip({ src, alt, invert }: Tech): React.ReactElement {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Image
            src={src}
            alt={alt}
            width={24}
            height={24}
            className={invert ? 'dark:invert' : undefined}
          />
        </TooltipTrigger>
        <TooltipContent>{alt}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
