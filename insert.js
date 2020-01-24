const { promises: { writeFile, readFile } } = require('fs')
const { spawn } = require('child_process')

readFile('pending.txt')
  .then(String)
  .then(pending => pending
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean)
    .map(line => {
      if (!line.includes(':') && line !== 'w') {
        return `a:${line}`
      } else {
        return line
      }
    })
    .map(line => line.split(':')
      .map(param => param.trim())
      .filter(Boolean))
    .map(([cmd, ...params]) => [cmd, params.join(':')
      .split(' ')
      .map(param => param.trim())
      .filter(Boolean),
    ])
    .reduce(async (p, [cmd, params]) => {
      let { vtb = {}, filename } = await p || {}
      if (cmd === 'w') {
        await writeFile(`vtbs/${filename}`, JSON.stringify(vtb, undefined, 2))
        console.log(filename)
        return undefined
      }

      if (cmd === 'n') {
        const [language, name] = params
        if (!filename) {
          filename = `${name}.json`
        }
        if (!vtb.name) {
          vtb.name = {}
        }
        vtb.name[language] = name
      }

      if (cmd === 'g') {
        const [group] = params
        vtb.group = group
      }

      if (cmd === 'a') {
        const [platform, ...ids] = params
        ids.forEach(id => {
          if (!vtb.accounts) {
            vtb.accounts = {}
          }
          if (!vtb.accounts[platform]) {
            vtb.accounts[platform] = id
          } else {
            if (typeof vtb.accounts[platform] === 'string') {
              vtb.accounts[platform] = [vtb.accounts[platform]]
            }
            vtb.accounts[platform].push(id)
          }
        })
      }

      if (cmd === 'c') {
        const [username] = params
        await spawn('all-contributors', ['add', username, 'content'])
        console.log(username)
      }

      return { vtb, filename }
    }, Promise.resolve())
  )
