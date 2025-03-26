
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeProvider";
import { Suspense, lazy, useEffect, startTransition } from "react";
import LoadingSpinner from "@/components/ui/loading-spinner";
import { SkipLink } from "@/components/ui/skip-link";
import { HelmetProvider } from "react-helmet-async";
import { getVersionInfo } from "@/config/version";
import { VersionBadge } from "@/components/ui/version-badge";

// Use dynamic imports with explicit relative path reference
// This ensures they load correctly in various environments
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));

const helmetContext = {};

// Componente que muestra la información de versión
const VersionLogger = () => {
  useEffect(() => {
    const versionInfo = getVersionInfo();
    // Usar startTransition para operaciones no críticas
    startTransition(() => {
      console.log(
        `%c📦 Stellar Profile Builder %c${versionInfo.formattedString}`,
        "color: #3b82f6; font-weight: bold; font-size: 14px;",
        "color: #10b981; font-weight: normal; font-size: 12px;"
      );
      
      // Evento de carga inicial - se registrará automáticamente por SpeedInsights
      console.log('App initialized, SpeedInsights should track automatically');
    });
  }, []);
  
  return null;
};

// Componente para precargar recursos críticos
const ResourcePreloader = () => {
  useEffect(() => {
    // Precargar el componente principal después de que la página esté idle
    const preloadMainComponent = () => {
      const importPromise = import("./pages/Index");
      // Iniciar carga en segundo plano
      return importPromise;
    };
    
    // Usar requestIdleCallback para precargar cuando el navegador esté inactivo
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => {
        preloadMainComponent();
      });
    } else {
      // Fallback para navegadores que no soportan requestIdleCallback
      setTimeout(preloadMainComponent, 1000);
    }
  }, []);
  
  return null;
};

const App = () => (
  <HelmetProvider context={helmetContext}>
    <ThemeProvider>
      <TooltipProvider>
        <ResourcePreloader />
        <BrowserRouter basename="">
          <SkipLink href="#main-content" />
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
        {/* Componentes no críticos para el FCP, cargarlos después */}
        <Toaster />
        <Sonner />
        <VersionLogger />
        <VersionBadge position="bottom-left" />
      </TooltipProvider>
    </ThemeProvider>
  </HelmetProvider>
);

export default App;
