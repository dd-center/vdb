const no = '\\/:*"<>|'.split('')

module.exports = (_, files) => files
  .filter(file => no.some(char => file.includes(char)))
  .map(file => `illegal filename: ${file}, should not contain ${no.join('')}`)
