import en from '../i18n/en.json';
import de from '../i18n/de.json';
import sv from '../i18n/sv.json';
import no from '../i18n/no.json';
import ja from '../i18n/ja.json';
import ko from '../i18n/ko.json';
import it from '../i18n/it.json';
import fr from '../i18n/fr.json';
import es from '../i18n/es.json';
import fi from '../i18n/fi.json';

export const translations = {
  en,
  de,
  sv,
  no,
  ja,
  ko,
  it,
  fr,
  es,
  fi
} as const;

export type LanguageCode = keyof typeof translations;
export type Translation = typeof en;
