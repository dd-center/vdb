module.exports = ({ vtbs }) => vtbs
  .flatMap(({ accounts }) => accounts)
  .map(({ id, platform }) => {
    if (['bilibili', 'niconico', 'weibo','163music'].includes(platform)) {
      if (Number.isNaN(Number(id))) {
        return `${platform} id: NaN, ${id}`
      }
    }
  })
  .filter(Boolean)
