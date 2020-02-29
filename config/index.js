const UUID_NAMESPACE = '9e880107-dd14-4f7d-a04c-4b2bf8d9db7d'

const linkSyntax = {
  youtube: 'https://www.youtube.com/channel/{id}',
  bilibili: 'https://space.bilibili.com/{id}',
  twitter: 'https://twitter.com/{id}',
  userlocal: 'https://virtual-youtuber.userlocal.jp/user/{id}',
  pixiv: 'https://www.pixiv.net/member.php?id={id}',
  afdian: 'https://afdian.net/@{id}',
  peing: 'https://peing.net/zh-CN/{id}',
  'ci-en': 'https://ci-en.net/creator/{id}',
  github: 'https://github.com/{id}',
  instagram: 'https://www.instagram.com/{id}/',
  booth: 'https://{id}.booth.pm',
  marshmallow: 'https://marshmallow-qa.com/{id}',
  'amazon.co.jp': 'https://www.amazon.co.jp/hz/wishlist/ls/{id}',
  line: 'https://line.me/R/ti/p/{id}',
  niconico: 'https://www.nicovideo.jp/user/{id}',
  showroom: 'https://www.showroom-live.com/{id}',
  fantia: 'https://fantia.jp/fanclubs/{id}',
  twitch: 'https://www.twitch.tv/{id}',
  tiktok: 'https://www.tiktok.com/@{id}',
  weibo: 'https://www.weibo.com/u/{id}',
  web: '{id}',
  facebook: 'https://www.facebook.com/{id}/',
  email: '{id}',
  jvcmusic: 'https://www.jvcmusic.co.jp/-/Artist/{id}.html',
  telegram: 'https://t.me/{id}',
  patreon: 'https://www.patreon.com/{id}',
  teespring: 'https://teespring.com/stores/{id}',
  popiask: 'https://www.popiask.cn/{id}',
}

module.exports = {
  UUID_NAMESPACE,
  linkSyntax,
}
