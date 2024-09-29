import { AppShell, createTheme } from '@mantine/core'
import classes from './styles/navbar.module.css'

export const theme = createTheme({
  fontFamily: 'Inter, sans-serif',
  fontFamilyMonospace: 'Fira Code, monospace',
  components: {
    AppShell: AppShell.extend({
      classNames: {
        header: classes.border,
      },
    }),
  },
  colors: {
    'ayu-dark': [
      '#1F2430',
      '#1c202b',
      '#191d26',
      '#161922',
      '#13161d',
      '#101218',
      '#0c0e13',
      '#090b0e',
      '#06070a',
      '#030405',
      '#000000',
    ],
  },
})
