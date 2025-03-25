import fs from 'fs';
import path from 'path';

const IMAGES_TO_CLEANUP = [
  'lovable-uploads/74204ed6-b70d-42fc-962a-ad475ddd4383.png',
  'og-image.png'
];

async function cleanupImages() {
  console.log('🧹 Iniciando limpieza de imágenes PNG...\n');
  
  for (const imagePath of IMAGES_TO_CLEANUP) {
    const distPath = path.join('dist', imagePath);
    
    if (fs.existsSync(distPath)) {
      fs.unlinkSync(distPath);
      console.log(`✅ Eliminado: ${imagePath}`);
    } else {
      console.log(`⚠️ No se encontró: ${imagePath}`);
    }
  }
  
  console.log('\n✨ Limpieza completada');
}

cleanupImages().catch(console.error); 