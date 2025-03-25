
import { createRoot } from 'react-dom/client'
import App from '@/App.tsx'
import '@/index.css'
import '@/i18n/config' // Import i18n configuration

// Detect Lovable environment for better debugging
const isLovableEnv = window.location.hostname.includes('lovable') || 
                     window.location.hostname.includes('lovableproject');
const environment = isLovableEnv ? 'Lovable' : window.location.hostname;

// Add diagnostic message
console.log(`Application starting with base path: '/' on environment: ${environment}`);

createRoot(document.getElementById("root")!).render(<App />);
