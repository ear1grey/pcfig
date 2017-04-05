const gulp = require('gulp');
const sass = require('gulp-sass');

// ciles that will be copied by the copyfiles task
const copyFilesGlob = [
  './src/**/*.html',
  './src/**/*.svg',
  './src/**/*.png'
];

// options used when compiling sass/scss into css
const sassOptions = {
  outputStyle: 'nested',
  sourceComments: 'map',
  sourceMap: 'sass'
};

// Copy supporting static files to the destination
gulp.task('copyfiles',
    function() {
        return gulp.src(copyFilesGlob)
            .pipe(gulp.dest("build/"));
    }
);

gulp.task('style', function () {
  return gulp.src('./src/**/*.scss')
    .pipe(sass( sassOptions)
    .on('error', sass.logError))
    .pipe(gulp.dest('./build'));
});

// build task
gulp.task('default', ['style', 'copyfiles']);
