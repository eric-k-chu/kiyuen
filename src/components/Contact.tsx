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
import { SectionContainer } from './SectionContainer'

export function Contact(): React.ReactElement {
  const { form, onSubmit } = useContactForm({
    title: 'Success!',
    description: 'Email sent.',
  })

  return (
    <SectionContainer id='contact' className='w-full'>
      <FormProvider {...form}>
        <Card className='w-1/3'>
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
                      <Input placeholder='Name...' {...field} />
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
                      <Input placeholder='Email...' {...field} />
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
                      <Textarea placeholder='Message...' {...field} rows={8} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type='submit' className='w-full'>
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </FormProvider>
    </SectionContainer>
  )
}
