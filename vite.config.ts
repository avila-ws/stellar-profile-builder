import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => ({
  base: "/",
  server: {
    host: "::",
    port: 8080,
    headers: {
      // CSP más permisivo para permitir scripts durante desarrollo
      'Content-Security-Policy': mode === 'development' ? 
        // Versión relajada para desarrollo
        "default-src 'self'; " +
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' http: https: blob: data:; " +
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://*.gstatic.com; " +
        "font-src 'self' data: https://fonts.gstatic.com; " +
        "img-src 'self' data: blob: https:; " +
        "connect-src 'self' ws: wss: http: https:; " +
        "frame-src 'self' https://*.google.com; " +
        "media-src 'self' blob: https: data:; " +
        "object-src 'none'; " +
        "base-uri 'self'; " +
        "form-action 'self'; " +
        "frame-ancestors 'self' https://*.lovableproject.com https://*.lovable.app https://*.lovable.dev; " +
        "worker-src 'self' blob: data:; " +
        "manifest-src 'self'" :
        // Versión más restrictiva para producción
        "default-src 'self'; " +
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' " +
        "https://cdn.gpteng.co " +
        "https://apis.google.com " +
        "https://apis.google.com/js/api.js " +
        "https://apis.google.com/js/client.js " +
        "https://static.cloudflareinsights.com/ " +
        "https://*.googleapis.com " +
        "https://*.google.com " +
        "https://*.gstatic.com " +
        "https://www.googletagmanager.com " +
        "https://play.google.com/ " +
        "data: blob:; " +
        "connect-src 'self' https://avila.ws https://apis.google.com https://static.cloudflareinsights.com https://play.google.com https://*.googleapis.com wss://*.lovableproject.com wss://*.lovable.app wss://*.lovable.dev; " +
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://*.gstatic.com; " +
        "font-src 'self' data: https://fonts.gstatic.com; " +
        "img-src 'self' data: blob: https:; " +
        "frame-src 'self' https://*.google.com https://avila.ws; " +
        "media-src 'self' blob: https: data:; " +
        "object-src 'none'; " +
        "base-uri 'self'; " +
        "form-action 'self'; " +
        "frame-ancestors 'self' https://avila.ws https://*.google.com https://*.lovableproject.com https://*.lovable.app https://*.lovable.dev; " +
        "worker-src 'self' blob: data:; " +
        "manifest-src 'self'",

      // Headers adicionales de seguridad
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'SAMEORIGIN',
      'X-XSS-Protection': '1; mode=block',
      
      // Headers CORS
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
      
      // Headers para cookies
      'Set-Cookie': [
        'SameSite=Lax',
        'Secure',
        'HttpOnly'
      ].join('; ')
    },
    // Permitir hosts de Lovable
    allowedHosts: [
      '1ea06da7-316a-40c1-96c1-33bf4405384b.lovableproject.com',
      '.lovableproject.com',
      '.lovable.app',
      '.lovable.dev'
    ],
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    visualizer({
      filename: 'dist/stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: mode === 'development',
    reportCompressedSize: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': [
            'react', 
            'react-dom',
            'react-router-dom',
          ],
          'ui': [
            '@radix-ui/react-accordion',
            '@radix-ui/react-avatar',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-tabs',
            '@radix-ui/react-toast',
            'class-variance-authority',
            'clsx',
            'tailwind-merge',
            'lucide-react'
          ],
          'i18n': [
            'i18next',
            'react-i18next'
          ],
          'form': [
            'react-hook-form',
            '@hookform/resolvers',
            'zod'
          ],
        }
      }
    },
    minify: 'esbuild',
    esbuildOptions: {
      drop: mode === 'production' ? ['console', 'debugger'] : [],
    },
  }
}));
