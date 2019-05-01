'use strict';

const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const NodemonPlugin = require('nodemon-webpack-plugin');

const packageJson = require('./package.json');

module.exports = (env = {}) => {
  const config = {
    entry: ['./src/main.ts'],
    mode: env.development ? 'development' : 'production',
    target: 'node',
    devtool: env.development ? 'cheap-eval-source-map' : false,
    node: {
      __dirname: false, // Fix for native node __dirname
      __filename: false, // Fix for native node __filename
    },
    output: {
      filename: `${packageJson.name}.js`,
    },
    resolve: {
      extensions: ['.ts', '.js'],
      modules: ['node_modules', 'src'],
    },
    stats: {
      modules: false, // We don't need to see this
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new webpack.DefinePlugin({
        VERSION: JSON.stringify(packageJson.version),
        DEVELOP: env.mode === 'development',
      }),
      // Use module replacement to use different configs for dev and prod
      new webpack.NormalModuleReplacementPlugin(
        /[\\/]src[\\/]config[\\/]config.ts$/, // [\\/] works on all operating systems.
        env.mode === 'development' ? 'config.dev.ts' : 'config.ts'
      ),
    ],
  };

  if (env.nodemon) {
    config.watch = true;
    config.plugins.push(new NodemonPlugin());
  }

  if (env.analyse) {
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
    config.plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'static', // Generates file instead of starting a web server
      })
    );
  }

  return config;
};
