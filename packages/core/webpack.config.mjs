import path from 'path';
import { fileURLToPath } from 'url';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

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
    outputModule: true,
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
              '@babel/preset-typescript'
            ],
            plugins: [
              ['@stylexjs/babel-plugin', {
                unstable_moduleResolution: {
                  type: 'node',
                  rootDir: __dirname,
                },
                genConditionalClasses: true,
                treeshakeCompensation: true,
              }]
            ]
          },
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'stylexStyles.css',
    }),
  ],
};
