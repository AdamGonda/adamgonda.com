const fs = require('fs')
const jsdom = require('jsdom')
const glob = require('glob')
const path = require('path')

const { pipe } = require('./utils')
const { list } = require('./tasks')

console.log(`------------ ${path.basename(__dirname)}: STARTED ------------ \n`)
glob(__dirname + '/../**/*.html', {}, (err, files) => {
  const htmlFiles = files.filter(file => file.includes('_site'))

  if (htmlFiles.length === 0) {
    console.log('> No html files found!')
  }

  htmlFiles.forEach(async absPath => {
    const path =
      __dirname +
      '/../' +
      absPath.slice(absPath.indexOf('_site'), absPath.length)
    const dom = await jsdom.JSDOM.fromFile(path, {})
    const newDom = await pipe(dom)(...list)
    fs.writeFile(path, newDom.serialize(), err => err ? console.log(err) : null) // prettier-ignore
  })
})
