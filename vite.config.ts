import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server:{
    port:3000,
     host: true, // set to true to listen on all addresses, including LAN and public addresses
  },
  optimizeDeps: {
    include: [
      'react-awesome-slider',
      'prop-types'
    ],
  },
})
