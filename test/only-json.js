module.exports = (_, files) => files
  .filter(file => !file.endsWith('.json'))
  .map(file => `只接受 json 文件, Only json: ${file}`)
