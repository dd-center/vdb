const { readFile, writeFile, readdir, unlink } = require('fs').promises
const { join } = require('path')

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
  .then(async e => {
    await writeFile('json/list.json', JSON.stringify(e))
    await writeFile('json/list.uncompressed.json', JSON.stringify(e, undefined, 2))
  })
