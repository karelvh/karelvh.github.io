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
   var styleWatcher = gulp.watch("./index/css/*.scss", ["css"]);
   styleWatcher.on("change", function(event){});

   var jsWatcher = gulp.watch("./index/js/*.js", ["js"]);
   jsWatcher.on("change", function(){});
});

//////////////////////////////
//////index page tasks ///////
//////////////////////////////

gulp.task("index", function(){
   var styleWatcher = gulp.watch("./index/css/*.scss", ["index-css"]);
   styleWatcher.on("change", function(event){});

   var jsWatcher = gulp.watch("./index/js/*.js", ["index-js"]);
   jsWatcher.on("change", function(){});
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
      .pipe(gulp.dest('./dist/js'))
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
      .pipe(gulp.dest("./dist/css"))
      .pipe(notify({message: 'stylesheet built'}));
});

//////////////////////////////
/////// hi page tasks ////////
//////////////////////////////

gulp.task("hi", function(){
   var styleWatcher = gulp.watch("./hi/css/*.scss", ["hi-css"]);
   styleWatcher.on("change", function(event){});

   var jsWatcher = gulp.watch("./hi/js/*.js", ["hi-js"]);
   jsWatcher.on("change", function(){});
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
