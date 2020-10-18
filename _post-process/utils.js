const fs = require('fs')
var path = require('path');
const { start } = require('repl');

function pipe(seed) {
  return (...ops) => ops.reduce((state, action) => action(state), seed)
}

function asyncPipe(seed) {
  return async (...ops) =>
    await ops.reduce(async (memo, action) => action(await memo), seed)
}

function getAllFromDir(startPath, filter, list) {
  if (!fs.existsSync(startPath)) {
    console.log('no dir ', startPath)
    return
  }

  const files = fs.readdirSync(startPath)
  for (let i = 0; i < files.length; i++) {
    const filename = path.join(startPath, files[i])
    const stat = fs.lstatSync(filename)

    if (stat.isDirectory()) {
      getAllFromDir(filename, filter, list) //recurse
    } else if (filename.indexOf(filter) >= 0) {
      list.push(filename)
    }
  }
}


exports.pipe = pipe
exports.asyncPipe = asyncPipe
exports.getAllFromDir = getAllFromDir