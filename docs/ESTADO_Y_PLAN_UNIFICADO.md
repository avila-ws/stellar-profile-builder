# Estado Actual y Plan de Desarrollo

Este documento centraliza toda la información sobre el estado actual, planificación y mejoras del proyecto Stellar Profile Builder.

## 🔍 Introducción y Propósito

Stellar Profile Builder es un proyecto para crear un sitio web personal basado en mi curriculum vitae profesional. El proyecto está construido utilizando tecnologías modernas de desarrollo web:

- **Frontend**: React, TypeScript, Vite
- **UI**: Componentes de Shadcn/UI, modo oscuro/claro
- **Características**: Internacionalización (i18n), ChatBot de asistencia, formulario de contacto
- **Enfoque**: Accesibilidad, rendimiento y seguridad optimizados

El objetivo principal es mostrar mis habilidades como desarrollador mientras proporciono una plataforma profesional para compartir mi experiencia laboral, proyectos y formas de contacto.

## 📊 Resumen de Progreso

| Sección | Completado | En Progreso | Pendiente | % Completado |
|---------|------------|-------------|-----------|--------------|
| 1. Estructura básica | 2/2 | 0/0 | 0/0 | 100% |
| 2. Componentes principales | 4/4 | 0/0 | 0/0 | 100% |
| 3. Accesibilidad | 11/15 | 0/0 | 4/15 | 73% |
| 4. Internacionalización | 6/10 | 0/0 | 4/10 | 60% |
| 5. Optimización de rendimiento | 8/16 | 2/16 | 6/16 | 50% |
| 6. Seguridad | 6/21 | 0/0 | 15/21 | 29% |
| 7. Refactorización | 19/19 | 0/0 | 0/19 | 100% |
| 8. Testing | 14/22 | 1/22 | 7/22 | 64% |
| 9. SEO | 3/14 | 0/0 | 11/14 | 21% |
| 10. UX | 1/14 | 1/14 | 12/14 | 7% |
| 11. Documentación | 0/7 | 3/7 | 4/7 | 0% |
| 12. Monitoreo y Analytics | 4/14 | 5/14 | 5/14 | 29% |
| 13. Plan de Contingencia | 6/6 | 0/0 | 0/0 | 100% |
| 14. Ideas Futuras | 0/7 | 0/0 | 7/7 | 0% |
| 15. CI/CD y Automatización | 0/9 | 0/0 | 9/9 | 0% |
| 16. Containerización y Despliegue | 0/8 | 0/0 | 8/8 | 0% |
| 17. Infraestructura como Código | 0/8 | 0/0 | 8/8 | 0% |
| 18. Gestión de Contenidos y Datos | 0/8 | 0/0 | 8/8 | 0% |
| 19. Análisis Avanzado de Datos | 0/8 | 0/0 | 8/8 | 0% |
| 20. Cumplimiento y Regulaciones | 0/10 | 0/0 | 10/10 | 0% |
| 21. Privacidad por Diseño | 0/7 | 0/0 | 7/7 | 0% |
| 22. Internacionalización Legal | 0/4 | 0/0 | 4/4 | 0% |
| 23. Plan de Infraestructura Multiplataforma | 0/4 | 0/0 | 4/4 | 0% |
| **TOTAL** | **84/236** | **12/236** | **140/236** | **36%** |

## 🔥 Tareas Actuales (En Foco)

Estas son las tareas en las que estoy trabajando actualmente:

| Tarea | Estimación | Prioridad |
|-------|------------|-----------|
| 🚧 Implementar estrategias de caching | 16h | Alta |
| 🚧 Optimizar carga de fuentes | 8h | Media |
| 🚧 Implementar preload de recursos críticos | 8h | Alta |
| 🚧 Optimizar código con React.memo | 12h | Media |
| 🚧 Implementar CDN | 16h | Alta |
| 🚧 Configurar Service Worker | 16h | Alta |
| 🚧 Implementar Core Web Vitals en producción | 8h | Alta |
| 🚧 Establecer presupuestos de rendimiento para CI/CD | 8h | Media |
| 🚧 Implementar lazy loading para imágenes | 8h | Alta |
| 🚧 Implementar test end-to-end para flujo principal | 12h | Media |
| 🚧 Refinamiento de efectos hover y animaciones | 6h | Media |
| 🚧 Organización de archivos de documentación | 4h | Baja |

## 🎯 Próximas Tareas Prioritarias

Estas son las próximas tareas a abordar una vez completadas las actuales:

| Tarea | Estimación | Prioridad | 
|-------|------------|-----------|
| ⭐ Implementar tests unitarios para componentes críticos | 16h | Alta |
| ⭐ Configurar CI/CD para testing automático | 12h | Alta |
| ⭐ Mejorar contrastes para accesibilidad | 6h | Alta |
| ⭐ Configurar Performance monitoring | 10h | Media |
| Auditoría de seguridad y correcciones | 14h | Media |
| Implementar autenticación JWT | 10h | Media |
| Optimización de SEO | 8h | Baja |

## 🏆 Logros Recientes

| Tarea | Descripción | Impacto |
|-------|-------------|---------|
| ✅ Actualización de versión y configuración | Se actualizó la versión a v1.0.4 en src/config/version.ts y package.json para mantener consistencia con CHANGELOG | Mejora en el seguimiento y gestión de versiones |
| ✅ Implementación de detección de entorno | Se configuró APP_VERSION para mostrar automáticamente el entorno (development/production) | Mayor claridad en la identificación del entorno de ejecución |
| ✅ Análisis y selección de plataformas de despliegue | Se evaluaron múltiples plataformas y se seleccionó Vercel como principal, con GitHub Pages + Cloudflare como respaldo | Plan de contingencia robusto para evitar dependencia de una única plataforma |
| ✅ Actualización de dependencias y resolución de vulnerabilidades | Se actualizó Vite a v6.2.2 y otras dependencias para resolver vulnerabilidades en esbuild y nanoid | Mejora en la seguridad de la aplicación y eliminación de advertencias de vulnerabilidades |
| ✅ Corrección de importaciones de useTheme | Se actualizaron las rutas de importación del hook useTheme en múltiples componentes UI | Corrección de errores de compilación y mejor compatibilidad con la estructura modular del proyecto |
| ✅ Implementación del efecto parpadeante en icono Calendar | Se añadió una animación de parpadeo sutil para atraer la atención al calendario de reservas | Mejora de la experiencia de usuario y aumento de visibilidad para la funcionalidad de contacto |
| ✅ Implementación de useCallback en use-chatbot.ts | Se refactorizó el hook para usar correctamente useCallback y corregir las dependencias faltantes | Mejora en el rendimiento del chatbot y eliminación de advertencias de React Hooks |
| ✅ Refactorización de contextos y hooks | Se separaron contextos, hooks y tipos en archivos independientes (ThemeProvider, form, toggle) | Compatibilidad con Fast Refresh y mejor estructura de código |
| ✅ Optimización de estructura de testing | Reorganización de utils de testing en archivos separados con propósito específico | Mejor organización y compatibilidad con Fast Refresh |
| ✅ Mejora de tipado en useLanguage | Reemplazo de `any` por `Record<string, unknown>` | Tipado más específico y eliminación de advertencias de TypeScript |
| ✅ Limpieza de declaraciones TypeScript | Simplificación de vitest.d.ts eliminando interfaces innecesarias | Código más limpio y eliminación de errores de linting |
| ✅ División de componentes monolíticos | HeroSection y WorkExperience fueron refactorizados en subcomponentes más pequeños y reutilizables | Mejora de mantenibilidad y legibilidad del código |
| ✅ Movimiento de ProjectsSection a rama separada | La sección de proyectos fue aislada en una rama feature/projects-section para desarrollo independiente | Reducción de problemas TypeScript en la rama principal |
| ✅ Limpieza de código no utilizado | Eliminación de carpetas vacías y código no utilizado, incluyendo src/constants/, src/types/ y otros | Reducción del tamaño del proyecto y mejora de rendimiento |
| ✅ Corrección de importaciones | Resolución de problemas de importación en index.ts de componentes UI | Eliminación de errores TypeScript |
| ✅ Refactorización de ChatBot | Optimización del componente ChatBot para reducir bundle size y mejorar mantenibilidad | Mejor rendimiento y código más limpio |
| ✅ Optimización de importaciones | Eliminación de importaciones no utilizadas en componentes y archivos de test | Reducción del tamaño del bundle y mejora de rendimiento |
| ✅ Configuración mejorada de ESLint | Actualización de la configuración para detectar importaciones no utilizadas | Mejor calidad de código y detección temprana de problemas |

## 📈 Métricas Actuales

### Estado Actual del Rendimiento (Lighthouse)

