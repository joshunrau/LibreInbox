import { config } from '@joshunrau/eslint-config';

// These are the defaults, override as needed depending on project
export default config({
  env: {
    browser: true,
    es2021: true
  },
  jsdoc: {
    enabled: false
  },
  react: {
    enabled: true
  }
});
