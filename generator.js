const { writeFile } = require('fs').promises

require('.')
  .then(JSON.stringify)
  .then(e => writeFile('json/list.json', e))
