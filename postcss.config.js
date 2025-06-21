import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default {
  plugins: {
    '@tailwindcss/postcss': {
      config: join(__dirname, 'tailwind.config.js'),
    },
    autoprefixer: {},
  },
};
