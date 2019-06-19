// const { writeFile } = require('fs').promises
const open = require('open')
const template = `module.exports = {
  name: {
    jp: '----jp----',
    cn: '----cn----',
  },
  '2d': true,
  accounts: {
    youtube: '----youtube----',
    bilibili: '----bilibili----',
    twitter: '----twitter----',
    userlocal: '----userlocal----',
  },
}
`

let vtbs = require('./backup/vtbs')

let knowMid = require('./backup/youtube.json')
  .map(({ originalName, chineseName, youtubeChannelId, twitterProfileId, bilibiliUid, userlocalProfileId }) => {
    let current = template
    let bilibilimid = bilibiliUid['$numberInt']
    if (originalName.includes(`'`)) {
      current = current.replace(`'----jp----'`, '`----jp----`')
    }
    current = current.replace('----jp----', originalName)
    if (chineseName) {
      current = current.replace('----cn----', chineseName)
    } else {
      current = current.replace(`    cn: '----cn----',
`, '')
    }
    if (youtubeChannelId) {
      current = current.replace('----youtube----', youtubeChannelId)
    } else {
      current = current.replace(`    youtube: '----youtube----',
`, '')
    }
    if (twitterProfileId) {
      current = current.replace('----twitter----', twitterProfileId)
    } else {
      current = current.replace(`    twitter: '----twitter----',
`, '')
    }
    if (bilibilimid !== '0') {
      current = current.replace('----bilibili----', bilibilimid)
    } else {
      current = current.replace(`    bilibili: '----bilibili----',
`, '')
    }
    if (userlocalProfileId) {
      current = current.replace('----userlocal----', userlocalProfileId)
    } else {
      current = current.replace(`    userlocal: '----userlocal----',
`, '')
    }
    // writeFile(`vtbs/${originalName.replace(/\//g, ':')}.js`, current)
    return bilibilimid
  })
  .filter(mid => mid !== '0')
  .reduce((a, b) => a + ',' + b)
  .split(',')
  .map(mid => Number(mid))

knowMid = []

require('.')
  .then(({ vtbs }) => vtbs.forEach(({ accounts }) => accounts.forEach(({ id, platform }) => {
    if (platform === 'bilibili') knowMid.push(Number(id))
  })))
  .then(() => {
    let result = vtbs
      .map(({ mid }) => mid)
      .filter(mid => !knowMid.includes(mid))
      .map(mid => `https://space.bilibili.com/${mid}`)
    console.log(result)
    // result.forEach(e => open(e))
  })
