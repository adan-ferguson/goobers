var gulp = require('gulp');
var inject = require('gulp-inject');
var publicDir = './public/';

gulp.task('inject', function(){
    "use strict";

    var target = gulp.src(publicDir + 'index.html');
    var sources = gulp.src([
        publicDir + '/js/vendor/*.js',
        publicDir + '/**/*.js',
        publicDir + '/**/*.css'
        ], {read: false});

    return target.pipe(inject(sources, {relative: true})).pipe(gulp.dest(publicDir));
});

gulp.task('watch', function(){
    "use strict";

    gulp.watch([publicDir + '/**/*.css', publicDir + '/**/*.js'], ['inject']);
});

gulp.task('default', ['inject', 'watch'], function(){
    "use strict";
});