var gulp = require('gulp');
var inject = require('gulp-inject');
var series = require('stream-series');
var publicDir = './public/';

gulp.task('inject', function(){
    "use strict";

    var target = gulp.src(publicDir + 'index.html');

    var prereqs = [];
    var rest = [publicDir + '**/*.js', publicDir + '**/*.css'];

    for(var i = 0; i < prereqs.length; i++){
        rest.push('!' + prereqs[i]);
    }

    var prereqStream = gulp.src(prereqs, {read: false});
    var restStream = gulp.src(rest, {read: false});

    return target.pipe(
        inject(series(prereqStream, restStream), {relative: true})
    ).pipe(
        gulp.dest(publicDir)
    );
});

gulp.task('watch', function(){
    "use strict";

    gulp.watch([publicDir + '/**/*.css', publicDir + '/**/*.js'], ['inject']);
});

gulp.task('default', ['inject', 'watch'], function(){
    "use strict";
});