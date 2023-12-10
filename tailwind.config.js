import formsPlugin from '@tailwindcss/forms';
import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-mode="dark"]'],
  plugins: [
    formsPlugin,
    plugin(({ addUtilities }) => {
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
