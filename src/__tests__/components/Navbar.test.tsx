import { render, screen } from '@/test/test-utils';
import { describe, expect, it } from 'vitest';
import Navbar from '@/components/Navbar';

describe('Navbar', () => {
  it('renderiza correctamente', () => {
    render(<Navbar />);
    
    // Verificar que el navbar está presente
    const navbar = screen.getByRole('banner');
    expect(navbar).toBeDefined();
    
    // Verificar que los enlaces de navegación están presentes
    const navLinks = ['Home', 'About', 'Experience', 'Contact'];
    navLinks.forEach(linkText => {
      const link = screen.getByRole('link', { name: linkText });
      expect(link).toBeDefined();
      expect(link).toHaveAttribute('href', `#${linkText.toLowerCase()}`);
    });
    
    // Verificar que el botón de tema está presente
    const themeButton = screen.getByRole('button', { name: /switch to/i });
    expect(themeButton).toBeDefined();
  });
}); 