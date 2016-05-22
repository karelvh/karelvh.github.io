var gulp = require('gulp');
var csslint = require('gulp-csslint');
var cssMinifier = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var jshint = require('gulp-jshint');
// var jsStylish = require('jshint-stylish');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var notify = require('gulp-notify');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

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

/*
gulp.task('index-js', function () {
  gulp.src('./index/js/*.js')
  //.pipe(jshint())
  //.pipe(jshint.reporter(jsStylish))
  .pipe(sourcemaps.init())
  .pipe(concat('app.min.js'))
  .pipe(sourcemaps.write())
  // enable uglify before deployment
  .pipe(uglify())
  .pipe(gulp.dest('./index/dist/js'))
  .pipe(notify({ message: 'js built' }));
});
*/

gulp.task('index-js', function () {
  return browserify('./index/js/app.js')
        .transform('babelify', { presets: ['react'] })
        .bundle()
        .pipe(source('app.min.js'))
        .pipe(buffer())
        // .pipe(uglify())
        .pipe(gulp.dest('./index/dist/js'));
});

gulp.task('index-css', function () {
  gulp.src('./index/css/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(csslint({
    'ids': false
  }))
  .pipe(csslint.reporter())
  .pipe(sourcemaps.init())
  .pipe(autoprefixer())
  .pipe(concat('app.min.css'))
  .pipe(sourcemaps.write())
  // enable minifier before deployment
  .pipe(cssMinifier())
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
  //.pipe(jshint())
  //.pipe(jshint.reporter(jsStylish))
  .pipe(sourcemaps.init())
  .pipe(concat('app.min.js'))
  .pipe(sourcemaps.write())
  //enable uglify before deployment
  .pipe(uglify())
  .pipe(gulp.dest('./hi/dist/js'))
  .pipe(notify({ message: 'js built' }));
});

gulp.task('hi-css', function () {
  gulp.src('./hi/css/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(csslint({
    'ids': false
  }))
  .pipe(csslint.reporter())
  .pipe(sourcemaps.init())
  .pipe(autoprefixer())
  .pipe(concat('app.min.css'))
  .pipe(sourcemaps.write())
  //enable minifier before deployment
  .pipe(cssMinifier())
  .pipe(gulp.dest('./hi/dist/css'))
  .pipe(notify({ message: 'stylesheet built' }));
});

gulp.task('hi', ['hi-watch', 'hi-css', 'hi-js']);

//////////////////////////////
/////// set node ENV /////////
//////////////////////////////

gulp.task('set-dev-node-env', function () {
  return process.env.NODE_ENV = 'development';
});

gulp.task('set-prod-node-env', function () {
  return process.env.NODE_ENV = 'production';
});
