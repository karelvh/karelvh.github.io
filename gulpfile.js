//npm install --save-dev gulp gulp-csslint gulp-minify-css gulp-sourcemaps gulp-uglify gulp-concat gulp-notify gulp-sass gulp-jshint jshint-stylish gulp-autoprefixer
var gulp = require("gulp"),
csslint = require("gulp-csslint"),
cssMinifier = require("gulp-minify-css"),
sourcemaps = require("gulp-sourcemaps"),
jshint = require("gulp-jshint"),
//jsStylish = require("jshint-stylish"),
uglify = require("gulp-uglify"),
concat = require("gulp-concat"),
notify = require("gulp-notify"),
sass = require("gulp-sass"),
autoprefixer = require("gulp-autoprefixer");

gulp.task("default", function(){
  gulp.watch("./index/css/*.scss", ["css"]);
  gulp.watch("./index/js/*.js", ["js"]);
});

//////////////////////////////
//////index page tasks ///////
//////////////////////////////
gulp.task("index-watch", function(){
  gulp.watch("./index/css/*.scss", ["index-css"]);
  gulp.watch("./index/js/*.js", ["index-js"]);
});

gulp.task("index-js", function(){
  gulp.src("./index/js/*.js")
  //.pipe(jshint())
  //.pipe(jshint.reporter(jsStylish))
  .pipe(sourcemaps.init())
  .pipe(concat("app.min.js"))
  .pipe(sourcemaps.write())
  //enable uglify before deployment
  .pipe(uglify())
  .pipe(gulp.dest('./index/dist/js'))
  .pipe(notify({message: 'js built'}));
});

gulp.task("index-css", function () {
  gulp.src("./index/css/*.scss")
  .pipe(sass().on('error', sass.logError))
  .pipe(csslint({
    'ids': false
  }))
  .pipe(csslint.reporter())
  .pipe(sourcemaps.init())
  .pipe(autoprefixer())
  .pipe(concat("app.min.css"))
  .pipe(sourcemaps.write())
  //enable minifier before deployment
  .pipe(cssMinifier())
  .pipe(gulp.dest("./index/dist/css"))
  .pipe(notify({message: 'stylesheet built'}));
});

gulp.task('index', ['index-watch', 'index-css', 'index-js']);

//////////////////////////////
/////// hi page tasks ////////
//////////////////////////////
gulp.task("hi-watch", function(){
  gulp.watch("./hi/css/*.scss", ["hi-css"]);
  gulp.watch("./hi/js/*.js", ["hi-js"]);
});

gulp.task("hi-js", function(){
  gulp.src("./hi/js/*.js")
  //.pipe(jshint())
  //.pipe(jshint.reporter(jsStylish))
  .pipe(sourcemaps.init())
  .pipe(concat("app.min.js"))
  .pipe(sourcemaps.write())
  //enable uglify before deployment
  .pipe(uglify())
  .pipe(gulp.dest('./hi/dist/js'))
  .pipe(notify({message: 'js built'}));
});

gulp.task("hi-css", function () {
  gulp.src("./hi/css/*.scss")
  .pipe(sass().on('error', sass.logError))
  .pipe(csslint({
    'ids': false
  }))
  .pipe(csslint.reporter())
  .pipe(sourcemaps.init())
  .pipe(autoprefixer())
  .pipe(concat("app.min.css"))
  .pipe(sourcemaps.write())
  //enable minifier before deployment
  .pipe(cssMinifier())
  .pipe(gulp.dest("./hi/dist/css"))
  .pipe(notify({message: 'stylesheet built'}));
});

gulp.task('hi', ['hi-watch', 'hi-css', 'hi-js']);
