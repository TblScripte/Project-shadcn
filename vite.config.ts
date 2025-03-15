import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url' // Импортируем функцию для получения пути
import { dirname } from 'path' // Импортируем для работы с путями

import tailwindcss from "@tailwindcss/vite"

// Определение __dirname через ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": `${__dirname}/src`, // Используем путь с __dirname
    },
  },
})
