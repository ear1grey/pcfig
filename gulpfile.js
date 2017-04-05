const gulp = require('gulp');
const target = "./docs/";

// ciles that will be copied by the copyfiles task
const copyFilesGlob = [
  './src/**/*.html',
  './src/**/*.svg',
  './src/**/*.png',
  './src/**/*.css'
];

// Copy supporting static files to the destination
gulp.task('copyfiles',
    function() {
        return gulp.src(copyFilesGlob)
            .pipe(gulp.dest(target));
    }
);

// build task
gulp.task('default', ['copyfiles']);
