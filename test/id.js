module.exports = ({ vtbs }) => vtbs
  .flatMap(({ accounts }) => accounts)
  .map(({ id }) => typeof id === 'string' ? false : `account id not number, ${id}`)
  .filter(Boolean)
