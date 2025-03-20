import { render, screen } from '@/test/test-utils';
import { describe, expect, it } from 'vitest';
import Footer from '@/components/Footer';

describe('Footer', () => {
  it('renderiza correctamente', () => {
    render(<Footer />);
    
    // Verificar que el contenido del footer está presente
    const footerContent = screen.getByText(/All rights reserved/i);
    expect(footerContent).toBeDefined();
    
    // Verificar que los enlaces sociales están presentes
    const socialLinks = ['LinkedIn', 'GitHub', 'Email', 'Calendar', 'Location'];
    socialLinks.forEach(link => {
      const linkElements = screen.getAllByText(link);
      const hasCorrectHref = linkElements.some(element => element.closest('a')?.getAttribute('href'));
      expect(hasCorrectHref).toBe(true);
    });
  });
}); 