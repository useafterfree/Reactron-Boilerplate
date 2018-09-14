// Copyright (C) 2017 Sony Electronics Inc.
// All rights, including trade secret rights, reserved.

const requireDir = require('require-dir');
const gutil = require('gulp-util');
const { argv } = require('yargs');

// Set the NODE_ENV, fallback is production
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'production';
}

// Set the watching/building for webpack
if (argv.w) {
  process.env.IS_WATCHING = 'true';
} else if (!process.env.IS_WATCHING) {
  process.env.IS_WATCHING = 'false';
}

// Require config after environment variables set
const { webpack } = require('./gulp/config');

gutil.log(
  'Starting gulp...\n\n'
  + `Webpack: ${webpack.isWatching ? 'watching' : 'building'}\n`
  + `NODE_ENV=${process.env.NODE_ENV}\n`
  + `LBE_ENV=${process.env.LBE_ENV}\n`
);

requireDir('./gulp/tasks', { recurse: true });
