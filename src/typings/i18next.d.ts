import 'i18next';

import common from '../translations/common.json';

import type { DefaultNS, Language, TranslatedResource } from '../services/i18next';

declare module 'i18next' {
  interface CustomResources {
    common: TranslatedResource<typeof common>;
  }

  interface CustomTypeOptions {
    defaultNS: DefaultNS;
    resources: CustomResources;
  }

  interface i18n {
    resolvedLanguage?: Language;
  }
}
