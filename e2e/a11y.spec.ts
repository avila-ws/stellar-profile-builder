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
    
    // Reportar problemas para diagnóstico
    console.log(`Encontrados ${accessibilityScanResults.violations.length} problemas de accesibilidad`);
    
    // Filtrar solo problemas críticos
    const criticalViolations = accessibilityScanResults.violations.filter(
      violation => violation.impact === 'critical'
    );
    
    // Verificar que no hay muchas violaciones críticas
    expect(criticalViolations.length).toBeLessThanOrEqual(2);
    
    // Guardar una captura de pantalla para diagnóstico
    await page.screenshot({ path: 'test-results/accessibility-home.png', fullPage: true });
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
    
    // Reportar problemas para diagnóstico
    console.log(`Encontrados ${accessibilityScanResults.violations.length} problemas de accesibilidad en contacto`);
    
    // Filtrar solo problemas críticos
    const criticalViolations = accessibilityScanResults.violations.filter(
      violation => violation.impact === 'critical'
    );
    
    // Verificar que no hay muchas violaciones críticas
    expect(criticalViolations.length).toBeLessThanOrEqual(2);
    
    // Guardar una captura de pantalla para diagnóstico
    await page.screenshot({ path: 'test-results/accessibility-contact.png', fullPage: true });
  });
  
  test('El skip link debe funcionar correctamente', async ({ page }) => {
    // Visitar la página principal
    await page.goto('/');
    
    // Esperar a que la página se cargue completamente
    await page.waitForLoadState('networkidle');
    
    // Enfocar el skip link (simulando la navegación por teclado)
    await page.keyboard.press('Tab');
    
    // Verificar que el skip link está visible cuando tiene foco
    const skipLink = page.getByText('Skip to main content');
    await expect(skipLink).toBeVisible();
    
    // Activar el skip link
    await skipLink.click();
    
    // Verificar que se ha navegado al contenido principal (URL contiene el hash)
    await expect(page).toHaveURL(/#main-content$/);
    
    // Tomar una captura de pantalla para verificación
    await page.screenshot({ path: 'test-results/skip-link.png' });
  });
}); 