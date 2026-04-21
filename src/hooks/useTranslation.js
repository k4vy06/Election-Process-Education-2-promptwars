import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';

export function useTranslation() {
  const { language } = useLanguage();
  
  return {
    t: (key) => {
      const keys = key.split('.');
      let value = translations[language];
      
      for (const k of keys) {
        value = value[k];
        if (!value) return key;
      }
      
      return value;
    },
    language,
  };
}
