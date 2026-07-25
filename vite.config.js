import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimize chunk splitting for better caching and parallel loading
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks
          'react-vendor': ['react', 'react-dom'],
          // Each lazy-loaded section gets its own chunk for better granularity
          'services': ['./src/components/home/Services.jsx'],
          'work': ['./src/components/home/Work.jsx'],
          'testimonials': ['./src/components/home/Testimonials.jsx'],
          'pricing': ['./src/components/home/Pricing.jsx'],
          'contact': ['./src/components/home/Contact.jsx'],
        }
      }
    },
    // Reduce initial chunk size
    chunkSizeWarningLimit: 500,
    // Use Vite's default esbuild minification
    minify: 'esbuild'
  }
})
