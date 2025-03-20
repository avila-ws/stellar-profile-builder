import { render, screen } from '@/test/test-utils';
import { describe, expect, it } from 'vitest';
import ContactSection from '@/components/ContactSection';

describe('ContactSection', () => {
  it('renderiza correctamente', () => {
    render(<ContactSection />);
    
    // Verificar que el título está presente
    const title = screen.getByRole('heading', { name: 'Get in Touch' });
    expect(title).toBeDefined();
    
    // Verificar que los elementos de contacto están presentes
    const contactInfo = screen.getByText('Contact Information');
    expect(contactInfo).toBeDefined();
    
    const connectWithMe = screen.getByText('Connect with me');
    expect(connectWithMe).toBeDefined();
    
    const sendMessage = screen.getByText('Send me a message');
    expect(sendMessage).toBeDefined();
  });
}); 