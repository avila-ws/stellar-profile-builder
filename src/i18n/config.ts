import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import resources
import commonEN from '../../public/locales/en/common.json';
import commonES from '../../public/locales/es/common.json';
import profileEN from '../../public/locales/en/profile.json';
import profileES from '../../public/locales/es/profile.json';

// Resources containing all namespaces for each language
const resources = {
  en: {
    common: commonEN,
    profile: profileEN
  },
  es: {
    common: commonES,
    profile: profileES
  }
};

// Default language detection
const getDefaultLanguage = (): string => {
  if (typeof window !== 'undefined') {
    const savedLanguage = localStorage.getItem('i18nextLng');
    if (savedLanguage) return savedLanguage;
    
    // Use browser language if available
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'es' || browserLang === 'en') return browserLang;
  }
  
  return 'en'; // Default fallback language
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getDefaultLanguage(),
    fallbackLng: 'en',
    
    // Namespaces
    ns: ['common', 'profile'],
    defaultNS: 'common',
    
    // Debug for development
    debug: process.env.NODE_ENV === 'development',
    
    // Cache
    cache: {
      enabled: true
    },
    
    // Interpolation
    interpolation: {
      escapeValue: false // React already escapes values
    },
    
    // React config
    react: {
      useSuspense: true
    }
  });

export default i18n; 