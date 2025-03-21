import { test, expect } from '@playwright/test';

test('verificar si hay funcionalidad de tema en la página', async ({ page }) => {
  // Visitar la página principal
  await page.goto('/');
  
  // Esperar a que la página se cargue completamente
  await page.waitForLoadState('networkidle');
  
  // Verificar si existe el botón de tema usando selectores más específicos
  const themeButton = page.getByRole('button').filter({ hasText: /theme|mode/i });
  
  // Esperar a que el botón sea visible
  await themeButton.waitFor({ state: 'visible', timeout: 10000 });
  
  // Verificar que el botón existe
  await expect(themeButton).toBeVisible();
  
  // Tomar nota del tema inicial
  const initialThemeIsDark = await page.evaluate(() => {
    return document.documentElement.classList.contains('dark');
  });
  
  // Verificar que la página tiene una clase que determina el tema
  expect(typeof initialThemeIsDark).toBe('boolean');
  
  // Tomar una captura de pantalla con el tema inicial
  await page.screenshot({ path: 'test-results/initial-theme.png' });
  
  // Hacer clic en el botón de tema
  await themeButton.click();
  
  // Esperar a que el tema cambie
  await page.waitForTimeout(500);
  
  // Verificar que el tema ha cambiado
  const newThemeIsDark = await page.evaluate(() => {
    return document.documentElement.classList.contains('dark');
  });
  
  expect(newThemeIsDark).not.toBe(initialThemeIsDark);
  
  // Comprobar si se guarda una preferencia de tema en localStorage
  const hasThemePreference = await page.evaluate(() => {
    return localStorage.getItem('theme') !== null || 
           localStorage.getItem('vite-ui-theme') !== null;
  });
  
  // Verificar que existe algún tipo de persistencia de tema
  expect(hasThemePreference).toBe(true);
  
  // Tomar una captura de pantalla con el nuevo tema
  await page.screenshot({ path: 'test-results/changed-theme.png' });
}); 