| Métrica | Valor Actual | Objetivo | Estado |
|---------|--------------|----------|---------|
| Performance | 85/100 | >90/100 | 🚧 En progreso |
| First Contentful Paint | 1.2s | <1s | 🚧 En progreso |
| Largest Contentful Paint | 1.8s | <2s | ✅ Cumplido |
| Cumulative Layout Shift | 0.03 | <0.1 | ✅ Cumplido |
| Total Bundle Size | ~800KB | <1MB | ✅ Cumplido |

### Análisis de Bundle Actual

| Tipo de Archivo | Tamaño Total | GZIP | % del Total |
|-----------------|--------------|------|-------------|
| JavaScript | 537.29 KB | 349.23 KB | 14.5% |
| CSS | 51.09 KB | 33.21 KB | 1.4% |
| Imágenes | 37.65 KB | 24.47 KB | 1.0% |
| Otros | 971.49 KB | 631.67 KB | 26.2% |
| **Total** | **1,597.52 KB** | **1,038.58 KB** | **100%** |

### Optimizaciones de Imágenes Completadas

| Imagen | Tamaño Original | Tamaño Optimizado | Ahorro |
|--------|-----------------|-------------------|--------|
| Avatar (74204ed6-b70d-42fc-962a-ad475ddd4383) | 1.84 MB | 0.02 MB | 98.75% |
| og-image | 0.22 MB | 0.01 MB | 93.75% |

### Scripts de Optimización Implementados

| Script | Función | Estado |
|--------|---------|--------|
| optimize-images.js | Conversión automática a WebP | ✅ Activo |
| cleanup-images.js | Limpieza de imágenes originales | ✅ Activo |
| analyze-bundle.js | Análisis de tamaño del bundle | ✅ Activo |
| find-duplicates.cjs | Detección de dependencias duplicadas | ✅ Activo |

### Dependencias Duplicadas Resueltas

| Paquete | Versiones Anteriores | Versión Actual |
|---------|----------------------|-----------------|
| string-width | 5.1.2, 4.2.3 | 5.1.2 |
| strip-ansi | 7.1.0, 6.0.1 | 7.1.0 |
| wrap-ansi | 8.1.0, 7.0.0 | 8.1.0 |

### Estimación de Esfuerzo Restante

| Área | Esfuerzo Total (horas) | Completado | Restante |
|------|------------------------|------------|----------|
| Desarrollo Frontend | 320 | 70% | 96h |
| Testing | 120 | 25% | 90h |
| Optimización | 80 | 35% | 52h |
| Documentación | 40 | 45% | 22h |
| DevOps | 60 | 15% | 51h |
| Seguridad | 40 | 25% | 30h |
| **TOTAL** | **660** | **50%** | **341h** |

## 📋 Estado Detallado del Proyecto

### 1. Estructura básica del proyecto
   - ✅ Configuración inicial con Vite, React, TypeScript
   - ✅ Implementación de la UI con componentes de Shadcn/UI

### 2. Implementación de componentes principales
   - ✅ Perfil completo con todas las secciones
   - ✅ Menú de navegación y layout
   - ✅ Modo oscuro/claro
   - ✅ Formulario de contacto

### 3. Mejoras de accesibilidad
   - ✅ Optimización para lectores de pantalla
   - ✅ Navegación por teclado
   - ✅ Skip links
     - ✅ Se añadió `tabIndex={-1}` al elemento main para hacerlo focusable en `src/pages/Index.tsx`
   - ✅ Pruebas automatizadas de accesibilidad (axe-core)
   - ✅ Pruebas de contraste (modo claro/oscuro)
     - ✅ Se aumentó el contraste cambiando `text-muted-foreground` a `text-foreground/80` en `src/components/HeroSection.tsx`
   - ✅ Botones con texto accesible
     - ✅ Se añadió `aria-label="Abrir chat de asistencia"` al botón del chat en `src/components/ChatBot.tsx`
   - ✅ Enlaces con nombres descriptivos
     - ✅ Se añadió `aria-label="Perfil de LinkedIn"` y `aria-label="Perfil de GitHub"` a los enlaces de redes sociales en `src/components/contact/ContactInfo.tsx`
   - ✅ Estructura correcta de listas
     - ✅ Se corrigió la estructura añadiendo `role="list"` y eliminando atributos problemáticos en `src/components/experience/WorkExperience.tsx`
   - ✅ Atributos ARIA válidos
     - ✅ Se reemplazó un `div` por un `button` en el DialogTrigger para que los atributos ARIA sean válidos en `src/components/HeroSection.tsx`
   - ✅ Mejoras de contraste implementadas
   - 🔲 Mejoras en formularios (labels, feedback)
   - 🔲 Mejoras en componentes interactivos
     - 🔲 Acordeones y pestañas
     - 🔲 Modales y diálogos
   - 🔲 Pruebas con lectores de pantalla
   - 🔲 Documentación de accesibilidad

### 4. Internacionalización
   - ✅ Sistema i18n con soporte para español e inglés
   - ✅ Estructura de archivos de traducción
   - ✅ Componentes de cambio de idioma
   - ✅ Configuración i18n mejorada
   - ✅ Archivos de traducción migrados a mejor estructura
   - ✅ Actualización de guía de i18n
   - 🔲 Implementar i18n en todos los componentes de navegación
   - 🔲 Implementar i18n en encabezados y títulos de secciones
   - 🔲 Implementar i18n en mensajes de error y notificaciones
   - 🔲 Implementar i18n en etiquetas y placeholders de formularios
   - 🔲 Estrategia de integración de i18n:
     - 🔲 Extraer textos a archivos de traducción con claves anidadas
     - 🔲 Actualizar componentes para usar hook useLanguage
     - 🔲 Organizar traducciones por dominio/componente
     - 🔲 Probar componentes con diferentes idiomas
     - 🔲 Verificar que las traducciones no rompen layouts

#### Estructura de Archivos i18n

```
project/
├── src/
│   ├── locales/           # Archivos de traducción
│   │   ├── en/
│   │   │   ├── common.json    # Textos generales de UI
│   │   │   └── profile.json   # Textos específicos del perfil
│   │   └── es/
│   │       ├── common.json    # Textos generales en español
│   │       └── profile.json   # Textos del perfil en español
│   ├── hooks/
│   │   └── useLanguage.ts     # Hook personalizado para idiomas
```

#### Ejemplos de Implementación i18n

Ejemplo básico de uso en componentes:

```tsx
import { useLanguage } from '@/hooks/useLanguage';

function NavBar() {
  const { t } = useLanguage();
  
  return (
    <nav>
      <ul>
        <li><a href="#home">{t('navigation.home')}</a></li>
        <li><a href="#experience">{t('navigation.experience')}</a></li>
        <li><a href="#projects">{t('navigation.projects')}</a></li>
        <li><a href="#contact">{t('navigation.contact')}</a></li>
      </ul>
    </nav>
  );
}
```

Uso con diferentes namespaces:

```tsx
import { useLanguage } from '@/hooks/useLanguage';

function ProfileHeader() {
  // Usar namespace específico
  const { t } = useLanguage('profile');
  
  return (
    <header>
      <h1>{t('name')}</h1>
      <p>{t('title')}</p>
      <p>{t('summary')}</p>
    </header>
  );
}
```

Cambio de idioma:

```tsx
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';

function LanguageSwitch() {
  const { currentLanguage, toggleLanguage } = useLanguage();
  
  return (
    <Button onClick={toggleLanguage}>
      {currentLanguage === 'en' ? 'Español' : 'English'}
    </Button>
  );
}
```

