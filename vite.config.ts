import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
import path from 'node:path'
import tailwindcss from 'tailwindcss'
import { defineConfig } from 'vite'
import compileTime from 'vite-plugin-compile-time'

// https://vite.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  plugins: [TanStackRouterVite(), react(), compileTime()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '~meta': path.resolve(__dirname, 'meta.json'),
    },
  },
})
