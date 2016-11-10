import gulp from 'gulp';
import babel from 'gulp-babel';
import nodemon from 'gulp-nodemon';

gulp.task('build', () =>
    gulp.src('src/**/*.js')
        .pipe(babel({
            plugins: ['transform-runtime']
        }))
        .pipe(gulp.dest('dist'))
);

gulp.task('server', ['build'], () => {
    nodemon({
        script: './dist/app.js',
        watch: false,
        env: {'NODE_ENV': 'production'}
    })
});
