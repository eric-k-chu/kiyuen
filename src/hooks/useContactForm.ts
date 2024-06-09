'use client'

import { sendEmail } from '@/api'
import { ContactForm, contactForm } from '@/common'
import { FormOutput } from '@/common/form'
import { useForm } from 'react-hook-form'
import { Toast, useToast } from './useToast'

export function useContactForm(props: Toast): FormOutput<ContactForm> {
  const form = useForm<ContactForm>(contactForm)
  const { toast } = useToast()

  async function onSubmit(data: ContactForm): Promise<void> {
    try {
      await sendEmail(data)
      const { dismiss } = toast(props)
      setTimeout(dismiss, 3000)
    } catch (error) {
      const description = error instanceof Error ? error.message : 'An error has occurred.'
      const { dismiss } = toast({ title: 'Error', description })
      setTimeout(dismiss, 3000)
    } finally {
      form.reset()
    }
  }

  return {
    form,
    onSubmit: form.handleSubmit(onSubmit),
  }
}
