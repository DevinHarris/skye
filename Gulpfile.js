var gulp = require('gulp'),
	sass = require('gulp-sass');

gulp.task('sass', function() {
	gulp.src('./public/css/*.scss')
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(gulp.dest('./public/css'));
});

gulp.task('default', function() {
	gulp.watch('./public/css/*.scss', ['sass']);
});