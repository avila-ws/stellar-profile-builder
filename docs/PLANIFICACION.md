# Planificación y Estimación de Recursos

Este documento contiene la planificación temporal, estimaciones de esfuerzo y asignación de recursos para las tareas del proyecto.

## Cronograma General

| Fase | Fecha Inicio | Fecha Fin | Estado |
|------|--------------|-----------|--------|
| Fase 1: Implementación Base | 01/09/2023 | 30/09/2023 | **COMPLETADO** |
| Fase 2: Mejoras y Optimización | 01/10/2023 | 31/10/2023 | **EN PROGRESO** |
| Fase 3: Testing y Seguridad | 01/11/2023 | 30/11/2023 | PENDIENTE |
| Fase 4: Finalización y Lanzamiento | 01/12/2023 | 15/12/2023 | PENDIENTE |

## Estimación de Esfuerzo por Área

| Área | Esfuerzo Total (horas) | Completado | Restante |
|------|------------------------|------------|----------|
| Desarrollo Frontend | 320 | 65% | 112h |
| Testing | 120 | 20% | 96h |
| Optimización | 80 | 30% | 56h |
| Documentación | 40 | 40% | 24h |
| DevOps | 60 | 15% | 51h |
| Seguridad | 40 | 25% | 30h |
| **TOTAL** | **660** | **47%** | **369h** |

## Plan de Sprints

### Sprint Actual (#4)

**Fechas**: 15/10/2023 - 29/10/2023  
**Meta**: Implementar mejoras de accesibilidad y optimización de rendimiento

| Tarea | Responsable | Estimación (h) | Prioridad | Estado |
|-------|-------------|----------------|-----------|--------|
| Implementar lazy loading para imágenes | Manuel | 8 | Alta | En progreso |
| Mejorar contrastes para accesibilidad | Laura | 6 | Alta | Completado |
| Refactorizar ChatBot para reducir bundle | Carlos | 10 | Media | Pendiente |
| Implementar test end-to-end para flujo principal | Sara | 12 | Media | En progreso |
| Mejorar documentación de componentes | Equipo | 4 | Baja | Pendiente |

**Capacidad total del sprint**: 100h  
**Comprometido**: 82h  
**Completado (a la fecha)**: 38h  
**Velocidad promedio**: 70h/sprint

### Próximo Sprint (#5)

**Fechas**: 30/10/2023 - 12/11/2023  
**Meta**: Completar implementación de test suite y mejoras de seguridad

| Tarea | Responsable | Estimación (h) | Prioridad |
|-------|-------------|----------------|-----------|
| Implementar tests unitarios para componentes críticos | Sara | 16 | Alta |
| Configurar CI/CD para testing automático | Manuel | 12 | Alta |
| Auditoría de seguridad y correcciones | Carlos | 14 | Media |
| Implementar autenticación JWT | Laura | 10 | Media |
| Optimización de SEO | Manuel | 8 | Baja |

**Capacidad estimada**: 100h  
**Comprometido**: 60h (pendiente de refinamiento)

## Análisis de Riesgos - Planificación

| Riesgo | Impacto | Probabilidad | Estrategia |
|--------|---------|--------------|------------|
| Subestimación del esfuerzo de testing | ALTO | MEDIA | Buffer de 20% en estimaciones, empezar testing en paralelo desde sprint temprano |
| Desafíos técnicos en optimización | MEDIO | ALTA | Spike de investigación previo, pair programming para problemas complejos |
| Cambios en requerimientos | ALTO | MEDIA | Congelar alcance para los próximos 2 sprints, negociar cambios para fases futuras |
| Baja disponibilidad de recursos | MEDIO | BAJA | Plan de contingencia con priorización estricta de tareas críticas |

## Recursos y Herramientas

### Equipo

- **Desarrollo Frontend**: 2 desarrolladores senior, 1 mid-level
- **QA**: 1 ingeniero de pruebas
- **DevOps**: 1 especialista (tiempo parcial)
- **UX/UI**: 1 diseñador (consultas según necesidad)

### Herramientas de Gestión

- **Jira**: Gestión de tareas y sprints
- **GitHub**: Repositorio y PRs
- **Figma**: Diseños y prototipos
- **SonarQube**: Análisis de calidad de código

## Desglose de Esfuerzo por Componente

| Componente | Complejidad | Esfuerzo Estimado | Esfuerzo Real | Varianza |
|------------|-------------|-------------------|---------------|----------|
| Perfil Principal | Alta | 40h | 52h | +30% |
| Sistema de Temas | Media | 16h | 18h | +12.5% |
| Internacionalización | Media | 24h | 20h | -16.7% |
| ChatBot | Alta | 32h | 45h | +40.6% |
| Formulario de Contacto | Baja | 8h | 6h | -25% |
| Componentes UI | Media | 40h | 35h | -12.5% |

## Lecciones Aprendidas - Estimación

1. **Complejidad de ChatBot subestimada**: La integración con servicios externos y manejo de estado resultó más compleja de lo previsto. Para componentes similares, incrementar estimación en 30%.

2. **Reutilización efectiva de componentes UI**: La estructura modular permitió completar esta área más rápido de lo esperado. Continuar con enfoque de diseño modular.

3. **Testing insuficiente en fases tempranas**: Generó retrabajo. Incluir 20% del tiempo de desarrollo para tests unitarios desde el inicio.

## Plan de Contingencia

Para cumplir con la fecha de entrega si hay retrasos significativos:

1. **Priorización MoSCoW**:
   - Must have: Funcionalidades core del perfil, optimización básica
   - Should have: Temas, i18n, formulario de contacto
   - Could have: ChatBot avanzado, animaciones
   - Won't have: Características adicionales no críticas

2. **Reducción de Alcance**:
   - Limitar idiomas soportados inicialmente
   - Simplificar algunas animaciones
   - Posponer mejoras de rendimiento complejas para v1.1

3. **Recursos Adicionales**:
   - Plan para incorporar 1 desarrollador adicional en sprints críticos si es necesario 