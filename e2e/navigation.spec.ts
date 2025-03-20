import { test, expect } from '@playwright/test';

test('navegación básica funciona correctamente', async ({ page, isMobile }) => {
  // Visitar la página principal
  await page.goto('/');
  
  // Verificar que se carga el título de la página
  await expect(page).toHaveTitle('Renzo Avila');
  
  // Verificar que el navbar está presente
  const navbar = page.getByRole('navigation');
  await expect(navbar).toBeVisible();
  
  // Si estamos en un dispositivo móvil, abrir el menú de navegación
  if (isMobile) {
    const menuButton = page.getByRole('button').filter({ hasText: 'Menu' });
    if (await menuButton.isVisible()) {
      await menuButton.click();
      // Esperar a que el menú se abra
      await page.waitForTimeout(500);
    }
  }
  
  // Verificar que las secciones principales están accesibles desde el navbar
  const aboutLink = navbar.getByRole('link').filter({ hasText: /about/i });
  await expect(aboutLink).toBeVisible();
  
  const contactLink = navbar.getByRole('link').filter({ hasText: /contact/i });
  await expect(contactLink).toBeVisible();
  
  // Navegar a la sección About haciendo clic en el enlace
  await aboutLink.click();
  
  // Verificar que la URL cambió para incluir el ancla de about
  await expect(page).toHaveURL(/#about/);
  
  // Dar tiempo para que la navegación se complete
  await page.waitForTimeout(500);
  
  // Verificar que el pie de página está presente
  const footer = page.locator('footer');
  await expect(footer).toBeVisible();
  
  // Verificar el contenido del pie de página
  const footerText = await footer.textContent() || '';
  expect(footerText.toLowerCase()).toContain('rights reserved');
  
  // Tomar una captura de pantalla
  await page.screenshot({ path: 'test-results/navigation-test.png' });
}); 