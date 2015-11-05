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
   var styleWatcher = gulp.watch("./css/*.scss", ["style-build"]);
   styleWatcher.on("change", function(event){});

   var jsWatcher = gulp.watch("./js/*.js", ["js-build"]);
   jsWatcher.on("change", function(){});
});

gulp.task("js-build", function(){
   gulp.src("./js/*.js")
      //.pipe(jshint())
      //.pipe(jshint.reporter(jsStylish))
      .pipe(sourcemaps.init())
      .pipe(concat("app.min.js"))
      .pipe(sourcemaps.write())
      .pipe(uglify())
      .pipe(gulp.dest('./dist/js'))
      .pipe(notify({message: 'js built'}));
});

gulp.task("style-build", function () {
   gulp.src("./css/main.scss")
      .pipe(sass().on('error', sass.logError))
      .pipe(csslint({
         'ids': false
      }))
      .pipe(csslint.reporter())
      .pipe(sourcemaps.init())
      .pipe(autoprefixer())
      .pipe(cssMinifier())
      .pipe(concat("main.min.css"))
      //disable for deployment
      //.pipe(sourcemaps.write())
      .pipe(gulp.dest("./dist/css"))
      .pipe(notify({message: 'stylesheet built'}));
});
