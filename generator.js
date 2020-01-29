const { readFile, writeFile, readdir, unlink } = require('fs').promises
const { join } = require('path')
const { GitProcess } = require('dugite')
GitProcess.exec(['log', '-1', '--format="%ct"'], process.cwd()).then(w => {
  const { stdout } = w
  console.log(Number(stdout.replace(/"/g, '')))
})

readdir('vtbs')
  .then(async dirs => dirs
    .map(dir => join('vtbs', dir))
    .map(path => ({ path, contentP: readFile(path) }))
    .map(async ({ path, contentP }) => {
      const content = await contentP
      if (path.normalize() !== path) {
        console.log(path)
      }
      await unlink(path)
      await writeFile(path.normalize(), content)
    })
    .reduce(async (a, b) => {
      await a
      return b
    }))
  .then(() => require('.'))
  .then(async list => {
    const { meta, ...rest } = await list
    const { stdout } = await GitProcess.exec(['log', '-1', '--format="%ct"'], process.cwd())
    const timestamp = Number(stdout.replace(/"/g, ''))
    return { meta: { ...meta, timestamp }, ...rest }
  })
  .then(async e => {
    await writeFile('json/list.json', JSON.stringify(e))
    await writeFile('json/list.uncompressed.json', JSON.stringify(e, undefined, 2))
  })
