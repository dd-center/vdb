const group = require('./group')
const repeat = require('./repeat')
const platform = require('./platform')
const id = require('./id')
const account = require('./account')

const parse = require('..')

const tests = [group, repeat, id, platform, account]

parse.then(vdb => {
  const errors = tests
    .flatMap(f => f(vdb))
  if (errors.length) {
    errors.forEach(e => console.error(e))
    process.exit(1)
  }
})
