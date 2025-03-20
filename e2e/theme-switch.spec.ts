import { test, expect } from '@playwright/test';

test('el interruptor de tema funciona correctamente', async ({ page }) => {
  // Visitar la página principal
  await page.goto('/');
  
  // Verificar que la página se carga con el tema predeterminado
  // (Verificamos si el elemento html tiene la clase 'dark')
  const isDarkModeInitially = await page.evaluate(() => {
    return document.documentElement.classList.contains('dark');
  });
  
  // Encontrar y hacer clic en el botón de cambio de tema usando un selector más específico
  // El botón puede tener un aria-label diferente o no tener nombre, usamos un selector más confiable
  const themeButton = page.locator('button[aria-label="Toggle theme"], button[aria-label="Cambiar tema"], button.theme-toggle');
  
  // Verificar que el botón existe
  await expect(themeButton).toBeVisible();
  
  // Hacer clic en el botón
  await themeButton.click();
  
  // Esperar un momento para que el cambio de tema se aplique
  await page.waitForTimeout(500);
  
  // Verificar que el tema ha cambiado después del clic
  const isDarkModeAfterClick = await page.evaluate(() => {
    return document.documentElement.classList.contains('dark');
  });
  
  // El modo oscuro debe haber cambiado después del clic
  expect(isDarkModeAfterClick).not.toEqual(isDarkModeInitially);
  
  // Tomar una captura de pantalla después del cambio de tema
  await page.screenshot({ path: 'test-results/theme-switch.png' });
  
  // Hacer clic nuevamente para volver al tema original
  await themeButton.click();
  
  // Esperar un momento para que el cambio de tema se aplique
  await page.waitForTimeout(500);
  
  // Verificar que volvimos al tema original
  const isDarkModeAfterSecondClick = await page.evaluate(() => {
    return document.documentElement.classList.contains('dark');
  });
  
  // El modo debe haber vuelto al estado inicial
  expect(isDarkModeAfterSecondClick).toEqual(isDarkModeInitially);
  
  // Tomar una captura de pantalla después de volver al tema original
  await page.screenshot({ path: 'test-results/theme-original.png' });
});

test('el tema persistente funciona correctamente entre recargas', async ({ page }) => {
  // Visitar la página principal
  await page.goto('/');
  
  // Obtener el estado inicial del tema
  const initialDarkMode = await page.evaluate(() => {
    return document.documentElement.classList.contains('dark');
  });
  
  // Encontrar y hacer clic en el botón de cambio de tema usando un selector más específico
  const themeButton = page.locator('button[aria-label="Toggle theme"], button[aria-label="Cambiar tema"], button.theme-toggle');
  
  // Verificar que el botón existe
  await expect(themeButton).toBeVisible();
  
  // Cambiar el tema
  await themeButton.click();
  
  // Esperar un momento para que el cambio de tema se aplique
  await page.waitForTimeout(500);
  
  // Verificar que el tema cambió
  const darkModeAfterClick = await page.evaluate(() => {
    return document.documentElement.classList.contains('dark');
  });
  expect(darkModeAfterClick).not.toEqual(initialDarkMode);
  
  // Recargar la página
  await page.reload();
  
  // Esperar a que la página se cargue completamente
  await page.waitForLoadState('networkidle');
  
  // Verificar que el tema se mantiene después de recargar
  const darkModeAfterReload = await page.evaluate(() => {
    return document.documentElement.classList.contains('dark');
  });
  expect(darkModeAfterReload).toEqual(darkModeAfterClick);
  
  // Tomar una captura de pantalla después de la recarga
  await page.screenshot({ path: 'test-results/theme-persistence.png' });
}); 