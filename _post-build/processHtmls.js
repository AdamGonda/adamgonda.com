const fs = require('fs')
const jsdom = require('jsdom')
const glob = require('glob')
const path = require('path')

const { pipe } = require('./utils')
const { list } = require('./operations')

console.log(`|------------ ${path.basename(__filename)}: STARTED ------------|`)
glob(__dirname + '/../**/*.html', {}, (err, files) => {
  const filter = file => file.includes('_site')

  files.filter(filter).forEach(async absPath => {
    const path =
      __dirname +
      '/../' +
      absPath.slice(absPath.indexOf('_site'), absPath.length)
    const dom = await jsdom.JSDOM.fromFile(path, {})
    const newDom = await pipe(dom)(...list)
    fs.writeFile(path, newDom.serialize(), err => err ? console.log(err) : null) // prettier-ignore
  })
})
