import { renderHook, act } from '@testing-library/react';
import { describe, test, expect, beforeEach } from 'vitest';
import { useToast, toast } from '@/hooks/use-toast';

describe('useToast Hook', () => {
  // Limpiar los toasts antes de cada prueba
  beforeEach(() => {
    // Eliminamos todos los toasts
    const { result } = renderHook(() => useToast());
    act(() => {
      result.current.dismiss();
    });
  });

  test('debería retornar la función toast y un array de toasts', () => {
    const { result } = renderHook(() => useToast());
    
    expect(result.current.toast).toBeDefined();
    expect(result.current.toasts).toBeInstanceOf(Array);
    expect(result.current.dismiss).toBeDefined();
  });
  
  test('debería añadir un toast cuando se llama a toast()', () => {
    const { result } = renderHook(() => useToast());
    
    act(() => {
      result.current.toast({
        title: 'Título de prueba',
        description: 'Descripción de prueba'
      });
    });
    
    expect(result.current.toasts.length).toBe(1);
    expect(result.current.toasts[0].title).toBe('Título de prueba');
    expect(result.current.toasts[0].description).toBe('Descripción de prueba');
  });
  
  test('debería eliminar un toast específico al llamar a dismiss con un id', () => {
    const { result } = renderHook(() => useToast());
    
    let toastId: string;
    
    act(() => {
      const response = result.current.toast({
        title: 'Toast a eliminar',
      });
      toastId = response.id;
    });
    
    // Verificar que se agregó el toast
    expect(result.current.toasts.length).toBe(1);
    
    act(() => {
      result.current.dismiss(toastId);
    });
    
    // El toast todavía existe pero su estado 'open' es false
    expect(result.current.toasts[0].open).toBe(false);
  });
  
  test('debería eliminar todos los toasts al llamar a dismiss sin id', () => {
    const { result } = renderHook(() => useToast());
    
    act(() => {
      result.current.toast({
        title: 'Toast 1',
      });
      result.current.toast({
        title: 'Toast 2',
      });
    });
    
    // Solo debería haber un toast debido al TOAST_LIMIT = 1
    expect(result.current.toasts.length).toBe(1);
    
    act(() => {
      result.current.dismiss();
    });
    
    // Todos los toasts deberían tener open: false
    expect(result.current.toasts[0].open).toBe(false);
  });
  
  test('debería actualizar un toast existente', () => {
    const { result } = renderHook(() => useToast());
    
    let toastResponse: ReturnType<typeof result.current.toast>;
    
    act(() => {
      toastResponse = result.current.toast({
        title: 'Título original',
      });
    });
    
    act(() => {
      toastResponse.update({
        id: toastResponse.id,
        title: 'Título actualizado',
      });
    });
    
    expect(result.current.toasts[0].title).toBe('Título actualizado');
  });
}); 