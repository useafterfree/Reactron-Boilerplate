// Copyright (C) 2017 Sony Electronics Inc.
// All rights, including trade secret rights, reserved.

// const run = require('gulp-run');
const webpack = require('webpack');
const gulp = require('gulp');
const gutil = require('gulp-util');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../../webpack.config.js');
const config = require('../config');

gulp.task('webpack', (done) => {
  if (config.webpack.isWatching) {
    new WebpackDevServer(webpack(webpackConfig), webpackConfig.devServer)
      .listen(config.webpack.port, config.webpack.host, (error) => {
        if (error) {
          throw new gutil.PluginError('webpack-dev-server', error);
        }
      });
  } else {
    webpack(webpackConfig, (error) => {
      if (error) {
        throw new gutil.PluginError('webpack', error);
      }

      done();
    });
  }
});
