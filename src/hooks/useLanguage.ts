import { useTranslation } from 'react-i18next';
import { useState, useEffect, useCallback } from 'react';

export type Language = 'en' | 'es' | 'ca';
export const SUPPORTED_LANGUAGES: Language[] = ['en', 'es', 'ca'];
type LanguageToggleResult = {
  currentLanguage: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: (key: string, options?: Record<string, unknown>) => string;
};

/**
 * Custom hook to manage language switching
 * @param namespace - Optional translation namespace (defaults to 'common')
 * @returns Object with current language, toggle and setter functions, and translation function
 */
export const useLanguage = (namespace = 'common'): LanguageToggleResult => {
  const { i18n, t } = useTranslation(namespace);
  const initialLang = (i18n.language?.substring(0, 2) as Language) || 'en';
  const [currentLanguage, setCurrentLanguage] = useState<Language>(
    SUPPORTED_LANGUAGES.includes(initialLang) ? initialLang : 'en'
  );

  // Update current language state when i18n language changes
  useEffect(() => {
    const language = i18n.language?.substring(0, 2) as Language;
    if (language && SUPPORTED_LANGUAGES.includes(language)) {
      setCurrentLanguage(language);
    }
  }, [i18n.language]);

  // Toggle between languages
  const toggleLanguage = useCallback(() => {
    const currentIndex = SUPPORTED_LANGUAGES.indexOf(currentLanguage);
    const nextLanguage = SUPPORTED_LANGUAGES[(currentIndex + 1) % SUPPORTED_LANGUAGES.length];
    i18n.changeLanguage(nextLanguage);
    localStorage.setItem('i18nextLng', nextLanguage);
  }, [currentLanguage, i18n]);

  // Set specific language
  const setLanguage = useCallback(
    (lang: Language) => {
      if (SUPPORTED_LANGUAGES.includes(lang)) {
        i18n.changeLanguage(lang);
        localStorage.setItem('i18nextLng', lang);
      }
    },
    [i18n]
  );

  return { currentLanguage, toggleLanguage, setLanguage, t };
};

export default useLanguage; 