//simple auto build script
const gulp = require('gulp');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const sourcemaps = require('gulp-sourcemaps');
const assign = require('object-assign');
const browserify = require('browserify');
const watchify = require('watchify');
const babelify = require('babelify');
const del = require('del');
const gls = require('gulp-live-server');
const gutil  = require('gulp-util');

//angular 2 with babel
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

//Add vender.js support files from angular, rxjs, babel-polyfill, zone
gulp.task('build:vendor',[], () => {
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

  return b;
});

//development index.html
gulp.task('html:copy',['clean'], () => {
  return gulp.src(['src/index.html'])
    .pipe(gulp.dest('public'));
});

//build single file
gulp.task('build', [], () => {
  const b = browserify('src/index.js', { debug: true })
    .external(vendors) // Specify all vendors as external source
    .transform(babelify);
  return bundle(b);
});

gulp.task('watch:index.js', () => {
  const b = browserify(['src/index.js'], assign({ debug: true }, watchify.args))
    .external(vendors) // Specify all vendors as external source
    .transform(babelify);
  const w = watchify(b)
    .on('update', () => bundle(w))
    .on('log', gutil.log);
  return bundle(w)
});

gulp.task('watch', ['watch:index.js'], () => {
    //gulp.watch(['src/*.js','src/**/*.js'], ['build']);
    return;
});

//clean folder
gulp.task('clean', () => {
  return del('public');
});

//server host default 0.0.0.0:80
gulp.task('serve', ()=> {
  var server = gls.static('public', 80);
  server.start();
  return;
});

// build order
// html:copy = html (call clean up public folder to empty)
// build:vendor = build angular 2 (take time to build vender to show on build)
// build = app javascript
// watch = watch files changes
// serve =setup server url http://127.0.0.1:80
gulp.task('dev', ['html:copy','build:vendor','build','watch','serve']);
// default development build
gulp.task('default', ['dev']);

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
