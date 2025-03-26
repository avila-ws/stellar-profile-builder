import { createRoot } from 'react-dom/client'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Analytics } from '@vercel/analytics/react'
import App from './App'
import './index.css'
import './i18n/config' // Import i18n configuration

// Make sure the root element exists
const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("Failed to find the root element");
  throw new Error("Failed to find the root element");
}

// Check if we're deployed on Vercel
const isVercel = window.location.hostname.includes('vercel.app') || 
                 window.location.hostname.includes('avila.ws');

createRoot(rootElement).render(
  <>
    <App />
    {isVercel && (
      <>
        <SpeedInsights/>
        <Analytics />
      </>
    )}
  </>
)
