import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        yin: 'hsl(var(--yin))',
        yang: 'hsl(var(--yang))',
        flamingo: 'hsl(var(--flamingo))',
        sapphire: 'hsl(var(--sapphire))',
      },
      fontFamily: {
        mono: ['var(--font-jetbrains-mono)'],
      },
      typography: {
        DEFAULT: {
          css: {
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
      },
    },
  },

  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
}

export default config
