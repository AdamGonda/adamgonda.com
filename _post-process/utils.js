const fs = require('fs')
var path = require('path');

function pipe(seed) {
  return (...ops) => ops.reduce((state, action) => action(state), seed)
}

function asyncPipe(seed) {
  return async (...ops) =>
    await ops.reduce(async (memo, action) => action(await memo), seed)
}

function getAllPathsFromDir(startPath, filter, list) {
  if (!fs.existsSync(startPath)) {
    console.log('no dir ', startPath)
    return
  }

  const files = fs.readdirSync(startPath)
  for (let i = 0; i < files.length; i++) {
    const filename = path.join(startPath, files[i])
    const stat = fs.lstatSync(filename)

    if (stat.isDirectory()) {
      getAllPathsFromDir(filename, filter, list) //recurse
    } else if (filename.indexOf(filter) >= 0) {
      list.push(filename)
    }
  }
}


exports.pipe = pipe
exports.asyncPipe = asyncPipe
exports.getAllPathsFromDir = getAllPathsFromDir