const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const distFolder = 'dist';

module.exports = {
  entry: { main: './src/index.tsx' },
  output: {
    path: path.resolve(__dirname, distFolder),
    filename: '[name].[hash].js',
    chunkFilename: '[name].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.(scss|sass|css)$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: "postcss-loader",
            options: {
              ident: 'postcss',
              plugins: [
                require('autoprefixer')({
                  'browsers': ['> 1%', 'last 2 versions']
                }),
              ]
            }
          },
        ],
      },
      {
        test: /\.(png|jpg|woff|woff2|eot|ttf|svg|gif)$/,
        loader: 'url-loader',
      },
    ],
  },
  resolve: {
    modules: ['node_modules'],
    alias: {
      'io-about': path.resolve(__dirname, 'src/io-about'),
      'io-front-page': path.resolve(__dirname, 'src/io-front-page'),
      'io-portfolio': path.resolve(__dirname, 'src/io-portfolio'),
      'io-skills': path.resolve(__dirname, 'src/io-skills'),
      'ui-kit': path.resolve(__dirname, 'src/ui-kit'),
      types: path.resolve(__dirname, 'src/types.d.ts'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: 'body',
      hash: true,
      template: './public/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
    open: false,
    historyApiFallback: true,
  },
  devtool:
    process.env.NODE_ENV === 'development' ? 'eval-source-map' : 'source-map',
};
