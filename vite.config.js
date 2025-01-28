import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    host: true, // or use '0.0.0.0' for all interfaces
    port: 5173, // Specify a custom port if needed
  },
})

