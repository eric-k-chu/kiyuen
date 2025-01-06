import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'ctp-rosewater': 'hsl(var(--ctp-rosewater))',
        'ctp-flamingo': 'hsl(var(--ctp-flamingo))',
        'ctp-pink': 'hsl(var(--ctp-pink))',
        'ctp-mauve': 'hsl(var(--ctp-mauve))',
        'ctp-red': 'hsl(var(--ctp-red))',
        'ctp-maroon': 'hsl(var(--ctp-maroon))',
        'ctp-peach': 'hsl(var(--ctp-peach))',
        'ctp-yellow': 'hsl(var(--ctp-yellow))',
        'ctp-green': 'hsl(var(--ctp-green))',
        'ctp-teal': 'hsl(var(--ctp-teal))',
        'ctp-sky': 'hsl(var(--ctp-sky))',
        'ctp-sapphire': 'hsl(var(--ctp-sapphire))',
        'ctp-blue': 'hsl(var(--ctp-blue))',
        'ctp-lavender': 'hsl(var(--ctp-lavender))',
        'ctp-text': 'hsl(var(--ctp-text))',
        'ctp-subtext1': 'hsl(var(--ctp-subtext1))',
        'ctp-subtext0': 'hsl(var(--ctp-subtext0))',
        'ctp-overlay2': 'hsl(var(--ctp-overlay2))',
        'ctp-overlay1': 'hsl(var(--ctp-overlay1))',
        'ctp-overlay0': 'hsl(var(--ctp-overlay0))',
        'ctp-surface2': 'hsl(var(--ctp-surface2))',
        'ctp-surface1': 'hsl(var(--ctp-surface1))',
        'ctp-surface0': 'hsl(var(--ctp-surface0))',
        'ctp-base': 'hsl(var(--ctp-base))',
        'ctp-mantle': 'hsl(var(--ctp-mantle))',
        'ctp-crust': 'hsl(var(--ctp-crust))',
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
