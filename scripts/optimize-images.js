import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const IMAGES_TO_OPTIMIZE = [
  'lovable-uploads/74204ed6-b70d-42fc-962a-ad475ddd4383.png',
  'og-image.png'
];

async function optimizeImage(inputPath, outputPath) {
  try {
    const stats = fs.statSync(inputPath);
    const originalSize = stats.size;
    
    await sharp(inputPath)
      .resize(1920, 1080, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ quality: 80 })
      .toFile(outputPath);
    
    const newStats = fs.statSync(outputPath);
    const newSize = newStats.size;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(2);
    
    console.log(`✅ ${path.basename(inputPath)} optimizado:`);
    console.log(`   Original: ${(originalSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   Optimizado: ${(newSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   Ahorro: ${savings}%`);
    
    return true;
  } catch (error) {
    console.error(`❌ Error optimizando ${inputPath}:`, error);
    return false;
  }
}

async function main() {
  console.log('🔄 Iniciando optimización de imágenes...\n');
  
  for (const imagePath of IMAGES_TO_OPTIMIZE) {
    const inputPath = path.join('public', imagePath);
    const outputPath = path.join('public', imagePath.replace('.png', '.webp'));
    
    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️ No se encontró: ${imagePath}`);
      continue;
    }
    
    await optimizeImage(inputPath, outputPath);
  }
  
  console.log('\n✨ Optimización completada');
}

main().catch(console.error); 