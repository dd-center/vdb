const { readdir } = require('fs').promises
const parse = require('./parse')
const { UUID_NAMESPACE, linkSyntax } = require('./config')

module.exports = readdir('vtbs')
  .then(dir => parse(({
    UUID_NAMESPACE,
    linkSyntax,
    vtbs: dir
      .map(file => file.replace('.json', ''))
      .map(name => ({ name, object: require(`./vtbs/${name}`) })),
  })))
