var gulp   		= require('gulp'),
	stylus 		= require('gulp-stylus'),
	browserSync = require('browser-sync');

gulp.task('stylus', function () {
	return gulp.src('app/stylus/main.styl')
	.pipe(stylus())
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		}
	})
})

gulp.task('watch', ['browser-sync', 'stylus'], function () {
	gulp.watch('app/stylus/main.styl', ['stylus']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/**/*.js', browserSync.reload);
});