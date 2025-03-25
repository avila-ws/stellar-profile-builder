
import { createRoot } from 'react-dom/client'
import App from '@/App.tsx'
import '@/index.css'
import '@/i18n/config' // Import i18n configuration

// Añadimos un mensaje de diagnóstico
console.log('Aplicación iniciando con rutas relativas');

createRoot(document.getElementById("root")!).render(<App />);
