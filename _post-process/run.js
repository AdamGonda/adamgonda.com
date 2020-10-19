const { asyncPipe } = require('./utils')
const PIL = require('./add-progressive-image-loading')
const compression = require('./add-image-compression')

// prettier-ignore
asyncPipe({}) (
  PIL.apply,
  // compression.apply,
)


