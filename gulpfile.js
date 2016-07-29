'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var less = require('gulp-less');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');

gulp.task('sass', function () {

  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function(){
  gulp.watch('./sass/**/*.scss', ['sass']);
})
