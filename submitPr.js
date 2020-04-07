const { GitProcess } = require('dugite')

const { ISSUE_NUMBER, ISSUE_BODY, GITHUB_TOKEN, GITHUB_ACTOR } = process.env

const branchName = `submit-${ISSUE_NUMBER}`

const remote = `https://${GITHUB_ACTOR}:${GITHUB_TOKEN}@github.com/dd-center/vdb.git`

const gitExec = async (...params) => {
  const { stdout } = await GitProcess.exec(params, process.cwd())
  console.log(stdout)
}

;

(async () => {
  await gitExec('branch', branchName)
  await gitExec('checkout', branchName)
  await gitExec('push', '--set-upstream', remote, branchName)
})()
