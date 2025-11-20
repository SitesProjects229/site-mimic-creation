import { translations, type LanguageCode } from './translations';

export const useTranslation = (lang: LanguageCode) => {
  const t = translations[lang] || translations.en;
  return { t, lang };
};

export const languages = [
  { countryCode: 'US', code: 'en', name: 'English' },
  { countryCode: 'DE', code: 'de', name: 'Deutsch' },
  { countryCode: 'SE', code: 'sv', name: 'Svenska' },
  { countryCode: 'AT', code: 'de', name: 'Deutsch' },
  { countryCode: 'NO', code: 'no', name: 'Norsk' },
  { countryCode: 'IT', code: 'it', name: 'Italiano' },
  { countryCode: 'IN', code: 'hi', name: 'हिंदी' },
  { countryCode: 'ES', code: 'es', name: 'Español' },
  { countryCode: 'KR', code: 'ko', name: '한국어' },
  { countryCode: 'JP', code: 'ja', name: '日本語' },
  { countryCode: 'FR', code: 'fr', name: 'Français' },
  { countryCode: 'CH', code: 'de', name: 'Schweizerdeutsch' },
] as const;
