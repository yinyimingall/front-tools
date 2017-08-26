var gulp        = require('gulp')
var gutil       = require('gulp-util')            // gulp 工具
var uglify      = require('gulp-uglify')          // js 压缩
var watchPath   = require('gulp-watch-path')      // 与gulp.watch 搭配监听改变文件，只编译改变的文件
var combiner    = require('stream-combiner2')     // 处理错误打印错误，防止 gulp 停止
var sourcemaps  = require('gulp-sourcemaps')      // 生成 sourcemaps 方便调试
var minifycss   = require('gulp-minify-css')      // 压缩 css
var autoprefixer= require('gulp-autoprefixer')    // 生成 css 前缀
var sass        = require('gulp-ruby-sass')       // 编译 sass
var imagemin    = require('gulp-imagemin')        // 压缩 图片
var filter      = require('gulp-filter')
var browserSync = require('browser-sync').create()
var reload      = browserSync.reload

var handleError = function (err) {
    var colors = gutil.colors;
    console.log('\n')
    gutil.log(colors.red('Error!'))
    gutil.log('fileName: ' + colors.red(err.fileName))
    gutil.log('line: ' + colors.red(err.cause.line))
    gutil.log('message: ' + err.message)
    gutil.log('plugin: ' + colors.yellow(err.plugin))
}

gulp.task('watch-html', function(){
    gulp.watch('src/**/*.html', function (event) {
        var paths = watchPath(event, 'src/', 'dist/')
        gutil.log(gutil.colors.green(event.type) + ' ' + paths.srcPath)
        gutil.log('build to ' + paths.distPath)
        gulp.src(paths.srcPath)
            .pipe(gulp.dest(paths.distDir))
            .pipe(browserSync.reload({stream:true}))
    })
})

gulp.task('watch-sass', function () {
    gulp.watch('src/css/**/*', function (event) {
        var paths = watchPath(event, 'src/css/', 'dist/css/')
        gutil.log(gutil.colors.green(event.type) + ' ' + paths.srcPath)
        gutil.log('build to ' + paths.distPath)
        sass(paths.srcPath)
            .on('error', function (err) {
                console.error('Error!', err.message);
            })
            .pipe(sourcemaps.init())
            .pipe(autoprefixer({
                browsers: 'last 2 versions'
            }))
            .pipe(minifycss())
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(paths.distDir))
            .pipe(filter('**/*.css')) // Filtering stream to only css files
            .pipe(reload({stream:true}))
    })
})

gulp.task('watch-js', function () {
    gulp.watch('src/js/**/*.js', function (event) {
        var paths = watchPath(event, 'src/', 'dist/')
        gutil.log(gutil.colors.green(event.type) + ' ' + paths.srcPath)
        gutil.log('bulid to ' + paths.distPath)
        var combined = combiner.obj([
            gulp.src(paths.srcPath),
            sourcemaps.init(),
            uglify(),
            sourcemaps.write('./'),
            gulp.dest(paths.distDir),
        ])
        combined.on('error', handleError)
    })
})

gulp.task('watch-dist-js', function () {
    gulp.watch('dist/js/**/*.js', reload);
})

gulp.task('watch-image', function (event) {
    gulp.watch('src/images/**/*.*', function (event) {
        var paths = watchPath(event, 'src/', 'dist/')        
        gutil.log(gutil.colors.green(event.type) + ' ' + paths.srcPath)
        gutil.log('Build to ' + paths.distPath)
        gulp.src(paths.srcPath)
            .pipe(imagemin({
                progressive: true
            }))
            .pipe(gulp.dest(paths.distDir))
    })
})


/* 
 *  一次性全部压缩打包
 */
gulp.task('compasshtml', function () {
    gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist/'))
})

gulp.task('minifySass', function () {
    sass('src/css/**/*.scss')
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
        .pipe(sourcemaps.init())
        .pipe(autoprefixer({
            browsers: 'last 2 versions'
        }))
        .pipe(minifycss())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist/css'))
})

gulp.task('uglifyjs', function () {
    var combined = combiner.obj([
        gulp.src('src/js/**/*.js'),
        sourcemaps.init(),
        uglify(),
        sourcemaps.write('./'),
        gulp.dest('dist/js/')
    ])
    combined.on('error', handleError)
})

gulp.task('compassImage', function () {
    gulp.src('src/images/**/*')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('dist/images'))
})

// 静态服务器
gulp.task('openServe', ['build'],function() {
    browserSync.init({
        server: "./dist"
    });
})

// 启动静态服务器，监听 scss/html/js/图片 文件
gulp.task('serve', ['openServe', 'watch-html', 'watch-sass', 'watch-js', 'watch-dist-js', 'watch-image'])

// 打包发布
gulp.task('build', ['compasshtml', 'minifySass', 'uglifyjs', 'compassImage'])

// 开发模式
gulp.task('default', ['serve']);