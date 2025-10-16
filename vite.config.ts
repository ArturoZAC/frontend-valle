import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/landingpages/valleagricola',
  build: {
    outDir: 'dist',
  },
  server: {
    open: true,
  },
})