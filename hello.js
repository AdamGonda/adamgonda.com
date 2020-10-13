const path = require('path'),
  fs = require('fs')

function fromDir(startPath, filter) {
  if (!fs.existsSync(startPath)) {
    console.log('no dir ', startPath)
    return
  }

  const files = fs.readdirSync(startPath)
  for (let i = 0; i < files.length; i++) {
    const filename = path.join(startPath, files[i])
    const stat = fs.lstatSync(filename)
    if (stat.isDirectory()) {
      fromDir(filename, filter) //recurse
    } else if (filename.indexOf(filter) >= 0) {
      console.log('-- found: ', filename)
    }
  }
}

fromDir('.', '.html')
