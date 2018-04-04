var gulp = require("gulp");
var watch = require("gulp-watch");

gulp.task("default", function() {
  console.log("you created a Gulp task");
});

gulp.task("html", () => {
  console.log("Imagine something usful being done in you HTML here");
});

gulp.task("styles", () => {
  console.log("Imagine Sass or PostCSS tasks running here");
});

gulp.task("watch", () => {
  watch("./app/index.html", () => {
    gulp.start("html");
  });

  watch("./app/assets/styles/**/*.css", () => {
    gulp.start("styles");
  });
});
