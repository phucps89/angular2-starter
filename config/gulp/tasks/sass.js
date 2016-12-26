var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
var merge = require('merge-stream');
var config = require('../config')();

gulp.task('sass', function () {
    var scssStream = gulp.src([config.assetsPath.styles + 'main.scss', config.app + '**/*.scss'])
        .pipe(sass())
        .pipe(concat('scss-files.scss'));

    var mergedStream = merge(scssStream)
        .pipe(concat('main.css'))
        .pipe(minify())
        .pipe(gulp.dest(config.assetsPath.styles));

    return mergedStream;
});

gulp.task('watch-sass', function () {
    gulp.watch(config.assetsPath.styles + '**/*.scss', ['sass']);
    gulp.watch(config.app + '**/*.scss', ['sass']);
});
