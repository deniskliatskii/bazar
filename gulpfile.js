//*** Установленные заваисимости ***
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');
const concat = require('gulp-concat');
const uglify = require('gulp-uglifyjs');
const del = require('del');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');

//************************************************

gulp.task('browser-sync', function () {    
    browserSync({
        server: {
            baseDir: 'src'
        },
        notify: false
    })
});


//*** Файлы scss в css ***
gulp.task('sass', function () {                   
    return gulp.src('src/sass/main.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer({
        browsers: ['last 10 versions']
    }))
    .pipe(csso())
    .pipe(rename({
        suffix: "-min"
    }))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream())
});


//*** Сбор всех файлов JS в папке js-components в один файл ***
gulp.task('scripts', function () {
    return gulp.src('src/js/components/*.js')
    .pipe(plumber())
    .pipe(concat('main-prod.js'))
    .pipe(uglify())
    .pipe(gulp.dest('src/js'))
});


//*** Обьединение JQuery и Slick в один файл ***
gulp.task('libsJs', function () {
   return gulp.src([
       'src/libs/jquery/jquery-3.2.1.min.js',
       'src/libs/slick/slick.min.js',
       'src/libs/parallax/parallax.min.js',
       'src/libs/magnific-popup/magnific-popup.js',
   ])
   .pipe(concat('libs-min.js'))
   .pipe(uglify())
   .pipe(gulp.dest('src/js'))
});


//*** Сжатие картинок ***
gulp.task('images', function () {
    return gulp.src('src/img/**/*')
        .pipe(imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imagemin.jpegtran({ progressive: true }),
            imagemin.optipng({ optimizationLevel: 5 }),
            imagemin.svgo({
                plugins: [
                    { removeViewBox: true },
                    { cleanupIDs: false }
                ]
            })
        ]))
        .pipe(gulp.dest('dist/img'))
});


gulp.task('watch', ['browser-sync', 'sass', 'scripts', 'libsJs'], function () {
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch('src/*.html', browserSync.reload);
    gulp.watch('src/js/**/*.js', ['scripts'], browserSync.reload);
});

//*** Удаление папки dist перед загрузкой проекта ***
gulp.task('clean', function () {
    return del.sync('dist');  
});

//*** Сбор файлов в продакшн ***
gulp.task('build', ['clean', 'images', 'sass', 'scripts', 'libsJs'], function () {
    const buildCss = gulp.src('src/css/**/*')
    .pipe(plumber())
    .pipe(gulp.dest('dist/css'))
    
    const buildFonts = gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
           
    const buildJs = gulp.src('src/js/*.js')
    .pipe(gulp.dest('dist/js'))
    
    const buildHtml = gulp.src('src/index.html')
    .pipe(gulp.dest('dist'))
    
});

//*** Делает вызов - watch просто через команду gulp ***
gulp.task('default', ['watch']);   
