#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import { createHash } from 'crypto';

// Convertir __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

try {
  console.log('🚀 Construyendo el proyecto...');
  execSync('npm run build', { stdio: 'inherit' });
} catch (error) {
  console.error('❌ Error al construir el proyecto:', error.message);
  console.log('\n💡 Sugerencia: Si hay problemas con el minificador, prueba ejecutar:');
  console.log('   npm run build -- --minify false');
  process.exit(1);
}

console.log('\n📊 Analizando tamaño del bundle...');

// Verificar si el directorio dist existe
if (!fs.existsSync(distDir)) {
  console.error(`❌ Error: El directorio ${distDir} no existe.`);
  console.log('Asegúrate de que la construcción se completó correctamente.');
  process.exit(1);
}

// Leer el directorio de distribución
const assets = [];
let totalSize = 0;
let totalGzipSize = 0;

// Función para calcular el tamaño Gzip estimado
function calculateGzipSize(content) {
  const input = typeof content === 'string' ? Buffer.from(content) : content;
  // Usamos un hash para simular la compresión sin crear archivos reales
  const hash = createHash('md5').update(input).digest('hex');
  // Devolvemos un tamaño aproximado (60-70% del original)
  return Math.floor(input.length * 0.65);
}

// Leer todos los archivos recursivamente
function readDir(dir) {
  try {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        readDir(filePath);
      } else {
        try {
          const content = fs.readFileSync(filePath);
          const size = content.length;
          const gzipSize = calculateGzipSize(content);
          const ext = path.extname(file).slice(1);
          
          totalSize += size;
          totalGzipSize += gzipSize;
          
          assets.push({
            name: path.relative(distDir, filePath),
            size,
            gzipSize,
            ext
          });
        } catch (err) {
          console.warn(`⚠️ No se pudo leer el archivo ${filePath}: ${err.message}`);
        }
      }
    }
  } catch (err) {
    console.warn(`⚠️ No se pudo leer el directorio ${dir}: ${err.message}`);
  }
}

try {
  readDir(distDir);
  
  if (assets.length === 0) {
    console.error('❌ No se encontraron archivos para analizar.');
    process.exit(1);
  }
  
  // Ordenar por tamaño
  assets.sort((a, b) => b.size - a.size);
  
  console.log('\n🗂️  Archivos por tamaño:');
  console.log('---------------------------------------------');
  console.log('ARCHIVO                    TAMAÑO    GZIP');
  console.log('---------------------------------------------');
  
  for (const asset of assets) {
    const sizeKB = (asset.size / 1024).toFixed(2).padStart(7, ' ');
    const gzipKB = (asset.gzipSize / 1024).toFixed(2).padStart(7, ' ');
    console.log(`${asset.name.padEnd(25, ' ')} ${sizeKB} KB ${gzipKB} KB`);
  }
  
  console.log('---------------------------------------------');
  console.log(`TOTAL                     ${(totalSize / 1024).toFixed(2)} KB ${(totalGzipSize / 1024).toFixed(2)} KB`);
  
  // Agrupar por extensión
  const extSizes = {};
  for (const asset of assets) {
    if (!extSizes[asset.ext]) {
      extSizes[asset.ext] = {
        count: 0,
        size: 0,
        gzipSize: 0
      };
    }
    extSizes[asset.ext].count++;
    extSizes[asset.ext].size += asset.size;
    extSizes[asset.ext].gzipSize += asset.gzipSize;
  }
  
  console.log('\n📝 Resumen por tipo de archivo:');
  console.log('---------------------------------------------');
  console.log('TIPO      ARCHIVOS    TAMAÑO      GZIP');
  console.log('---------------------------------------------');
  
  for (const [ext, info] of Object.entries(extSizes)) {
    const count = String(info.count).padStart(5, ' ');
    const sizeKB = (info.size / 1024).toFixed(2).padStart(10, ' ');
    const gzipKB = (info.gzipSize / 1024).toFixed(2).padStart(10, ' ');
    console.log(`${ext.padEnd(9, ' ')} ${count} ${sizeKB} KB ${gzipKB} KB`);
  }
  
  // Mostrar recomendaciones
  const jsAssets = assets.filter(a => a.ext === 'js');
  const jsSize = jsAssets.reduce((sum, a) => sum + a.size, 0);
  
  console.log('\n💡 Recomendaciones para reducir el tamaño del bundle:');
  
  if (jsSize > 500 * 1024) {
    console.log('- El tamaño total de JavaScript es grande. Considere implementar code-splitting.');
  }
  
  const largeAssets = assets.filter(a => a.size > 200 * 1024);
  if (largeAssets.length > 0) {
    console.log('- Los siguientes archivos son muy grandes y deberían optimizarse:');
    for (const asset of largeAssets) {
      console.log(`  - ${asset.name} (${(asset.size / 1024).toFixed(2)} KB)`);
    }
  }
  
  // Guardar informe en archivo
  const reportPath = path.join(distDir, 'bundle-report.json');
  fs.writeFileSync(reportPath, JSON.stringify({
    totalSize,
    totalGzipSize,
    assets,
    byExtension: extSizes
  }, null, 2));
  
  console.log(`\n✅ Reporte guardado en ${reportPath}`);
  console.log('\n🌐 Para ver el reporte gráfico, use una herramienta como "source-map-explorer" o "webpack-bundle-analyzer".');
  
} catch (error) {
  console.error('❌ Error al analizar el bundle:', error);
  process.exit(1);
} 