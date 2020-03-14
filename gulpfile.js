
'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    autoprefix = require('gulp-autoprefixer');

gulp.task('sass', function () {
    return gulp.src('./app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./app/css'))
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('default', () =>
    gulp.src('./app/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
);

gulp.task('build', ['sass', 'browser-sync']);

gulp.task('watch', ['browser-sync', 'sass'], function () {
    // gulp.start('build');
    gulp.watch('./app/scss/**/*.scss', ['sass']);
    gulp.watch('./app/*.html', browserSync.reload);
    gulp.watch('./app/js/!**!/!*.js', browserSync.reload);
});

gulp.task('browser-sync', function () {
    browserSync({
        server:{
            baseDir:'app'
        },
        notify:false
    });
});

