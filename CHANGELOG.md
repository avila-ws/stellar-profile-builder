# Changelog

Todas las modificaciones notables a este proyecto serán documentadas en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.5] - 2025-03-26

### Añadido
- Implementación correcta de Vercel Analytics y Speed Insights para monitoreo de rendimiento
- Nuevo script `build:optimized` para generar builds con mejor rendimiento

### Optimizado
- Mejora significativa del First Contentful Paint (FCP) de 1.8s a 1.0s
- Implementación de ResourcePreloader para precarga optimizada de componentes
- Precarga de recursos críticos en HTML
- Optimización de carga de scripts con atributo defer
- Implementación de vite-plugin-preload para mejorar carga inicial
- Configuración avanzada de esbuild para mejor minificación y tree-shaking

### Cambiado
- Reorganización de componentes React para priorizar contenido crítico
- Actualización de la documentación con nuevas técnicas de optimización
- Optimización de configuración de Vite para mejor rendimiento

### Corregido
- Inconsistencia visual en la sección de idiomas para mantener un diseño uniforme con otras secciones
- Eliminación del comportamiento de acordeón innecesario en LanguageSection

## [1.0.4] - 2025-03-26

### Añadido
- Optimización avanzada de imágenes:
  - Script `optimize-images.js` para conversión automática a WebP
  - Script `cleanup-images.js` para limpieza de imágenes originales
  - Integración de optimización de imágenes en el proceso de build

### Optimizado
- Reducción significativa del tamaño de imágenes:
  - Avatar: de 1.84 MB a 0.02 MB (98.75% de reducción)
  - og-image: de 0.22 MB a 0.01 MB (93.75% de reducción)
- Reducción del tamaño total del bundle de 3.7 MB a 1.6 MB

### Cambiado
- Actualización de referencias de imágenes PNG a WebP en componentes
- Integración de limpieza de imágenes en el script de build
- Actualización de metadatos OpenGraph para usar imágenes WebP

## [1.0.3] - 2025-03-25

### Añadido
- Scripts de análisis de bundle y optimización:
  - `analyze-bundle`: Análisis detallado del tamaño del bundle
  - `analyze-bundle:detailed`: Generación de reporte detallado en formato Markdown
  - `find-duplicates`: Detección de dependencias duplicadas
  - `analyze:all`: Ejecución completa de todos los análisis
  - `serve:report`: Servidor para visualizar reportes de análisis
- Configuración de rollup-plugin-visualizer para análisis visual del bundle
- Reportes detallados de tamaño de bundle y dependencias duplicadas
- Optimización de imágenes con conversión a formato WebP

### Corregido
- Identificación de dependencias duplicadas (no críticas para el rendimiento):
  - `string-width` (versiones 5.1.2 y 4.2.3)
  - `strip-ansi` (versiones 7.1.0 y 6.0.1)
  - `wrap-ansi` (versiones 8.1.0 y 7.0.0)
  Nota: Estas duplicaciones son necesarias para compatibilidad entre módulos CommonJS y ESM, y no afectan el tamaño del bundle final
- Optimización de tamaño de bundle mediante code-splitting
- Mejora en la estructura de chunks para mejor caching

### Cambiado
- Actualización de la configuración de Vite para optimización de bundle
- Mejora en la documentación de scripts de análisis y optimización
- Reorganización de la estructura de archivos para mejor mantenibilidad

## [1.0.2] - 2025-03-24

### Añadido
- Efecto parpadeante en el icono Calendar para mejorar visibilidad y experiencia de usuario
- Entrada en documentación sobre nuevas mejoras en UI
- Script automatizado para excluir archivos con 100% de cobertura del reporte de pruebas, mejorando la visibilidad de archivos que necesitan más tests

### Corregido
- Rutas de importación incorrectas del hook useTheme en múltiples componentes UI 
- Problemas de compilación relacionados con importaciones de módulos
- Error de carga de módulos dinámicos durante el despliegue en Lovable mediante configuración de rutas relativas
- Actualización de rutas en index.html de absolutas a relativas para compatibilidad con entornos de despliegue
- Vulnerabilidades de seguridad en dependencias (esbuild y nanoid)

### Cambiado
- Refactorizado código para utilizar de manera consistente la nueva estructura modular
- Actualizado documento de estado y plan con las mejoras recientes
- Configuración de Vite modificada para usar rutas relativas con `base: "./"`
- Actualización de Vite a la versión 6.2.2 y demás dependencias a versiones seguras

## [1.0.1] - 2025-02-10

### Añadido
- Implementación de useCallback en useChatBot para mejorar rendimiento
- Nuevos tests unitarios para componentes clave
- Optimización de estructura de testing para compatibilidad con Fast Refresh

### Corregido
- Problemas de tipado en useLanguage reemplazando `any` por tipos más específicos
- Declaraciones TypeScript redundantes en archivos de testing

### Cambiado
- Separación de contextos y hooks en archivos independientes
- Reorganización de componentes para mejorar mantenibilidad

## [1.0.0] - 2025-01-15

### Añadido
- Primera versión funcional del Stellar Profile Builder
- Implementación completa del perfil con todas las secciones principales
- Sistema de temas claro/oscuro
- Formulario de contacto
- Optimizaciones básicas de rendimiento e imágenes 