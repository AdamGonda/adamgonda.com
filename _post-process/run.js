const { asyncPipe } = require('./utils')
const PIL = require('./add-progressive-image-loading')
const GET_TAGS = require('./get-all-tags-from-posts')

// prettier-ignore
asyncPipe({}) (
  PIL.apply,
  GET_TAGS.apply,
)
