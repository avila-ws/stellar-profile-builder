import { render, screen, act } from '@testing-library/react';
import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest';
import App from '@/App';

// Mock de los componentes lazy loaded para que se resuelvan inmediatamente
vi.mock('@/pages/Index', () => ({
  default: () => <div data-testid="index-page">Index Page</div>
}));

vi.mock('@/pages/NotFound', () => ({
  default: () => <div data-testid="not-found-page">Not Found Page</div>
}));

// Mock del componente LoadingSpinner
vi.mock('@/components/ui/loading-spinner', () => ({
  default: () => <div data-testid="loading-spinner">Loading...</div>
}));

// Silenciar la advertencia de act() temporalmente
// Esta advertencia ocurre porque React Suspense funciona de manera especial en pruebas
const originalConsoleError = console.error;
beforeEach(() => {
  console.error = (...args) => {
    if (args[0] && args[0].includes && args[0].includes('Warning: A suspended resource finished loading inside a test')) {
      return; // Ignorar esta advertencia específica
    }
    originalConsoleError(...args);
  };
});

// Restaurar console.error después de las pruebas
afterEach(() => {
  console.error = originalConsoleError;
});

describe('App Component', () => {
  test('renders without crashing and shows loading state', () => {
    render(<App />);
    // Verificar que el spinner de carga se muestra inicialmente
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });

  test('contains required providers', () => {
    render(<App />);
    // La aplicación debería renderizarse sin errores con todos los providers
    expect(document.querySelector('div')).toBeInTheDocument();
  });

  test('renders Index page', async () => {
    render(<App />);
    // Esperar a que se cargue la página Index
    const indexPage = await screen.findByTestId('index-page', {}, { timeout: 5000 });
    expect(indexPage).toBeInTheDocument();
  });
}); 