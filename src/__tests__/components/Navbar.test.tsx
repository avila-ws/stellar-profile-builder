import { render, screen } from '@/test/test-utils';
import { describe, expect, it } from 'vitest';
import Navbar from '@/components/Navbar';
import commonEN from '@/locales/en/common.json';

describe('Navbar', () => {
  it('renderiza correctamente', () => {
    render(<Navbar />);
    
    // Verificar que el navbar está presente
    const navbar = screen.getByRole('banner');
    expect(navbar).toBeDefined();
    
    // Verificar que los enlaces de navegación están presentes
    const navLinks = [
      { name: commonEN.navigation.home, href: '#home' },
      { name: commonEN.about.title, href: '#about' },
      { name: commonEN.experience.title, href: '#experience' }
    ];
    
    navLinks.forEach(link => {
      const linkElement = screen.getByRole('link', { name: link.name });
      expect(linkElement).toBeDefined();
      expect(linkElement).toHaveAttribute('href', link.href);
    });
    
    // Verificar que el enlace de contacto está presente (hay múltiples elementos)
    const contactLinks = screen.getAllByRole('link', { name: commonEN.contact.title });
    expect(contactLinks.length).toBeGreaterThan(0);
    contactLinks.forEach(link => {
      expect(link).toHaveAttribute('href', '#contact');
    });
    
    // Verificar que el botón de tema está presente
    const themeButton = screen.getByRole('button', { name: /switch to/i });
    expect(themeButton).toBeDefined();
  });
}); 