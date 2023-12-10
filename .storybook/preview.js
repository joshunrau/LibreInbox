import { withThemeByDataAttribute } from '@storybook/addon-themes';

import '../src/styles.css';

/** @type {import('@storybook/react').Preview} */
export default {
  decorators: [
    withThemeByDataAttribute({
      attributeName: 'data-mode',
      defaultTheme: 'light',
      themes: {
        dark: 'dark',
        light: 'light'
      }
    })
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    layout: 'fullscreen'
  }
};
