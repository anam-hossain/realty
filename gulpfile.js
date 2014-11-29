var gulp = require('gulp');
var gutil = require('gulp-util');
var notify = require('gulp-notify');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');


// Where do you store your Sass files?
var sassDir = 'app/assets/sass';

// Where do you store your Javascript files?
var javascriptDir = 'app/assets/js';

// Which directory should Sass compile to?
var targetCSSDir = 'public';

// Which directory should Javascripts compile to?
var targetJSDir = 'public';


// Compile Sass, autoprefix CSS3,
// and save to target CSS directory
gulp.task('css', function () {
  return gulp.src(sassDir + '/app.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest(targetCSSDir))
    .pipe(notify('SASS compiled'));
});

// Handle Javascript compilation
gulp.task('js', function () {
  return gulp.src(javascriptDir + '/**/*.js')
    .pipe(concat("app.js"))
    //.pipe(uglify())
    .pipe(gulp.dest(targetJSDir))
    .pipe(notify('JS compiled'));
});


// Keep an eye on Sass, Coffee, and PHP files for changes...
gulp.task('watch', function () {
    gulp.watch(sassDir + '/**/*.scss', ['css']);
    gulp.watch(javascriptDir + '/**/*.js', ['js']);
});

// What tasks does running gulp trigger?
gulp.task('default', ['css', 'js', 'watch']);