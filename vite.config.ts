import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { visualizer } from 'rollup-plugin-visualizer'
import preload from 'vite-plugin-preload'

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => ({
  base: "./",
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
        "frame-ancestors 'self'; " +
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
        "connect-src 'self' https://avila.ws https://apis.google.com https://static.cloudflareinsights.com https://play.google.com https://*.googleapis.com; " +
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://*.gstatic.com; " +
        "font-src 'self' data: https://fonts.gstatic.com; " +
        "img-src 'self' data: blob: https:; " +
        "frame-src 'self' https://*.google.com https://avila.ws; " +
        "media-src 'self' blob: https: data:; " +
        "object-src 'none'; " +
        "base-uri 'self'; " +
        "form-action 'self'; " +
        "frame-ancestors 'self' https://avila.ws https://*.google.com https://*.lovable.dev https://*.lovable.app; " +
        "worker-src 'self' blob: data:; " +
        "manifest-src 'self'",

      // Headers adicionales de seguridad
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'SAMEORIGIN',
      'X-XSS-Protection': '1; mode=block',
      
      // Headers para cookies
      'Set-Cookie': [
        'SameSite=Lax',
        'Secure',
        'HttpOnly'
      ].join('; ')
    },
  },
  plugins: [
    react({
      // Optimizar la configuración de SWC para React
      jsxImportSource: undefined,
      devTarget: 'es2022',
      plugins: []
    }),
    mode === 'development' &&
    componentTagger(),
    visualizer({
      filename: 'dist/stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
    // Plugin para precargar recursos automáticamente
    preload()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: mode === 'development',
    reportCompressedSize: true,
    // Optimizar tamaño de chunks
    chunkSizeWarningLimit: 800,
    cssCodeSplit: true,
    // Optimizar para carga más rápida
    target: 'es2020',
    // Añadir módulo de precarga
    modulePreload: { polyfill: true },
    // Asegurar que no haya problemas con las URLs de importaciones dinámicas
    assetsInlineLimit: 4096,
    // Mejorar compatibilidad con diferentes entornos de despliegue
    dynamicImportVarsOptions: {
      warnOnError: true,
      exclude: []
    },
    rollupOptions: {
      output: {
        // Formato de carga más compatible con diversos entornos
        format: 'es',
        // Optimizar entrega de assets
        assetFileNames: 'assets/[name].[hash].[ext]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
        // Evitar rutas dinámicas para carga de módulos
        hoistTransitiveImports: false,
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
      // Optimizar lógica, agregar tree-shaking agresivo
      treeShaking: true,
      // Optimizar formato de salida
      format: 'esm',
      // Optimizar para tamaño
      minifyWhitespace: true,
      minifyIdentifiers: true,
      minifySyntax: true,
    },
  }
}));
