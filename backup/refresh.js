const vdb = require('./json/vtbs.moe.json')
const got = require('got')

;
(async () => {
  Array(16).fill().forEach(async () => {
    for (; vdb.length;) {
      const { uuid } = vdb.shift()
      console.log(`${(await got(`https://api.vtb.wiki/webapi/vtuber/refresh?uid=${uuid}`, { json: true })).body.message}: ${vdb.length}: ${uuid}`)
    }
  })
})()
