import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
import path from 'node:path'
import tailwindcss from 'tailwindcss'
import { defineConfig } from 'vite'
import markdown, { Mode } from 'vite-plugin-markdown'

// https://vite.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  plugins: [
    TanStackRouterVite(),
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler', { target: '18' }]],
      },
    }),
    markdown({
      mode: [Mode.REACT],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '~meta': path.resolve(__dirname, 'meta.json'),
    },
  },
})
