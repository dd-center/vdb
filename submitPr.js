const { writeFile, unlink } = require('fs').promises
const { join } = require('path')

const { GitProcess } = require('dugite')

const { ISSUE_NUMBER, ISSUE_BODY, GITHUB_TOKEN, GITHUB_ACTOR } = process.env

const branchName = `submit-${ISSUE_NUMBER}`

const remote = `https://${GITHUB_ACTOR}:${GITHUB_TOKEN}@github.com/dd-center/vdb.git`

const gitExec = async (params, { name = 'nanashi', email = 'example@example.com' } = {}) => {
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

;

(async () => {
  const gitUser = {}
  let title = 'update'
  await gitExec(['branch', branchName], gitUser)
  await gitExec(['checkout', branchName], gitUser)
  const block = ISSUE_BODY.split('-----END SUBMIT BLOCK-----')[0].split('-----BEGIN SUBMIT BLOCK-----')[1]
  if (block) {
    await decodeBase64(block)
      .split('\n')
      .map(command => command.split(':'))
      .map(([command, arg, extra = '']) => [command, decodeBase64(arg), decodeBase64(extra)])
      .map(([command, arg, content]) => async () => {
        const path = join('vtbs', arg)
        if (path.startsWith('vtbs/')) {
          if (command === 'delete') {
            await unlink(path)
            console.log('delete', path)
          }
          if (command === 'put') {
            await writeFile(path, content)
            console.log('put', path)
          }
        }
        if (command === 'name') {
          gitUser.name = arg
        }
        if (command === 'email') {
          gitUser.email = arg
        }
        if (command === 'title') {
          title = arg
        }
      })
      .reduce((p, f) => p.then(f), Promise.resolve())
    await gitExec(['push', '--set-upstream', remote, branchName], gitUser)
    await gitExec(['add', 'vtbs'], gitUser)
    await gitExec(['commit', '-m', title, '-m', ISSUE_BODY, '-m', `close #${ISSUE_NUMBER}`], gitUser)
  }
})()
