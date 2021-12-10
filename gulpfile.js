let gulp = require('gulp');
let sass = require('gulp-sass')(require('sass'));
var uglifycss = require('gulp-uglifycss');

gulp.task('scss', gulp.series(function () {
    return gulp.src('./scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
}));

gulp.task('css', gulp.series(function () {
    return gulp.src('./css/*.css')
        .pipe(uglifycss({
            "uglyComments": true
        }))
        .pipe(gulp.dest('./dist/'));
}));

gulp.task('run', gulp.parallel(['scss', 'css']));

gulp.task('watch', gulp.series(function () {
    gulp.watch('./scss/*.scss', gulp.series(['scss']));
    gulp.watch('./css/*.css', gulp.series(['css']));
}));

gulp.task('default', gulp.parallel('run', 'watch'));