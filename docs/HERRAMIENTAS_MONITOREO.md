# Herramientas de Monitoreo y Análisis

Este documento detalla las herramientas de monitoreo, análisis y observabilidad implementadas o propuestas para el proyecto.

## Herramientas Implementadas

### Monitoreo de Errores

**Sentry.io**
- Estado: Configurado parcialmente
- Implementación actual:
```javascript
// En _app.tsx
import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 0.2,
});
```
- Captura de errores implementada en componentes críticos:
  - `ChatBot.tsx`
  - `ContactForm.tsx`
  - `ThemeProvider.tsx`

### Análisis de Usuario

**Umami Analytics**
- Estado: Configurado
- Ventajas: Respetuoso con privacidad, sin cookies
- Implementación:
```jsx
// En _document.tsx
<script
  async
  defer
  data-website-id="abc123def456"
  src="https://analytics.ejemplo.com/script.js"
/>
```
- Eventos configurados: pageviews, clicks en CTAs, formularios completados

## Herramientas Propuestas

### Monitoreo de Performance

**New Relic Browser**
- Prioridad: Media
- Justificación: Necesario para monitoreo de rendimiento en producción
- Implementación propuesta:
```jsx
// En _app.tsx
import { BrowserAgent } from '@newrelic/browser-agent/nr-browser-agent';

const browserAgent = new BrowserAgent({
  license_key: process.env.NEXT_PUBLIC_NR_LICENSE_KEY,
  applicationID: process.env.NEXT_PUBLIC_NR_APP_ID,
});
```

### Logging

**Logflare**
- Prioridad: Baja
- Justificación: Centralización de logs para debugging en producción
- Implementación propuesta:
```javascript
// En utils/logger.js
import { LogflareClient } from '@logflare/client';

export const logger = new LogflareClient({
  sourceToken: process.env.LOGFLARE_SOURCE_TOKEN,
  apiKey: process.env.LOGFLARE_API_KEY,
});
```

## Dashboard de Monitoreo

**Propuesta de Implementación**

Crear un dashboard interno con métricas clave:

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

## Plan de Implementación

| Herramienta | Prioridad | Esfuerzo Estimado | Estado |
|-------------|-----------|-------------------|--------|
| Sentry.io | Alta | 2 días | Parcial |
| Umami Analytics | Alta | 1 día | Completado |
| New Relic | Media | 3 días | Pendiente |
| Logflare | Baja | 2 días | Pendiente |
| Dashboard interno | Media | 5 días | Pendiente |

## Alertas y Notificaciones

Configuración propuesta:

- **Alertas de Error Critical**: Notificación inmediata por Slack y email
- **Alertas de Performance**: Notificación diaria por Slack si:
  - Tiempo de carga > 3s
  - Error rate > 1%
  - CPU/Memory utilization > 80%
- **Alertas de Seguridad**: Notificación inmediata por Slack y SMS

## Documentación para Debugging

### Procedimiento para Análisis de Errores

1. Verificar panel de Sentry para detalles del error
2. Revisar logs en Logflare para contexto
3. Reproducir error en entorno de desarrollo
4. Verificar variables de entorno y configuraciones
5. Documentar solución en ticket correspondiente 