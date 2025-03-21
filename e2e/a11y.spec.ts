import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Pruebas de accesibilidad', () => {
  test('La página principal debe cumplir con las normas de accesibilidad', async ({ page }) => {
    // Visitar la página principal
    await page.goto('/');
    
    // Esperar a que la página se cargue completamente
    await page.waitForLoadState('networkidle');
    
    // Ejecutar pruebas de accesibilidad con axe
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa']) // Usar los estándares WCAG 2.0 nivel A y AA
      .analyze();
    
    // Verificar que no hay violaciones (o son mínimas)
    expect(accessibilityScanResults.violations).toEqual([]);
  });
  
  test('La sección de contacto debe cumplir con las normas de accesibilidad', async ({ page }) => {
    // Visitar la sección de contacto directamente
    await page.goto('/#contact');
    
    // Esperar a que la página se cargue completamente
    await page.waitForLoadState('networkidle');
    
    // Ejecutar pruebas de accesibilidad con axe
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze();
    
    // Verificar que no hay violaciones (o son mínimas)
    expect(accessibilityScanResults.violations).toEqual([]);
  });
  
  test('El skip link debe funcionar correctamente', async ({ page }) => {
    // Visitar la página principal
    await page.goto('/');
    
    // Enfocar el skip link (simulando la navegación por teclado)
    await page.keyboard.press('Tab');
    
    // Verificar que el skip link está visible cuando tiene foco
    const skipLink = page.getByText('Skip to main content');
    await expect(skipLink).toBeVisible();
    
    // Activar el skip link
    await page.keyboard.press('Enter');
    
    // Verificar que el foco se ha movido al contenido principal
    const activeElement = await page.evaluate(() => document.activeElement?.id);
    expect(activeElement).toBe('main-content');
  });
}); 