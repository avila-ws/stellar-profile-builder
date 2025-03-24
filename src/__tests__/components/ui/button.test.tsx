import { render, screen } from '@testing-library/react';
import Button from '@/components/ui/button';
import { describe, test, expect } from 'vitest';

describe('Button Component', () => {
  test('renderiza correctamente con el texto proporcionado', () => {
    render(<Button>Click me</Button>);
    
    const button = screen.getByRole('button', { name: 'Click me' });
    expect(button).toBeInTheDocument();
  });
  
  test('aplica variantes y tamaños correctamente', () => {
    render(
      <>
        <Button variant="default" data-testid="default">Default</Button>
        <Button variant="destructive" data-testid="destructive">Destructive</Button>
        <Button variant="outline" data-testid="outline">Outline</Button>
        <Button variant="secondary" data-testid="secondary">Secondary</Button>
        <Button variant="ghost" data-testid="ghost">Ghost</Button>
        <Button variant="link" data-testid="link">Link</Button>
        
        <Button size="default" data-testid="size-default">Default Size</Button>
        <Button size="sm" data-testid="size-sm">Small</Button>
        <Button size="lg" data-testid="size-lg">Large</Button>
        <Button size="icon" data-testid="size-icon">Icon</Button>
      </>
    );
    
    // Verificar variantes
    expect(screen.getByTestId('default')).toHaveClass('bg-primary');
    expect(screen.getByTestId('destructive')).toHaveClass('bg-destructive');
    expect(screen.getByTestId('outline')).toHaveClass('border');
    expect(screen.getByTestId('secondary')).toHaveClass('bg-secondary');
    expect(screen.getByTestId('ghost')).toHaveClass('hover:bg-accent');
    expect(screen.getByTestId('link')).toHaveClass('underline-offset-4');
    
    // Verificar tamaños
    expect(screen.getByTestId('size-default')).toHaveClass('h-10');
    expect(screen.getByTestId('size-sm')).toHaveClass('h-9');
    expect(screen.getByTestId('size-lg')).toHaveClass('h-11');
    expect(screen.getByTestId('size-icon')).toHaveClass('h-10 w-10');
  });
  
  test('maneja el estado disabled correctamente', () => {
    render(
      <Button disabled data-testid="disabled-button">
        Disabled
      </Button>
    );
    
    const button = screen.getByTestId('disabled-button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('disabled:pointer-events-none');
  });
  
  test('acepta clases personalizadas', () => {
    render(
      <Button className="custom-class" data-testid="custom-button">
        Custom
      </Button>
    );
    
    const button = screen.getByTestId('custom-button');
    expect(button).toHaveClass('custom-class');
  });
  
  test('pasa otras props correctamente', () => {
    render(
      <Button aria-label="Test button" data-custom="value" data-testid="props-button">
        Props
      </Button>
    );
    
    const button = screen.getByTestId('props-button');
    expect(button).toHaveAttribute('aria-label', 'Test button');
    expect(button).toHaveAttribute('data-custom', 'value');
  });
}); 