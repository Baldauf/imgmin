var gulp        = require('gulp')
  , tinyimg     = require('gulp-tinyimg')
  , imageResize = require('gulp-image-resize')

gulp.task('resize', function () {
  gulp.src('img/**/*.jpg')
    .pipe(imageResize({
      width : 1280,
      height: 960,
      crop : false,
      upscale : false
    }))
    .pipe(gulp.dest('dist/resize'));
});

gulp.task('tinyimg', function(){ 
  return gulp.src('dist/resize/**/*.jpg') 
    .pipe(tinyimg('api-key-here')) 
    .pipe(gulp.dest('dist/tiny'))
});