var gulp = require('gulp'),
  sass = require('gulp-sass'),
  concatCss = require('gulp-concat-css'),
  minify = require('gulp-clean-css'),
  connect = require('gulp-connect'),
  data = require('gulp-data'),
  pug = require('gulp-pug');
 
var paths = {
  sass: './src/styles/',
  css: './dist/css/',
};

gulp.task('compileSass', function() {
  gulp.src('src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concatCss("app.css"))
    .pipe(minify("app.css"))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(connect.reload());
})

gulp.task('compilePug', function() {
  gulp.src('./*.pug')
    .pipe(pug())
    .pipe(gulp.dest('.'))
    .pipe(connect.reload());
})

gulp.task('watch', function() {
  gulp.watch(['src/**/*.scss'],['compileSass']),
  gulp.watch(['./*.pug'],['compilePug']);
});

gulp.task('connect', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('default', ['watch', 'connect']);
