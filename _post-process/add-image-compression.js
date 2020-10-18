const { compress } = require('compress-images/promise')

exports.apply = async () => {
  await compress({
    source: __dirname + '/../_site/assets/images/**/*.{jpg,JPG,jpeg,JPEG,png}',
    destination: __dirname + '/../_site/assets/images/',
    enginesSetup: {
      jpg: { engine: 'webp', command: false },
      png: { engine: 'webp', command: false },
    },
  })
}
