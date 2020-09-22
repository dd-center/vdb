module.exports = (_, files) => files
  .map(file => file.split('').reverse().join('').replace('nosj.', '').split('').reverse().join(''))
  .filter(file => file.endsWith(' ') || file.startsWith(' '))
  .map(file => `文件名 开头/结尾 存在空格: ${file}.json`)
