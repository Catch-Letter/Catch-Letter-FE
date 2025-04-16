import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import fs from 'fs'
import path from 'path'

const basePath = process.env.PR_PREVIEW_PATH || '/'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: basePath,
  server: {
    host: '0.0.0.0',
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'cert/catchletter.kr-key.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, 'cert/catchletter.kr.pem')),
    },
  },
})
