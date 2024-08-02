import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/apple-clone/',
  plugins: [react(), sentryVitePlugin({
    org: "sahaj-6t",
    project: "javascript-react"
  })],

  build: {
    sourcemap: true
  }
})