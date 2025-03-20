import { test, expect } from '@playwright/test';

test('componente BookingCalendar se carga correctamente', async ({ page }) => {
  // Visitar la página donde se encuentra el calendario
  await page.goto('/#contact');
  
  // Esperar a que se cargue la sección de contacto
  await page.getByRole('heading', { name: 'Get in Touch' }).waitFor();
  
  // Verificar que la sección de contacto está visible
  const contactHeading = page.getByRole('heading', { name: 'Get in Touch' });
  await expect(contactHeading).toBeVisible();
  
  // Verificar que el iframe de Google Calendar se carga correctamente
  // Esperamos más tiempo porque puede tardar en cargar
  await page.waitForTimeout(3000);
  
  // Verificar que el iframe está visible usando un selector más específico
  const calendarFrame = page.locator('iframe[src*="calendar.google.com"]');
  await expect(calendarFrame).toBeVisible();
  
  // Tomar una captura de pantalla para verificación visual
  await page.screenshot({ path: 'test-results/booking-calendar.png' });
});

test('navegación a la sección de contacto funciona correctamente', async ({ page }) => {
  // Visitar la página principal
  await page.goto('/');
  
  // Hacer clic en el enlace de contacto en el navbar específicamente
  await page.getByRole('navigation').getByRole('link', { name: 'Contact' }).click();
  
  // Verificar que se ha navegado a la sección de contacto
  await expect(page).toHaveURL(/#contact$/);
  
  // Verificar que la sección de contacto está visible
  const contactHeading = page.getByRole('heading', { name: 'Get in Touch' });
  await expect(contactHeading).toBeVisible();
  
  // Tomar una captura de pantalla para verificación visual
  await page.screenshot({ path: 'test-results/contact-navigation.png' });
});

test('el formulario de contacto funciona correctamente', async ({ page }) => {
  // Visitar la sección de contacto
  await page.goto('/#contact');
  
  // Esperar a que se cargue la sección de contacto
  await page.getByRole('heading', { name: 'Get in Touch' }).waitFor();
  
  // Seleccionar la pestaña de mensaje si no está ya seleccionada
  const messageTab = page.getByRole('tab', { name: 'Send Message' });
  await messageTab.click();
  
  // Esperar a que el panel de la pestaña esté visible
  await page.getByRole('tabpanel').waitFor();
  
  // Rellenar el formulario de contacto usando selectores más específicos
  await page.locator('#name').fill('Test User');
  await page.locator('#email').fill('test@example.com');
  await page.locator('#message').fill('This is a test message from Playwright E2E testing');
  
  // Verificar que los campos contienen los valores correctos
  await expect(page.locator('#name')).toHaveValue('Test User');
  await expect(page.locator('#email')).toHaveValue('test@example.com');
  await expect(page.locator('#message')).toHaveValue('This is a test message from Playwright E2E testing');
  
  // Tomar una captura de pantalla para verificación visual
  await page.screenshot({ path: 'test-results/contact-form.png' });
}); 