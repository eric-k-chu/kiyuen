'use client'

import { ContactForm, contactForm } from '@/common'
import { FormOutput } from '@/common/form'
import { useForm } from 'react-hook-form'
import { Toast, useToast } from './useToast'

export function useContactForm(props: Toast): FormOutput<ContactForm> {
  const form = useForm<ContactForm>(contactForm)
  const { toast } = useToast()

  function onSubmit(data: ContactForm): void {
    const { dismiss } = toast(props)
    setTimeout(dismiss, 3000)
  }

  return {
    form,
    onSubmit: form.handleSubmit(onSubmit),
  }
}
