import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from '@/context/ThemeProvider';
import { ReactElement, Suspense } from 'react';
import LoadingSpinner from '@/components/ui/loading-spinner';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <Suspense fallback={<LoadingSpinner />}>
        {children}
      </Suspense>
    </ThemeProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render }; 