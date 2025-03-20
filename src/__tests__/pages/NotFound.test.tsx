import { render, screen } from '@testing-library/react';
import { describe, test, expect, vi, afterEach } from 'vitest';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import NotFound from '../../pages/NotFound';

// Mock para el console.error
const consoleErrorMock = vi.spyOn(console, 'error').mockImplementation(() => {});

describe('NotFound Page', () => {
  afterEach(() => {
    consoleErrorMock.mockReset();
  });
  
  test('renderiza el mensaje de error 404', () => {
    // Simular una ruta que no existe
    render(
      <MemoryRouter initialEntries={['/ruta-inexistente']}>
        <NotFound />
      </MemoryRouter>
    );
    
    // Verificar que los elementos principales están presentes
    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('Oops! Page not found')).toBeInTheDocument();
    expect(screen.getByText('Return to Home')).toBeInTheDocument();
    expect(screen.getByText('Return to Home')).toHaveAttribute('href', '/');
  });
  
  test('registra un error en la consola con la ruta inexistente', () => {
    // Simular una ruta específica que no existe
    render(
      <MemoryRouter initialEntries={['/ruta-inexistente']}>
        <NotFound />
      </MemoryRouter>
    );
    
    // Verificar que se llamó a console.error con el mensaje correcto
    expect(consoleErrorMock).toHaveBeenCalledWith(
      '404 Error: User attempted to access non-existent route:',
      '/ruta-inexistente'
    );
  });
  
  test('se muestra cuando se accede a una ruta inexistente', () => {
    // Configurar rutas con una ruta para la página NotFound
    render(
      <MemoryRouter initialEntries={['/ruta-inexistente']}>
        <Routes>
          <Route path="/" element={<div>Página de inicio</div>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MemoryRouter>
    );
    
    // Verificar que se muestra la página NotFound
    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.queryByText('Página de inicio')).not.toBeInTheDocument();
    expect(consoleErrorMock).toHaveBeenCalled();
  });
}); 