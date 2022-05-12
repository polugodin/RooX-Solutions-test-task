const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: { bundle: path.join(__dirname, 'src', 'index.tsx') },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[contenthash].[name].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.scss$/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: (resourcePath) => {
                  if (/pure.scss$/i.test(resourcePath)) {
                    return 'pure';
                  }

                  if (/global.scss$/i.test(resourcePath)) {
                    return 'global';
                  }

                  return 'local';
                },
                localIdentName: isProd ? '[hash:base64]' : '[path][name]__[local]',
                exportLocalsConvention: 'camelCaseOnly',
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ],
};
