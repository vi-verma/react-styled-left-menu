import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: "tsx", // OR "jsx"
    include: [ "src/**/*.jsx",
    "src/**/*.tsx",
    "node_modules/**/*.jsx",
    "node_modules/**/*.tsx",
    "node_modules/**/*.js",
    "src/**/*.js"],
  }
})
