import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export type ContactFields = {
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

export type ContactForm = z.infer<typeof contactFormSchema>

export const contactForm = { resolver: zodResolver(contactFormSchema) }
