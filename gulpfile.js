var gulp = require("gulp");
var watch = require("gulp-watch");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var cssvars = require("postcss-simple-vars");
var nested = require("postcss-nested");
var cssImport = require('postcss-import');

gulp.task("default", function() {
  console.log("you created a Gulp task");
});

gulp.task("html", () => {
  console.log("Imagine something usful being done in you HTML here");
});

gulp.task("styles", () => {
  return gulp
    .src("./app/assets/styles/styles.css")
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest("./app/temp/styles"));
});

gulp.task("watch", () => {
  watch("./app/index.html", () => {
    gulp.start("html");
  });

  watch("./app/assets/styles/**/*.css", () => {
    gulp.start("styles");
  });
});
