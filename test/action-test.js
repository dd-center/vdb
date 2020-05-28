const { readdir } = require('fs').promises
const core = require('@actions/core')

const test = require('.')

require('..').then(async vdb => {
  const errors = test(vdb, await readdir('vtbs'))
  if (errors.length) {
    const error = errors.join('\n')
    core.setFailed(`测试错误:
${error}`)
  }
})
