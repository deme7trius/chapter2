var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var minify = require('gulp-minify');
var watch = require('gulp-watch');

gulp.task('sass', function(){
  return gulp.src('src/scss/style.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('pub/css'))
});
gulp.task('imagemin', function(){
  return gulp.src('src/images/**/*.+(png|jpg|gif|svg)')
  .pipe(imagemin())
  .pipe(gulp.dest('pub/images'))
});
 
gulp.task('compress', function() {
  gulp.src(['src/js/*.js'])
    .pipe(minify())
    .pipe(gulp.dest('pub/js'))
});

gulp.task('watch', function(){
	gulp.watch('src/scss/*.scss', ['sass']);
	gulp.watch('src/js/*.js', ['compress']);
	gulp.watch('src/images/**/*.+(png|jpg|gif|svg)', ['imagemin']);
}); 