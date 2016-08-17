var gulp = require('gulp'); 
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');
var minify = require('gulp-clean-css');
var connect = require('gulp-connect');
    
gulp.task('compileSass', function() {
	gulp.src('assets/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(concatCss("app.css"))
		.pipe(minify("app.css"))
		.pipe(gulp.dest('./public/css/'))
		.pipe(connect.reload());
})

gulp.task('watchMyStyles', function() {
	gulp.watch('assets/**/*.scss',['compileSass']);
});

gulp.task('connect', function() {
	connect.server({
		livereload: true
	});
});

gulp.task('default', ['watchMyStyles', 'connect']);