import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'


export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@src', replacement: resolve(__dirname, 'src') },
      { find: '@shared', replacement: resolve(__dirname, 'shared/src') },
    ],
  },
  build: {
    target: 'es2017',
    manifest: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [
            'react',
            'react-dom',
            'react-router-dom',
            'react-helmet-async',
            'lottie-react',
          ],
        },
      },
      onwarn(warning, warn) {
        if (warning && typeof warning === 'object' && 'message' in warning) {
          const message = warning.message || ''
          if (message.includes('contains an annotation that Rollup cannot interpret')) 
            return
          if (message.includes('Use of eval in') && message.includes('lottie-web')) 
            return
        }
        warn(warning)
      },
    },
  },
})
