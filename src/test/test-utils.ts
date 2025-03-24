// Re-exportamos desde los archivos separados para mantener compatibilidad
export { render } from './test-render';
export { AllTheProviders } from './test-providers';

// Re-exportamos las funciones de testing-library que se utilizan comúnmente
export { screen, fireEvent, waitFor, act, within } from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event'; 