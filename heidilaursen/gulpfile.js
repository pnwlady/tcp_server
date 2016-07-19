const gulp = require('gulp');
const mocha = require('gulp-mocha');
const eslint = require('gulp-eslint');

gulp.task('lint:test', () => {
  return gulp.src('/test/test')
    .pipe(eslint({
      envs: [
        'mocha',
        'es6'
      ]
    }))
      .pipe(eslint.format());
});

gulp.task('mocha', () => {
  return gulp.src('/test/test')
    .pipe(mocha());
});

gulp.task('lint:nontest', () => {
  return gulp.src('server')
    .pipe(eslint({
      'envs': [
        'es6'
      ]
    }))
    .pipe(eslint.format());
});

gulp.task('default', ['lint:test', 'lint:nontest', 'mocha']);
