const decodeBase64 = base64 => String(Buffer.from(base64, 'base64'))

const decodeBlock = block => block
  .split('\n')
  .map(command => command.split(':'))
  .map(([command, arg, extra = '']) => [command, decodeBase64(arg), decodeBase64(extra)])

module.exports = {
  decodeBase64,
  decodeBlock
}
