const fs = require('fs')
const jsdom = require('jsdom')
const { JSDOM } = jsdom
const Jimp = require('jimp')

async function resizeImage(image, width, quality, cl) {
  const jimpImg = await Jimp.read(image)
  await jimpImg.resize(width, Jimp.AUTO)
  await jimpImg.quality(quality)
  return await jimpImg.getBase64Async(Jimp.MIME_JPEG)
}

async function getBase64Images(images) {
  return await Promise.all(
    Array.from(images).map(async img => {
      const htmlPath =
        '/' + img.src.slice(img.src.indexOf('assets'), img.src.length)
      const diskPath = __dirname + '/_site' + htmlPath
      return await resizeImage(diskPath, 64, 90)
    }),
  )
}

exports = async function enable(path) {
  const dom = await JSDOM.fromFile(path, {})
  const images = dom.window.document.querySelectorAll('img')

  const b64s = await getBase64Images(images)

  Array.from(images).map((img, idx) => {
    const htmlPath =
      '/' + img.src.slice(img.src.indexOf('assets'), img.src.length)

    img.classList.add('lazyloading')
    img.setAttribute('data-src', htmlPath)
    img.setAttribute('src', b64s[idx])
  })

  fs.writeFile(path, dom.serialize(), function (err) {
    if (err) return console.log(err)
    console.log(`${path} > html`)
  })
}
