var gulp = require('gulp');
var inject = require('gulp-inject');
var nodemon = require('gulp-nodemon');

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

gulp.task('debug', ['inject', 'watch'], function(){
    "use strict";

    nodemon({
        script: 'server.js',
        ext: 'js',
        exec: 'node-debug'
    });
});

gulp.task('default', ['inject', 'watch'], function(){
    "use strict";

    nodemon({
        script: 'server.js',
        ext: 'js'
    });
});