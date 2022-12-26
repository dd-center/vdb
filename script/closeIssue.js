const got = require('got')

const { ISSUE_NUMBER, GITHUB_TOKEN } = process.env

const log = w => {
  console.log(w)
  return w
}

got.patch(log(`https://api.github.com/repos/dd-center/vdb/issues/${ISSUE_NUMBER}`), {
  json: {
    state: 'closed',
  },
  headers: {
    authorization: `Bearer ${GITHUB_TOKEN}`,
  },
}).then(log)
