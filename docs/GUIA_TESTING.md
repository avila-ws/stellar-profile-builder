# Guía de Testing

Este documento contiene la información necesaria para realizar pruebas efectivas en el proyecto, incluyendo análisis de cobertura, ejemplos prácticos y comandos útiles.

## Análisis Detallado de Cobertura de Pruebas

La cobertura global actual es de **81.46%**, lo cual es un buen nivel para una aplicación profesional. A continuación, se presenta un análisis detallado de los componentes que necesitan atención y los que no:

### Componentes Críticos que Necesitan Mejorar su Cobertura

| Componente | Cobertura Actual | Razón para Mejorar | Prioridad |
|------------|------------------|---------------------|-----------|
| ChatBot.tsx | 72.83% líneas, 53.84% funciones | Componente de interacción principal con el usuario y maneja lógica compleja | ALTA |
| ThemeProvider.tsx | 86.66% líneas, 66.66% funciones | Afecta globalmente a toda la aplicación | ALTA |
| toaster.tsx | 47.05% líneas | Componente de feedback crítico para el usuario | ALTA |
| ContactForm.tsx | 73.25% líneas, 50% funciones | Maneja datos de usuario y envío de formularios | ALTA |

### Componentes que Podrían Mejorarse si Hay Tiempo Disponible

| Componente | Cobertura Actual | Consideraciones | Prioridad |
|------------|------------------|-----------------|-----------|
| dropdown-menu.tsx | 92.45% líneas, 0% funciones | Buen nivel de cobertura de líneas, pero faltan pruebas de interacción | MEDIA |
| language-selector.tsx | 100% líneas, 50% funciones | Funcional pero podría mejorarse la cobertura de funciones | MEDIA |
| toast.tsx | 91.17% líneas | Buena cobertura, algunos casos borde sin probar | BAJA |
| SEO.tsx | 94.11% líneas, 60% ramas | Componente importante para el SEO | MEDIA |
| NavBar.tsx | 94.02% líneas, 33.33% funciones | Componente de navegación principal | MEDIA |

### Componentes que No Requieren Pruebas Adicionales

| Componente | Cobertura Actual | Justificación | Recomendación |
|------------|------------------|---------------|---------------|
| aspect-ratio.tsx | 0% | Componente visual simple sin lógica compleja | Ignorar o Eliminar si no se usa |
| form.tsx | 0% | No parece estar en uso activo en la aplicación | Candidato a eliminar |
| hover-card.tsx | 0% | Componente de UI simple con poca o nula lógica | Ignorar o Eliminar si no se usa |
| label.tsx | 0% | Componente básico de UI sin lógica compleja | Ignorar o Eliminar si no se usa |
| language-toggle.tsx | 0% | Posible duplicación con language-selector | Evaluar consolidación |
| separator.tsx | 0% | Componente puramente visual sin lógica | Ignorar |
| table.tsx | 0% | Si no es crucial para la aplicación | Ignorar o Eliminar si no se usa |
| toggle.tsx | 0% | Si no es usado activamente | Ignorar o Eliminar si no se usa |

### Criterios Utilizados para la Categorización

1. **Criticidad para el funcionamiento de la aplicación**: Componentes como ChatBot, ContactForm y ThemeProvider tienen un impacto directo en la experiencia del usuario.

2. **Complejidad del componente**: Componentes con mayor lógica de negocio requieren más pruebas.

3. **Visibilidad para el usuario**: Componentes que el usuario ve e interactúa directamente tienen mayor prioridad.

4. **Probabilidad y impacto de fallos**: ¿Qué tan grave sería si este componente fallara?

5. **Uso a través de la aplicación**: Componentes utilizados en múltiples lugares requieren mayor cobertura.

### Recomendación sobre Meta de Cobertura

Para este proyecto, recomendamos:
- **Meta global**: 85-90% de cobertura (realista y efectiva)
- **Componentes críticos**: >90% de cobertura
- **Componentes de UI simples**: No es necesario obsesionarse con alcanzar 100%

Este enfoque balanceado permite concentrar esfuerzos donde realmente importa, manteniendo un alto estándar de calidad mientras se hace un uso eficiente del tiempo de desarrollo.

## Ejemplos de Tests para Componentes Críticos

### Para ChatBot.tsx (prioridad alta):

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
    // Test de manejo de errores
    // ...
  });
});
```

### Para ThemeProvider.tsx (prioridad alta):

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
  
  it('persiste el tema en localStorage', async () => {
    // Test de persistencia
    // ...
  });
});
```

## Riesgos y Mitigaciones - Testing

| Riesgo | Impacto | Probabilidad | Mitigación |
|--------|---------|--------------|------------|
| Pruebas frágiles que se rompen con cambios menores | ALTO | MEDIA | Utilizar selectores robustos y tests más orientados al comportamiento que a la implementación |
| Cobertura artificial que no representa casos reales | MEDIO | ALTA | Enfocarse en escenarios de usuario en lugar de métricas de cobertura |
| Tests demasiado lentos | ALTO | MEDIA | Usar mocks apropiados y optimizar configuración de testing |
| Falsos positivos | MEDIO | MEDIA | Implementar CI/CD con retests automáticos y pruebas con diferentes condiciones |

## Evolución de Cobertura

```
Cobertura Inicial: ~3.3%  →  Cobertura Actual: 81.46%  →  Meta: 85-90%
```

## Comandos Útiles para Testing

### Pruebas Unitarias
```bash
# Ejecutar todas las pruebas
npm test

# Ejecutar pruebas con cobertura
npm run test:coverage

# Ejecutar pruebas en modo watch
npm run test:watch

# Ejecutar un archivo específico de prueba
npm test src/__tests__/components/ui/button.test.tsx

# Ejecutar pruebas por patrón
npm test "button|footer"
```

### Pruebas E2E
```bash
# Ejecutar todas las pruebas E2E
npx playwright test

# Ejecutar pruebas E2E solo en Chrome
npx playwright test --project=chromium

# Ejecutar un archivo específico de pruebas E2E
npx playwright test e2e/navigation.spec.ts

# Ejecutar pruebas E2E en modo UI interactivo
npx playwright test --ui

# Ver el reporte de las últimas pruebas ejecutadas
npx playwright show-report

# Ejecutar pruebas E2E y generar screenshots
npx playwright test --project=chromium --screenshot=on

# Verificar el estado de los navegadores instalados
npx playwright install-deps
```

### Accesibilidad
```bash
# Si tienes configuradas pruebas con axe
npm run test:a11y

# Con Lighthouse CLI (requiere instalación previa)
npx lighthouse http://localhost:8080 --view --only-categories=accessibility

# Verificar accesibilidad con Playwright
npx playwright test e2e/a11y.spec.ts
```

### Scripts Combinados
```bash
# Script que puedes agregar a package.json
npm run test:all

# Que ejecutaría esto:
# npm run test:coverage && npx playwright test && npx lighthouse http://localhost:8080 --output-path=./lighthouse-report.html
```

### Otros
```bash
# Actualizar snapshots de pruebas
npm test -- -u
``` 