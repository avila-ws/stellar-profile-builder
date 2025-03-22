import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
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
        "https://apis.google.com/ " +
        "https://*.googleapis.com " +
        "https://*.google.com " +
        "https://*.gstatic.com " +
        "https://www.googletagmanager.com " +
        "data: blob:; " +
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://*.gstatic.com; " +
        "font-src 'self' data: https://fonts.gstatic.com; " +
        "img-src 'self' data: blob: https:; " +
        "connect-src 'self' https://*.google.com https://*.gstatic.com https://*.googleapis.com; " +
        "frame-src 'self' https://*.google.com; " +
        "media-src 'self' blob: https: data:; " +
        "object-src 'none'; " +
        "base-uri 'self'; " +
        "form-action 'self'; " +
        "frame-ancestors 'self'; " +
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
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
