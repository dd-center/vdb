const { writeFile } = require('fs').promises

let b = [{
  cn: '庞小莹',
  mid: 406474271,
}, {
  cn: '鬼畜千寻炎哈',
  mid: 3726678,
}, {
  cn: '狸猫花生搬运组',
  mid: 354142359,
}, {
  cn: '穿裙带菜裸奔人字幕组',
  mid: 15936956,
}, {
  cn: '七濑胡桃menherachan',
  mid: 326968804,
}, {
  jp: '星空ゆう',
  mid: 328576435,
}, {
  cn: '阿睿琳Irene',
  mid: 865868,
}, {
  jp: '米莉安めか',
  mid: 11617542,
}]

const template = `module.exports = {
  name: {
    jp: '----jp----',
    cn: '----cn----',
    en: '----en----',
  },
  '2d': true,
  accounts: {
    bilibili: '----bilibili----',
  },
}
`

b.forEach(a => {
  let current = template.replace('----bilibili----', a.mid)

  if (a.cn) {
    current = current.replace('----cn----', a.cn)
  } else {
    current = current.replace(`    cn: '----cn----',
`, '')
  }

  if (a.jp) {
    current = current.replace('----jp----', a.jp)
  } else {
    current = current.replace(`    jp: '----jp----',
`, '')
  }

  if (a.en) {
    current = current.replace('----en----', a.en)
  } else {
    current = current.replace(`    en: '----en----',
`, '')
  }

  writeFile(`vtbs/${Object.values(a)[0]}.js`, current)
})
