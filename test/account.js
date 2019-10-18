module.exports = ({ vtbs }) => vtbs
  .flatMap(({ accounts }) => accounts)
  .map(({ id, platform }) => {
    if (['bilibili', 'niconico', 'weibo'].includes(platform)) {
      if (Number.isNaN(Number(id))) {
        return `bilibili id: NaN, ${id}`
      }
    }
  })
  .filter(Boolean)
