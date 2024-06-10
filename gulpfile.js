const gulp = require("gulp");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");

function applyAutoprefixer() {
  return gulp
    .src("public/css/main.css")
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest("public/css"));
}

// test
exports.default = applyAutoprefixer;
