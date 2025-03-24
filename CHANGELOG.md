# Changelog

Todas las modificaciones notables a este proyecto serán documentadas en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.2] - 2025-03-24

### Añadido
- Efecto parpadeante en el icono Calendar para mejorar visibilidad y experiencia de usuario
- Entrada en documentación sobre nuevas mejoras en UI

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