import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/DobleLL/",
  esbuild: {
    jsxFactory: 'React.createElement'
  },
  plugins: [react()]
})
