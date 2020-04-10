const test = require('.')

require('..').then(vdb => {
  const errors = test(vdb)
  if (errors.length) {
    errors.forEach(e => console.error(e))
    process.exit(1)
  }
})
