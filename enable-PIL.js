const fs = require('fs')
const jsdom = require('jsdom')
const { JSDOM } = jsdom
const Jimp = require('jimp')
const glob = require('glob')
const path = require('path')

async function resizeImage(image, width, quality, cl) {
  const jimpImg = await Jimp.read(image)
  await jimpImg.resize(width, Jimp.AUTO)
  await jimpImg.quality(quality)
  return await jimpImg.getBase64Async(Jimp.MIME_JPEG)
}

async function getBase64Images(images) {
  return await Promise.all(
    Array.from(images).map(async img => {
      const htmlPath = img.src.slice(img.src.indexOf('assets'), img.src.length)
      const diskPath = __dirname + '/_site/' + htmlPath.replace('//', '/')
      return await resizeImage(diskPath, 64, 90)
    }),
  )
}

async function enable(path) {
  const dom = await JSDOM.fromFile(path, {})
  const images = dom.window.document.querySelectorAll('img')

  const b64s = await getBase64Images(images)

  Array.from(images).map((img, idx) => {
    const htmlImgPath =
      '/' + img.src.slice(img.src.indexOf('assets'), img.src.length)

    img.classList.add('lazyload')
    img.setAttribute('data-src', htmlImgPath)
    img.setAttribute('src', b64s[idx])
  })

  fs.writeFile(path, dom.serialize(), function (err) {
    if (err) return console.log(err)
    console.log(`${path} > html`)
  })
}


function main() {
  console.log(
    `|------------ ${path.basename(__filename)}: STARTED ------------|`,
  )

  glob(__dirname + '../../**/*.html', {}, (err, files) => {
    const filter = file => file.includes('_site')

    files.filter(filter).forEach((absPath, idx) => {
      const pathToHtml =
        './' + absPath.slice(absPath.indexOf('_site'), absPath.length)

      enable(pathToHtml)
    })
  })
}

main()
