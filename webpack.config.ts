import path from 'path'
import { ProvidePlugin, Configuration as WebpackConfiguration } from 'webpack'
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server'
const { ModuleFederationPlugin } = require('webpack').container
const { dependencies } = require('./package.json')

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration
}

import ESLintPlugin from 'eslint-webpack-plugin'

const config: Configuration = {
  output: {
    publicPath: 'auto',
  },
  entry: ['./src/index.tsx', './src/assets/js/fas.js'],
  module: {
    rules: [
      {
        test: /\.svg$/,
        include: [path.resolve(__dirname, './node_modules')],
        use: {
          loader: 'svg-inline-loader',
          options: {
            name: '[name]-[hash].[ext]',
          },
        },
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader',
      },
      {
        test: /\.(jpg|jpeg|png|svg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'static',
          },
        },
      },
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [process.env.NODE_ENV == 'development' && require.resolve('react-refresh/babel')].filter(Boolean),
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    alias: {
      '@app': path.resolve(__dirname, 'src/app/'),
      '@components': path.resolve(__dirname, 'src/app/components/'),
      '@pages': path.resolve(__dirname, 'src/app/pages/'),
    },
    fallback: {
      os: false,
    },
  },
  plugins: [
    new ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),
    new ModuleFederationPlugin({
      name: 'MicroMap',
      filename: 'remoteEntry.js',
      exposes: {
        './MapBasic': './src/app/components/Mapbox/MapBasic',
      },
      shared: {
        react: { eager: true, singleton: true, requiredVersion: dependencies['react'] },
        'react-dom': { eager: true, singleton: true, requiredVersion: dependencies['react-dom'] },
      },
    }),
  ],
}

export default config
