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

gulp.task('default', function () {
  gulp.watch('./index/css/*.scss', ['css']);
  gulp.watch('./index/js/*.js', ['js']);
});

//////////////////////////////
//////index page tasks ///////
//////////////////////////////
gulp.task('index-watch', function () {
  gulp.watch('./index/css/*.scss', ['index-css']);
  gulp.watch('./index/js/*.js', ['index-js']);
});

gulp.task('index-js', function () {
  gulp.src('./index/js/*.js')
  .pipe(sourcemaps.init())
  .pipe(concat('app.min.js'))
  .pipe(sourcemaps.write())
  .pipe(gulpif(production, uglify()))
  .pipe(gulp.dest('./index/dist/js'))
  .pipe(notify({ message: 'js built' }));
});

gulp.task('index-css', function () {
  gulp.src('./index/css/*.scss')
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
  .pipe(gulp.dest('./index/dist/css'))
  .pipe(notify({ message: 'stylesheet built' }));
});

gulp.task('index', ['set-dev-node-env', 'index-watch', 'index-css', 'index-js']);
gulp.task('index-prod', ['set-prod-node-env', 'index-watch', 'index-css', 'index-js']);

//////////////////////////////
/////// hi page tasks ////////
//////////////////////////////
gulp.task('hi-watch', function () {
  gulp.watch('./hi/css/*.scss', ['hi-css']);
  gulp.watch('./hi/js/*.js', ['hi-js']);
});

gulp.task('hi-js', function () {
  gulp.src('./hi/js/*.js')
  .pipe(sourcemaps.init())
  .pipe(concat('app.min.js'))
  .pipe(sourcemaps.write())
  .pipe(gulpif(production, uglify()))
  .pipe(gulp.dest('./hi/dist/js'))
  .pipe(notify({ message: 'js built' }));
});

gulp.task('hi-css', function () {
  gulp.src('./hi/css/*.scss')
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
  .pipe(gulp.dest('./hi/dist/css'))
  .pipe(notify({ message: 'stylesheet built' }));
});

gulp.task('hi', ['set-dev-node-env', 'hi-watch', 'hi-css', 'hi-js']);
gulp.task('hi-prod', ['set-prod-node-env', 'hi-watch', 'hi-css', 'hi-js']);

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
