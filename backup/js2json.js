const { join } = require('path')
const { readdir, unlink, writeFile } = require('fs').promises

readdir('vtbs').then(files => files.forEach(async file => {
  const path = join('vtbs', file)
  if (file.endsWith('.js')) {
    const vtb = require(`./${path}`)
    const name = file.replace('.js', '')
    await unlink(path)
    await writeFile(join('vtbs', `${name}.json`), JSON.stringify(vtb, undefined, 2))
  }
}))
