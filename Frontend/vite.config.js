import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),
  ],
  server:{
    port:4002,
    proxy:{
      '/api':{
        target:"https://real-time-chat-app-x1x9.onrender.com",
        changeOrigin:true,
      }
    }
  }
})
