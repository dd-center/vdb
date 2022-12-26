const { GitProcess } = require('dugite')

const gitExec = async (params, { name = 'vdb-bot', email = 'tend.runnier0q@icloud.com' } = {}) => {
  const { stdout, stderr } = await GitProcess.exec(params, process.cwd(), {
    env: {
      GIT_AUTHOR_NAME: name,
      GIT_AUTHOR_EMAIL: email,
      GIT_COMMITTER_NAME: name,
      GIT_COMMITTER_EMAIL: email,
    },
  })
  console.log({ stdout, stderr })
}

const decodeBase64 = base64 => String(Buffer.from(base64, 'base64'))

const decodeBlock = block => block
  .split('\n')
  .map(command => command.split(':'))
  .map(([command, arg, extra = '']) => [command, decodeBase64(arg), decodeBase64(extra)])

module.exports = {
  gitExec,
  decodeBase64,
  decodeBlock
}
