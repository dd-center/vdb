const no = '\\/:*"<>|'.split('')

module.exports = (_, files) => files
  .filter(file => no.some(char => file.includes(char)))
  .map(file => `非法文件名, illegal filename: ${file}, should not contain ${no.join('')}`)
