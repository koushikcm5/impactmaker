import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({
      verbose: true,
      disable: false,
      threshold: 1024,
      algorithm: 'gzip',
      ext: '.gz',
    })
  ],
  build: {
    // Optimize JS parsing for Lighthouse
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Separate vendor chunks to leverage browser caching
          if (id.includes('node_modules/react')) {
            return 'react-vendor';
          }
          if (id.includes('node_modules/react-router-dom')) {
            return 'router-vendor';
          }
          if (id.includes('node_modules/lucide-react')) {
            return 'lucide';
          }
        },
        // Optimize chunk naming for better caching
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      }
    },
    // Increase chunk size warnings
    chunkSizeWarningLimit: 600,
    // Source maps only for production debugging
    sourcemap: false,
  },
  // Optimize module resolution
  resolve: {
    alias: {
      '@': '/src',
    }
  }
})
