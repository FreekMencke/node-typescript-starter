'use strict';

const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const packageJson = require('./package.json');

module.exports = env => {
  const config = {
    entry: ['./src/main.ts'],
    mode: env.mode,
    target: 'node',
    devtool: false,
    node: {
      __dirname: false,
      __filename: false,
    },
    output: {
      filename: packageJson.name + '.js',
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      extensions: ['.ts', '.js'],
      modules: ['node_modules', 'src']
    },
    stats: {
      modules: false,
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader'
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(['./dist']),
      new webpack.DefinePlugin({
        VERSION: JSON.stringify(packageJson.version),
        DEVELOP: env.mode === 'development'
      }),
    ],
  };

  if (env.analyse) {
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
    config.plugins.push(new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    }));
  }

  return config;
};
