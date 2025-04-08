import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

const basePath = process.env.VITE_ROUTER_BASENAME || '/'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: basePath,
  server: {
    host: '0.0.0.0',
  },
})
