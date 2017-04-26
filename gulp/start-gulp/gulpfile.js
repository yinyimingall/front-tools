var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync');
gulp.task('browserSync', function(){
  browserSync({
    server: {
      baseDir: 'dist'//服务器根目录
    }
  });
});
gulp.task('less', function(){
  gulp.src('./src/less/**/*.less')
  .pipe(less())
  .pipe(gulp.dest('./dist/css'))
  .pipe(browserSync.reload({
    stream: true
  }));
});
gulp.task('js', function(){
  gulp.src(['src/js/*.js'])
  .pipe(gulp.dest('dist/js'))
  .pipe(browserSync.reload({
    stream: true
  }));
});
gulp.task('html', function(){
    gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({
      stream: true
    }));
});
gulp.task('watch', function(){
  gulp.watch('./src/less/**/*.less', ['less']);
  gulp.watch('./src/**/*.html', ['html']);
  gulp.watch('./src/js/**/*.js', ['js']);
})
gulp.task('init', ['html', 'less', 'js'], null);
gulp.task('default', ['init', 'browserSync', 'watch']);
