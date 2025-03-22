import '@testing-library/jest-dom';

// Como ya no tenemos @types/jest, modificamos la definición para usar tipos compatibles
declare module 'vitest' {
  interface Assertion<T = any> {
    // No necesitamos extender de jest.Matchers ya que jest-dom registra sus matchers directamente
  }
} 