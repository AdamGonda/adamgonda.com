const glob = require('glob')
const fs = require('fs')

glob(__dirname + '/**/*.html', {}, (err, files) => {
  const filter = file => file.includes('_site')

  files.filter(filter).forEach((root, idx) => {
    fs.readFile(root, 'utf8', function (err, html) {
      if (err) {
        return console.log(err)
      }

    })
  })
})
