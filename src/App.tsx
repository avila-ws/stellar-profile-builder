
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeProvider";
import { Suspense, lazy, useEffect } from "react";
import LoadingSpinner from "@/components/ui/loading-spinner";
import { SkipLink } from "@/components/ui/skip-link";
import { HelmetProvider } from "react-helmet-async";
import { getVersionInfo } from "@/config/version";
import { VersionBadge } from "@/components/ui/version-badge";

// Configuration for Lovable environment
const isLovableEnv = window.location.hostname.includes('lovable') || 
                     window.location.hostname.includes('lovableproject');
console.log('Environment detection:', isLovableEnv ? 'Lovable environment' : 'Standard environment', 
            'Hostname:', window.location.hostname);

// Lazy loading components
const Index = lazy(() => import("@/pages/Index"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const helmetContext = {};

// Component to display version information
const VersionLogger = () => {
  useEffect(() => {
    const versionInfo = getVersionInfo();
    console.log(
      `%c📦 Stellar Profile Builder %c${versionInfo.formattedString}`,
      "color: #3b82f6; font-weight: bold; font-size: 14px;",
      "color: #10b981; font-weight: normal; font-size: 12px;"
    );
    console.log("Entorno detectado:", isLovableEnv ? "Lovable" : "Producción");
  }, []);
  
  return null;
};

const App = () => (
  <HelmetProvider context={helmetContext}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <VersionLogger />
        <VersionBadge position="bottom-left" />
        <BrowserRouter basename="/">
          <SkipLink href="#main-content" />
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </HelmetProvider>
);

export default App;
