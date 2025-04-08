import path from 'path';
import { fileURLToPath } from 'url';

// ES 모듈 환경에서 __dirname 대신 필요
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: 'production',
  entry: "./styles/stylexStyles.ts",
  output: {
    path: path.resolve(__dirname, 'styles'),
    filename: 'stylexStyles.js',
    library: {
      type: 'module',
      export: 'styles'
    },
  },
  experiments: {
    outputModule: true, // ESM 활성화
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-typescript',
            ],
            plugins: [
              ['@stylexjs/babel-plugin', {
                stylexSheetsOutputDir: './styles/__stylex__',
              }]
            ]
          },
        },
      },
    ],
  },
};
