import { render, screen } from '@/test/test-utils';
import { describe, expect, it } from 'vitest';
import AboutSection from '@/components/AboutSection';

describe('AboutSection', () => {
  it('renderiza correctamente', () => {
    render(<AboutSection />);
    
    // Verificar que el título está presente
    const title = screen.getByRole('heading', { name: 'About Me' });
    expect(title).toBeDefined();
    
    // Verificar que el contenido está presente
    const content = screen.getByText(/bridging the gap between development, operations, security/i);
    expect(content).toBeDefined();
    
    // Verificar que el texto sobre la experiencia está presente
    const experienceText = screen.getByText(/My work spans across various industries, particularly in fintech and blockchain/i);
    expect(experienceText).toBeDefined();
  });
}); 