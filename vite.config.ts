import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import fs from 'fs'
import path from 'path'

const basePath = process.env.PR_PREVIEW_PATH || '/'

const isLocal = process.env.NODE_ENV !== 'production'
const keyPath = path.resolve(__dirname, 'cert/catchletter.kr-key.pem')
const certPath = path.resolve(__dirname, 'cert/catchletter.kr.pem')

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: basePath,
  server:
    isLocal && fs.existsSync(keyPath) && fs.existsSync(certPath)
      ? {
          host: '0.0.0.0',
          https: {
            key: fs.readFileSync(keyPath),
            cert: fs.readFileSync(certPath),
          },
        }
      : {
          host: '0.0.0.0',
        },
})
