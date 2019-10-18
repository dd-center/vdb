module.exports = ({ vtbs, meta: { linkSyntax } }) => vtbs
  .flatMap(({ accounts }) => accounts)
  .map(({ id, platform }) => {
    if (!linkSyntax[platform]) {
      return `unknow platform, ${platform}, ${id}`
    }
  })
  .filter(Boolean)
