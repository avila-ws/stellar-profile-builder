import { render, screen } from '@/test/test-utils';
import { describe, expect, it } from 'vitest';
import Footer from '@/components/Footer';

describe('Footer', () => {
  it('renderiza correctamente', () => {
    render(<Footer />);
    
    // Verificar que el footer está presente
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeDefined();
    
    // Verificar que los enlaces sociales están presentes
    const socialLinks = [
      { name: 'LinkedIn', href: 'https://www.linkedin.com/in/blockchain-security-devops-finance-devsecops-rust-engineer/' },
      { name: 'GitHub', href: 'https://github.com/' },
      { name: 'Email', href: 'mailto:renzo@avila.ws' },
      { name: 'Calendar', href: 'https://calendar.app.google/oy7TjX11PNBx6PoJ9' },
      { name: 'Location', href: 'https://maps.app.goo.gl/QnToM6RPniyKprZD7' }
    ];
    
    socialLinks.forEach(social => {
      const links = screen.getAllByRole('link', { name: social.name });
      expect(links.length).toBeGreaterThan(0);
      links.forEach(link => {
        expect(link).toHaveAttribute('href', social.href);
        if (social.name !== 'Email') {
          expect(link).toHaveAttribute('target', '_blank');
          expect(link).toHaveAttribute('rel', 'noopener noreferrer');
        }
      });
    });
    
    // Verificar que los enlaces de navegación están presentes
    const navLinks = ['Home', 'About', 'Experience', 'Contact'];
    navLinks.forEach(linkText => {
      const link = screen.getByRole('link', { name: linkText });
      expect(link).toBeDefined();
      expect(link).toHaveAttribute('href', `#${linkText.toLowerCase()}`);
    });
    
    // Verificar que el copyright está presente
    const currentYear = new Date().getFullYear();
    const copyright = screen.getByText(`© ${currentYear} Renzo Avila. All rights reserved.`);
    expect(copyright).toBeDefined();
  });
}); 