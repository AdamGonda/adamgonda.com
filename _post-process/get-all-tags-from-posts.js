const fs = require('fs')
const jsdom = require('jsdom')
const Jimp = require('jimp')
const { getAllFromDir } = require('./utils')

const apply = async () => {
  const paths = []
  getAllFromDir(__dirname + '/../_site', '.html', paths)

  const tags = (
    await Promise.all(
      paths
        .filter(path => path.match(/\d{4}\/\d{2}\/\d{2}/gm))
        .map(async path => {
          const dom = await jsdom.JSDOM.fromFile(path, {})
          const lis = dom.window.document.querySelectorAll('.tags li')

          const tagsInPost = Array.from(lis)
            .map(tag => tag.textContent)
            .map(tag => tag.replace('\n', ''))
            .map(tag => tag.match(/[a-zA-Z]+/gm))
            .map(tag => {
              if (tag.length > 1) {
                return tag.join(' ')
              }

              return tag[0]
            })

          return tagsInPost
        }),
    )
  ).reduce((acc, current) => {
    current.forEach(tag => acc.push(tag))
    return acc
  }, [])

  fs.writeFile(__dirname + '/../allTags.json', JSON.stringify(Array.from(new Set(tags))), err => err ? console.log(err) : null) 
}

exports.apply = apply
