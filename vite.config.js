import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { visualizer } from 'rollup-plugin-visualizer'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      includeAssets: ['logo.png', 'favicon.png', 'hero-remstack.png'],
      manifest: {
        name: 'RemStack Technologies',
        short_name: 'RemStack',
        description: 'RemStack Technologies brings modern web, mobile, and cloud solutions to businesses in Ethiopia and beyond.',
        theme_color: '#0F172A',
        background_color: '#F8FAFC',
        display: 'standalone',
        start_url: '/',
        scope: '/',
        icons: [
          {
            src: '/logo.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/logo.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /\.(?:js|css|html|json)$/, 
            handler: 'NetworkFirst',
            options: {
              cacheName: 'static-resources',
              expiration: {
                maxEntries: 80,
                maxAgeSeconds: 60 * 60 * 24 * 30
              }
            }
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/, 
            handler: 'CacheFirst',
            options: {
              cacheName: 'image-assets',
              expiration: {
                maxEntries: 60,
                maxAgeSeconds: 60 * 60 * 24 * 60
              }
            }
          }
        ]
      }
    }),
    visualizer({
      filename: './dist/stats.html',
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  build: {
    minify: 'esbuild',
    esbuildOptions: {
      dropConsole: true,
      dropDebugger: true,
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          animations: ['framer-motion', 'gsap'],
          icons: ['lucide-react'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  preview: {
    port: 4173,
    host: true,
  },
})