### 5. Optimización de rendimiento
   - ✅ Carga perezosa de componentes
   - ✅ Optimización de imágenes básica
   - ✅ Optimización de imágenes avanzada
     - ✅ Conversión automática de PNG a WebP
       - ✅ Reducción de 1.84 MB a 0.02 MB (98.75% de ahorro) en avatar
       - ✅ Reducción de 0.22 MB a 0.01 MB (93.75% de ahorro) en og-image
     - ✅ Script de limpieza automática de imágenes originales
     - ✅ Integración en proceso de build
     - ✅ Implementación de scripts:
       - `optimize-images.js`: Conversión automática a WebP
       - `cleanup-images.js`: Limpieza de imágenes originales
   - ✅ Eliminación de componentes no utilizados (36 archivos eliminados)
   - ✅ Limpieza de dependencias no utilizadas
   - ✅ Optimización de importaciones no utilizadas
   - ✅ Estructura de código compatible con Fast Refresh
     - ✅ Separación de hooks y componentes en archivos independientes
     - ✅ Asegurar que los archivos de componentes solo exporten componentes
     - ✅ Mover constantes y utilidades a archivos separados
   - ✅ Actualización a Vite v6.2.2 para mejor rendimiento y seguridad
   - ✅ Análisis y reducción del tamaño del bundle
     - ✅ Implementación de scripts de análisis:
       - ✅ `analyze-bundle`: Análisis detallado del tamaño
       - ✅ `analyze-bundle:detailed`: Reporte en formato Markdown
       - ✅ `find-duplicates`: Detección de dependencias duplicadas
       - ✅ `analyze:all`: Ejecución completa de análisis
       - ✅ `serve:report`: Visualización de reportes
     - ✅ Configuración de rollup-plugin-visualizer
     - ✅ Optimización de chunks y code-splitting
     - ✅ Resolución de dependencias duplicadas
   - 🚧 Implementación de estrategias de caching
     - 🔲 Configurar Service Worker
     - 🔲 Implementar estrategias de cache-first para assets estáticos
     - 🔲 Utilizar localStorage para datos que no cambian frecuentemente
   - 🔲 Preload de recursos críticos
     - 🔲 Preload de fuentes y CSS crítico
   - 🔲 Optimización de código
     - 🔲 Code-splitting para rutas críticas
     - 🔲 React.memo para componentes costosos
     - 🔲 Optimizar uso de useEffect
   - 🔲 Optimización de recursos estáticos
     - 🔲 Implementar CDN si es necesario
   - 🔲 Monitorización continua
     - 🔲 Implementar Core Web Vitals en producción
     - 🔲 Realizar pruebas regulares con Lighthouse
     - 🔲 Establecer presupuestos de rendimiento para CI/CD

#### Métricas de Rendimiento Actuales
- Performance Score (Lighthouse): 85/100 (objetivo >90/100)
- First Contentful Paint: 1.2s (objetivo <1s)
- Largest Contentful Paint: 1.8s (objetivo <2s)
- Cumulative Layout Shift: 0.03 (objetivo <0.1)
- Total Bundle Size: 1.6MB (reducido desde 3.7MB)
  - JavaScript: 248.67 kB gzipped
  - Imágenes: 30 kB (optimizadas con WebP)
  - Otros assets: 5 kB

### 6. Seguridad
   - ✅ Implementación de CSP (tanto para desarrollo como producción)
   - ✅ Sanitización de datos (usando DOMPurify y xss)
   - ✅ Protección XSS (implementada en componentes como ChatBot y ContactForm)
   - ✅ Headers de seguridad adicionales (X-Content-Type-Options, X-Frame-Options, etc.)
   - ✅ Configuración de cookies seguras (SameSite, Secure, HttpOnly)
   - ✅ Resolución de vulnerabilidades en dependencias (esbuild y nanoid)
   - 🔲 Auditoría de seguridad y correcciones
   - 🔲 Implementar autenticación JWT
   - 🔲 Sistema avanzado de autorización y control de acceso
   - 🔲 Implementación de autenticación OAuth/OpenID Connect
     - 🔲 Integración con proveedores (Google, GitHub, LinkedIn)
     - 🔲 Flujo de autorización completo
     - 🔲 Gestión de perfiles de usuario externos
   - 🔲 Escaneo automatizado de vulnerabilidades
     - 🔲 Integración con OWASP ZAP
     - 🔲 Escaneo periódico en pipeline CI/CD
     - 🔲 Alertas automáticas de nuevas vulnerabilidades
   - 🔲 Configuración avanzada de Content-Security-Policy
     - 🔲 Implementación de nonce para scripts inline
     - 🔲 Política específica por sección/componente
     - 🔲 Reportes de violaciones a endpoint interno
   - 🔲 Implementación de JWT con refresh tokens
     - 🔲 Rotación segura de tokens
     - 🔲 Revocación de tokens comprometidos
     - 🔲 Blacklisting de tokens inválidos
   - 🔲 Auditoría de logs y eventos de seguridad
     - 🔲 Centralización de logs de seguridad
     - 🔲 Detección de patrones sospechosos
     - 🔲 Sistema de alertas para administradores
   - 🔲 Implementación de rate limiting
     - 🔲 Protección contra fuerza bruta
     - 🔲 Throttling para API y formularios
     - 🔲 IP-based y user-based rate limits
   - 🔲 Configuración avanzada de CORS
     - 🔲 Política específica por endpoint/recurso
     - 🔲 Control de credenciales y métodos HTTP
   - 🔲 Plan de respuesta a incidentes de seguridad
     - 🔲 Procedimientos documentados
     - 🔲 Roles y responsabilidades
     - 🔲 Ejercicios de simulación de incidentes
   - 🔲 Implementación de Secure Development Lifecycle (SDLC)
     - 🔲 Security code reviews automatizados
     - 🔲 Threat modeling para nuevas características
     - 🔲 Análisis de dependencias (SBOM)

### 7. Refactorización
   - ✅ Mejora de animaciones en componentes
   - ✅ Refactorización de componentes grandes
   - ✅ Limpieza de código no utilizado
   - ✅ Alias @/ (implementado y aplicado consistentemente)
   - ✅ Eliminación de directorio constants/ no utilizado
   - ✅ Eliminación de directorio types/ no utilizado
   - ✅ Reorganización de componentes (optimizada)
   - ✅ Limpieza de referencias a proyectos en archivos de traducción
   - ✅ Eliminación de carpetas vacías y sin uso
   - ✅ Corrección de importaciones en componentes UI
   - ✅ Componentes grandes/monolíticos
     - ✅ HeroSection.tsx - Dividido en subcomponentes más pequeños y reutilizables
     - ✅ WorkExperience.tsx - Convertido en tarjetas de experiencia individuales
     - ✅ ProjectsSection.tsx - Movido a rama feature/projects-section para desarrollo separado
   - ✅ Refactorización del ChatBot
     - ✅ División en componentes más pequeños
     - ✅ Optimización de importaciones
     - ✅ Mejora de la estructura del código
     - ✅ Implementación correcta de useCallback y dependencias de hooks
   - ✅ Optimización de importaciones en archivos de test
     - ✅ Eliminación de importaciones no utilizadas
     - ✅ Mejora de configuración ESLint para detección de errores
   - ✅ Separación de componentes y utilidades
     - ✅ Movimiento de hooks a archivos independientes (useFormField, useTheme)
     - ✅ Extracción de contextos a archivos dedicados (ThemeContext)
     - ✅ Separación de constantes de estilo en archivos propios (toggleVariants)
     - ✅ Reorganización de utilidades de testing en archivos con propósito específico
   - 🔲 Componentes con lógica duplicada
     - 🔲 Extraer lógica compartida en componentes tipo tarjeta
     - 🔲 Extraer lógica de validación en componentes de formulario
     - 🔲 Consolidar estilos compartidos en componentes de layout
   - 🔲 Componentes con responsabilidades mixtas
     - 🔲 Separar UI y obtención de datos
     - 🔲 Migrar estilos en línea a variables de tema
   - 🔲 Patrones de componentes desactualizados
     - 🔲 Convertir componentes de clase (si hay) a funcionales con hooks
     - 🔲 Modernizar uso de contexto en componentes antiguos

### 8. Testing
   - ✅ Configuración de Vitest
   - ✅ Pruebas de LoadingSpinner (100%)
   - ✅ Pruebas de Navbar (93.33%)
   - ✅ Pruebas de HeroSection (mejoradas, 99.2%)
   - ✅ Pruebas de ChatBot (actualizadas, 72.83%)
   - ✅ Pruebas de Footer (100%)
   - ✅ Pruebas de Index (100%)
   - ✅ Pruebas de componentes UI básicos:
     - ✅ Button, Accordion, Avatar, Card, Input, Tabs, Textarea, Tooltip (100%)
   - ✅ Pruebas E2E básicas (mejoradas y robustas)
   - ✅ Pruebas de accesibilidad E2E
   - ✅ Optimización de importaciones en archivos de test
   - ✅ Reorganización de estructura de testing
     - ✅ Separación de AllTheProviders en test-providers.tsx
     - ✅ Extracción de la función render a test-render.ts
     - ✅ Creación de índice de compatibilidad en test-utils.ts
     - ✅ Separación de funciones de testing en testing-functions.ts
   - ✅ Script automatizado para excluir archivos con 100% de cobertura del reporte de pruebas
   - 🚧 Implementar test end-to-end para flujo principal
   - 🔲 Cobertura global actual: 81.46% - Incrementar a > 90%
   - 🔲 ThemeProvider (86.66%)
   - 🔲 Componentes UI con baja cobertura:
     - 🔲 ⭐ aspect-ratio.tsx (0%)
     - 🔲 dropdown-menu.tsx (92.45%, 0% funciones)
     - 🔲 form.tsx (0%)
     - 🔲 hover-card.tsx (0%)
     - 🔲 label.tsx (0%)
     - 🔲 language-selector.tsx (100% líneas, 50% funciones)
     - 🔲 language-toggle.tsx (0%)
     - 🔲 separator.tsx (0%)
     - 🔲 table.tsx (0%)
     - 🔲 toast.tsx (91.17%)
     - 🔲 toaster.tsx (47.05%)
     - 🔲 toggle.tsx (0%)
     - 🔲 use-toast.ts (0%)
   - 🔲 ⭐ Implementar tests unitarios para componentes críticos
   - 🔲 ⭐ Configurar CI/CD para testing automático
   - 🔲 Pruebas E2E completas (resto de funcionalidades)
   - 🔲 Pruebas de integración
   - 🔲 Pruebas de rendimiento

