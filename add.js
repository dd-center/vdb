const { promises: { writeFile } } = require('fs')
const inquirer = require('inquirer')

const ask = async (message, type = 'input') => (await inquirer.prompt([{ name: 'w', type, message }])).w

const add = async () => {
  let filename = undefined
  const vtb = {}
  for (let lang = await ask('Name Language?'); lang; lang = await ask('Name Language?')) {
    const name = await ask('Name?')
    if (!filename) {
      filename = `${name}.json`
    }
    if (!vtb.name) {
      vtb.name = {}
    }
    vtb.name[lang] = name
  }
  const group = await ask('Group?')
  if (group) {
    vtb.group = group
  }
  for (let platform = await ask('Account platform?'); platform; platform = await ask('Account platform?')) {
    const id = await ask('Account ID?')
    if (!vtb.accounts) {
      vtb.accounts = {}
    }
    if (typeof vtb.accounts[platform] === 'string') {
      vtb.accounts[platform] = [vtb.accounts[platform]]
    }
    if (!vtb.accounts[platform]) {
      vtb.accounts[platform] = id
    } else {
      vtb.accounts[platform].push(id)
    }
  }
  await writeFile(`vtbs/${filename}`, JSON.stringify(vtb, undefined, 2))
}

;

(async () => {
  while (await ask('More VTB/VUP?', 'confirm')) {
    await add()
  }
})()
