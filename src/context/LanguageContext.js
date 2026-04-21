'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext({ language: 'en', toggleLanguage: () => {} });

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Load language preference from localStorage
    const savedLanguage = typeof window !== 'undefined' ? localStorage.getItem('language') : 'en';
    setLanguage(savedLanguage || 'en');
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'hi' : 'en';
    setLanguage(newLanguage);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', newLanguage);
    }
  };

  return (
    <LanguageContext.Provider value={{ language: mounted ? language : 'en', toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    return { language: 'en', toggleLanguage: () => {} };
  }
  return context;
}
