function asyncPipe(seed) {
  return async (...ops) => await ops.reduce(async (memo, action) => action(await memo), seed)
}

const sleep = (n) => new Promise((res) => setTimeout(res, n));

const fn1 = async msg => {
  await sleep(2000)
  return msg + ' fn1'
}

const fn2 = async msg => {
  await sleep(200)
  return msg + ' fn2'
}

async function main() {
  const r = await pipe('hello')(fn1, fn2)
  console.log(r);
}

main()
