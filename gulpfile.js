var gulp = require('gulp');
var csslint = require('gulp-csslint');
var cssMinifier = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var notify = require('gulp-notify');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var gulpif = require('gulp-if');
var browserSync = require('browser-sync').create();

//////////////////////////////
//////index page tasks ///////
//////////////////////////////
gulp.task('watch', ['js', 'scss'], function () {
  browserSync.init({
    server: './'
  });
  gulp.watch('./scss/*.scss', ['scss']);
  gulp.watch('./js/*.js', ['js']);
  gulp.watch('./*.html').on('change', browserSync.reload);
});

gulp.task('js', function () {
  return gulp.src('./js/*.js')
  .pipe(sourcemaps.init())
  .pipe(concat('app.min.js'))
  .pipe(sourcemaps.write())
  .pipe(gulpif(production, uglify()))
  .pipe(gulp.dest('./dist/js'))
  .pipe(browserSync.stream())
  .pipe(notify({ message: 'js built' }));
});

gulp.task('scss', function () {
  return gulp.src('./scss/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(csslint({
    ids: false,
  }))
  .pipe(csslint.reporter())
  .pipe(sourcemaps.init())
  .pipe(autoprefixer())
  .pipe(concat('app.min.css'))
  .pipe(sourcemaps.write())
  .pipe(gulpif(production, cssMinifier()))
  .pipe(gulp.dest('./dist/css'))
  .pipe(browserSync.stream())
  .pipe(notify({ message: 'stylesheet built' }));
});

gulp.task('default', ['set-dev-node-env', 'watch', 'scss', 'js']);
gulp.task('dev', ['set-dev-node-env', 'watch', 'scss', 'js']);
gulp.task('prod', ['set-prod-node-env', 'watch', 'scss', 'js']);

//////////////////////////////
/////// set node ENV /////////
//////////////////////////////
gulp.task('set-dev-node-env', function () {
  production = false;
  return process.env.NODE_ENV = 'development';
});

gulp.task('set-prod-node-env', function () {
  production = true;
  return process.env.NODE_ENV = 'production';
});
