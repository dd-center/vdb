const { writeFile, unlink } = require('fs').promises
const { join } = require('path')

const { GitProcess } = require('dugite')

const { decodeBase64, decodeBlock } = require('./common')

const { ISSUE_NUMBER, ISSUE_BODY } = process.env

const saveName = join('vtbs-review', `${ISSUE_NUMBER}.json`)

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
  return stdout
}

;

(async () => {
  const gitUser = {}
  let title = 'update'
  const block = ISSUE_BODY.split('-----END SUBMIT BLOCK-----')[0].split('-----BEGIN SUBMIT BLOCK-----')[1]
  const commit = async () => {
    await gitExec(['add', 'vtbs-review'], gitUser)
    await gitExec(['add', 'vtbs'], gitUser)
    await gitExec(['commit', '-m', title, '-m', ISSUE_BODY, '-m', `close #${ISSUE_NUMBER}`], gitUser)
  }
  if (block) {
    await unlink(saveName).catch(() => {})
    await decodeBlock(decodeBase64(block))
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
        if (command === 'merge') {
          if (Number.isInteger(Number(arg))) {
            if (await gitExec(['status', '-s'], gitUser) !== '') {
              await commit()
            }
            await gitExec(['fetch', 'origin', `submit-${arg}:submit-${arg}`], gitUser)
            await gitExec(['merge', '--strategy-option', 'theirs', '--no-edit', `submit-${arg}`], gitUser)
          }
        }
      })
      .reduce((p, f) => p.then(f), Promise.resolve())
    await commit()
  }
})()
