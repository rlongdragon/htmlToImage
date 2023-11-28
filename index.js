const nodeHtmlToImage = require('node-html-to-image')
const sharp = require('sharp');

function htmlToImage(data) {
  console.log(data.fileName)
  html = data.html
  fileName = data.fileName
  width = data.width
  height = data.height
  scale = data.scale
  dpi = data.dpi
  scale = (dpi / 96) * scale

  nodeHtmlToImage({
    html: html,
    content: { width: width * scale, height: height * scale, zoom: scale }
  }).then(imageBuffer => {
    let img = sharp(imageBuffer)
    img.withMetadata({ density: dpi }).toBuffer().then(data => {
      img = sharp(data)

      img.toFile(`./${fileName}`)
      return 0
    })
  }).catch(err => console.error(err))
  .then(() => console.log('Image: ' + fileName + ' created.'))
}

let data = {
  html: require('fs').readFileSync('./index.html', 'utf8'),
  fileName: 'image.png',
  width: 100,
  height: 100,
  scale: 1,
  dpi: 100
}

htmlToImage(data)