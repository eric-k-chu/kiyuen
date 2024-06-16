'use client'

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form as FormProvider,
  Input,
  Textarea,
} from '@/components/ui'
import { useContactForm } from '@/hooks'
import { Loader } from 'lucide-react'
import { ReactElement } from 'react'
import { SectionContainer } from './SectionContainer'

export function Contact(): ReactElement {
  const { form, onSubmit, isPending } = useContactForm({
    title: 'Success!',
    description: 'Email sent.',
  })

  return (
    <SectionContainer id='contact'>
      <FormProvider {...form}>
        <Card
          className='w-full max-w-[290px] sm:max-w-[33%]'
          data-aos='fade-up'
          data-aos-anchor='#contact'
        >
          <CardHeader>
            <CardTitle>Contact Me</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit} className='space-y-4'>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder='Your name' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder='you@example.com' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='message'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder='Your message here' {...field} rows={8} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type='submit' className='w-full' disabled={isPending}>
                {isPending ? <Loader className='animate-spin' /> : 'Send'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </FormProvider>
    </SectionContainer>
  )
}
