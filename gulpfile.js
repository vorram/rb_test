const gulp = require('gulp');
const sass = require('gulp-sass')(require ('sass'));
const concat = require('gulp-concat');
const flatten = require('gulp-flatten');

gulp.task('sass', function(done) {
  gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./dist'));
  
  done();
});

gulp.task('js', function(done) {
  gulp.src('./src/**/*.js')
    .pipe(concat('script.js'))
    .pipe(gulp.dest('./dist'));
  
  done();
});

gulp.task('copy-svg', function(done) {
  gulp.src('./src/**/*.svg')
    .pipe(flatten())
    .pipe(gulp.dest('./dist'));
  
  done();
});

gulp.task('copy-png', function(done) {
  gulp.src('./src/**/*.png')
    .pipe(flatten())
    .pipe(gulp.dest('./dist'));
  
  done();
});

gulp.task('copy-images', gulp.series('copy-svg', 'copy-png'));

gulp.task('watch', function() {
  gulp.watch('./src/**/*.scss', gulp.series('sass'));
  gulp.watch('./src/**/*.js', gulp.series('js'));
});

gulp.task('default', gulp.series('sass', 'js', 'watch'));
