import { useState, useEffect, ReactNode } from 'react';
import { I18nContext, translations, type Language, type I18nContextType } from '@/lib/i18n';

interface I18nProviderProps {
  children: ReactNode;
}

export default function I18nProvider({ children }: I18nProviderProps) {
  const [language, setLanguage] = useState<Language>('en');

  // Load language preference from localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('datealchemy-language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'fr')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language preference to localStorage
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('datealchemy-language', lang);
  };

  // Translation function
  const t = (key: string): string => {
    const translation = translations[language][key as keyof typeof translations.en];
    if (translation) {
      return translation;
    }
    
    // Fallback to English if translation not found
    const englishTranslation = translations.en[key as keyof typeof translations.en];
    if (englishTranslation) {
      return englishTranslation;
    }
    
    // Return the key if no translation found
    console.warn(`Translation missing for key: ${key}`);
    return key;
  };

  const contextValue: I18nContextType = {
    language,
    setLanguage: handleSetLanguage,
    t,
  };

  return (
    <I18nContext.Provider value={contextValue}>
      {children}
    </I18nContext.Provider>
  );
}