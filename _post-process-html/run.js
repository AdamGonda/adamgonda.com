const fs = require('fs')
const jsdom = require('jsdom')
const glob = require('glob')
const path = require('path')

const { pipe } = require('./utils')
const tasks = require('./tasks')

console.log(`------------ ${path.basename(__dirname)}: STARTED ------------ \n`)
glob(__dirname + '/../**/*.html', {}, (err, files) => {
  const htmlFiles = files.filter(file => file.includes('_site'))

  if (htmlFiles.length === 0) {
    console.log('> No html files found!')
  }

  htmlFiles.forEach(async absPath => {
    const relPath =
      __dirname +
      '/../' +
      absPath.slice(absPath.indexOf('_site'), absPath.length)

    const dom = await jsdom.JSDOM.fromFile(relPath, {})
    const newDom = await pipe(dom)(...tasks.list)
    
    fs.writeFile(relPath, newDom.serialize(), err => err ? console.log(err) : null) // prettier-ignore
  })
})
