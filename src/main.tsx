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

// Check if we're actually running on Vercel's infrastructure
const isVercelInfrastructure = () => {
  // Check for Vercel's specific headers or environment
  const headers = document.querySelector('meta[name="vercel-deployment"]');
  const isVercelDeployment = headers !== null;
  
  // Check if we're on a Vercel domain
  const isVercelDomain = window.location.hostname.includes('vercel.app');
  
  // Only consider it a Vercel deployment if we're actually on Vercel's infrastructure
  return isVercelDeployment || isVercelDomain;
};

createRoot(rootElement).render(
  <>
    <App />
    {isVercelInfrastructure() && (
      <>
        <SpeedInsights/>
        <Analytics />
      </>
    )}
  </>
)
