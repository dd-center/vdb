import { unlink } from 'fs/promises'
import { join } from 'path'

const { PR_HEAD_LABEL } = process.env

const log = w => {
  console.log(w)
  return w
}

const issueNumber = Number(PR_HEAD_LABEL.replace('dd-center:submit-', ''))

await unlink(log(join('vtbs-review', `${issueNumber}.json`)))
