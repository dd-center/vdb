module.exports = ({ vtbs, meta: { linkSyntax } }) => vtbs
  .flatMap(({ accounts }) => accounts)
  .map(({ id, platform }) => {
    if (!linkSyntax[platform]) {
      return `不明平台, unknow platform, ${platform}, ${id}`
    }
  })
  .filter(Boolean)
