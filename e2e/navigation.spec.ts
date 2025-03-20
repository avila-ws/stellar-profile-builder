import { test, expect } from '@playwright/test';

test('navegación básica funciona correctamente', async ({ page }) => {
  // Visitar la página principal
  await page.goto('/');
  
  // Verificar que los componentes principales están presentes
  await expect(page.getByRole('banner')).toBeVisible(); // Navbar
  await expect(page.getByRole('main')).toBeVisible(); // Contenido principal
  await expect(page.getByRole('contentinfo')).toBeVisible(); // Footer
  
  // Verificar que las secciones principales están presentes
  await expect(page.getByRole('region', { name: /hero/i })).toBeVisible();
  await expect(page.getByRole('region', { name: /about/i })).toBeVisible();
  await expect(page.getByRole('region', { name: /experience/i })).toBeVisible();
  await expect(page.getByRole('region', { name: /contact/i })).toBeVisible();
}); 