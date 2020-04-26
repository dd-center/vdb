const group = require('./group')
const repeat = require('./repeat')
const platform = require('./platform')
const id = require('./id')
const account = require('./account')
const filename = require('./filename')

const tests = [group, repeat, id, platform, account, filename]

module.exports = (vdb, files) => tests.flatMap(f => f(vdb, files))
