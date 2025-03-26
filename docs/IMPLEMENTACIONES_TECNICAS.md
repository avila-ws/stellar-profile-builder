# Implementaciones Técnicas de Referencia

Este documento contiene ejemplos técnicos de implementación para el proyecto Stellar Profile Builder, sirviendo como referencia para desarrolladores.

## 1. Script de Pipeline Completo (CI/CD)

```bash
#!/bin/bash
# run-pipeline.sh - Pipeline completo de pruebas y despliegue

set -e  # Detener ejecución en caso de error

echo "🔄 Iniciando pipeline completo: $(date)"

echo "📦 Instalando dependencias..."
npm ci

echo "🧪 Fase 1: Pruebas Unitarias"
npm run test:coverage || { echo "❌ Pruebas unitarias fallidas"; exit 1; }

echo "🧪 Fase 2: Pruebas E2E"
npx playwright test || { echo "❌ Pruebas E2E fallidas"; exit 1; }

echo "♿ Fase 3: Pruebas de Accesibilidad"
npm run test:a11y || { echo "❌ Pruebas de accesibilidad fallidas"; exit 1; }

echo "🔍 Fase 4: Análisis de código"
npm run lint || { echo "❌ Lint fallido"; exit 1; }
npm run type-check || { echo "❌ Type check fallido"; exit 1; }

echo "🛡️ Fase 5: Análisis de seguridad"
npm audit --production || echo "⚠️ Alertas de seguridad detectadas"
npx snyk test || echo "⚠️ Snyk detectó posibles vulnerabilidades"

echo "🚀 Fase 6: Construcción"
npm run build || { echo "❌ Construcción fallida"; exit 1; }

echo "📊 Fase 7: Análisis de rendimiento"
npm run analyze-bundle || echo "⚠️ Análisis de bundle con advertencias"
npx lighthouse-ci || echo "⚠️ Lighthouse detectó problemas de rendimiento"

echo "📦 Fase 8: Empaquetado"
docker build -t stellar-profile:$(git rev-parse --short HEAD) . || { echo "❌ Creación de imagen Docker fallida"; exit 1; }

echo "📋 Fase 9: Generación de informes"
mkdir -p reports
echo "- Informe generado: $(date)" > reports/pipeline-report.txt
echo "- Commit: $(git rev-parse HEAD)" >> reports/pipeline-report.txt
echo "- Versión: $(node -p "require('./package.json').version")" >> reports/pipeline-report.txt
npm run generate-docs

echo "🌐 Fase 10: Despliegue a Staging"
./scripts/deploy-staging.sh

echo "✅ Pipeline completado con éxito: $(date)"
echo "🔗 Staging URL: https://staging-stellar-profile.example.com/$(git rev-parse --short HEAD)"
```

## 2. Optimización de Imágenes (Implementación)

```jsx
<img
  src="/imagen.webp"
  srcSet="/imagen-small.webp 500w, /imagen-medium.webp 1000w, /imagen-large.webp 1500w"
  sizes="(max-width: 600px) 500px, (max-width: 1200px) 1000px, 1500px"
  loading="lazy"
  width="800"
  height="600"
  alt="Descripción de imagen"
/>
```

## 3. Configuración de Caching (Implementación en vite.config.ts)

```js
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        vendor: ['react', 'react-dom'],
        ui: ['./src/components/ui'],
      }
    }
  }
}
```

## 4. Preload de Recursos Críticos (Implementación)

```html
<link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin />
```

## 5. Comandos para Análisis de Rendimiento

```bash
# Con Lighthouse (métricas de rendimiento)
npx lighthouse http://localhost:8080 --view --only-categories=performance

# Usando Playwright para métricas web
npx playwright test e2e/performance.spec.ts
```

## 6. Monitoreo de Errores (Implementación con Sentry)

```javascript
// En _app.tsx
import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 0.2,
});
```

## 7. Analytics (Implementación con Umami)

```jsx
// En _document.tsx
<script
  async
  defer
  data-website-id="abc123def456"
  src="https://analytics.ejemplo.com/script.js"
/>
```

## 8. Dashboard de Monitoreo (Implementación propuesta)

```jsx
// components/admin/MetricsDashboard.tsx
import { useState, useEffect } from 'react';
import { fetchMetrics } from '@/lib/api/metrics';
import { 
  Chart, 
  LineElement, 
  PointElement, 
  LineController, 
  CategoryScale 
} from 'chart.js';
import { Line } from 'react-chartjs-2';

Chart.register(LineElement, PointElement, LineController, CategoryScale);

export function MetricsDashboard() {
  const [metrics, setMetrics] = useState(null);
  
  useEffect(() => {
    const getMetrics = async () => {
      const data = await fetchMetrics();
      setMetrics(data);
    };
    
    getMetrics();
    const interval = setInterval(getMetrics, 60000);
    return () => clearInterval(interval);
  }, []);
  
  if (!metrics) return <div>Cargando métricas...</div>;
  
  return (
    <div className="metrics-dashboard">
      <h2>Métricas en Tiempo Real</h2>
      
      <div className="metrics-grid">
        <div className="metric-card">
          <h3>Usuarios Activos</h3>
          <p className="metric-value">{metrics.activeUsers}</p>
        </div>
        
        <div className="metric-card">
          <h3>Tiempo de Carga Promedio</h3>
          <p className="metric-value">{metrics.avgLoadTime}ms</p>
        </div>
        
        <div className="metric-card">
          <h3>Errores (24h)</h3>
          <p className="metric-value">{metrics.errorCount}</p>
        </div>
      </div>
      
      <div className="charts-container">
        <Line 
          data={metrics.performanceData} 
          options={{
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: 'Rendimiento (Últimas 24h)'
              }
            }
          }}
        />
      </div>
    </div>
  );
}
```

