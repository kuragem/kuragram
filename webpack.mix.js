const mix = require('laravel-mix')

mix.browserSync('kuragram.test')
  .js('resources/js/app.js', 'public/js')
  .sass('resources/sass/app.scss', 'public/css')
  .version()