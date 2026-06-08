import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/app/',          // React assets load from /app/ → hindeclasses.com/app/
  build: {
    outDir: 'docs/app',   // Vite writes into docs/app/ (Pages serves docs/)
    emptyOutDir: true,    // Clean old build before new one
  },
})
