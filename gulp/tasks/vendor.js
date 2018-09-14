const gulp = require('gulp');
const config = require('../config').vendor;

gulp.task('vendor', () => gulp
  .src(config.src)
  .pipe(gulp.dest(config.dest))
);
