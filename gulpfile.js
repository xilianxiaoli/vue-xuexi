/**
 * Created by lenovo on 2016/10/14.
 */

var gulp = require('gulp');
var tinypng = require('gulp-tinypng-compress');

gulp.task('default', function () {
    gulp.src('images/src/**/*.{png,jpg,jpeg}')
        .pipe(tinypng({
            key: 'O54TklXIk1lFgBXtGJX6wOxtSoP8OixU',
            sigFile: '',
            log: true
        }))
        .pipe(gulp.dest('images/dist/'));
});
