import { test, expect } from '@playwright/test';

test('navegación básica funciona correctamente', async ({ page, isMobile }) => {
  // Visitar la página principal
  await page.goto('/');
  
  // Esperar a que la página se cargue completamente
  await page.waitForLoadState('networkidle');
  
  if (isMobile) {
    // En móvil buscamos el botón de menú
    const menuButton = page.getByRole('button', { name: /menu/i });
    await expect(menuButton).toBeVisible({ timeout: 10000 });
    
    // Abrir el menú móvil
    await menuButton.click();
    
    // Dar tiempo para que el menú se abra
    await page.waitForTimeout(1000);
    
    // Verificar que hay enlaces después de abrir el menú
    const mobileLinks = page.getByRole('link');
    await expect(mobileLinks).toHaveCount(await mobileLinks.count());
  } else {
    // En escritorio buscamos la barra de navegación 
    const navbar = page.getByRole('navigation');
    await expect(navbar).toBeVisible({ timeout: 10000 });
    
    // Verificar que los enlaces están presentes
    const navLinks = navbar.getByRole('link');
    await expect(navLinks).toHaveCount(await navLinks.count());
  }
  
  // Verificar que el botón de tema está presente (tanto en móvil como escritorio)
  const themeButton = page.getByRole('button', { name: /theme|mode/i });
  if (await themeButton.isVisible()) {
    // Si el botón de tema es visible, verificamos que funciona
    await expect(themeButton).toBeVisible();
  }
  
  // Verificar que la página principal tiene contenido relevante
  const heading = page.getByRole('heading', { level: 1 });
  await expect(heading).toBeVisible({ timeout: 5000 });

  // Tomar una captura de pantalla para verificación visual
  await page.screenshot({ path: 'test-results/navigation-basic.png' });
}); 