module.exports = ({ vtbs }) => {
  let errors = []
  const table = Object.fromEntries(vtbs.map(vtb => [vtb.uuid, vtb]))
  vtbs.forEach(({ group, name }) => {
    if (group && !table[group]) {
      errors.push(`社团不存在, no group ${name[name.default]}`)
    }
  })
  return errors
}
