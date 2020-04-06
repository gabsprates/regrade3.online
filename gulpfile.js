"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");

sass.compiler = require("node-sass");

const SASS_PATTERN = "./sass/**/*.scss";

gulp.task("sass", () =>
  gulp
    .src(SASS_PATTERN)
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./public"))
);

gulp.task("sass-watch", () => {
  gulp.watch(SASS_PATTERN, gulp.series("sass"));
});

module.exports.default = cb => {
  console.log("    avaliable tasks:");
  console.log("    - sass");
  console.log("    - sass:watch");
  cb();
};
