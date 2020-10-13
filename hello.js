const glob = require('glob')
const fs = require('fs')

glob(__dirname + '/**/*.html', {}, (err, files) => {
  const filter = file =>
    !file.includes('_includes') && !file.includes('_layouts')

  files.filter(filter).forEach(root => {
    
    fs.readFile(root, 'utf8', function (err, data) {
      if (err) {
        return console.log(err)
      }
      console.log(data)
    })
  })
})
