'use client'

import { sendEmail } from '@/api'
import { ContactForm, FormOutput, contactFormResolver, defaultContactFormValues } from '@/model'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Toast, useToast } from './useToast'

export function useContactForm(props: Toast): FormOutput<ContactForm> {
  const form = useForm<ContactForm>({
    resolver: contactFormResolver,
    defaultValues: defaultContactFormValues,
  })
  const { toast } = useToast()
  const [isPending, setIsPending] = useState(false)

  async function onSubmit(data: ContactForm): Promise<void> {
    if (isPending) return

    try {
      setIsPending(true)
      await sendEmail(data)
      const { dismiss } = toast(props)
      setTimeout(dismiss, 3000)
    } catch (error) {
      const description = error instanceof Error ? error.message : 'An error has occurred.'
      const { dismiss } = toast({ title: 'Error', description })
      setTimeout(dismiss, 3000)
    } finally {
      setIsPending(false)
      form.reset()
    }
  }

  return {
    form,
    isPending,
    onSubmit: form.handleSubmit(onSubmit),
  }
}
