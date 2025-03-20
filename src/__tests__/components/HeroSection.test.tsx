import { render, screen } from '@/test/test-utils';
import { describe, expect, it } from 'vitest';
import HeroSection from '@/components/HeroSection';

describe('HeroSection', () => {
  it('renderiza correctamente', () => {
    render(<HeroSection />);
    
    // Verificar que el título está presente
    const title = screen.getByRole('heading', { name: 'Renzo Avila' });
    expect(title).toBeDefined();
    
    // Verificar que el subtítulo está presente
    const subtitle = screen.getByText(/DevSecOps Engineer with 6 years of experience/i);
    expect(subtitle).toBeDefined();
    
    // Verificar que los enlaces de contacto están presentes
    const contactLinks = [
      { name: 'Barcelona, Spain', href: 'https://maps.app.goo.gl/QnToM6RPniyKprZD7' },
      { name: 'LinkedIn', href: 'https://www.linkedin.com/in/blockchain-security-devops-finance-devsecops-rust-engineer/' },
      { name: '+44 330 122 9696', href: 'https://wa.me/443301229696?text=Hello%2C%20I%20would%20like%20to%20get%20in%20touch%20with%20you' },
      { name: 'renzo@avila.ws', href: 'https://calendar.app.google/oy7TjX11PNBx6PoJ9' }
    ];
    
    contactLinks.forEach(contact => {
      const link = screen.getByRole('link', { name: contact.name });
      expect(link).toBeDefined();
      expect(link).toHaveAttribute('href', contact.href);
    });
    
    // Verificar que los botones de acción están presentes
    const actionButtons = [
      { name: 'Get in Touch', href: '#contact' },
      { name: 'View Experience', href: '#experience' }
    ];
    
    actionButtons.forEach(button => {
      const element = screen.getByRole('link', { name: button.name });
      expect(element).toBeDefined();
      expect(element).toHaveAttribute('href', button.href);
    });
  });
}); 