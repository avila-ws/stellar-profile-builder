import { render, screen, act } from '@/test/test-utils';
import { describe, expect, it, vi } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import Index from '@/pages/Index';

vi.mock('@/components/HeroSection', () => ({
  default: () => <div>Hero Section Mock</div>
}));

vi.mock('@/components/AboutSection', () => ({
  default: () => <div>About Section Mock</div>
}));

vi.mock('@/components/ExperienceSection', () => ({
  default: () => <div>Experience Section Mock</div>
}));

vi.mock('@/components/ContactSection', () => ({
  default: () => <div>Contact Section Mock</div>
}));

vi.mock('@/components/Footer', () => ({
  default: () => <footer role="contentinfo">Footer Mock</footer>
}));

vi.mock('@/components/ChatBot', () => ({
  default: () => <div>ChatBot Mock</div>
}));

describe('Index', () => {
  const renderWithProviders = (component: React.ReactNode) => {
    return render(
      <HelmetProvider>
        {component}
      </HelmetProvider>
    );
  };

  it('renderiza correctamente', async () => {
    await act(async () => {
      renderWithProviders(<Index />);
    });
    
    // Verificar que el navbar está presente
    const navbar = screen.getByRole('banner');
    expect(navbar).toBeDefined();
    
    // Verificar que el main está presente
    const main = screen.getByRole('main');
    expect(main).toBeDefined();
    
    // Verificar que el título está presente
    const title = screen.getByText('Renzo Avila');
    expect(title).toBeDefined();
    
    // Verificar que el footer está presente
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeDefined();
  });
}); 