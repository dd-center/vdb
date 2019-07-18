const { writeFile } = require('fs').promises

require('.')
  .then(async e => {
    await writeFile('json/list.json', JSON.stringify(e))
    await writeFile('json/list.uncompressed.json', JSON.stringify(e, undefined, 2))
    let knowMid = {}
    let bilibili = []
    e.vtbs.forEach(({ accounts, name, uuid }) => {
      accounts
        .filter(({ platform }) => platform === 'bilibili')
        .forEach(({ id }) => {
          if (!knowMid[id]) {
            knowMid[id] = true
            bilibili.push({
              mid: Number(id),
              uuid,
              note: Object.entries(name)
                .filter(([lang, name]) => lang !== 'extra')
                .filter(([lang, name]) => lang !== 'default')
                .map(([lang, name]) => name)
                .concat(name.extra),
            })
          }
        })
    })
    await writeFile('json/vtbs.moe.json', JSON.stringify(bilibili))
  })
