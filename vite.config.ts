
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
      // Make sure Vite dev server doesn't override our Content-Security-Policy
      "Content-Security-Policy": `
        default-src 'self';
        script-src 'self' 'unsafe-inline' 'unsafe-eval' https://apis.google.com https://calendar.google.com https://www.gstatic.com https://www.google.com;
        style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
        img-src 'self' data: https://www.gstatic.com https://calendar.google.com;
        font-src 'self' https://fonts.gstatic.com;
        frame-src 'self' https://calendar.google.com;
        connect-src 'self' https://apis.google.com https://calendar.google.com;
      `
    }
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
