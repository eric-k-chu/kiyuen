import { zodResolver } from '@hookform/resolvers/zod'
import { FormEvent } from 'react'
import { FieldValues, UseFormReturn } from 'react-hook-form'
import { z } from 'zod'

export type FormOutput<T extends FieldValues> = {
  form: UseFormReturn<T>
  isPending: boolean
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
}

export type ContactFormFields = {
  name: string
  email: string
  message: string
}

export const contactFormSchema = z.object({
  name: z.string().min(1, {
    message: 'Name cannot be empty',
  }),
  email: z.string().email('Invalid email address'),
  message: z.string().min(1, {
    message: 'Message cannot be empty',
  }),
})

export const defaultContactFormValues = {
  name: '',
  email: '',
  message: '',
}

export const contactFormResolver = zodResolver(contactFormSchema)

export type ContactForm = z.infer<typeof contactFormSchema>