#### Análisis de Cobertura por Prioridad

**Componentes Críticos con Alta Prioridad**:

| Componente | Cobertura Actual | Razón para Mejorar |
|------------|------------------|---------------------|
| ChatBot.tsx | 72.83% líneas, 53.84% funciones | Componente de interacción principal con el usuario con lógica compleja |
| ThemeProvider.tsx | 86.66% líneas, 66.66% funciones | Afecta globalmente a toda la aplicación |
| toaster.tsx | 47.05% líneas | Componente de feedback crítico para el usuario |
| ContactForm.tsx | 73.25% líneas, 50% funciones | Maneja datos de usuario y envío de formularios |

**Componentes que Podrían Ignorarse**:

| Componente | Cobertura Actual | Justificación |
|------------|------------------|---------------|
| aspect-ratio.tsx | 0% | Componente visual simple sin lógica compleja |
| form.tsx | 0% | No parece estar en uso activo en la aplicación |
| hover-card.tsx | 0% | Componente de UI simple con poca lógica |
| label.tsx | 0% | Componente básico de UI sin lógica compleja |
| separator.tsx | 0% | Componente puramente visual sin lógica |

#### Ejemplos de Tests para Componentes Clave

Ejemplo para ChatBot.tsx:

```tsx
// src/__tests__/components/ChatBot.test.tsx
describe('ChatBot interacción avanzada', () => {
  it('envía mensaje correctamente y sanitiza input', async () => {
    render(<ChatBot />);
    
    // Simular entrada potencialmente maliciosa
    const inputField = screen.getByPlaceholderText('Escribe tu mensaje...');
    await userEvent.type(inputField, '<script>alert("XSS")</script>Hola');
    
    // Verificar que se envía sanitizado
    const sendButton = screen.getByRole('button', { name: /enviar/i });
    await userEvent.click(sendButton);
    
    // Verificar que el mensaje aparece sanitizado
    expect(screen.getByText('Hola')).toBeInTheDocument();
    expect(screen.queryByText('<script>')).not.toBeInTheDocument();
  });
  
  it('maneja estados de error correctamente', async () => {
    // Mockear error en API
    server.use(
      rest.post('/api/chat', (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    
    render(<ChatBot />);
    // Test de manejo de errores específicos
  });
});
```

Ejemplo para ThemeProvider.tsx:

```tsx
// src/__tests__/context/ThemeProvider.test.tsx
describe('ThemeProvider', () => {
  it('proporciona el tema por defecto', () => {
    const TestComponent = () => {
      const { theme } = useTheme();
      return <div data-testid="theme-value">{theme}</div>;
    };
    
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );
    
    expect(screen.getByTestId('theme-value').textContent).toBe('light');
  });
  
  it('permite cambiar el tema', async () => {
    const TestComponent = () => {
      const { theme, toggleTheme } = useTheme();
      return (
        <>
          <div data-testid="theme-value">{theme}</div>
          <button onClick={toggleTheme}>Toggle</button>
        </>
      );
    };
    
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );
    
    expect(screen.getByTestId('theme-value').textContent).toBe('light');
    await userEvent.click(screen.getByRole('button', { name: /toggle/i }));
    expect(screen.getByTestId('theme-value').textContent).toBe('dark');
  });
});
```

#### Comandos de Testing

**Pruebas Unitarias**:
```bash
# Ejecutar todas las pruebas
npm test

# Ejecutar pruebas con cobertura
npm run test:coverage

# Ejecutar pruebas en modo watch
npm run test:watch

# Ejecutar un archivo específico de prueba
npm test src/__tests__/components/ui/button.test.tsx
```

**Pruebas E2E**:
```bash
# Ejecutar todas las pruebas E2E
npx playwright test

# Ejecutar pruebas E2E solo en Chrome
npx playwright test --project=chromium

# Ejecutar pruebas E2E en modo UI interactivo
npx playwright test --ui

# Ver el reporte de las últimas pruebas ejecutadas
npx playwright show-report
```

**Accesibilidad**:
```bash
# Verificar accesibilidad con axe
npm run test:a11y

# Con Lighthouse CLI 
npx lighthouse http://localhost:8080 --view --only-categories=accessibility
```

### 9. SEO
   - ✅ Meta tags dinámicos (con react-helmet-async)
   - ✅ Robots.txt
   - ✅ Sitemap básico
   - 🔲 Optimización de SEO avanzada
     - 🔲 Implementación de Schema.org/JSON-LD
       - 🔲 Schema para persona/profesional
       - 🔲 Schema para proyectos/portfolio
       - 🔲 Schema para habilidades/experiencia
     - 🔲 Integración structured data testing
   - 🔲 Optimización de imágenes para SEO
     - 🔲 Alt tags descriptivos y relevantes
     - 🔲 Comprensión y dimensionamiento adecuado
     - 🔲 Implementación de WebP con fallbacks
   - 🔲 Implementación de canonical URLs
     - 🔲 Manejo de URLs duplicadas
     - 🔲 Configuración adecuada para idiomas alternativos
   - 🔲 Página 404 personalizada con SEO
     - 🔲 Sugerencias de contenido relevante
     - 🔲 Tracking de URLs no encontradas
   - 🔲 Optimización de metadatos para redes sociales
     - 🔲 OpenGraph para Facebook/LinkedIn
     - 🔲 Twitter Cards
     - 🔲 Imágenes específicas por plataforma
   - 🔲 Implementación de sitemaps avanzados
     - 🔲 Sitemap dinámico por sección
     - 🔲 Sitemaps específicos por idioma
     - 🔲 Video/Image sitemaps si aplica
   - 🔲 Optimización para búsquedas por voz
     - 🔲 Implementación de FAQ schema
     - 🔲 Contenido en formato pregunta-respuesta
   - 🔲 Estrategia de keywords y estructura
     - 🔲 Investigación de keywords relevantes
     - 🔲 Optimización de headings (H1, H2, H3)
     - 🔲 Densidad adecuada de keywords
   - 🔲 Análisis y mejora de Core Web Vitals
     - 🔲 Cumplimiento de LCP, FID, CLS
     - 🔲 Optimización de PageSpeed Insights
   - 🔲 Implementación de breadcrumbs
     - 🔲 Visual y estructurado con schema.org

### 10. UX
   - 🚧 Refinamiento de efectos hover y animaciones para mayor claridad
   - 🚧 Mejora de la experiencia móvil
   - 🔲 ⭐ Mejorar contrastes para accesibilidad
   - 🔲 Implementación de micro-interacciones
     - 🔲 Feedback sutil para hover/click
     - 🔲 Transiciones entre estados de UI
     - 🔲 Animaciones de confirmación de acciones
   - 🔲 Estados de feedback avanzados
     - 🔲 Estados de carga (skeletons, spinners)
     - 🔲 Mensajes de error contextuales
     - 🔲 Notificaciones de éxito personalizadas
     - 🔲 Mensajes de validación en tiempo real
   - 🔲 Indicadores de progreso
     - 🔲 Barra de progreso de navegación
     - 🔲 Indicadores de carga en tiempo real
     - 🔲 Progress stepper para procesos multi-paso
   - 🔲 Investigación y pruebas de UX
     - 🔲 Pruebas con usuarios reales
     - 🔲 Análisis de grabaciones de sesiones
     - 🔲 Heat maps y click tracking
     - 🔲 Pruebas A/B de elementos críticos
   - 🔲 Estrategia integral de animaciones
     - 🔲 Sistema consistente de timing y easing
     - 🔲 Soporte para prefers-reduced-motion
     - 🔲 Animaciones significativas (no decorativas)
   - 🔲 Navegación intuitiva y wayfinding
     - 🔲 Breadcrumbs contextuales
     - 🔲 Menú de navegación inteligente
     - 🔲 Indicadores de sección actual
     - 🔲 Enlaces de "volver" contextuales
   - 🔲 Modo de concentración
     - 🔲 Toggle para reducir distracciones
     - 🔲 Modo lectura para contenidos largos
     - 🔲 Reducción de elementos decorativos
   - 🔲 Personalización de experiencia
     - 🔲 Preferencias de usuario persistentes
     - 🔲 Ajustes de visualización (tamaño texto, espaciado)
     - 🔲 Historial de interacciones relevantes
   - 🔲 Optimización de tiempo de percepción
     - 🔲 Tiempos de carga percibidos vs reales
     - 🔲 Priorización de contenido visible
   - 🔲 Diseño Centrado en el Usuario (DCU)
     - 🔲 Consistencia en patrones de interacción
     - 🔲 Principios de diseño cognitivo aplicados
     - 🔲 Reducción de carga cognitiva
   - 🔲 Implementación de gestos en móvil
     - 🔲 Navegación por swipe
     - 🔲 Gestos multitáctiles para zoom/navegación
     - 🔲 Haptic feedback (vibración) para acciones
   - 🚧 Refinamiento de efectos hover y animaciones para mayor claridad
   - 🔲 ⭐ Mejorar contrastes para accesibilidad
   - 🔲 Implementación de micro-interacciones
     - 🔲 Feedback sutil para hover/click
     - 🔲 Transiciones entre estados de UI
     - 🔲 Animaciones de confirmación de acciones

