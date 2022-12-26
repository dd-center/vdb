import { writeFile } from 'fs/promises'
import { join } from 'path'

import { GitProcess } from 'dugite'

import { decodeBase64, decodeBlock } from './common.js'

const { ISSUE_NUMBER, ISSUE_BODY, BOT_TOKEN } = process.env

const remote = `https://vdb-bot:${BOT_TOKEN}@github.com/dd-center/vdb.git`

const block = ISSUE_BODY.split('-----END SUBMIT BLOCK-----')[0].split('-----BEGIN SUBMIT BLOCK-----')[1]

const saveName = join('vtbs-review', `${ISSUE_NUMBER}.json`)

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

if (block) {
  const commands = decodeBlock(decodeBase64(block))

  const save = {
    commands,
    issue: {
      number: ISSUE_NUMBER,
      body: ISSUE_BODY,
    },
  }

  await writeFile(saveName, JSON.stringify(save, null, 2))

  await gitExec(['add', 'vtbs-review'])
  await gitExec(['commit', '-m', `issue ${ISSUE_NUMBER}`])
  await gitExec(['push', '--set-upstream', remote, 'master'])
}
