var gulp = require('gulp'),
  sass = require('gulp-sass'),
  concatCss = require('gulp-concat-css'),
  minify = require('gulp-clean-css'),
  connect = require('gulp-connect'),
  data = require('gulp-data'),
  pug = require('gulp-pug');
 
var paths = {
  sass: './src/styles/',
  css: './public/css/',
};

gulp.task('compileSass', function() {
  gulp.src('assets/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concatCss("app.css"))
    .pipe(minify("app.css"))
    .pipe(gulp.dest('./public/css/'))
    .pipe(connect.reload());
})

gulp.task('compilePug', function() {
  gulp.src('./*.pug')
    .pipe(pug())
    .pipe(gulp.dest('.'))
    .pipe(connect.reload());
})

gulp.task('watch', function() {
  gulp.watch(['assets/**/*.scss'],['compileSass']),
  gulp.watch(['./*.pug'],['compilePug']);
});

gulp.task('connect', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('default', ['watch', 'connect']);

// var gulp = require('gulp'); 
// var sass = require('gulp-sass');
// var concatCss = require('gulp-concat-css');
// var minify = require('gulp-clean-css');
// var connect = require('gulp-connect');
//     
// gulp.task('compileSass', function() {
// 	gulp.src('assets/**/*.scss')
// 		.pipe(sass().on('error', sass.logError))
// 		.pipe(concatCss("app.css"))
// 		.pipe(minify("app.css"))
// 		.pipe(gulp.dest('./public/css/'))
// 		.pipe(connect.reload());
// })
// 
// gulp.task('watchMyStyles', function() {
// 	gulp.watch('assets/**/*.scss',['compileSass']);
// });
// 
// gulp.task('connect', function() {
// 	connect.server({
// 		livereload: true
// 	});
// });
// 
// gulp.task('default', ['watchMyStyles', 'connect']);
