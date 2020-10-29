const { asyncPipe } = require('./utils')
const PIL = require('./add-progressive-image-loading')

// prettier-ignore
asyncPipe({}) (
  PIL.apply,
)


