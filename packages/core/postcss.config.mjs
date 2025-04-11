import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  plugins: {
    '@stylexjs/postcss-plugin': {
      include: ['./styles/**/*.{js,jsx,ts,tsx}'],
      babelConfig: {
        babelrc: false,
        parserOpts: {
          plugins: ['typescript', 'jsx'],
        },
        plugins: [
          [
            '@stylexjs/babel-plugin',
            {
              runtimeInjection: false,
              genConditionalClasses: true,
              treeshakeCompensation: true,
              aliases: {
                '@/*': [path.join(__dirname, '*')],
              },
              unstable_moduleResolution: {
                type: 'node',
                rootDir: __dirname,
              },
            },
          ],
        ],
      },
      useCSSLayers: true,
    },
    autoprefixer: {},
  },
};