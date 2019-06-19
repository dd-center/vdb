const no = e => {
  console.error(e)
  process.exit(1)
}

require('..')
  .then(({ vtbs }) => vtbs)
  .then(vtbs => {
    let knowAccounts = {}
    vtbs
      .forEach(({ accounts, name }) => accounts.forEach(({ id, platform, type }) => {
        if (!id) {
          no(`${Object.values(name)[1]}, false Account: ${platform}, ${id}`)
        }
        if (!knowAccounts[platform]) {
          knowAccounts[platform] = {}
        }
        if (type === 'official') {
          if (knowAccounts[platform][id]) {
            no(`${Object.values(name)[1]}, Duplicate Official Account: ${platform}, ${id}`)
          }
          knowAccounts[platform][id] = true
        }
      }))
  })
