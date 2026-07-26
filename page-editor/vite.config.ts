import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

const rootDir = resolve(__dirname, '..')
const projectSrc = resolve(rootDir, 'src')
const contentDir = resolve(rootDir, 'content')

export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',
    port: 5175,
    fs: {
      allow: [rootDir, projectSrc, contentDir],
    },
  },
  resolve: {
    alias: [
      { find: '@shared', replacement: resolve(rootDir, 'shared/src') },
      { find: '@editor', replacement: resolve(__dirname, 'src') },
    ],
  },
})