### 11. Documentación
   - 🚧 Organización de archivos de documentación
   - 🚧 Ampliación de comentarios en el código
   - 🚧 Mejorar documentación de componentes
   - 🔲 Documentación de componentes completa
     - 🔲 Añadir comentarios JSDoc a componentes
     - 🔲 Documentar props con interfaces de TypeScript
   - 🔲 Guías de contribución
   - 🔲 API docs

### 12. Monitoreo y Analytics
   - ✅ Monitoreo de errores (Sentry.io) - Parcial
     - ✅ Configuración base implementada
     - ✅ Captura de errores implementada en componentes críticos:
       - ✅ ChatBot.tsx
       - ✅ ContactForm.tsx
       - ✅ ThemeProvider.tsx
   - ✅ Analytics básico (Umami Analytics) - Completado
     - ✅ Implementación configurada
     - ✅ Eventos configurados: pageviews, clicks en CTAs, formularios completados
   - ✅ Implementación de monitoreo de errores con Sentry (captura de errores en componentes críticos)
   - ✅ Implementación de Vercel Analytics para métricas de tráfico y comportamiento de usuarios
     - ✅ Seguimiento de páginas vistas y rutas populares
     - ✅ Medición de tasas de rebote
     - ✅ Análisis sin cookies ni identificación personal (privacy-friendly) 
   - 🚧 Herramientas de monitoreo gratuitas/económicas
     - 🚧 New Relic Browser (Free Tier) - Monitoreo de rendimiento
     - 🚧 LogRocket (Free plan) - Reproducción de errores de usuario
     - 🚧 Upptime (OSS) - Monitoreo de tiempo de actividad con GitHub Actions
     - 🚧 Cloudflare Web Analytics - Analytics sin cookies
     - 🚧 Better Stack (ex Logtail) - Logging centralizado con plan gratuito
   - 🔲 ⭐ Performance monitoring
     - 🔲 Configurar New Relic Browser
     - 🔲 Implementar logging centralizado con Better Stack
   - 🔲 Dashboard de métricas internas
     - 🔲 Implementar visualización de usuarios activos
     - 🔲 Implementar visualización de tiempos de carga
     - 🔲 Implementar visualización de errores
   - 🔲 Alertas y notificaciones
     - 🔲 Configurar alertas de error críticas (Slack + email)
       - 🔲 Notificación inmediata por Slack y email para errores críticos
     - 🔲 Configurar alertas de performance (Slack diario)
       - 🔲 Notificación si: tiempo de carga > 3s, error rate > 1%, CPU/Memory > 80%
     - 🔲 Configurar alertas de seguridad (Slack + SMS)
   - 🔲 Procedimiento para análisis de errores
     - 🔲 Documentar flujo para debugging:
       - 🔲 Verificar panel de Sentry para detalles del error
       - 🔲 Revisar logs en Better Stack para contexto
       - 🔲 Reproducir error en entorno de desarrollo
       - 🔲 Verificar variables de entorno y configuraciones
       - 🔲 Documentar solución en ticket correspondiente

### 13. Plan de Contingencia
   - ✅ Priorización MoSCoW definida
     - ✅ Must have: Funcionalidades core del perfil, optimización básica
     - ✅ Should have: Temas, i18n, formulario de contacto
     - ✅ Could have: ChatBot avanzado, animaciones
     - ✅ Won't have: Características adicionales no críticas
   - ✅ Estrategias de reducción de alcance
     - ✅ Limitar idiomas soportados inicialmente
     - ✅ Simplificar algunas animaciones
     - ✅ Posponer mejoras de rendimiento complejas para v1.1

### 14. Ideas Futuras
   - 🔲 PWA (Progressive Web App)
     - 🔲 Service workers para offline
     - 🔲 Soporte para instalación
     - 🔲 Push notifications
   - 🔲 Soporte para más idiomas
     - 🔲 Detección automática de idioma
     - 🔲 Integración con servicios de traducción
   - 🔲 Implementación de una API para contenido dinámico
     - 🔲 Backend serverless para gestión de datos
     - 🔲 Editor visual de contenido
   - 🔲 Más temas visuales personalizables
     - 🔲 Sistema avanzado de temas con variables CSS
     - 🔲 Paletas personalizables por el usuario
   - 🔲 Modo sin conexión completo
     - 🔲 Caché inteligente de contenido
     - 🔲 Sincronización diferida de acciones
   - 🔲 Gamificación de la experiencia
     - 🔲 Logros por exploración del CV
     - 🔲 Easter eggs interactivos
   - 🔲 Integración con IA para recomendaciones
     - 🔲 Sugerencia de contenido relevante
     - 🔲 Asistente virtual para preguntas

### 15. CI/CD y Automatización
   - 🔲 Configuración de GitHub Actions
     - 🔲 Workflow de construcción y pruebas
       ```yaml
       # .github/workflows/build-test.yml
       name: Build and Test
       on: [push, pull_request]
       jobs:
         build-and-test:
           runs-on: ubuntu-latest
           steps:
             - uses: actions/checkout@v3
             - name: Set up Node.js
               uses: actions/setup-node@v3
               with:
                 node-version: '18'
                 cache: 'npm'
             - name: Install dependencies
               run: npm ci
             - name: Run linting
               run: npm run lint
             - name: Run tests
               run: npm run test:coverage
             - name: Build project
               run: npm run build
             - name: Run bundle analysis
               run: npm run analyze:all
             - name: Upload analysis reports
               uses: actions/upload-artifact@v3
               with:
                 name: bundle-analysis
                 path: dist/bundle-report.json
       ```
     - 🔲 Workflow de análisis de código
       ```yaml
       # .github/workflows/code-analysis.yml
       name: Code Analysis
       on: [push, pull_request]
       jobs:
         analyze:
           runs-on: ubuntu-latest
           steps:
             - uses: actions/checkout@v3
             - name: SonarCloud Scan
               uses: SonarSource/sonarcloud-github-action@master
               env:
                 GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
                 SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
       ```
     - 🔲 Workflow de despliegue automático
       ```yaml
       # .github/workflows/deploy.yml
       name: Deploy
       on:
         push:
           branches: [main]
       jobs:
         deploy:
           runs-on: ubuntu-latest
           steps:
             - uses: actions/checkout@v3
             - name: Set up Node.js
               uses: actions/setup-node@v3
               with:
                 node-version: '18'
                 cache: 'npm'
             - name: Install dependencies
               run: npm ci
             - name: Build project
               run: npm run build
             - name: Optimize images
               run: node scripts/optimize-images.js
             - name: Deploy to AWS
               uses: jakejarvis/s3-sync-action@master
               with:
                 args: --delete
               env:
                 AWS_S3_BUCKET: ${{ secrets.AWS_S3_BUCKET }}
                 AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
                 AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
                 SOURCE_DIR: 'dist'
             - name: Invalidate CloudFront
               uses: chetan/invalidate-cloudfront-action@master
               env:
                 DISTRIBUTION: ${{ secrets.CLOUDFRONT_DISTRIBUTION_ID }}
                 PATHS: '/*'
                 AWS_REGION: 'us-east-1'
                 AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
                 AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
       ```
   - 🔲 Scripts unificados para testing completo
     ```bash
     #!/bin/bash
     # scripts/test-all.sh
     
     echo "🧪 Ejecutando pruebas unitarias y cobertura..."
     npm run test:coverage
     
     echo "🔄 Ejecutando pruebas E2E..."
     npx playwright test
     
     echo "♿ Ejecutando pruebas de accesibilidad..."
     npm run test:a11y
     
     echo "🔍 Verificando sintaxis y estilo de código..."
     npm run lint
     
     echo "📊 Ejecutando análisis de rendimiento..."
     npm run analyze:all
     
     echo "🖼️ Optimizando imágenes..."
     node scripts/optimize-images.js
     
     echo "✅ Todas las pruebas completadas."
     ```
   - 🔲 Validación de PR automatizada
     - 🔲 Checklist automatizada para PR
     - 🔲 Comprobación de convenciones de commits
     - 🔲 Comprobación de calidad de código
   - 🔲 Integración con SonarQube/SonarCloud
     - 🔲 Análisis de code smells
     - 🔲 Análisis de deuda técnica
     - 🔲 Comprobación de cobertura de pruebas
   - 🔲 Despliegue continuo a entorno de staging
     - 🔲 Preview automática para cada PR
     - 🔲 Entorno de staging persistente
   - 🔲 Pre-commit hooks
     - 🔲 Linting automático
     - 🔲 Formateo de código
     - 🔲 Comprobación de tipos TypeScript
   - 🔲 Versioning y changelog automático
     - 🔲 Semantic versioning
     - 🔲 Generación de notas de release

