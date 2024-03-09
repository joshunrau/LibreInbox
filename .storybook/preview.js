import i18n from '../src/services/i18next';

import '../src/styles.css';

/** @type {import('@storybook/react').Preview} */
export default {
  globals: {
    locale: 'en',
    locales: {
      en: 'English',
      fr: 'Français'
    }
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    i18n
  }
};
