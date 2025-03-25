#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔍 Analizando duplicaciones de dependencias...\n');

// Verificar si existe node_modules
const nodeModulesPath = path.join(process.cwd(), 'node_modules');
if (!fs.existsSync(nodeModulesPath)) {
  console.error('❌ Error: No se encontró el directorio node_modules');
  console.log('Ejecuta npm install primero para crear node_modules');
  process.exit(1);
}

// Analizar el árbol de dependencias
try {
  console.log('📋 Árbol de dependencias:');
  const npmLsOutput = execSync('npm ls --depth=1', { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] });
  
  // Extraer solo las duplicadas del output
  const duplicateLines = npmLsOutput
    .split('\n')
    .filter(line => line.includes('deduped') || line.includes('UNMET'));
  
  if (duplicateLines.length > 0) {
    console.log('\n📊 Dependencias duplicadas o con problemas:');
    console.log(duplicateLines.join('\n'));
  } else {
    console.log('\n✅ No se encontraron dependencias duplicadas en el primer nivel');
  }
} catch (error) {
  // Capturar la salida aunque haya errores
  let output = '';
  try {
    output = error.stdout.toString();
    const duplicateLines = output
      .split('\n')
      .filter(line => line.includes('deduped') || line.includes('UNMET'));
      
    if (duplicateLines.length > 0) {
      console.log('\n📊 Dependencias duplicadas o con problemas:');
      console.log(duplicateLines.join('\n'));
    } else {
      console.log('\n✅ No se encontraron dependencias duplicadas en el primer nivel');
    }
  } catch (err) {
    console.error('❌ Error al analizar el árbol de dependencias:', err.message);
  }
}

// Analizar tamaños de paquetes
console.log('\n📦 Analizando tamaños de paquetes...');

const getAllPackageJsons = (dir, results = []) => {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    
    if (fs.statSync(fullPath).isDirectory() && file !== 'node_modules') {
      getAllPackageJsons(fullPath, results);
    } else if (file === 'package.json' && !dir.includes('node_modules')) {
      results.push(fullPath);
    }
  }
  
  return results;
};

// Contar duplicaciones por nombre de paquete
const findDuplicateVersions = () => {
  console.log('\n🔄 Buscando versiones duplicadas en node_modules...');
  
  try {
    const nodeModulesPath = path.join(process.cwd(), 'node_modules');
    const packageJsons = [];
    
    // Encontrar todos los package.json en node_modules
    const dirs = fs.readdirSync(nodeModulesPath);
    
    for (const dir of dirs) {
      // Saltar directorios que comienzan con punto o son archivos
      if (dir.startsWith('.') || !fs.statSync(path.join(nodeModulesPath, dir)).isDirectory()) {
        continue;
      }
      
      const packageJsonPath = path.join(nodeModulesPath, dir, 'package.json');
      
      if (fs.existsSync(packageJsonPath)) {
        try {
          const packageData = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
          packageJsons.push({
            name: packageData.name,
            version: packageData.version,
            path: packageJsonPath
          });
        } catch (e) {
          console.error(`Error al leer ${packageJsonPath}:`, e.message);
        }
      }
    }
    
    // Encontrar duplicados
    const packages = {};
    const duplicates = [];
    
    for (const pkg of packageJsons) {
      if (!packages[pkg.name]) {
        packages[pkg.name] = [pkg];
      } else {
        packages[pkg.name].push(pkg);
      }
    }
    
    // Mostrar duplicados
    for (const [name, instances] of Object.entries(packages)) {
      if (instances.length > 1) {
        duplicates.push({
          name,
          instances
        });
      }
    }
    
    if (duplicates.length === 0) {
      console.log('✅ No se encontraron duplicados evidentes en node_modules');
    } else {
      console.log(`⚠️ Se encontraron ${duplicates.length} paquetes con múltiples versiones:`);
      
      for (const dup of duplicates) {
        console.log(`\n📦 ${dup.name}:`);
        for (const instance of dup.instances) {
          console.log(`   - ${instance.version} (${path.relative(process.cwd(), instance.path)})`);
        }
      }
    }
  } catch (e) {
    console.error('❌ Error al buscar duplicados:', e.message);
  }
};

try {
  findDuplicateVersions();
} catch (err) {
  console.error('❌ Error general al analizar duplicados:', err.message);
}

// Analizar tamaño del bundle
console.log('\n📏 Para analizar el tamaño del bundle, ejecuta:');
console.log('   npm run analyze-bundle');

console.log('\n✅ Análisis completado'); 