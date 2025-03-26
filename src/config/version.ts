// Formato: v[Mayor].[Menor].[Parche]-[Entorno]
// Incrementar el número de parche con cada despliegue
export const APP_VERSION = `v1.0.6-${import.meta.env.MODE || 'production'}`;

// Fecha de compilación/actualización (se actualiza automáticamente al compilar)
export const BUILD_DATE = new Date().toISOString();

// Entorno actual
export const ENV = import.meta.env.MODE || 'production';

// Función para obtener información de versión formateada
export const getVersionInfo = () => {
  return {
    version: APP_VERSION,
    buildDate: BUILD_DATE,
    environment: ENV,
    formattedString: `${APP_VERSION} (${ENV}) - Build: ${new Date(BUILD_DATE).toLocaleString()}`
  };
}; 