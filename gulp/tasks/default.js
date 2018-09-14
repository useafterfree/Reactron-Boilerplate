const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

const exec = require('child_process').exec;
const spawn = require('child_process').spawn;
const debug = require('ndebug')('gulp-server-runner');

const pre = ['electron', 'server', 'build'];
// const pre = ['server', 'build'];

const output = (data) => {
  const str = data.toString();
  debug(str);
};

gulp.task('default', pre);

gulp.task('electron', function (cb) {
  exec(`./node_modules/.bin/electron ${process.env.APP_HOME}`, function (err, stdout, stderr) {
    debug(stdout);
    debug(stderr);
    cb(err);
  });
})

gulp.task('server', function (cb) {
  
  debug('Starting up: server');
  const proc = spawn('node', [`${process.env.APP_HOME}/server.js`]);

  proc.stdout.on('data', output);

  proc.stderr.on('data', output);

  proc.on('exit', (code) => {
    if (code !== 0) {
      console.error('Failure!');
    }
  });
    
});

gulp.task('nodemon', () => {
  nodemon({
    script: 'server.js',
    ext: 'js',
    ignore: ['dist/**/*.*']
  }).on('start', () => {});
});
