import i18next from 'i18next';
import { mapValues } from 'lodash-es';
import { initReactI18next } from 'react-i18next';
import type { EmptyObject, ValueOf } from 'type-fest';

import common from '../translations/common.json';

const defaultNS = 'common' as const;
const supportedLngs = ['en', 'fr'] as const;

type Language = (typeof supportedLngs)[number];

type TranslationsDef = Record<string, Record<string, unknown>>;

type TranslatedResource<T = EmptyObject> = {
  [K in keyof T]: T[K] extends Record<string, unknown>
    ? T[K] extends Record<Language, unknown>
      ? ValueOf<T[K]>
      : TranslatedResource<T[K]>
    : T[K];
};

function transformTranslations<T extends Record<string, any>>(translations: T, locale: string) {
  const isPlainObject = Object.getPrototypeOf(translations) === Object.prototype;
  if (!isPlainObject) {
    throw new Error('Invalid format of translations: must be plain object');
  }
  const result: Record<string, unknown> = {};
  for (const key in translations) {
    const value = translations[key];
    if (Object.hasOwn(value, locale)) {
      result[key] = value[locale as keyof typeof value];
    } else {
      result[key] = transformTranslations(value, locale);
    }
  }
  return result;
}

function createResourcesForLanguage<T extends TranslationsDef>(translations: T, locale: Language) {
  return mapValues(translations, (value) => transformTranslations(value, locale));
}

function createResources<T extends TranslationsDef>(translations: T) {
  return {
    en: createResourcesForLanguage(translations, 'en'),
    fr: createResourcesForLanguage(translations, 'fr')
  } as TranslatedResource<T>;
}

const resources = createResources({ common });

await i18next.use(initReactI18next).init({
  defaultNS,
  fallbackLng: 'en' satisfies Language,
  interpolation: {
    escapeValue: false
  },
  lng: 'en' satisfies Language,
  resources,
  returnObjects: true,
  supportedLngs
});

export default i18next;
