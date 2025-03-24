import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';
import { AllTheProviders } from './test-providers';

/**
 * Función de renderizado personalizada que envuelve los componentes en los providers necesarios para testing
 */
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export { customRender as render }; 