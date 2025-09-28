import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// DŮLEŽITÉ: název tvého repo
export default defineConfig({
  base: '/axelrod-advisory-site/',
  plugins: [react()],
})
