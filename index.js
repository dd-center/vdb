const { readdir } = require('fs').promises
const parse = require('./parse')
const { UUID_NAMESPACE, linkSyntax } = require('./config')

const out = (filename = false) => readdir('vtbs')
  .then(dir => parse(({
    UUID_NAMESPACE,
    linkSyntax,
    vtbs: dir
      .map(file => file.replace('.json', ''))
      .map(name => ({ name, object: require(`./vtbs/${name}`) })),
  }), filename))

const p = out()

p.withFilename = () => out(true)

module.exports = p
