var gulp = require('gulp');
var gls = require('gulp-live-server');
var cucumber = require('gulp-cucumber');
var argv = require('yargs').argv;
// e2e tasks
// starting selenium standalone  server
gulp.task('sel', function () {
    //1. run your script as a server 
    var server = gls.new('node_modules/selenium-server/bin/selenium');
    server.start();
});

// running e2e test - using cucumber
gulp.task('e2e', function () {
    return gulp.src('e2e/features/*').pipe(cucumber({
        'steps': 'e2e/selenium/steps/*.js',
        'support': 'e2e/selenium/support/*.js',
        'format': 'summary'
    }));
});

gulp.task('test', function () {
    gulp.start('sel', 'e2e');
});

// running unit test using TBD
gulp.task('unit', function () {
    console.log(" **** Not yet implemented **** ")
});