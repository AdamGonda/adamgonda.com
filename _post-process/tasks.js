const PIL = require('./add-progressive-image-loading')
const compression = require('./add-image-compression')

// prettier-ignore
exports.list = [
  PIL.apply,
  compression.apply
]
