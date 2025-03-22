// Mockear primero el hook
vi.mock('@/hooks/use-mobile', () => ({
  useIsMobile: vi.fn()
}));

import { render, screen } from '@/test/test-utils';
import { describe, test, expect, vi, beforeEach } from 'vitest';
import BookingCalendar from '@/components/BookingCalendar';
import { useIsMobile } from '@/hooks/use-mobile';
import commonEN from '@/locales/en/common.json';

describe('BookingCalendar Component', () => {
  const mockUseIsMobile = useIsMobile as unknown as ReturnType<typeof vi.fn>;
  
  beforeEach(() => {
    vi.clearAllMocks();
    // Configuración predeterminada
    vi.mocked(useIsMobile).mockReturnValue(false);
  });

  test('renderiza el iframe con la URL correcta', () => {
    render(<BookingCalendar />);
    const iframe = screen.getByTitle(commonEN.accessibility.calendar_iframe);
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute('src', expect.stringContaining('calendar.google.com'));
  });

  test('utiliza tamaño de iframe apropiado para dispositivos móviles', () => {
    // Configurar para dispositivo móvil
    vi.mocked(useIsMobile).mockReturnValue(true);
    
    render(<BookingCalendar />);
    const iframe = screen.getByTitle(commonEN.accessibility.calendar_iframe);
    expect(iframe).toHaveStyle({ minHeight: '1785px' });
  });

  test('ajusta la altura del iframe al recibir mensajes de Google Calendar', () => {
    render(<BookingCalendar />);
    const iframe = screen.getByTitle(commonEN.accessibility.calendar_iframe);
    
    // Simular mensaje de Google Calendar
    window.dispatchEvent(new MessageEvent('message', {
      data: 1000,
      origin: 'https://calendar.google.com'
    }));
    
    // Verificar que el iframe tiene la altura correcta
    expect(iframe).toHaveStyle({ height: '1050px' });
  });

  test('maneja el evento de redimensionamiento de la ventana', () => {
    // Configurar para dispositivo móvil
    vi.mocked(useIsMobile).mockReturnValue(true);
    
    render(<BookingCalendar />);
    const iframe = screen.getByTitle(commonEN.accessibility.calendar_iframe);
    
    // Simular evento de resize
    window.dispatchEvent(new Event('resize'));
    
    // Verificar que el iframe tiene la altura correcta
    expect(iframe).toHaveStyle({ minHeight: '1785px' });
  });
}); 