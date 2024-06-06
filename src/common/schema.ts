import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters',
  }),
  email: z.string().email('Invalid email address'),
  message: z.string().min(1, {
    message: 'Message cannot be empty',
  }),
})

export type ContactForm = z.infer<typeof contactFormSchema>
