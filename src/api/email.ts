import { ContactFormFields } from '@/model'

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAIL_SERVICE
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAIL_PK

export async function sendEmail(data: ContactFormFields): Promise<void> {
  const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      service_id: SERVICE_ID,
      template_id: TEMPLATE_ID,
      user_id: PUBLIC_KEY,
      template_params: data,
    }),
  })
  if (!response.ok) throw new Error(`${response.statusText}: ${response.status}`)
}
