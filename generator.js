const { writeFile } = require('fs').promises

require('.')
  .then(async e => {
    await writeFile('json/list.json', JSON.stringify(e))
    await writeFile('json/list.uncompressed.json', JSON.stringify(e, undefined, 2))
  })
