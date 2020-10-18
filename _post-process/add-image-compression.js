
const compress_images = require('compress-images')

exports.apply = (_) => {
  compress_images(
    'assets/images/**/*.{jpg,JPG,jpeg,JPEG, png}',
    'assets/images/',
    { compress_force: false, statistic: true, autoupdate: true },
    false,
    { jpg: { engine: 'webp', command: false } },
    { png: { engine: 'webp', command: false } },
    function () {},
  )
}
