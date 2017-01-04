
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var assign = require('object-assign');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var del = require('del');
var gls = require('gulp-live-server');
var gutil  = require('gulp-util');

const vendors = [
    'babel-polyfill',
    'zone.js/dist/zone',
    '@angular/platform-browser-dynamic',
    '@angular/core',
    '@angular/common',
    '@angular/platform-browser',
    '@angular/router',
    'rxjs/add/operator/map'
];

gulp.task('build:vendor', () => {
  const b = browserify({
    debug: true
  });

  // require all libs specified in vendors array
  vendors.forEach(lib => {
    b.require(lib);
  });

  b.bundle()
  .pipe(source('vendor.js'))
  .pipe(buffer())
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(sourcemaps.write('./maps'))
  .pipe(gulp.dest('./public/'))
  ;
});

gulp.task('html:copy', () => {
  return gulp.src(['src/index.html'])
    .pipe(gulp.dest('public'));
});

gulp.task('build', ['html:copy'], () => {
  const b = browserify('src/index.js', { debug: true })
    .external(vendors) // Specify all vendors as external source
    .transform(babelify);
  return bundle(b);
});

gulp.task('watch', () => {
  const b = browserify('src/index.js', assign({ debug: true }, watchify.args))
    .external(vendors) // Specify all vendors as external source
    .transform(babelify);
  const w = watchify(b)
    .on('update', () => bundle(w))
    .on('log', gutil.log);
  return bundle(w)
});

gulp.task('clean', () => {
  return del('public');
});

gulp.task('serve', function() {
  var server = gls.static('public', 80);
  server.start();
});

gulp.task('default', ['build:vendor','serve', 'build', 'watch']);

function bundle(b) {
  return b.bundle()
    .on('error', (e) => {
      console.error(e.stack);
    })
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('public'));
}
