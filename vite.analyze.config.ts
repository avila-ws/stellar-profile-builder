import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from 'fs';

interface BundleInfo {
  fileName: string;
  size: string;
  imports: string[];
  dynamicImports: string[];
  modules: number;
}

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    react(),
    {
      name: 'analyze-bundle',
      writeBundle(options, bundle) {
        const dirPath = options?.dir || 'dist';
        const bundleInfo: BundleInfo[] = [];
        
        Object.entries(bundle).forEach(([fileName, info]: [string, any]) => {
          if (info.type === 'chunk') {
            const filePath = path.join(dirPath, fileName);
            const fileSize = fs.statSync(filePath).size;
            const fileSizeKB = (fileSize / 1024).toFixed(2);
            
            bundleInfo.push({
              fileName,
              size: `${fileSizeKB} KB`,
              imports: info.imports || [],
              dynamicImports: info.dynamicImports || [],
              modules: Object.keys(info.modules || {}).length
            });
          }
        });
        
        // Ordenar por tamaño (mayor a menor)
        bundleInfo.sort((a, b) => parseFloat(b.size) - parseFloat(a.size));
        
        const reportContent = `
# Análisis de Bundle (${new Date().toISOString()})

## Archivos JavaScript:

| Archivo | Tamaño | Módulos | Imports |
|---------|--------|---------|---------|
${bundleInfo.map(info => `| ${info.fileName} | ${info.size} | ${info.modules} | ${info.imports.length + info.dynamicImports.length} |`).join('\n')}

## Detalles:

${bundleInfo.map(info => `
### ${info.fileName} (${info.size})

- **Módulos:** ${info.modules}
- **Imports estáticos:** ${info.imports.length}
- **Imports dinámicos:** ${info.dynamicImports.length}

${info.imports.length > 0 ? `**Imports estáticos:**\n${info.imports.map(imp => `- ${imp}`).join('\n')}` : ''}

${info.dynamicImports.length > 0 ? `**Imports dinámicos:**\n${info.dynamicImports.map(imp => `- ${imp}`).join('\n')}` : ''}
`).join('\n')}

Generado automáticamente por vite.analyze.config.ts
        `;
        
        fs.writeFileSync(path.join(dirPath, 'bundle-analysis.md'), reportContent);
        console.log(`\nAnálisis de bundle generado en ${path.join(dirPath, 'bundle-analysis.md')}\n`);
      }
    }
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    minify: 'esbuild',
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
          ]
        }
      }
    }
  }
}); 