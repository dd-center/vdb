module.exports = ({ vtbs }) => {
  let errors = []
  let knowAccounts = {}
  vtbs
    .forEach(({ accounts, name }) => accounts.forEach(({ id, platform, type }) => {
      if (!id) {
        errors.push(`${Object.values(name)[1]}, false Account: ${platform}, ${id}`)
      }
      if (!knowAccounts[platform]) {
        knowAccounts[platform] = {}
      }
      if (type === 'official') {
        if (knowAccounts[platform][id]) {
          errors.push(`${Object.values(name)[1]}, Duplicate Official Account: ${platform}, ${id}`)
        }
        knowAccounts[platform][id] = true
      }
    }))
  return errors
}
