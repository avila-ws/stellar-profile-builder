import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Pruebas de contraste', () => {
  test('El contraste en modo claro debe cumplir con WCAG AA', async ({ page }) => {
    // Visitar la página principal en modo claro
    await page.goto('/');
    
    // Esperar a que la página se cargue completamente
    await page.waitForLoadState('networkidle');
    
    // Forzar el tema claro
    await page.evaluate(() => {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    });
    
    // Recargar la página para aplicar el tema
    await page.reload();
    await page.waitForLoadState('networkidle');
    
    // Ejecutar pruebas específicas de contraste
    const contrastResults = await new AxeBuilder({ page })
      .withTags(['color-contrast'])
      .analyze();
    
    // Guardar una captura de pantalla para diagnóstico visual
    await page.screenshot({ path: 'test-results/contrast-light.png', fullPage: true });
    
    // Verificar problemas de contraste y reportarlos
    if (contrastResults.violations.length > 0) {
      console.log('Problemas de contraste en modo claro:');
      contrastResults.violations.forEach(violation => {
        console.log(`- ${violation.help}: ${violation.description}`);
        violation.nodes.forEach(node => {
          console.log(`  * ${node.html}`);
          console.log(`    ${node.failureSummary}`);
        });
      });
    }
    
    // Verificar que no hay problemas de contraste
    expect(contrastResults.violations.length).toBe(0);
  });
  
  test('El contraste en modo oscuro debe cumplir con WCAG AA', async ({ page }) => {
    // Visitar la página principal en modo oscuro
    await page.goto('/');
    
    // Esperar a que la página se cargue completamente
    await page.waitForLoadState('networkidle');
    
    // Forzar el tema oscuro
    await page.evaluate(() => {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    });
    
    // Recargar la página para aplicar el tema
    await page.reload();
    await page.waitForLoadState('networkidle');
    
    // Ejecutar pruebas específicas de contraste
    const contrastResults = await new AxeBuilder({ page })
      .withTags(['color-contrast'])
      .analyze();
    
    // Guardar una captura de pantalla para diagnóstico visual
    await page.screenshot({ path: 'test-results/contrast-dark.png', fullPage: true });
    
    // Verificar problemas de contraste y reportarlos
    if (contrastResults.violations.length > 0) {
      console.log('Problemas de contraste en modo oscuro:');
      contrastResults.violations.forEach(violation => {
        console.log(`- ${violation.help}: ${violation.description}`);
        violation.nodes.forEach(node => {
          console.log(`  * ${node.html}`);
          console.log(`    ${node.failureSummary}`);
        });
      });
    }
    
    // Verificar que no hay problemas de contraste
    expect(contrastResults.violations.length).toBe(0);
  });
}); 