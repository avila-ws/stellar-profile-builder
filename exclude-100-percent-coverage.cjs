// Script para excluir dinámicamente archivos con 100% de cobertura
// Uso: node exclude-100-percent-coverage.cjs

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Función para obtener los archivos con 100% de cobertura
function getFullCoverageFiles() {
  try {
    // Primero, ejecutar vitest con cobertura para generar el informe
    console.log('Ejecutando pruebas para generar informe de cobertura...');
    execSync('npx vitest run --coverage', { stdio: 'inherit' });
    
    // Verificar si existe el archivo de cobertura JSON
    const coveragePath = path.join(process.cwd(), 'coverage', 'coverage-final.json');
    if (!fs.existsSync(coveragePath)) {
      console.error('No se encontró el archivo de cobertura JSON.');
      return [];
    }
    
    // Leer y analizar el archivo JSON de cobertura
    const coverageData = JSON.parse(fs.readFileSync(coveragePath, 'utf8'));
    const fullCoverageFiles = [];
    
    for (const filePath in coverageData) {
      // Ignorar archivos de prueba y definiciones de tipos
      if (filePath.includes('/__tests__/') || filePath.includes('.d.ts') || 
          filePath.includes('/main.tsx') || 
          filePath.includes('/vite-env.d.ts')) {
        continue;
      }
      
      const fileData = coverageData[filePath];
      
      // Verificar si el archivo tiene algún código para cubrir
      const hasStatements = Object.keys(fileData.s).length > 0;
      const hasBranches = Object.keys(fileData.b).length > 0;
      const hasFunctions = Object.keys(fileData.f).length > 0;
      
      // Si no hay código para cubrir, ignorar el archivo
      if (!hasStatements && !hasBranches && !hasFunctions) {
        console.log(`Ignorando ${filePath} - no contiene código ejecutable para cubrir`);
        continue;
      }
      
      // Analizar las estadísticas del archivo
      const statementCovered = hasStatements && Object.values(fileData.s).every(v => v > 0);
      const branchCovered = !hasBranches || Object.values(fileData.b).every(v => v[0] > 0);
      const functionCovered = !hasFunctions || Object.values(fileData.f).every(v => v > 0);
      
      // Solo incluir si TODAS las métricas son 100%
      if (statementCovered && branchCovered && functionCovered) {
        // Convertir la ruta absoluta a una ruta relativa al proyecto
        const relativePath = filePath.replace(process.cwd() + '/', '');
        fullCoverageFiles.push(relativePath);
      }
    }
    
    return fullCoverageFiles;
  } catch (error) {
    console.error('Error al obtener la cobertura:', error.message);
    return [];
  }
}

// Función principal
function main() {
  console.log('Analizando cobertura de archivos...');
  const fullCoverageFiles = getFullCoverageFiles();
  
  if (fullCoverageFiles.length === 0) {
    console.log('No se encontraron archivos con 100% de cobertura.');
    return;
  }
  
  console.log(`\nSe encontraron ${fullCoverageFiles.length} archivos con 100% de cobertura:`);
  fullCoverageFiles.forEach(file => console.log(`- ${file}`));
  
  // Leer configuración existente
  const vitestConfigPath = path.join(process.cwd(), 'vitest.config.ts');
  const config = fs.readFileSync(vitestConfigPath, 'utf8');
  
  // Generar patrón de exclusión para Vitest
  const exclusionPatterns = fullCoverageFiles.map(file => {
    return `'${file}'`;
  });
  
  // Crear nueva configuración
  const updatedConfig = config.replace(
    /exclude: \[\s*(['"][^'"]+['"],\s*)*\s*\],/,
    `exclude: [
        'src/**/*.d.ts',
        'src/main.tsx',
        'src/vite-env.d.ts',
        ${exclusionPatterns.join(',\n        ')},
      ],`
  );
  
  // Crear un nuevo archivo de configuración para este propósito específico
  fs.writeFileSync('vitest.no100.config.ts', updatedConfig);
  
  console.log('\nSe ha creado vitest.no100.config.ts con la configuración para excluir archivos con 100% de cobertura');
  console.log('Para usarlo, ejecuta: npm run test:coverage:no100');
}

// Ejecutar el script
main(); 