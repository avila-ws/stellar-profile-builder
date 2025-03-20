import { test, expect } from '@playwright/test';

test('navegación básica funciona correctamente', async ({ page, isMobile }) => {
  // Visitar la página principal
  await page.goto('/');
  
  // Verificar que el navbar está presente
  const navbar = page.getByRole('banner');
  await expect(navbar).toBeVisible();
  
  // Verificar que el título está presente
  const title = page.getByRole('heading', { name: 'Renzo Avila', level: 1 });
  await expect(title).toBeVisible();
  
  // Si es móvil, abrir el menú de navegación
  if (isMobile) {
    const menuButton = page.getByRole('button', { name: 'Toggle menu' });
    await expect(menuButton).toBeVisible();
    await menuButton.click();
  }
  
  // Verificar que los enlaces de navegación están presentes en el navbar
  const navLinks = [
    { text: 'Home', href: '#home' },
    { text: 'About', href: '#about' },
    { text: 'Experience', href: '#experience' },
    { text: 'Contact', href: '#contact' }
  ];
  
  const navigation = page.getByRole('navigation');
  
  for (const link of navLinks) {
    const element = navigation.getByRole('link', { name: link.text });
    await expect(element).toBeVisible();
    await expect(element).toHaveAttribute('href', link.href);
  }
  
  // Verificar que el botón de tema está presente
  const themeButton = page.getByRole('button', { name: /switch to/i });
  await expect(themeButton).toBeVisible();
}); 