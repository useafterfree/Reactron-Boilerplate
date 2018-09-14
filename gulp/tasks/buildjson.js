const fs = require('fs');
const path = require('path');
const gulp = require('gulp');
const argv = require('yargs').argv;

var jsonPath = '../../build_config/build.json';
var buildJson = require(jsonPath);

gulp.task('buildjson', function() {
  buildJson.version = argv.version || buildJson.version;
  buildJson.environment = argv.environment || buildJson.environment;
  fs.writeFileSync(path.join(__dirname, jsonPath), JSON.stringify(buildJson));
});
