import path from 'path';
import url from 'url';

import { createConfig } from '@joshunrau/eslint-config';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default createConfig({
  base: {
    env: 'browser'
  },
  jsx: true,
  ts: {
    project: path.resolve(__dirname, 'tsconfig.json')
  }
});
