const fs = require('fs')
const jsdom = require('jsdom')
const { JSDOM } = jsdom
const Jimp = require('jimp')
const glob = require('glob')
const path = require('path')

function main() {
  console.log(
    `|------------ ${path.basename(__filename)}: STARTED ------------|`,
  )

  glob(__dirname + '../../**/*.html', {}, (err, files) => {
    const filter = file => file.includes('_site')

    files.filter(filter).forEach((absPath, idx) => {
      const pathToHtml =
        './' + absPath.slice(absPath.indexOf('_site'), absPath.length)

      processPage(pathToHtml)
    })
  })
}

async function processPage(path) {
  const dom = await JSDOM.fromFile(path, {})

  const images = Array.from(dom.window.document.querySelectorAll('img')).filter(
    image => !image.classList.contains('ignore-PIL'),
  )

  const b64s = await getImages(images)
  images.map((img, idx) => modifyDom(img, idx, b64s))

  // Write to file
  fs.writeFile(path, dom.serialize(), function (err) {
    if (err) return console.log(err)
  })
}

async function getImages(images) {
  return await Promise.all(
    images.map(async img => {
      const htmlPath = img.src.slice(img.src.indexOf('assets'), img.src.length)
      const diskPath = __dirname + '/_site/' + htmlPath.replace('//', '/')
      return {
        low: await getResized_b64_image(diskPath, 64, 90),
        high: await getResized_b64_image(diskPath, 150, 100),
      }
    }),
  )
}

async function getResized_b64_image(image, width, quality, cl) {
  const jimpImg = await Jimp.read(image)
  await jimpImg.resize(width, Jimp.AUTO)
  await jimpImg.quality(quality)
  return await jimpImg.getBase64Async(Jimp.MIME_JPEG)
}

function modifyDom(img, idx, b64s) {
  const htmlImgPath = '/' + img.src.slice(img.src.indexOf('assets'), img.src.length) // prettier-ignore
  const { low, high } = b64s[idx]
  const isThumbnail = htmlImgPath.includes('thumbnail')

  if (isThumbnail) {
    img.setAttribute('src', high)
  } else {
    img.classList.add('lazyload')
    img.setAttribute('data-src', htmlImgPath)
    img.setAttribute('src', low)
  }

  console.log(`${htmlImgPath} > base64`)
}

main()
