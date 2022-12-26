import { writeFile } from 'fs/promises'
import { join } from 'path'

import { decodeBase64, decodeBlock, gitExec } from './common.js'

const { ISSUE_NUMBER, ISSUE_BODY } = process.env

const block = ISSUE_BODY.split('-----END SUBMIT BLOCK-----')[0].split('-----BEGIN SUBMIT BLOCK-----')[1]

const saveName = join('vtbs-review', `${ISSUE_NUMBER}.json`)

if (!block) {
  throw new Error('No block')
}

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
await gitExec(['push'])
