function pipe(seed) {
  return (...ops) => ops.reduce((state, action) => action(state), seed)
}

exports.pipe = pipe