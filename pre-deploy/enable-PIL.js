const glob = require('glob')
const fs = require('fs')

console.log('|------------ ENABLE-PIL: IMPORTED ------------|')

exports.start = () => {
  console.log('|------------ ENABLE-PIL: STARTED ------------|')

  glob(__dirname + '../../**/*.html', {}, (err, files) => {
    const filter = file => file.includes('_site')

    files.filter(filter).forEach((root, idx) => {
      fs.readFile(root, 'utf8', function (err, html) {
        if (err) {
          return console.log(err)
        }

        console.log(html)
      })
    })
  })
}