## 9. Implementación de Test E2E para ChatBot

```tsx
// e2e/chatbot.spec.ts
import { test, expect } from '@playwright/test';

test.describe('ChatBot', () => {
  test('debería abrir el chat al hacer clic en el botón', async ({ page }) => {
    // Navegar a la página
    await page.goto('/');
    
    // Verificar que el chat está cerrado inicialmente
    await expect(page.locator('.chat-dialog')).not.toBeVisible();
    
    // Hacer clic en el botón de chat
    await page.click('button[aria-label="Abrir chat de asistencia"]');
    
    // Verificar que el chat se abre
    await expect(page.locator('.chat-dialog')).toBeVisible();
  });
  
  test('debería enviar un mensaje y recibir respuesta', async ({ page }) => {
    // Navegar a la página y abrir el chat
    await page.goto('/');
    await page.click('button[aria-label="Abrir chat de asistencia"]');
    
    // Escribir un mensaje
    await page.fill('.chat-input', '¿Cómo puedo contactarte?');
    await page.click('button[aria-label="Enviar mensaje"]');
    
    // Verificar que el mensaje aparece en el historial
    await expect(page.locator('.chat-messages')).toContainText('¿Cómo puedo contactarte?');
    
    // Esperar la respuesta del bot (puede tardar, ajustar timeout si es necesario)
    await expect(page.locator('.chat-message.bot')).toBeVisible({ timeout: 10000 });
    
    // Verificar que la respuesta contiene información de contacto
    await expect(page.locator('.chat-message.bot')).toContainText(/contacto|email|formulario/i);
  });
});
```

## 10. Optimización de Importaciones para Reducir Bundle Size

```typescript
// ❌ Importación incorrecta (todo el módulo)
import * as React from 'react';
import * as lodash from 'lodash';

// ✅ Importación optimizada (solo lo necesario)
import { useState, useEffect } from 'react';
import { debounce, throttle } from 'lodash-es';
```

## 11. Ejemplo de Manejo de Errores con Error Boundary

```tsx
// components/ErrorBoundary.tsx
import React, { Component, ErrorInfo, ReactNode } from 'react';
import * as Sentry from '@sentry/react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error en componente:', error, errorInfo);
    
    Sentry.withScope((scope) => {
      scope.setExtras(errorInfo);
      Sentry.captureException(error);
    });
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="error-fallback">
          <h2>Algo salió mal</h2>
          <p>Hubo un problema al cargar este componente. Por favor, intenta recargar la página.</p>
          <button onClick={() => this.setState({ hasError: false })}>
            Intentar de nuevo
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

// Uso:
// <ErrorBoundary>
//   <ComponenteQuePodriaFallar />
// </ErrorBoundary>
```

## 12. Implementación de Internacionalización con i18next

```tsx
// hooks/useLanguage.ts
import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';

export const useLanguage = (namespace?: string) => {
  const { t, i18n } = useTranslation(namespace);
  
  const currentLanguage = i18n.language;
  
  const toggleLanguage = useCallback(() => {
    const newLang = currentLanguage === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
    // Guardar preferencia en localStorage
    localStorage.setItem('language', newLang);
  }, [currentLanguage, i18n]);
  
  return {
    t,
    currentLanguage,
    toggleLanguage,
    isEnglish: currentLanguage === 'en',
    isSpanish: currentLanguage === 'es'
  };
};
``` 

## 13. Implementación de Vercel Analytics

Para monitorear el tráfico y comportamiento de los usuarios de forma respetuosa con la privacidad, se ha implementado Vercel Analytics.

### Instalación del paquete

```bash
npm i @vercel/analytics
```

### Implementación en la aplicación React

```tsx
// src/main.tsx
import { createRoot } from 'react-dom/client'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Analytics } from '@vercel/analytics/react'
import App from '@/App.tsx'
import '@/index.css'
import '@/i18n/config' // Import i18n configuration

createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <SpeedInsights />
    <Analytics />
  </>
);
```

Esta implementación permite:
- Seguimiento de páginas vistas
- Medición de tasas de rebote
- Análisis de rutas populares
- Monitoreo del rendimiento del sitio
- Todo sin cookies ni identificación personal de usuarios 