import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest';
import BookingCalendar from '../../components/BookingCalendar';
import * as useMobileHook from '@/hooks/use-mobile';

describe('BookingCalendar Component', () => {
  // Mock del hook useIsMobile
  const mockUseIsMobile = vi.spyOn(useMobileHook, 'useIsMobile');
  
  // Mock del addEventListener y removeEventListener
  const originalAddEventListener = window.addEventListener;
  const originalRemoveEventListener = window.removeEventListener;
  let messageHandler: ((event: MessageEvent) => void) | null = null;
  let resizeHandler: (() => void) | null = null;
  
  beforeEach(() => {
    // Mock predeterminado: no móvil
    mockUseIsMobile.mockReturnValue(false);
    
    // Mock para addEventListener para capturar los handlers
    window.addEventListener = vi.fn((event, handler) => {
      if (event === 'message') {
        messageHandler = handler as (event: MessageEvent) => void;
      } else if (event === 'resize') {
        resizeHandler = handler as () => void;
      }
    });
    
    // Mock para removeEventListener
    window.removeEventListener = vi.fn();
    
    // Mock para setTimeout
    vi.useFakeTimers();
  });
  
  afterEach(() => {
    vi.clearAllMocks();
    messageHandler = null;
    resizeHandler = null;
    vi.restoreAllMocks();
    window.addEventListener = originalAddEventListener;
    window.removeEventListener = originalRemoveEventListener;
    vi.useRealTimers();
  });
  
  test('renderiza el iframe con la URL correcta', () => {
    render(<BookingCalendar />);
    
    const iframe = screen.getByTitle('Google Calendar Appointment Scheduling');
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute('src', expect.stringContaining('calendar.google.com'));
    expect(iframe).toHaveStyle({ height: '1050px' });
  });
  
  test('utiliza tamaño de iframe apropiado para dispositivos móviles', () => {
    // Simular que estamos en un dispositivo móvil
    mockUseIsMobile.mockReturnValue(true);
    
    render(<BookingCalendar />);
    
    const iframe = screen.getByTitle('Google Calendar Appointment Scheduling');
    expect(iframe).toHaveStyle({ height: '1785px' });
    expect(iframe).toHaveStyle({ minHeight: '1785px' });
  });
  
  test('ajusta la altura del iframe al recibir mensajes de Google Calendar', () => {
    render(<BookingCalendar />);
    
    // Verificar que se registró el event listener
    expect(window.addEventListener).toHaveBeenCalledWith('message', expect.any(Function));
    
    // Simular un mensaje de Google Calendar
    if (messageHandler) {
      act(() => {
        messageHandler({
          origin: 'https://calendar.google.com',
          data: 1000
        } as MessageEvent);
      });
    }
    
    // Verificar que la altura se ajustó
    const iframe = screen.getByTitle('Google Calendar Appointment Scheduling');
    expect(iframe).toHaveStyle({ height: '1050px' });
  });
  
  test('maneja el evento de redimensionamiento de la ventana', () => {
    // Simular que estamos en un dispositivo móvil
    mockUseIsMobile.mockReturnValue(true);
    
    render(<BookingCalendar />);
    
    // Verificar que se registró el event listener para resize
    expect(window.addEventListener).toHaveBeenCalledWith('resize', expect.any(Function));
    
    // Simular un evento de redimensionamiento
    if (resizeHandler) {
      act(() => {
        resizeHandler();
        // Avanzar el temporizador para activar el setTimeout
        vi.advanceTimersByTime(300);
      });
    }
    
    // Verificar que la altura se actualizó (aunque sea muy ligeramente)
    const iframe = screen.getByTitle('Google Calendar Appointment Scheduling');
    expect(iframe).toHaveStyle({ height: '1786px' });
  });
  
  test('limpia los event listeners al desmontar el componente', () => {
    const { unmount } = render(<BookingCalendar />);
    
    // Desmontar el componente
    unmount();
    
    // Verificar que se eliminaron los event listeners
    expect(window.removeEventListener).toHaveBeenCalledWith('message', expect.any(Function));
    expect(window.removeEventListener).toHaveBeenCalledWith('resize', expect.any(Function));
  });
}); 