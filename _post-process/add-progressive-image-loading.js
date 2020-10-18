const fs = require('fs')
const jsdom = require('jsdom')
const Jimp = require('jimp')
const { getAllFromDir } = require('./utils')

const apply = async () => {
  const paths = []
  getAllFromDir(__dirname + '/../_site', '.html', paths)

  const tasks = paths.map(async path => {
    const dom = await jsdom.JSDOM.fromFile(path, {})
    const images = Array.from(
      dom.window.document.querySelectorAll('img'),
    ).filter(image => !image.classList.contains('ignore-PIL'))

    const b64s = await getImages(images)
    images.map((img, idx) => updateDom(img, idx, b64s))
    fs.writeFile(path, dom.serialize(), err => err ? console.log(err) : null) // prettier-ignore
  })

  return await Promise.all(tasks)
}

async function getImages(images) {
  return await Promise.all(
    images.map(async img => {
      const htmlPath = img.src.slice(img.src.indexOf('assets'), img.src.length)
      const diskPath = __dirname + '/../_site/' + htmlPath.replace('//', '/')
      return {
        low: await getResized_b64_image(diskPath, 64, 90),
        high: await getResized_b64_image(diskPath, 150, 100),
      }
    }),
  )
}

async function getResized_b64_image(path, width, quality) {
  const jimpImg = await Jimp.read(path)
  await jimpImg.resize(width, Jimp.AUTO)
  await jimpImg.quality(quality)
  return await jimpImg.getBase64Async(Jimp.MIME_JPEG)
}

function updateDom(img, idx, b64s) {
  const htmlImgPath = '/' + img.src.slice(img.src.indexOf('assets'), img.src.length) // prettier-ignore
  const { low, high } = b64s[idx]
  const isThumbnail = htmlImgPath.includes('thumbnail')

  if (isThumbnail) {
    img.setAttribute('src', high)
  } else {
    img.classList.add('lazyload')
    img.setAttribute(
      'data-src',
      htmlImgPath.replace(/(jpg|JPG|jpeg|JPEG|png)$/, 'webp'),
    )
    img.setAttribute('src', low)
  }

  console.log(`${htmlImgPath} > base64`)
}

exports.apply = apply
