// Copyright (C) 2017 Sony Electronics Inc.
// All rights, including trade secret rights, reserved.

const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const gutil = require('gulp-util');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config = require('./gulp/config');

const {
  webpack: {
    root, src, dist, port, host, isWatching, shouldMinify, fileName
  }
} = config;

const getEntry = () => {
  const entry = [`${src}/${fileName}`];

  if (isWatching) {
    entry.unshift(`webpack-dev-server/client?http://${host}:${port}/`);
    entry.unshift('webpack/hot/dev-server');
  }

  return entry;
};

const getPlugins = () => {
  const versionText = require('./package.json').version;
  const versionLong = 'whatever';

  const plugins = [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      vegas: '../vegas'
    }),
    new ProgressBarPlugin({
      format: '\n',
      clear: true,
      summary: false,
      customSummary: () => gutil.log('Webpack compiling complete')
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: `${src}/index.html`,
      alwaysWriteToDisk: true,
      version: versionLong,
      git: `${versionText}`,
      // We don't want to show the hash on the UI on production
      versionShort: process.env.NODE_ENV === 'production' ? versionText : versionLong
    }),
    new HtmlWebpackHarddiskPlugin(),
    new webpack.NamedModulesPlugin(),
    new CopyWebpackPlugin([
      { from: `${src}/images`, to: 'images' }
    ]),
    new WriteFilePlugin({
      log: false,
      test: /^((?!hot-update).)*$/
    }),
    new webpack.DefinePlugin({
      'global.GENTLY': false,
      'process.env': Object.keys(process.env).reduce((o, k) => {
        o[k] = JSON.stringify(process.env[k]);
        return o;
      }, {})
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer({ browsers: ['last 2 version'] })]
      }
    }),
    new webpack.ExternalsPlugin('commonjs', [
      'electron'
    ])

  ];

  if (isWatching) {
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  if (shouldMinify) {
    plugins.push(new UglifyJSPlugin());
  }

  return plugins;
};

const getStyleLoader = (loader) => {
  const minimize = shouldMinify ? 'minimize' : '';
  const ending = `css-loader?${minimize}!postcss-loader?sourceMap=true${loader}`;
  return `style-loader!${ending}`;
};

const stats = {
  colors: true,
  hash: false,
  version: false,
  timings: false,
  assets: false,
  chunks: false,
  modules: false,
  reasons: false,
  children: false,
  source: false,
  errors: true,
  errorDetails: true,
  warnings: true,
  publicPath: false
};

module.exports = {
  devtool: shouldMinify ? false : 'cheap-module-eval-source-map',
  entry: getEntry(),
  output: {
    path: `${root}/dist`,
    filename: '[name].js',
    publicPath: isWatching ? `http://${host}:${port}/` : ''
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [{
          loader: 'file-loader',
          options: { outputPath: 'images/' }
        }]
      },
      {
        loader: 'url-loader',
        test: /\.(ttf|eot|woff|woff2)(\?.*)?$/,
        options: { limit: 100000 }
      },
      {
        test: /\.css$/,
        loader: getStyleLoader()
      },
      {
        test: /\.styl$/,
        loader: getStyleLoader('!stylus-loader')
      },
      {
        test: /\.js(x?)$/,
        loader: 'babel-loader?cacheDirectory',
        exclude: /node_modules/
      }
    ]
  },
  resolve: { extensions: ['.ts', '.js', '.json', '.jsx'] },
  plugins: getPlugins(),
  performance: { hints: false },
  stats,
  devServer: {
    noInfo: true,
    hot: true,
    filename: '[name].js',
    stats,
    contentBase: dist,
    publicPath: isWatching ? `http://${host}:${port}/` : '/',
    headers: { 'Access-Control-Allow-Origin': '*' },
    historyApiFallback: true
  },
  node: { fs: 'empty' }
};
