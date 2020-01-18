var gulp			= require('gulp'),
	gutil           = require('gulp-util'),
	sass			= require('gulp-sass'),
	autoprefixer	= require('autoprefixer')
	postcss          = require('gulp-postcss'),
	flexBugsFix      = require('postcss-flexbugs-fixes'),
	

gulp.task('scss', function() {
	var processors = [
		autoprefixer({ browsers: ['last 3 versions', 'ios >= 6'] }),
		flexBugsFix
	];

	return gulp.src('scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(postcss(processors))
		.pipe(gulp.dest('./css'));
});


gulp.task('watch', function() {
	gulp.watch('scss/**/*.scss', gulp.series('scss'));
})
