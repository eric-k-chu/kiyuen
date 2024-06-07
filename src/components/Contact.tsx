'use client'

import {
  Button,
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
import { SectionContainer } from './SectionContainer'

export function Contact(): React.ReactElement {
  const { form, onSubmit } = useContactForm({
    title: 'Success!',
    description: 'Email sent.',
  })

  return (
    <SectionContainer id='contact' className='w-full'>
      <FormProvider {...form}>
        <form onSubmit={onSubmit} className='w-2/4 space-y-4'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder='example@gmail.com' {...field} />
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
                  <Textarea placeholder='Your message here...' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit' reader='form submit'>
            Submit
          </Button>
        </form>
      </FormProvider>
    </SectionContainer>
  )
}