### 16. Containerización y Despliegue
   - 🔲 Análisis y selección de plataformas de despliegue
     - 🔲 Evaluación de opciones (Vercel, Netlify, GitHub Pages, AWS)
     - 🔲 Selección de Vercel como plataforma principal
     - 🔲 Establecimiento de GitHub Pages + Cloudflare como plataforma de respaldo
   - 🚧 Configuración de despliegue en Vercel
     - 🚧 Integración con GitHub para despliegue automático
     - 🚧 Configuración de variables de entorno
     - 🚧 Optimización de la configuración para React/Vite
     - 🚧 Configuración de dominios y SSL
   - 🔲 Configuración de respaldo en GitHub Pages + Cloudflare
     - 🔲 Configuración del workflow de GitHub Actions
     - 🔲 Integración con Cloudflare para CDN y SSL
     - 🔲 Configuración de dominio personalizado
     - 🔲 Redirecciones y manejo de SPA
   - 🔲 Configuración de Docker
     ```dockerfile
     # Dockerfile
     FROM node:18-alpine AS builder
     WORKDIR /app
     COPY package*.json ./
     RUN npm ci
     COPY . .
     RUN npm run build
     RUN node scripts/optimize-images.js
     
     FROM nginx:alpine
     COPY --from=builder /app/dist /usr/share/nginx/html
     COPY nginx.conf /etc/nginx/conf.d/default.conf
     EXPOSE 80
     CMD ["nginx", "-g", "daemon off;"]
     ```
   - 🔲 Docker Compose para desarrollo local
     ```yaml
     # docker-compose.yml
     version: '3.8'
     
     services:
       app:
         build:
           context: .
           dockerfile: Dockerfile.dev
         ports:
           - "3000:3000"
         volumes:
           - ./src:/app/src
           - ./public:/app/public
         environment:
           - NODE_ENV=development
     
       test:
         build:
           context: .
           dockerfile: Dockerfile.dev
         command: npm test
         volumes:
           - ./src:/app/src
           - ./public:/app/public
     ```
   - 🔲 Estrategia multi-stage para optimización
     - 🔲 Construcción optimizada
     - 🔲 Imagen de producción mínima
     - 🔲 Caché eficiente de capas
   - 🔲 Scripts de despliegue automatizado
     - 🔲 Deploy a diferentes ambientes
     - 🔲 Rollback automatizado
     - 🔲 Verificación post-despliegue
   - 🔲 Configuración de Nginx optimizada
     ```nginx
     # nginx.conf
     server {
         listen 80;
         server_name _;
         root /usr/share/nginx/html;
         index index.html;
     
         # Gzip compresión
         gzip on;
         gzip_types text/plain text/css application/json application/javascript;
         gzip_min_length 1000;
     
         # Cache control
         location ~* \.(css|js|jpg|jpeg|png|gif|ico|svg|woff|woff2|webp)$ {
             expires 30d;
             add_header Cache-Control "public, no-transform";
         }
     
         # SPA routing
         location / {
             try_files $uri $uri/ /index.html;
         }
     
         # Security headers
         add_header X-Frame-Options "SAMEORIGIN";
         add_header X-XSS-Protection "1; mode=block";
         add_header X-Content-Type-Options "nosniff";
         add_header Content-Security-Policy "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:;";
     }
     ```
   - 🔲 Configuración de registry Docker privado
     - 🔲 Escaneo de vulnerabilidades en imágenes
     - 🔲 Versionado de imágenes
   - 🔲 Kubernetes/ECS para orquestación (opcional)
     - 🔲 Configuración de recursos
     - 🔲 Auto-scaling
   - 🔲 Monitoreo de contenedores
     - 🔲 Recolección de métricas
     - 🔲 Alertas de salud

### 17. Infraestructura como Código (IaC)
   - 🔲 Configuración de Terraform para AWS
     ```hcl
     # main.tf
     provider "aws" {
       region = "us-east-1"
     }
     
     # Bucket S3 para hosting estático
     resource "aws_s3_bucket" "website" {
       bucket = "stellar-profile-builder"
       acl    = "private"
       
       website {
         index_document = "index.html"
         error_document = "404.html"
       }
     }
     
     # Configuración de CloudFront para CDN
     resource "aws_cloudfront_distribution" "s3_distribution" {
       origin {
         domain_name = aws_s3_bucket.website.bucket_regional_domain_name
         origin_id   = "S3-${aws_s3_bucket.website.bucket}"
         
         s3_origin_config {
           origin_access_identity = aws_cloudfront_origin_access_identity.oai.cloudfront_access_identity_path
         }
       }
       
       enabled             = true
       is_ipv6_enabled     = true
       default_root_object = "index.html"
       
       # Redirección para SPA
       custom_error_response {
         error_code            = 404
         response_code         = 200
         response_page_path    = "/index.html"
       }
       
       # Distribución global
       price_class = "PriceClass_100"
       
       # HTTPS
       viewer_certificate {
         cloudfront_default_certificate = true
       }
       
       # Comportamiento de caché
       default_cache_behavior {
         allowed_methods  = ["GET", "HEAD", "OPTIONS"]
         cached_methods   = ["GET", "HEAD"]
         target_origin_id = "S3-${aws_s3_bucket.website.bucket}"
         
         forwarded_values {
           query_string = false
           cookies {
             forward = "none"
           }
         }
         
         viewer_protocol_policy = "redirect-to-https"
         min_ttl                = 0
         default_ttl            = 3600
         max_ttl                = 86400
       }
       
       restrictions {
         geo_restriction {
           restriction_type = "none"
         }
       }
     }
     
     # Identity para acceso S3 desde CloudFront
     resource "aws_cloudfront_origin_access_identity" "oai" {
       comment = "OAI for ${aws_s3_bucket.website.bucket}"
     }
     
     # Política de bucket para permitir acceso desde CloudFront
     resource "aws_s3_bucket_policy" "website_policy" {
       bucket = aws_s3_bucket.website.id
       policy = data.aws_iam_policy_document.s3_policy.json
     }
     
     data "aws_iam_policy_document" "s3_policy" {
       statement {
         actions   = ["s3:GetObject"]
         resources = ["${aws_s3_bucket.website.arn}/*"]
         
         principals {
           type        = "AWS"
           identifiers = [aws_cloudfront_origin_access_identity.oai.iam_arn]
         }
       }
     }
     
     # Lambda para formulario de contacto
     resource "aws_lambda_function" "contact_form" {
       function_name = "contact-form-handler"
       role          = aws_iam_role.lambda_role.arn
       handler       = "index.handler"
       runtime       = "nodejs16.x"
       
       filename         = "lambda_function.zip"
       source_code_hash = filebase64sha256("lambda_function.zip")
     }
     ```
   - 🔲 Pipelines para despliegue de infraestructura
     - 🔲 Automatización de aplicación de cambios
     - 🔲 Verificación de plan antes de aplicar
     - 🔲 Gestión de secrets segura
   - 🔲 Configuración de DNS y certificados SSL
     - 🔲 Gestión de Route53/CloudFlare
     - 🔲 Renovación automática de certificados
     - 🔲 Configuración de DNS con subdominio
   - 🔲 Implementación de AWS Lambda para formulario de contacto
     - 🔲 Función serverless para procesamiento
     - 🔲 API Gateway para endpoints REST
     - 🔲 Integración con servicios de email
   - 🔲 Configuración de CDN para assets estáticos
     - 🔲 Cache-control optimizado
     - 🔲 Invalidación selectiva en despliegues
     - 🔲 Optimización de entrega por geolocalización
   - 🔲 Backups automáticos
     - 🔲 Respaldo periódico de datos
     - 🔲 Estrategia de recuperación
   - 🔲 Monitoreo y logs de infraestructura
     - 🔲 Dashboards de CloudWatch
     - 🔲 Alertas por uso/rendimiento
     - 🔲 Auditoría de accesos y cambios
   - 🔲 Configuración de entornos múltiples
     - 🔲 Development/Staging/Production
     - 🔲 Variables por entorno
     - 🔲 Promoción automatizada entre entornos

