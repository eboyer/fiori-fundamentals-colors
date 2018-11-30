// gulpfile.js
const gulp = require('gulp')
const theo = require('gulp-theo')

// Transform design/colors.yml to dist/colors.scss:
gulp.task('tokens:scss', () =>
  gulp.src('design/colors.yml')
    .pipe(theo({
      transform: { type: 'web' },
      format: { type: 'scss' }
    }))
    .pipe(gulp.dest('dist'))
)

// Transform design/colors.yml to dist/colors.less:
gulp.task('tokens:less', () =>
  gulp.src('design/colors.yml')
    .pipe(theo({
      transform: { type: 'web' },
      format: { type: 'less' }
    }))
    .pipe(gulp.dest('dist'))
)
