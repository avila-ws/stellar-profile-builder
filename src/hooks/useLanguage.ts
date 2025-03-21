import { useTranslation } from 'react-i18next';
import { useState, useEffect, useCallback } from 'react';

type Language = 'en' | 'es';
type LanguageToggleResult = {
  currentLanguage: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: (key: string, options?: any) => string;
};

/**
 * Custom hook to manage language switching
 * @param namespace - Optional translation namespace (defaults to 'common')
 * @returns Object with current language, toggle and setter functions, and translation function
 */
export const useLanguage = (namespace = 'common'): LanguageToggleResult => {
  const { i18n, t } = useTranslation(namespace);
  const [currentLanguage, setCurrentLanguage] = useState<Language>(
    (i18n.language?.substring(0, 2) as Language) || 'en'
  );

  // Update current language state when i18n language changes
  useEffect(() => {
    const language = i18n.language?.substring(0, 2);
    if (language === 'en' || language === 'es') {
      setCurrentLanguage(language);
    }
  }, [i18n.language]);

  // Toggle between languages
  const toggleLanguage = useCallback(() => {
    const newLanguage: Language = currentLanguage === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLanguage);
    localStorage.setItem('i18nextLng', newLanguage);
  }, [currentLanguage, i18n]);

  // Set specific language
  const setLanguage = useCallback(
    (lang: Language) => {
      i18n.changeLanguage(lang);
      localStorage.setItem('i18nextLng', lang);
    },
    [i18n]
  );

  return { currentLanguage, toggleLanguage, setLanguage, t };
};

export default useLanguage; 