### 18. Gestión de Contenidos y Datos
   - 🔲 Implementación de API para editar perfil
     - 🔲 Endpoints CRUD para datos personales
     - 🔲 Validación y sanitización de input
     - 🔲 Autenticación para ediciones
   - 🔲 Sistema de gestión de proyectos dinámico
     - 🔲 Panel admin para añadir/editar proyectos
     - 🔲 Ordenamiento y filtrado
     - 🔲 Imágenes con optimización automática
   - 🔲 Integración con CMS headless
     - 🔲 Conexión con Strapi/Contentful
     - 🔲 Webhooks para actualizaciones en tiempo real
     - 🔲 Editor visual WYSIWYG
   - 🔲 Sincronización con perfiles externos
     - 🔲 Importación desde LinkedIn
     - 🔲 Sincronización con proyectos GitHub
     - 🔲 Integración con otras APIs
   - 🔲 Sistema de versionado de contenido
     - 🔲 Historial de cambios
     - 🔲 Rollback a versiones anteriores
     - 🔲 Diff visual entre versiones
   - 🔲 Almacenamiento de archivos multimedia
     - 🔲 Gestión de imágenes y documentos
     - 🔲 Optimización automática
     - 🔲 CDN para distribución eficiente
   - 🔲 Exportación de datos
     - 🔲 Exportación a PDF/Markdown
     - 🔲 Versión para imprimir optimizada
     - 🔲 Exportación a formato ATS-friendly
   - 🔲 Modelos de datos y schemas
     - 🔲 Definición de tipos/interfaces
     - 🔲 Validación de datos consistente
     - 🔲 Migraciones de schema

### 19. Análisis Avanzado de Datos
   - 🔲 Implementación de Google Analytics 4
     - 🔲 Configuración de enhanced e-commerce
     - 🔲 Eventos personalizados para interacciones
     - 🔲 Objetivos y embudos de conversión
   - 🔲 Tracking de eventos personalizados
     - 🔲 Interacciones con secciones del CV
     - 🔲 Descargas de recursos
     - 🔲 Tiempo en sección
   - 🔲 Análisis de rutas de usuario
     - 🔲 Mapeo de journey completo
     - 🔲 Identificación de drop-offs
     - 🔲 Optimización de flujos
   - 🔲 Heatmaps y grabación de sesiones
     - 🔲 Integración con Hotjar/Clarity
     - 🔲 Análisis de clics y scrolls
     - 🔲 Identificación de frustraciones
   - 🔲 Dashboard personalizado de métricas
     - 🔲 KPIs específicos para portafolio
     - 🔲 Visualización de tendencias temporales
     - 🔲 Exportación de reportes
   - 🔲 A/B testing para UI
     - 🔲 Pruebas de diferentes layouts
     - 🔲 Análisis estadístico de resultados
     - 🔲 Implementación automática de ganadores
   - 🔲 Análisis de rendimiento
     - 🔲 Monitoreo de Core Web Vitals
     - 🔲 Benchmarking comparativo
     - 🔲 Alertas de degradación
   - 🔲 Segmentación de usuarios
     - 🔲 Por origen/referral
     - 🔲 Por comportamiento
     - 🔲 Por dispositivo/plataforma
   - 🔲 Soluciones de análisis privacy-friendly
     - 🔲 Implementación de Umami (self-hosted)
     - 🔲 Alternativas como Fathom o Plausible
     - 🔲 Configuración sin cookies o con consentimiento estricto
   - 🔲 Análisis de tendencias de búsqueda
     - 🔲 Términos que llevan a tu perfil
     - 🔲 Identificación de oportunidades SEO
     - 🔲 Rastreo de menciones externas

### 20. Cumplimiento y Regulaciones
   - 🔲 Implementación de banner de cookies (GDPR)
     - 🔲 Consentimiento granular por categoría
     - 🔲 Persistencia de preferencias
     - 🔲 Opción de rechazar cookies no esenciales
   - 🔲 Política de privacidad dinámica
     - 🔲 Generación basada en funcionalidades activas
     - 🔲 Versionado de políticas
     - 🔲 Notificación de cambios importantes
   - 🔲 Cumplimiento con CCPA
     - 🔲 Opción "Do Not Sell My Data"
     - 🔲 Proceso de solicitud de datos
     - 🔲 Proceso de eliminación de datos
   - 🔲 Control de consentimiento para analíticas
     - 🔲 Activación condicional de scripts
     - 🔲 Modo privacy-first por defecto
     - 🔲 Centro de preferencias de privacidad
   - 🔲 Documentación de cumplimiento
     - 🔲 Registros de procesamiento de datos
     - 🔲 Inventario de datos personales
     - 🔲 Procedimientos DSAR (Data Subject Access Request)
   - 🔲 Accesibilidad legal
     - 🔲 Declaración de accesibilidad WCAG
     - 🔲 Plan de remediación documentado
     - 🔲 Auditoría periódica de cumplimiento
   - 🔲 Adaptación regional de cumplimiento
     - 🔲 Detección geográfica de visitantes
     - 🔲 Ajustes basados en jurisdicción
     - 🔲 Notificaciones específicas por región
   - 🔲 Implementación mínima para sitio sin cookies de seguimiento
     - 🔲 Aviso simple de uso de cookies esenciales
     - 🔲 Política de privacidad básica
     - 🔲 Declaración de no procesamiento de datos personales
   - 🔲 Seguridad del formulario de contacto
     - 🔲 Aviso de procesamiento de datos en formulario
     - 🔲 Política de retención de datos de contacto
     - 🔲 Protección contra spam (honeypot/captcha no invasivo)
   - 🔲 Restricciones geográficas específicas
     - 🔲 Bloqueo selectivo para países en listas de sanciones
     - 🔲 Mensaje informativo en caso de restricción
     - 🔲 Logging seguro de intentos de acceso bloqueados

### 21. Privacidad por Diseño
   - 🔲 Análisis de Impacto de Protección de Datos (DPIA)
     - 🔲 Evaluación de riesgos para datos de usuario
     - 🔲 Medidas de mitigación documentadas
     - 🔲 Revisión periódica de riesgos
   - 🔲 Minimización de datos
     - 🔲 Recolección sólo de datos estrictamente necesarios
     - 🔲 Anonimización donde sea posible
     - 🔲 Procesos de eliminación automática
   - 🔲 Analíticas respetuosas con la privacidad
     - 🔲 Implementación de Fathom/Plausible Analytics
     - 🔲 Configuración sin cookies
     - 🔲 Respeto a la señal "Do Not Track"
   - 🔲 Política de seguridad de datos
     - 🔲 Cifrado de datos en tránsito y reposo
     - 🔲 Acceso basado en principio de mínimo privilegio
     - 🔲 Registros de auditoría de acceso a datos
   - 🔲 Transparencia en procesamiento de datos
     - 🔲 Explicaciones claras del uso de datos
     - 🔲 Interfaz visual de datos recolectados
     - 🔲 Opciones simples para controlar datos
   - 🔲 Integraciones de terceros con foco en privacidad
     - 🔲 Evaluación de proveedores de servicios
     - 🔲 Acuerdos de procesamiento de datos (DPA)
     - 🔲 Monitoreo de cambios en políticas de terceros
   - 🔲 Sistema progresivo de consentimiento
     - 🔲 Funcionalidad básica sin consentimiento
     - 🔲 Características avanzadas con opt-in explícito
     - 🔲 Recordatorios periódicos de consentimiento

### 22. Internacionalización Legal
   - 🔲 Contenido legal adaptado por región
     - 🔲 Términos y condiciones específicos por región
     - 🔲 Traducciones verificadas legalmente
     - 🔲 Actualización automática basada en cambios regulatorios
   - 🔲 Cumplimiento con leyes regionales de privacidad
     - 🔲 GDPR (Europa)
     - 🔲 CCPA/CPRA (California)
     - 🔲 LGPD (Brasil)
     - 🔲 POPI (Sudáfrica)
     - 🔲 PIPEDA (Canadá)
   - 🔲 Gestión de restricciones de exportación
     - 🔲 Verificación de cumplimiento de sanciones internacionales
     - 🔲 Control de exposición de tecnologías sensibles
     - 🔲 Documentación de cumplimiento de exportación
   - 🔲 Adaptaciones fiscales y legales
     - 🔲 Gestión de VAT/impuestos regionales
     - 🔲 Cláusulas jurisdiccionales
     - 🔲 Cumplimiento de requisitos de facturación

