import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from '@/context/ThemeProvider';
import { ReactElement, Suspense } from 'react';
import LoadingSpinner from '@/components/ui/loading-spinner';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import commonEN from '@/locales/en/common.json';
import profileEN from '@/locales/en/profile.json';

// Crear una instancia separada de i18n para tests
const i18nForTests = i18next.createInstance();

// Configurar i18n para tests con solo el idioma inglés
i18nForTests
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    resources: {
      en: {
        common: commonEN,
        profile: profileEN
      }
    },
    ns: ['common', 'profile'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false // En tests queremos desactivar suspense para i18n
    },
    debug: false
  });

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <I18nextProvider i18n={i18nForTests}>
      <ThemeProvider>
        <Suspense fallback={<LoadingSpinner />}>
          {children}
        </Suspense>
      </ThemeProvider>
    </I18nextProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render }; 