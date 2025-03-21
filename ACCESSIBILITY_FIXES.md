# Mejoras de Accesibilidad Pendientes

## Problemas Críticos

### 1. Botones sin texto accesible (button-name)
- En `src/components/ChatBot.tsx`, línea 344: Agregar `aria-label` a los botones del chat.
  ```jsx
  <Button 
    className="h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative group"
    aria-label="Abrir chat de asistencia"
  >
  ```

### 2. Enlaces sin nombres descriptivos (link-name)
- En `src/components/contact/ContactInfo.tsx`: Agregar texto accesible a los enlaces de redes sociales.
  ```jsx
  <a 
    href="https://www.linkedin.com/in/..."
    className="..." 
    aria-label="Perfil de LinkedIn"
  >
    <IconLinkedIn />
  </a>
  ```

### 3. Elementos de lista incorrectos (listitem)
- En `src/components/experience/WorkExperience.tsx`: Asegurarse de que los elementos `<li>` estén dentro de elementos `<ul>` o `<ol>`, o cambiar la estructura.
  ```jsx
  <ul role="list">
    <li className="text-muted-foreground">...</li>
    <li className="text-muted-foreground">...</li>
  </ul>
  ```

## Problemas de Contraste

### 1. Texto con contraste insuficiente (color-contrast)
- En `src/components/HeroSection.tsx`: Aumentar el contraste del texto gris sobre fondo claro.
  ```jsx
  /* Antes */
  className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-4..."
  
  /* Después - opción 1: usar un color más oscuro */
  className="text-xl md:text-2xl text-gray-600 max-w-3xl mb-4..."
  
  /* Después - opción 2: aumentar la importancia del texto */
  className="text-xl md:text-2xl text-foreground/80 max-w-3xl mb-4..."
  ```

## Recomendaciones Generales

1. **Atributos ARIA**: Revisar y corregir atributos ARIA incorrectos.
   - Problemas con `aria-expanded` en elementos que no lo soportan.

2. **Focusable**: Asegurarse de que todos los elementos interactivos sean focusables y tengan un estilo visible cuando están enfocados.

3. **Pruebas manuales**: Realizar pruebas de navegación solo con teclado para identificar problemas adicionales.

## Plan de Implementación

1. Abordar primero los problemas críticos que afectan la navegación y usabilidad básica.
2. Implementar mejoras de contraste y problemas visuales posteriormente.
3. Ejecutar regularmente pruebas de accesibilidad durante el desarrollo. 