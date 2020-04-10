const group = require('./group')
const repeat = require('./repeat')
const platform = require('./platform')
const id = require('./id')
const account = require('./account')

const tests = [group, repeat, id, platform, account]

module.exports = vdb => tests.flatMap(f => f(vdb))
