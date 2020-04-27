const neverSubmit = {}

module.exports = ({ vtbs }) => {
  const errors = []
  const knowAccounts = {}
  const reportError = ({ platform, id, name }) => txt => errors.push(`${Object.values(name)[1]}, ${txt}: ${platform}, ${id}`)
  vtbs
    .forEach(({ accounts, name }) => accounts.forEach(({ id, platform, type }) => {
      const reporter = reportError({ name, id, platform })
      if (!id) {
        reporter('id为空')
      }
      if (!knowAccounts[platform]) {
        knowAccounts[platform] = {}
      }
      if (knowAccounts[platform][id]) {
        reporter('重复提交的账户, Duplicated')
      }
      knowAccounts[platform][id] = true

      const neverSubmitList = neverSubmit[platform] || []
      if (neverSubmitList.includes(id)) {
        reporter('不能提交的账户, Never Submit')
      }
    }))
  return errors
}
