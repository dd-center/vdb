module.exports = ({ vtbs }) => vtbs
  .filter(({ name: { default: w } }) => !w)
  .map(({ filename }) => `name不对: ${filename}.json`)
