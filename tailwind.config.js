import formsPlugin from '@tailwindcss/forms';
import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-mode="dark"]'],
  plugins: [
    formsPlugin,
    plugin(({ addBase, addUtilities }) => {
      addBase({
        body: {
          '@apply text-gray-900 dark:text-gray-100': {}
        }
      });
      addUtilities({
        '.text-muted': {
          '@apply text-gray-700 dark:text-gray-300': {}
        }
      });
    })
  ],
  theme: {
    extend: {}
  }
};
