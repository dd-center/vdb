const no = (...e) => {
  console.error(...e)
  process.exit(1)
}

require('..')
  .then(({ vtbs }) => vtbs)
  .then(vtbs => {
    const table = Object.fromEntries(vtbs.map(vtb => [vtb.uuid, vtb]))
    vtbs.forEach(({ group, name }) => {
      if (group && !table[group]) {
        no('no group', name[name.default])
      }
    })
  })