### 23. Blog y Estrategia de Contenidos
   - 🔲 Implementación técnica del blog
     - 🔲 Sistema de gestión de contenidos (headless CMS)
     - 🔲 Editor WYSIWYG con formateo Markdown
     - 🔲 Vista previa en tiempo real
     - 🔲 Gestión de borradores y publicación programada
   - 🔲 Arquitectura de contenidos
     - 🔲 Categorías y taxonomías
     - 🔲 Sistema de etiquetado
     - 🔲 Archivos temporales (mensuales/anuales)
     - 🔲 Temas destacados/colecciones
   - 🔲 Optimización SEO específica para blog
     - 🔲 URLs semánticas y persistentes
     - 🔲 Estructura de enlaces internos
     - 🔲 Schema.org para artículos
     - 🔲 Metadatos optimizados para artículos
   - 🔲 Sistema de comentarios y participación
     - 🔲 Comentarios nativos o integración con Disqus/utterances
     - 🔲 Moderación y anti-spam
     - 🔲 Notificaciones de respuestas
   - 🔲 Integraciones sociales
     - 🔲 Botones de compartir
     - 🔲 Previsualización en redes (OpenGraph/Twitter Cards)
     - 🔲 Integración con Buffer/Hootsuite para programar contenido
   - 🔲 Estrategia de newsletter
     - 🔲 Formulario de suscripción
     - 🔲 Automatización de envíos
     - 🔲 Segmentación de audiencia
   - 🔲 Sindicación y distribución
     - 🔲 Feed RSS/Atom
     - 🔲 Canonical URLs para contenido republicado
     - 🔲 Integración con agregadores de contenido
   - 🔲 Estrategia editorial
     - 🔲 Calendario de contenidos
     - 🔲 Análisis de palabras clave para planificación
     - 🔲 Templates para diferentes tipos de contenido
   - 🔲 Métricas específicas de contenido
     - 🔲 Análisis de engagement por artículo
     - 🔲 Conversiones atribuidas a contenidos
     - 🔲 Métricas de tiempo en página/lectura
   - 🔲 Contenido evergreen vs. temporal
     - 🔲 Estrategia de actualización de contenido existente
     - 🔲 Promoción recurrente de contenido perenne
     - 🔲 Vinculación estratégica entre contenidos

### 24. Herramientas de Monitoreo y Observabilidad

#### Opciones Gratuitas/Económicas Recomendadas

| Herramienta | Características | Plan Gratuito | Caso de Uso |
|-------------|-----------------|---------------|-------------|
| Sentry.io | Monitoreo de errores, performance, sesiones de usuario | 5K errores/mes, 1 miembro | Captura y análisis de errores en tiempo real |
| New Relic Browser | Monitoreo frontend, performance, errores JS | 100K cargas de página/mes | Análisis de performance del lado cliente |
| LogRocket | Reproducción de sesiones, errores contextuales | 1K sesiones/mes, 30 días retención | Debugging visual de problemas de usuario |
| Upptime | Monitoreo de tiempo de actividad, páginas de estado | 100% gratuito (usa GitHub Actions) | Monitoreo de disponibilidad y tiempo de respuesta |
| Cloudflare Web Analytics | Análisis de tráfico sin cookies | Gratuito sin límites | Analytics respetuosos con privacidad |
| Better Stack (Logtail) | Logging centralizado, alertas | 50MB/día, 3 días retención | Centralización y análisis de logs |
| Grafana Cloud | Dashboards, métricas, logs, alertas | 10K series/métrica, 50GB logs | Visualización completa del estado del sistema |
| Checkly | Monitoreo de APIs y E2E sintético | 5 checks, cada 10 min | Pruebas automáticas de disponibilidad |

#### Configuración Recomendada para Monitoreo Completo

1. **Monitoreo de Errores y Performance**: Sentry + New Relic Browser (Free)
   - Captura todos los errores de frontend
   - Monitoreo de Core Web Vitals y performance
   - Alertas configuradas para errores críticos

2. **Experiencia de Usuario**: LogRocket (Free) + Cloudflare Web Analytics
   - Reproducción de sesiones problemáticas
   - Análisis de comportamiento de usuario
   - Métricas de uso sin problemas de cookies

3. **Disponibilidad y Tiempo de Respuesta**: Upptime (OSS)
   - Página de estado pública
   - Monitoreo constante de endpoints críticos
   - Alertas de tiempo de inactividad

4. **Logging Centralizado**: Better Stack (Free)
   - Centralización de todos los logs
   - Búsqueda y análisis de problemas
   - Correlación de eventos con errores

5. **Visualización y Alertas**: Grafana Cloud (Free)
   - Dashboards personalizados
   - Correlación de métricas y logs
   - Sistema unificado de alertas

#### Implementación Progresiva

1. **Fase 1 (Inmediata)**
   - Sentry para errores
   - Cloudflare Web Analytics para métricas básicas
   - Upptime para monitoreo de disponibilidad

2. **Fase 2 (Corto plazo)**
   - New Relic Browser para performance
   - Better Stack para logging
   - LogRocket para sesiones problemáticas

3. **Fase 3 (Medio plazo)**
   - Grafana Cloud para dashboards unificados
   - Checkly para pruebas sintéticas
   - Sistema de alertas avanzado

### 23. Plan de Infraestructura Multiplataforma
   - 🔲 Estrategia principal-secundaria para despliegues
     - 🔲 Vercel como plataforma principal
       - Ventajas: Optimizada para React/Vite, facilidad de uso, excelente rendimiento, plan gratuito generoso
       - Configuración: Integración con GitHub, despliegue automático, preview deployments
       - Monitoreo: Integración con Sentry, Analytics, y alertas
       - Dominio: Configuración de dominio personalizado con SSL automático
     - 🔲 GitHub Pages + Cloudflare como plataforma de respaldo
       - Ventajas: Alta disponibilidad, independencia de proveedores SaaS, gratuito
       - Configuración: GitHub Actions para CI/CD, Cloudflare para CDN/SSL
       - Estrategia de activación: Script automatizado para detectar fallos en plataforma principal
   - 🔲 Sincronización entre plataformas
     - 🔲 Script de verificación de estado de despliegue principal
     - 🔲 Proceso automatizado de failover a plataforma secundaria
     - 🔲 Automatización para mantener configuraciones sincronizadas
   - 🔲 Infraestructura como Código para gestión multiplataforma
     - 🔲 Configuración con Terraform para infraestructura compartida
     - 🔲 CloudFormation/Terraform para AWS (alternativa futura)
     - 🔲 Pulumi para recursos multi-cloud
   - 🔲 Pruebas de resiliencia
     - 🔲 Simulación de fallos en plataforma principal
     - 🔲 Pruebas de failover automático
     - 🔲 Medición de tiempos de recuperación

## 📚 Documentación y Recursos de Referencia

### Documentos Técnicos Detallados

| Documento | Descripción | Uso |
|-----------|-------------|-----|
| Guía de Internacionalización | Explica en detalle cómo usar i18n, estructura de archivos, y añadir nuevos idiomas | Referencia para implementación de i18n |
| Guía de Testing | Contiene análisis completo de cobertura, estrategias, ejemplos y comandos | Referencia para implementación de tests |
| Mejoras de Accesibilidad | Lista de problemas resueltos y pendientes con ejemplos de código | Referencia para mejoras de a11y |
| Guía de Optimización | Estrategias detalladas y ejemplos para optimización de rendimiento | Referencia para mejoras de performance |
| Herramientas de Monitoreo | Documentación completa sobre configuración de Sentry, Analytics, etc. | Referencia para implementación de monitoreo |
| [Implementaciones Técnicas](/docs/IMPLEMENTACIONES_TECNICAS.md) | Ejemplos de código y snippets de implementación para diferentes aspectos del proyecto | Referencia técnica para desarrolladores |

### Recursos del Proyecto

- **CV de Referencia**: [DevSecOps_Renzo_Avila_Resume.md] - Contiene el contenido base que debe mostrarse en el perfil.
- **Estructura del Proyecto**: Basada en React, TypeScript, Vite con componentes de Shadcn/UI.
- **Repositorio**: [https://github.com/usuario/stellar-profile-builder] - Código fuente y configuración.

### Guía de Contribución

Para mantener la integridad del proyecto:

1. **Prioriza tareas marcadas con ⭐**
2. **Sigue las convenciones de código** establecidas en el proyecto
3. **Añade pruebas unitarias** para cualquier nuevo componente o funcionalidad
4. **Verifica accesibilidad** de todos los cambios de UI
5. **Actualiza la documentación** cuando implementes cambios significativos

## 🔑 Leyenda
- ✅ Completado
- 🚧 En progreso
- 🔲 Pendiente
- ⭐ Tarea de alta prioridad
