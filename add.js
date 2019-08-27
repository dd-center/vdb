const { promises: { writeFile } } = require('fs')
const inquirer = require('inquirer')

const ask = async (message, type = 'input') => (await inquirer.prompt([{ name: 'w', type, message }])).w

const add = async () => {
  let filename = undefined
  let file = 'module.exports = {\n'
  file += '  name: {\n'
  for (let lang = await ask('Name Language?'); lang; lang = await ask('Name Language?')) {
    let name = await ask('Name?')
    if (!filename) {
      filename = `${name}.js`
    }
    file += `    ${lang}: '${name}',\n`
  }
  file += `  },\n  '2d': true,\n  accounts: {\n`
  for (let platform = await ask('Account platform?'); platform; platform = await ask('Account platform?')) {
    let id = await ask('Account ID?')
    file += `    ${platform}: '${id}',\n`
  }
  file += `  },\n}\n`
  await writeFile(`vtbs/${filename}`, file)
}

;

(async () => {
  let newVtbs = []
  while (await ask('More VTB/VUP?', 'confirm')) {
    newVtbs.push(await add())
  }
})()
