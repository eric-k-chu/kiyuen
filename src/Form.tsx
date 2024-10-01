import {
  Button,
  Group,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core'
import type { ReactNode } from 'react'
import { config } from './site.config'
import classes from './styles/contact.module.css'

export function ContactForm(): ReactNode {
  return (
    <form className={classes.form} onSubmit={(event) => event.preventDefault()}>
      <Text fz='lg' fw={700} className={classes.title} c='white'>
        Get in touch
      </Text>

      <div className={classes.fields}>
        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          <TextInput label='Your name' placeholder='Your name' />
          <TextInput label='Your email' placeholder='hello@mantine.dev' />
        </SimpleGrid>

        <TextInput mt='md' label='Subject' placeholder='Subject' />

        <Textarea
          mt='md'
          label='Your message'
          placeholder='Please include all relevant information'
          minRows={3}
        />

        <Group justify='flex-end' mt='md'>
          <Button
            type='submit'
            className={classes.control}
            bg={config.primary}
            c='black'
          >
            Send message
          </Button>
        </Group>
      </div>
    </form>
  )
}
