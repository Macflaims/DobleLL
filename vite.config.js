import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/DobleLL/",
  esbuild: {
    jsxInject: `import React from 'react'`
  },
  plugins: [react()]
})
