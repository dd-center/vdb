const UUID_NAMESPACE = '9e880107-dd14-4f7d-a04c-4b2bf8d9db7d'

const linkSyntax = {
  youtube: 'https://www.youtube.com/channel/{identifier}',
  bilibili: 'https://space.bilibili.com/{identifier}',
  twitter: 'https://twitter.com/{identifier}',
  userlocal: 'https://virtual-youtuber.userlocal.jp/user/{identifier}',
}

module.exports = {
  UUID_NAMESPACE,
  linkSyntax,
}
