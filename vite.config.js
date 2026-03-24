import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Relative base so the built site works on GitHub Pages project sites (/repo/)
  // without needing to hardcode the repository name.
  base: './',
  plugins: [react()],
})
