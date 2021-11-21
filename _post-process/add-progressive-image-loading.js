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
      return await getResized_b64_image(diskPath, 64, 90)
    }),
  )
}

async function getResized_b64_image(path, width, quality) {
  if (path.includes('gif')) return
  
  const jimpImg = await Jimp.read(path)
  await jimpImg.resize(width, Jimp.AUTO)
  await jimpImg.quality(quality)
  return await jimpImg.getBase64Async(Jimp.MIME_JPEG)
}

function updateDom(img, idx, b64s) {
  const htmlImgPath = '/' + img.src.slice(img.src.indexOf('assets'), img.src.length) // prettier-ignore

  img.classList.add('lazyload')
  img.setAttribute('data-src', htmlImgPath)
  img.setAttribute('src', b64s[idx])

  console.log(`${htmlImgPath} > base64`)
}

exports.apply = apply
