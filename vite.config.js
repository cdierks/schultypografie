import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        // Jede HTML-Datei entspricht einem Ghost-Template:
        index: resolve(__dirname, 'index.html'), // → index.hbs
        post: resolve(__dirname, 'post.html'), // → post.hbs
        page: resolve(__dirname, 'page.html'), // → page.hbs
        tag: resolve(__dirname, 'tag.html'), // → tag.hbs
        author: resolve(__dirname, 'author.html'), // → author.hbs
      },
    },
  },
})
