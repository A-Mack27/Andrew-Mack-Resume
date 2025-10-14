import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Andrew-Mack-Resume/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
