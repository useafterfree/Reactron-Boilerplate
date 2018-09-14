// Copyright (C) 2017 Sony Electronics Inc.
// All rights, including trade secret rights, reserved.

const gulp = require('gulp');
const lint = require('gulp-eslint');
const eslintIfFixed = require('gulp-eslint-if-fixed');
const config = require('../config').lint;

gulp.task('lint', () => {
  return gulp.src([
    'app/**/*.js'
  ], { base: './' })
    .pipe(lint({ fix: config.fix }))
    .pipe(lint.format())
    .pipe(eslintIfFixed('.'))
    .pipe(lint.failAfterError());
});
