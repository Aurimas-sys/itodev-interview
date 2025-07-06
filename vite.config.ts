import react from '@vitejs/plugin-react'
import Fonts from 'unplugin-fonts/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Fonts({
      google: {
        families: [
          {
            name: 'Inter',
            styles: 'wght@400;500;600',
            defer: true,
          },
        ],
        display: 'swap',
      },
    }),
  ],
})
